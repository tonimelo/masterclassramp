

## Redesign Completo da Landing Page

### Resumo

Reestruturar a LP para 5 secoes com nova copy, imagem conjunta dos mentores no Hero, e formulario de qualificacao em popup no CTA. Remover secoes antigas nao utilizadas.

### Nova Estrutura

```text
1. HeroSection        - Nova copy + foto Beca_e_Lucas.png + CTA + prova social
2. ProblemaSection     - "Por que sua empresa parou de crescer?"
3. SolucaoSection      - Arquitetura de Processos + Engenharia de Caixa
4. MentoresSection     - Bio conjunta Rebeca + Lucas
5. Footer simples      - Copyright
```

### Arquivos

**Copiar imagem:**
- `user-uploads://Beca_e_Lucas.png` para `src/assets/beca_e_lucas.png`

**Criar:**
- `src/components/QualificationFormModal.tsx` — Modal com formulario multi-campo (nome, sobrenome, email, whatsapp, ramo, colaboradores, faturamento, desafios). Logica pos-envio: se "So eu" OU "10k-50k" mostra mensagem desqualificatoria com links Instagram. Caso contrario mostra tela de sucesso com link do WhatsApp (placeholder por enquanto). Design leve, fluido, com steps ou scroll suave.
- `src/components/ProblemaSection.tsx` — Copy: "Para cada 10% de faturamento, a complexidade operacional cresce 50%..."
- `src/components/SolucaoSection.tsx` — Dois blocos visuais: Arquitetura de Processos (Rebeca) e Engenharia de Caixa (Lucas)

**Editar:**
- `src/components/HeroSection.tsx` — Nova headline ("A Arquitetura do Lucro..."), subheadline, imagem dos mentores, prova social ("Toyota, O Boticario, Amcham"), remover badges de data/ao vivo
- `src/components/CtaButton.tsx` — Trocar EduzzCheckoutModal por QualificationFormModal, texto "Solicitar Convite para a Masterclass"
- `src/components/MetodosSection.tsx` — Adaptar para secao Mentores com texto conjunto ("Mais de 10 anos desenhando estrategias para grandes holdings e acelerando PMEs...")
- `src/pages/Index.tsx` — Importar apenas: Hero, Problema, Solucao, Mentores + footer inline. Remover imports antigos.

**Nao mais usados (remover imports):**
- ProvocacaoSection, PontoCegoSection, DominarSection, FechamentoSection, ProvaSocialSection, BiosSection, EduzzCheckoutModal

### Formulario — Campos e Logica

| Campo | Tipo |
|-------|------|
| Nome | text |
| Sobrenome | text |
| Email | email |
| WhatsApp | tel |
| Ramo | radio (7 opcoes + Outro com campo livre) |
| Colaboradores | radio (6 opcoes) |
| Faturamento mensal | radio (5 opcoes) |
| Desafios | checkbox multipla (8 opcoes) |

**Desqualificacao:** colaboradores === "So eu" OU faturamento === "Entre 10k e 50k" → mensagem desqualificatoria + links Instagram de Lucas e Rebeca.

**Qualificado:** tela de sucesso com link para grupo WhatsApp (placeholder `#LINK_WHATSAPP`).

### Detalhes tecnicos

- Formulario como modal (shadcn Dialog) com scroll interno, sem steps — formulario unico com secoes visuais separadas
- Validacao client-side com estados React (required nos campos obrigatorios)
- Imagem dos mentores importada como ES module via `src/assets/`
- Dados do formulario armazenados apenas em estado local (sem backend por enquanto)
- Design: fundo escuro do modal alinhado ao tema, inputs com borda sutil, botao verde primario

