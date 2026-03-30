

## Nova seção de logos com carrossel

### O que fazer

1. **Remover texto de prova social do HeroSection** — apagar o parágrafo "Métodos aplicados em Toyota, O Boticário e Amcham" (linhas ~34-40 de HeroSection.tsx)

2. **Copiar as 10 logos para `src/assets/logos/`**:
   - amcham.png, toyota.png, greenjoy.png, unesco.png, espacolaser.png, oboticario.png, cardinigro.png, caracol.png, subway.png, saocamilo.png

3. **Criar `src/components/LogosCarouselSection.tsx`**:
   - Titulo: "Métodos aplicados em diversas empresas como..."
   - Carrossel infinito com scroll automático lento (CSS animation, sem lib extra)
   - Técnica: duas cópias do conjunto de logos lado a lado em um container com `animation: scroll Xs linear infinite` via CSS `@keyframes`
   - Logos em opacidade ~60-70%, altura ~40-50px, espaçamento uniforme
   - Fundo sutil alinhado ao tema escuro

4. **Editar `src/pages/Index.tsx`**:
   - Inserir `<LogosCarouselSection />` entre `<ProblemaSection />` e `<SolucaoSection />`

### Detalhes técnicos

- Carrossel via CSS puro (`translateX` keyframes) — sem dependência de embla-carousel
- Duplicação dos itens para efeito de loop contínuo sem corte
- Responsivo: menos espaçamento em mobile, mesma animação

