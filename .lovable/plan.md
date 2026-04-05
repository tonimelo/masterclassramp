

## Plano: Forçar sync com GitHub

Adicionar um comentário com timestamp no final de `src/App.tsx` para gerar um novo commit e forçar a sincronização.

### Alteração

**Arquivo:** `src/App.tsx`

Adicionar ao final do arquivo:
```typescript
// sync: 2026-04-05
```

Isso não afeta o funcionamento do site — apenas cria uma mudança mínima para disparar o push automático ao GitHub.

