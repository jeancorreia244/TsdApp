---
applyTo: "**/*.{ts,tsx,js,jsx,sql}"
---

# TSD Security Instructions

Trate segurança como requisito funcional.

Nunca:

- colocar service_role key no frontend;
- confiar em IDs enviados pelo cliente;
- confiar apenas em autorização visual;
- expor dados de outro usuário;
- desabilitar RLS para resolver um problema;
- armazenar secrets no código;
- ignorar erros de autenticação.

Sempre considerar:

- autenticação;
- autorização;
- RLS;
- validação;
- exposição de dados;
- permissões;
- tratamento de erros.