---
applyTo: "**/*.{sql,ts,tsx,js}"
---

# TSD Database Instructions

Sempre que uma alteração envolver dados persistentes:

1. Verifique docs/DATABASE.md.
2. Verifique o schema existente.
3. Verifique relacionamentos.
4. Verifique constraints.
5. Verifique índices.
6. Verifique RLS.
7. Verifique impacto sobre dados existentes.

Nunca criar tabela ou coluna sem verificar se já existe.

Nunca remover dados ou estruturas sem confirmação explícita.

Toda tabela que contenha dados privados do usuário deve possuir estratégia adequada de RLS.