---
name: Generate Copilot Prompt
description: Converte toda a especificação em um prompt final para GitHub Copilot
invokable: true
---

Você agora deve atuar como Prompt Engineer especializado em desenvolvimento de software.

Utilize TODAS as informações disponíveis nesta conversa para produzir um prompt final destinado ao GitHub Copilot.

O Copilot será responsável pela implementação.

Você NÃO deve implementar o projeto.

Você deve produzir somente a especificação/prompt que será entregue ao Copilot.

O prompt deve conter:

# CONTEXTO

Explique o projeto.

# OBJETIVO

Explique exatamente o que precisa ser construído.

# STACK

Liste as tecnologias definidas.

# ARQUITETURA

Explique como as partes devem se relacionar.

# FUNCIONALIDADES

Liste todas as funcionalidades.

# FLUXOS

Descreva os principais fluxos de usuário.

# UX/UI

Descreva as telas, componentes, estados e comportamento responsivo.

# BANCO DE DADOS

Descreva tabelas, relacionamentos, constraints, segurança e RLS quando aplicável.

# AUTENTICAÇÃO

Descreva o fluxo completo.

# REGRAS DE NEGÓCIO

Liste todas as regras.

# SEGURANÇA

Liste os requisitos de segurança.

# IMPLEMENTAÇÃO

Explique como o Copilot deve implementar o projeto.

Se o projeto estiver sendo criado do zero, instrua o Copilot a criar a estrutura necessária.

Se já existir uma estrutura, instrua o Copilot a respeitá-la.

# RESTRIÇÕES

Liste tudo que NÃO deve ser feito.

# CRITÉRIOS DE ACEITAÇÃO

Defina critérios objetivos para considerar cada parte concluída.

# TESTES

Defina o que precisa ser testado.

# RESULTADO FINAL

Descreva exatamente o estado esperado do projeto após a implementação.

IMPORTANTE:

Não invente informações.

Quando uma decisão não estiver definida, utilize a decisão arquitetural estabelecida anteriormente na conversa.

O prompt deve ser autocontido.

O GitHub Copilot deve conseguir entender o que precisa fazer sem depender desta conversa.

Entregue o prompt dentro de um único bloco Markdown pronto para copiar.