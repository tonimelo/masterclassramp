
## Diagnóstico
- As rotas `/admin` e `/admin/login` existem.
- O fallback SPA (`public/_redirects`) já está correto, então isto não parece ser outro problema de 404.
- A correção anterior de redirecionamento já está no código. O ponto que continua frágil é o fluxo de autenticação em `src/hooks/useAuth.tsx`.
- Hoje o listener de autenticação usa callback `async` e faz `await` na checagem de role (`rpc("has_role")`) dentro do próprio `onAuthStateChange`. Esse padrão pode travar ou atrasar a finalização do login.
- Também falta tratar falha da checagem de role de forma explícita, então a tela não diferencia bem “senha inválida”, “sem permissão” e “falha ao validar acesso”.

## Plano de implementação
1. Refatorar `src/hooks/useAuth.tsx`
   - Registrar o listener de autenticação antes de `getSession()`.
   - Tornar o callback do `onAuthStateChange` síncrono.
   - Mover a checagem de admin para uma etapa separada, fora do callback de autenticação.
   - Garantir que `loading` sempre finalize, mesmo se a validação de acesso falhar.
   - Adicionar tratamento de erro/estado de falha da validação de acesso.

2. Ajustar `src/pages/AdminLogin.tsx`
   - Continuar redirecionando só quando a autenticação estiver 100% resolvida e o usuário for admin.
   - Exibir mensagens diferentes para:
     - credenciais inválidas
     - conta sem acesso administrativo
     - falha temporária ao validar o acesso
   - Garantir que o botão nunca fique preso em “Entrando...”.

3. Ajustar `src/pages/Admin.tsx`
   - Esperar a autenticação e a permissão terminarem antes de redirecionar.
   - Tratar erro ao carregar leads, para o dashboard não parecer “quebrado” quando o problema for a consulta de dados.
   - Manter redirecionamento apenas para estado realmente confirmado de “não autenticado” ou “não admin”.

4. Validação final
   - Testar o fluxo completo em `/admin/login`.
   - Confirmar: login -> validação de acesso -> abertura de `/admin` -> carregamento do dashboard.
   - Se o preview funcionar e o domínio final não refletir a correção, republicar a versão atualizada.

## Arquivos previstos
- `src/hooks/useAuth.tsx`
- `src/pages/AdminLogin.tsx`
- `src/pages/Admin.tsx`

## Detalhes técnicos
```text
Fluxo atual (instável):
signIn
-> onAuthStateChange(async)
-> await rpc("has_role") dentro do callback
-> loading/submissão podem ficar presos ou resolver fora de hora

Fluxo proposto:
onAuthStateChange(sync)
-> atualiza session/user
-> etapa separada valida role admin
-> loading encerra com sucesso ou erro tratado
-> redirect seguro para /admin
```

## Observação
- Não vejo necessidade de mudar a estrutura do banco neste momento.
- Se, depois da refatoração, a validação continuar retornando acesso negado para a conta admin, aí o ajuste será no registro de permissão existente, não na modelagem.
