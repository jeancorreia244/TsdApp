# TSD Design System

## Direção visual

O TSD deve transmitir paz, simplicidade, profundidade e organização. A interface deve parecer acolhedora, íntima e funcional — nunca como dashboard corporativo ou rede social.

## Princípios

- Mobile-first por padrão.
- Hierarquia visual clara.
- Espaço respirável e leitura confortável.
- Componentes consistentes e reutilizáveis.
- Feedback visual para cada ação importante.
- Acessibilidade básica como requisito.

## Tokens

### Cores

- Fundo principal: `#f4efe8`
- Superfície: `#fffdf9`
- Painel: `#f7f2ea`
- Borda: `#e5dac5`
- Texto principal: `#1e2a2a`
- Texto secundário: `#62706d`
- Marca principal: `#6f8f7a`
- Marca forte: `#44654f`
- Sucesso: `#2d7d5d`
- Erro: `#b65454`
- Destaque decorativo: `#d8bfa3`

### Tipografia

- Família: Inter, Segoe UI, sans-serif
- Títulos: peso 700
- Texto de apoio: peso 500
- Botões: peso 600

### Espaçamento

- `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `40px`

### Raios

- Pequeno: `12px`
- Médio: `16px`
- Grande: `24px`

## Componentes

### Botões

- Primário: fundo verde escuro com gradiente suave, texto branco.
- Secundário: fundo verde claro, texto verde escuro.
- Ghost: fundo transparente com borda suave.
- Danger: fundo rosado claro com texto vermelho.

### Inputs

- Bordas suaves.
- Focus com contorno roxo/verde suave e sombra mínima.
- Layout simples, legível e acessível.

### Cards

- Cantos arredondados.
- Fundo claro com borda discreta.
- Espaçamento consistente para listas de eventos.

### Feedback

- Sucesso: verde suave.
- Erro: vermelho suave.
- Loading: spinner simples e discreto.
- Empty state: mensagem clara e centralizada.

## Estados obrigatórios

- Loading
- Empty
- Error
- Success
- Hover
- Focus
- Disabled

## Responsividade

### Mobile

- Navegação simples e de fácil toque.
- Formulários em coluna única.
- Botões com altura mínima confortável.

### Tablet

- Ajuste de espaçamento e composição.
- Mais largura para cards e listas.

### Desktop

- Layout centralizado com maior legibilidade.
- Ainda mantendo a sensação calma e minimalista do produto.

## Acessibilidade

- Contraste suficiente entre texto e fundo.
- Áreas clicáveis com tamanho confortável.
- Labels visíveis nos campos.
- Feedback direto após ações e validações.

## Aplicação no projeto

A interface atual foi organizada para refletir esse design system em [frontend/src/styles.css](../frontend/src/styles.css) e na experiência principal em [frontend/src/App.jsx](../frontend/src/App.jsx).
