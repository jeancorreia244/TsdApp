# TSD Database

## Backend

Supabase PostgreSQL.

## Regras

Toda alteração de banco deve ser documentada.

## Princípios

- Foreign Keys quando apropriado.
- Constraints.
- Índices.
- Timestamps.
- RLS.
- Integridade referencial.

## Domínios

### Users

Gerenciados pelo sistema de autenticação.

### Bible

Livros, capítulos e registros relacionados à leitura.

### Prayer

Sessões de oração.

### Fasting

Registros de jejum.

### Devotional

Registros de devocional.

### Groups

Grupos e participantes.

### Journey

Jornadas e progresso.

## Observação

O schema definitivo deve ser criado e aprovado antes da implementação das funcionalidades dependentes.