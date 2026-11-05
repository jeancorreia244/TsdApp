---
applyTo: "src/**/*.{ts,tsx,js}"
---

# TSD Backend Instructions

Ao trabalhar com backend ou integração de dados:

- Nunca confiar apenas no frontend.
- Validar dados.
- Tratar erros explicitamente.
- Evitar queries desnecessárias.
- Evitar duplicação de lógica.
- Manter separação entre UI e lógica de dados.
- Não expor secrets.
- Utilizar Supabase de acordo com a arquitetura definida.

Sempre verificar:

- autenticação;
- autorização;
- RLS;
- tratamento de erro;
- loading;
- estados vazios.