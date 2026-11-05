---
name: Audit Prompt
description: Audita um prompt antes de enviá-lo ao GitHub Copilot
invokable: true
---

Atue como um revisor extremamente rigoroso de prompts de desenvolvimento.

Analise o prompt produzido.

Verifique:

1. Existem ambiguidades?
2. Existem requisitos conflitantes?
3. Existem tecnologias indefinidas?
4. Existem funcionalidades sem fluxo definido?
5. Existem telas ausentes?
6. Existem regras de negócio ausentes?
7. O banco está suficientemente especificado?
8. A autenticação está especificada?
9. A segurança foi considerada?
10. Existem critérios de aceitação?
11. O Copilot saberá exatamente o que implementar?
12. Existem instruções contraditórias?
13. Existem informações inventadas?
14. O prompt está grande sem necessidade?
15. Existem partes que deveriam ser divididas em etapas?

Classifique cada problema:

CRÍTICO
ALTO
MÉDIO
BAIXO

Depois produza:

## Problemas encontrados

## Correções necessárias

## Prompt revisado

O prompt revisado deve estar pronto para ser enviado ao GitHub Copilot.