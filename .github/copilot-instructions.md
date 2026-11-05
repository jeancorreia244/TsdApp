# TSD — Instruções Gerais do Projeto

## Identidade do projeto

Nome oficial:

TSD — Tempo a Sós com Deus

O TSD é um aplicativo focado em organização e acompanhamento da vida devocional pessoal.

O produto deve transmitir:

- paz
- simplicidade
- profundidade
- organização
- intimidade com Deus
- clareza

O aplicativo não deve parecer uma rede social genérica ou um aplicativo de produtividade comum.

---

## Objetivo principal

O TSD permite ao usuário acompanhar sua rotina espiritual através de:

- leitura bíblica
- oração
- jejum
- devocionais
- jornadas espirituais
- grupos

---

## Princípios fundamentais

1. Mobile-first.
2. Interface simples.
3. Experiência intuitiva.
4. Poucos passos para executar ações.
5. Feedback visual claro.
6. Acessibilidade.
7. Segurança dos dados.
8. Código organizado.
9. Componentes reutilizáveis.
10. Não quebrar funcionalidades existentes.

---

## Regra mais importante

ANTES de implementar qualquer funcionalidade:

1. Entenda o requisito.
2. Examine a arquitetura existente.
3. Examine os arquivos relacionados.
4. Verifique se existe implementação semelhante.
5. Verifique o banco de dados quando houver persistência.
6. Consulte as skills relevantes.
7. Identifique possíveis impactos.
8. Planeje a implementação.
9. Só então altere o código.

Nunca implemente cegamente.

---

## Alterações no projeto

Não substituir arquivos inteiros sem necessidade.

Prefira alterações pequenas, isoladas e rastreáveis.

Não remover funcionalidades existentes sem motivo.

Não criar código duplicado quando já existir uma abstração adequada.

Não criar componentes gigantes.

Não colocar lógica complexa diretamente dentro de componentes de interface.

---

## Banco de dados

O backend principal é Supabase/PostgreSQL.

Antes de criar ou alterar tabelas:

- verificar o schema existente;
- verificar relacionamentos;
- verificar constraints;
- verificar índices;
- verificar políticas RLS;
- verificar dependências.

Nunca presumir que uma tabela não existe.

Nunca expor service_role key no frontend.

---

## Segurança

Dados pertencentes ao usuário devem ser protegidos.

Sempre considerar:

- autenticação;
- autorização;
- Row Level Security;
- validação de entrada;
- exposição de dados;
- permissões;
- acesso entre usuários.

Nunca confiar apenas na validação do frontend.

---

## UX

Sempre considerar:

- loading;
- erro;
- sucesso;
- estado vazio;
- estado offline quando aplicável;
- responsividade;
- acessibilidade.

Toda ação importante deve fornecer feedback ao usuário.

---

## Código

Priorizar:

- legibilidade;
- reutilização;
- separação de responsabilidades;
- funções pequenas;
- nomes descritivos;
- tratamento de erros;
- tipagem quando aplicável.

Evitar:

- código duplicado;
- números mágicos;
- strings espalhadas;
- componentes gigantes;
- lógica de negócio misturada com apresentação;
- soluções temporárias sem documentação.

---

## Processo de desenvolvimento

Para funcionalidades relevantes, seguir:

REQUISITO
→ ANÁLISE
→ PLANEJAMENTO
→ IMPLEMENTAÇÃO
→ TESTE
→ REVIEW

Não assumir que implementar código é sempre o primeiro passo.

---

## Documentação

Quando uma decisão arquitetural importante for tomada, registrar em:

docs/DECISIONS.md

Quando uma funcionalidade for concluída, atualizar:

docs/ROADMAP.md

Quando arquitetura ou banco forem alterados, atualizar a documentação correspondente.

---

## Regra de dúvida

Se uma decisão puder alterar significativamente:

- banco;
- autenticação;
- arquitetura;
- segurança;
- fluxo principal;
- experiência do usuário;

não tomar uma decisão arbitrária.

Explique o impacto e proponha uma solução antes de executar uma mudança estrutural.