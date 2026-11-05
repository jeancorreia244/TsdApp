---
name: tsd-supabase
description: Especialização do TSD em Supabase, PostgreSQL, autenticação, RLS, queries, relacionamentos e persistência de dados.
---

# TSD Supabase Skill

## Backend

O TSD utiliza Supabase como backend principal.

O Supabase pode fornecer:

- PostgreSQL;
- autenticação;
- Row Level Security;
- storage;
- realtime quando necessário.

---

## Regra principal

Nunca assumir a estrutura do banco.

Antes de alterar:

1. Ler docs/DATABASE.md.
2. Procurar migrations.
3. Procurar queries existentes.
4. Procurar tipos gerados.
5. Verificar relacionamentos.

---

## Segurança

Nunca colocar:

- service_role key;
- secrets;
- credenciais privadas;

no frontend.

---

## RLS

Dados privados devem ser protegidos por RLS.

Nunca desabilitar RLS apenas para fazer uma funcionalidade funcionar.

Se RLS impedir uma operação:

1. descobrir o motivo;
2. verificar a política;
3. verificar o usuário autenticado;
4. corrigir a política ou arquitetura.

---

## Queries

Evitar:

- consultas duplicadas;
- consultas desnecessárias;
- N+1;
- carregamento excessivo.

Preferir consultas claras e específicas.

---

## Alterações de banco

Sempre que possível utilizar migrations.

Não alterar produção manualmente sem registrar a mudança.

---

## Dados do usuário

Quando uma tabela pertencer a um usuário, avaliar:

- user_id;
- foreign key;
- RLS;
- índices;
- cascade;
- timestamps.
