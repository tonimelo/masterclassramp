

## Conferência: Por que os leads não estão sendo gravados no LeadFlow

### Diagnóstico

Comparei o código desta LP com o banco de dados do projeto [LeadFlow](/projects/0374047c-1333-468e-8cf0-e888a117779d) e identifiquei **2 problemas que impedem a gravação**:

#### Problema 1: RLS bloqueia INSERT anônimo (causa principal)

A tabela `leads` no LeadFlow só tem política RLS para `authenticated`. A LP usa a **anon key** (sem login), então todo INSERT é **silenciosamente rejeitado** pelo banco.

Políticas atuais:
- `"Authenticated full access"` → só para `authenticated`
- **Nenhuma política para `anon`**

#### Problema 2: Campos enviados vs. schema do banco

| Campo enviado pela LP | Existe no LeadFlow? | Observação |
|---|---|---|
| `nome` | Sim (NOT NULL) | OK |
| `email` | Sim (nullable) | OK |
| `whatsapp` | Sim (NOT NULL) | OK |
| `origem_slug` | Sim | OK |
| `status: 'novo'` | Sim | OK (passa no trigger de validação) |
| `empresa_id` | Sim (nullable, FK para empresas) | Precisa confirmar que o UUID existe na tabela `empresas` |

Os campos estão compatíveis, mas se o `empresa_id` (`9701b451-...`) não existir na tabela `empresas` do LeadFlow, a FK impedirá o INSERT.

### Plano de correção

**1. Adicionar política RLS para anon no LeadFlow** (precisa ser feito no projeto LeadFlow)

```sql
CREATE POLICY "Anon can insert leads"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);
```

**2. Verificar se empresa_id existe**

Preciso que você confirme: no LeadFlow, a empresa com UUID `9701b451-f783-4474-8ba8-9a85b2a54657` foi cadastrada na tabela `empresas`? Se não foi, temos duas opções:
- Cadastrar a empresa no LeadFlow
- Remover o campo `empresa_id` do INSERT da LP (já que é nullable)

**3. (Opcional) Adicionar mais dados ao INSERT**

A LP coleta `sobrenome`, `ramo`, `colaboradores`, `faturamento` e `desafios`, mas só envia `nome`, `email` e `whatsapp`. Se quiser esses dados no LeadFlow, será preciso adicionar as colunas lá e atualizar o INSERT aqui.

### Resumo de ações

| Onde | Ação |
|---|---|
| **Projeto LeadFlow** | Criar migração com política RLS anon INSERT na tabela `leads` |
| **Projeto LeadFlow** | Verificar/criar registro na tabela `empresas` |
| **Esta LP** | Nenhuma alteração de código necessária (dados já estão corretos) |

### Arquivos que serão alterados

Nenhum arquivo nesta LP precisa ser alterado. A correção é **100% no banco do LeadFlow**.

