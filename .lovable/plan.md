

## Eventos GTM + Ajuste de copy na tela de aprovação

### 1. Eventos dataLayer (GTM)

Adicionar dois `window.dataLayer.push` no `QualificationFormModal.tsx`:

- **Evento 1 — Envio do formulário**: no `handleSubmit`, após salvar no banco, disparar `{ event: 'form_submitted', qualified: true/false }`
- **Evento 2 — Clique no link do WhatsApp**: no `<a>` do CTA do grupo VIP, disparar `{ event: 'whatsapp_group_click' }` via `onClick`

### 2. Ajuste de copy na tela "qualified"

Substituir o conteúdo textual atual da tela de aprovação (linhas 253-283) pelo texto solicitado:

> **APLICAÇÃO APROVADA**
>
> Seja bem-vindo à Mesa de Estratégia.
>
> Para garantir que você receba todos os avisos prévios, o link da transmissão e as ferramentas de análise que utilizaremos ao vivo, você precisa entrar agora no nosso Grupo VIP de Acesso. Ele é restrito e apenas Admins enviam mensagens.

Remover os blocos "O que acontece lá dentro" e "O grupo é silencioso..." que foram substituídos pela nova copy.

### Arquivo alterado
| Arquivo | Alteração |
|---|---|
| `src/components/QualificationFormModal.tsx` | Adicionar 2 eventos dataLayer + atualizar copy da tela qualified |

