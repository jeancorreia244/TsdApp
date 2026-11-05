# TSD Architecture

## Arquitetura

O projeto deve manter separação entre:

- apresentação;
- componentes;
- lógica de domínio;
- acesso a dados;
- autenticação;
- utilitários.

## Backend

Supabase/PostgreSQL.

## Autenticação

Supabase Auth.

## Segurança

Row Level Security.

## Frontend

A tecnologia final deve ser documentada aqui após a definição oficial da stack.

## Regra

Evitar acoplamento entre domínio e interface.

Exemplo:

A lógica de oração não deve depender diretamente de um componente visual específico.