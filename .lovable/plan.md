

## Plano: Redirecionar leads para o banco deste projeto (Lovable Cloud)

### O que será feito

Trocar o cliente Supabase externo pelo cliente nativo do projeto. A tabela `leads` deste projeto já existe com todos os campos e a política RLS `"Anyone can insert leads"` já permite INSERT anônimo.

### Alteração

**Arquivo:** `src/components/QualificationFormModal.tsx`

1. Trocar o import de `externalSupabase` para o cliente nativo:
   ```
   - import { externalSupabase } from "@/integrations/supabase/externalClient";
   + import { supabase } from "@/integrations/supabase/client";
   ```

2. Atualizar o `handleSubmit` para usar `supabase` em vez de `externalSupabase` e enviar **todos** os campos coletados (a tabela local tem colunas para todos eles):
   ```
   supabase.from("leads").insert({
     nome, sobrenome, email, whatsapp,
     ramo, ramo_outro: ramoOutro,
     colaboradores, faturamento,
     desafios, origem_slug: "masterclass-ramp",
     status: "novo", qualified
   })
   ```

### Resultado

- Leads gravados no banco deste projeto (Lovable Cloud)
- Todos os campos do formulário serão persistidos
- Sem dependência de banco externo ou credenciais separadas

### Arquivo que pode ser removido depois

`src/integrations/supabase/externalClient.ts` — não será mais usado

