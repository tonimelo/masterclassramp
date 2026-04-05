
## Plano: Substituir formulário modal pelo Typebot

### O que muda

Todos os botões CTA da página deixam de abrir o modal de qualificação e passam a redirecionar para o formulário externo do Typebot.

### Alterações

**1. `src/components/CtaButton.tsx`**
- Transformar o botão em um link (`<a>`) apontando para `https://bbot.rumoamaximapotencia.com.br/masterclass`
- Abrir em nova aba (`target="_blank"`)
- Remover prop `onClick`

**2. `src/components/HeroSection.tsx`**
- Remover prop `onCtaClick` e deixar de passá-la ao `CtaButton`

**3. `src/components/ProblemaSection.tsx`, `MetodosSection.tsx`, `ParaVoceSection.tsx`**
- Remover prop `onCtaClick` e deixar de passá-la ao `CtaButton`

**4. `src/pages/Index.tsx`**
- Remover estado `modalOpen`, função `openModal` e o componente `QualificationFormModal`
- Remover as props `onCtaClick` de todas as seções
- Remover import do `QualificationFormModal`

### Arquivos que podem ser removidos depois
- `src/components/QualificationFormModal.tsx` (não será mais usado)
- `src/components/EduzzCheckoutModal.tsx` (se também não for usado em outro lugar)

### Resultado
Todos os CTAs levam direto ao Typebot, sem modal intermediário.
