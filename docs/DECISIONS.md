# TSD Architecture Decisions

Este documento registra decisões importantes do projeto.

---

## ADR-001 — Backend

### Status

Proposto

### Decisão

Supabase será utilizado como backend principal.

### Motivo

- PostgreSQL;
- autenticação;
- RLS;
- storage;
- integração simples com frontend.

---

## ADR-002 — Design

### Status

Proposto

### Decisão

O TSD utilizará abordagem mobile-first.

### Motivo

A principal utilização esperada é através de dispositivos móveis.

---

## ADR-003 — Desenvolvimento orientado por IA

### Status

Aprovado

### Decisão

O projeto utilizará GitHub Copilot com:

- Instructions;
- Skills;
- Custom Agents;
- Prompt Files;
- documentação de arquitetura.

### Motivo

Reduzir inconsistência e aumentar a qualidade e previsibilidade das implementações.