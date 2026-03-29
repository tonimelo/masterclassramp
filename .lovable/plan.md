

## Integrar Widget de Checkout Eduzz no CTA

### Como funciona

O widget da Eduzz (Blinket) será carregado dentro de um **modal/dialog** que abre ao clicar no botão CTA. Assim o usuário não sai da página — o checkout aparece como popup.

### Plano

**1. Criar componente `EduzzCheckoutModal.tsx`**
- Um dialog (usando shadcn Dialog) com o container `<div id="blk_v3">`
- Ao abrir o modal, carrega dinamicamente o script do Blinket via `document.createElement('script')`
- Inicializa `blinket.start()` com o ID do evento após o script carregar
- Ao fechar, limpa o widget

**2. Atualizar `CtaButton.tsx`**
- Trocar o `<a>` por um `<button>` que abre o modal
- Importar e renderizar o `EduzzCheckoutModal`

### Detalhes técnicos

O script da Eduzz usa `document.write`, que não funciona após o carregamento da página. A solução é:
1. Carregar o script principal (`blinket-widget.js`) via `createElement('script')` com src direto do CDN
2. Após o `onload` do script, chamar `blinket.start({ selector, id, template })`

Isso evita o `eval(atob(...))` e o `document.write`, mantendo a funcionalidade.

### Arquivos
- **Criar**: `src/components/EduzzCheckoutModal.tsx`
- **Editar**: `src/components/CtaButton.tsx`

