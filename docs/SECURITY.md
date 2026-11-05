# TSD Security

## Princípios

Segurança deve existir em todas as camadas.

## Frontend

Nunca armazenar secrets.

Nunca utilizar service_role key.

## Backend

Utilizar autenticação e autorização.

## Database

Utilizar RLS para dados privados.

## Usuários

Usuários devem acessar apenas dados permitidos.

## Grupos

Participantes não devem acessar dados privados uns dos outros sem autorização.

## Desenvolvimento

Não colocar:

- passwords;
- tokens;
- secrets;
- chaves privadas;

no Git.

Utilizar variáveis de ambiente quando necessário.