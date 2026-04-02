

## Diagnóstico: Por que os leads não chegam ao LeadFlow

### Causa raiz

Esta LP e o LeadFlow usam **bancos Supabase diferentes**:

| Projeto | Supabase ref | URL |
|---|---|---|
| **Esta LP** (masterclass) | `kiokycpopjocvvlpfspr` | `https://kiokycpopjocvvlpfspr.supabase.co` |
| **LeadFlow** | `pqkqftqvrbjbdftilwip` | `https://pqkqftqvrbjbdftilwip.supabase.co` |

Os leads estão sendo gravados no banco `kiokycpopjocvvlpfspr`, mas o LeadFlow lê do banco `pqkqftqvrbjbdftilwip`. Por isso os leads nunca aparecem lá.

### Schema compatível

A tabela `leads` no LeadFlow tem os campos: `nome`, `email`, `whatsapp`, `empresa_id`, `origem_slug`, `origem` (uuid FK para origens), `status`, `tags`, `notas`, `deleted_at`. Todos nullable. O INSERT atual da LP (nome, email, whatsapp, origem_slug, status, empresa_id) é compatível.

### Plano de correção

**1. Atualizar `src/integrations/supabase/externalClient.ts`**

Trocar as credenciais para apontar ao Supabase do LeadFlow:

```text
URL:  https://pqkqftqvrbjbdftilwip.supabase.co
KEY:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxa3FmdHF2cmJqYmRmdGlsd2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNzIwMjUsImV4cCI6MjA5MDY0ODAyNX0.1oB7gAmF-_Tn3B1Svh320d6SLN-l-hGdOnXOYUb5ehs
```

**2. Verificar RLS no banco do LeadFlow**

O banco do LeadFlow precisa ter uma política RLS que permita INSERT anônimo na tabela `leads`:

```sql
CREATE POLICY "Allow anon insert leads"
ON public.leads FOR INSERT TO anon
WITH CHECK (true);
```

Isso precisa ser configurado **no projeto LeadFlow**, não aqui.

**3. Verificar `empresa_id`**

Confirmar que o UUID `9701b451-f783-4474-8ba8-9a85b2a54657` existe na tabela `empresas` do LeadFlow (há uma FK `leads_empresa_id_fkey`). Se não existir, o INSERT falhará.

### Arquivos alterados

| Arquivo | Ação |
|---|---|
| `src/integrations/supabase/externalClient.ts` | Trocar URL e Anon Key para o Supabase do LeadFlow |

### Riscos

- Se a tabela `leads` do LeadFlow não tiver política RLS para INSERT anônimo, o formulário falhará silenciosamente (o erro é capturado no catch).
- Se o `empresa_id` não existir na tabela `empresas` do LeadFlow, a FK impedirá o INSERT.

