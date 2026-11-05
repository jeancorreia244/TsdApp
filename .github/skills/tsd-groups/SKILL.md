---
name: tsd-groups
description: Especialização do TSD para grupos, participantes, convites, progresso coletivo e interação entre membros.
---

# TSD Groups Skill

## Objetivo

Permitir que usuários participem de grupos para acompanhar jornadas espirituais em conjunto.

---

## Conceitos

Grupo possui:

- proprietário;
- participantes;
- nome;
- descrição quando aplicável;
- data de criação;
- configurações.

---

## Convites

Convites devem ser seguros.

Não utilizar IDs internos sensíveis diretamente como mecanismo de convite.

Preferir tokens de convite apropriados.

---

## Permissões

Diferenciar:

- proprietário;
- administrador quando existir;
- participante.

Cada ação deve verificar permissão no backend.

---

## Privacidade

Um participante não deve conseguir acessar dados privados de outro participante sem autorização explícita da funcionalidade.

---

## Progresso coletivo

O grupo pode mostrar informações agregadas.

Evitar exposição desnecessária de dados pessoais.

---

## UX

Entrar em um grupo deve ser simples.

O usuário deve entender:

- qual é o grupo;
- quem participa;
- qual é o objetivo;
- qual é seu progresso;
- qual é o progresso coletivo.