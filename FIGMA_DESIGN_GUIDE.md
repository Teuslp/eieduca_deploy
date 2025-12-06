# Guia Completo de Design - EiEduca+
## Especificações para Implementação no Figma

---

## 1. DESIGN SYSTEM

### 1.1 Paleta de Cores

#### Cores Principais
- **Primary (Azul Profundo)**: `#1e40af` (rgb: 30, 64, 175)
- **Primary Hover**: `#1e3a8a` (rgb: 30, 58, 138)
- **Secondary (Verde/Teal)**: `#14b8a6` (rgb: 20, 184, 166)
- **Secondary Hover**: `#0d9488` (rgb: 13, 148, 136)

#### Cores de Fundo (Tema Claro)
- **Background**: `#ffffff` (branco)
- **Surface**: `#f8fafc` (cinza muito claro)
- **Card Background**: `#ffffff` com borda `#e2e8f0`

#### Cores de Fundo (Tema Escuro)
- **Background**: `#0f172a` (azul escuro profundo)
- **Surface**: `#1e293b` (azul escuro médio)
- **Card Background**: `#1e293b` com borda `#334155`

#### Cores de Texto (Tema Claro)
- **Foreground (Principal)**: `#0f172a` (quase preto)
- **Muted**: `#64748b` (cinza médio)
- **Subtle**: `#94a3b8` (cinza claro)

#### Cores de Texto (Tema Escuro)
- **Foreground (Principal)**: `#f1f5f9` (quase branco)
- **Muted**: `#94a3b8` (cinza médio)
- **Subtle**: `#64748b` (cinza escuro)

#### Cores de Estado
- **Success**: `#10b981` (verde)
- **Warning**: `#f59e0b` (laranja)
- **Error**: `#ef4444` (vermelho)
- **Info**: `#3b82f6` (azul)

#### Cores de Acento
- **Accent 1**: `#8b5cf6` (roxo)
- **Accent 2**: `#ec4899` (rosa)
- **Accent 3**: `#f59e0b` (laranja)

### 1.2 Tipografia

#### Fontes
- **Sans-serif (Principal)**: Geist Sans ou Inter
- **Monospace (Código)**: Geist Mono ou Fira Code

#### Hierarquia de Tamanhos

**Desktop:**
- **H1**: 48px / 3rem - font-weight: 700 (bold) - line-height: 1.2
- **H2**: 36px / 2.25rem - font-weight: 700 (bold) - line-height: 1.3
- **H3**: 24px / 1.5rem - font-weight: 600 (semibold) - line-height: 1.4
- **H4**: 20px / 1.25rem - font-weight: 600 (semibold) - line-height: 1.4
- **Body Large**: 18px / 1.125rem - font-weight: 400 (regular) - line-height: 1.6
- **Body**: 16px / 1rem - font-weight: 400 (regular) - line-height: 1.6
- **Body Small**: 14px / 0.875rem - font-weight: 400 (regular) - line-height: 1.5
- **Caption**: 12px / 0.75rem - font-weight: 400 (regular) - line-height: 1.4

**Mobile:**
- **H1**: 36px / 2.25rem - font-weight: 700 (bold) - line-height: 1.2
- **H2**: 28px / 1.75rem - font-weight: 700 (bold) - line-height: 1.3
- **H3**: 20px / 1.25rem - font-weight: 600 (semibold) - line-height: 1.4
- **H4**: 18px / 1.125rem - font-weight: 600 (semibold) - line-height: 1.4
- **Body Large**: 16px / 1rem - font-weight: 400 (regular) - line-height: 1.6
- **Body**: 14px / 0.875rem - font-weight: 400 (regular) - line-height: 1.6
- **Body Small**: 13px / 0.8125rem - font-weight: 400 (regular) - line-height: 1.5
- **Caption**: 11px / 0.6875rem - font-weight: 400 (regular) - line-height: 1.4

### 1.3 Espaçamentos

Sistema baseado em múltiplos de 4px:

- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

### 1.4 Border Radius

- **sm**: 4px (0.25rem)
- **md**: 8px (0.5rem)
- **lg**: 12px (0.75rem)
- **xl**: 16px (1rem)
- **2xl**: 24px (1.5rem)
- **full**: 9999px (círculo completo)

### 1.5 Sombras

**Tema Claro:**
- **sm**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **md**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **lg**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **xl**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

**Tema Escuro:**
- **sm**: `0 1px 2px 0 rgba(0, 0, 0, 0.3)`
- **md**: `0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)`
- **lg**: `0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)`
- **xl**: `0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5)`

### 1.6 Componentes Base

#### Botão Primário
- **Altura**: 40px (mobile: 44px para melhor toque)
- **Padding horizontal**: 24px
- **Background**: Primary color `#1e40af`
- **Texto**: Branco `#ffffff` - 14px - font-weight: 500
- **Border radius**: 8px
- **Hover**: Background muda para `#1e3a8a`
- **Focus**: Outline de 2px na cor primary com offset de 2px
- **Disabled**: Opacity 50%, cursor not-allowed

#### Botão Secundário
- **Altura**: 40px (mobile: 44px)
- **Padding horizontal**: 24px
- **Background**: Transparente
- **Borda**: 1px solid na cor primary `#1e40af`
- **Texto**: Primary color - 14px - font-weight: 500
- **Border radius**: 8px
- **Hover**: Background `#1e40af` com opacity 10%
- **Focus**: Outline de 2px na cor primary com offset de 2px

#### Input Field
- **Altura**: 40px (mobile: 44px)
- **Padding horizontal**: 16px
- **Background**: Surface color
- **Borda**: 1px solid `#e2e8f0` (tema claro) ou `#334155` (tema escuro)
- **Border radius**: 8px
- **Texto**: 14px - foreground color
- **Placeholder**: Muted color
- **Focus**: Borda muda para primary color, adiciona ring de 2px
- **Error**: Borda vermelha `#ef4444`

#### Card
- **Background**: Card background color
- **Borda**: 1px solid `#e2e8f0` (tema claro) ou `#334155` (tema escuro)
- **Border radius**: 12px
- **Padding**: 24px (mobile: 16px)
- **Sombra**: sm (opcional)
- **Hover**: Sombra aumenta para md (opcional)

#### Badge
- **Altura**: 24px
- **Padding horizontal**: 12px
- **Border radius**: 12px (pill shape)
- **Texto**: 12px - font-weight: 500
- **Variantes**:
  - Success: Background `#10b981` com opacity 10%, texto `#10b981`
  - Warning: Background `#f59e0b` com opacity 10%, texto `#f59e0b`
  - Info: Background `#3b82f6` com opacity 10%, texto `#3b82f6`
  - Default: Background muted com opacity 10%, texto muted

#### Progress Bar
- **Altura**: 8px
- **Background**: Muted color com opacity 20%
- **Border radius**: 4px (full)
- **Barra de progresso**: Primary color ou gradient
- **Animação**: Transição suave de 300ms

---

## 2. TELA DE LOGIN

### 2.1 Layout Geral

**Desktop (1440px):**
- Layout dividido em 2 colunas (50/50)
- Coluna esquerda: Formulário de login
- Coluna direita: Imagem/ilustração de fundo

**Tablet (768px - 1023px):**
- Layout dividido em 2 colunas (40/60)
- Coluna esquerda: Formulário (mais estreita)
- Coluna direita: Imagem (mais larga)

**Mobile (< 768px):**
- Layout de coluna única
- Formulário ocupa toda a largura
- Imagem de fundo removida ou como background sutil

### 2.2 Coluna Esquerda - Formulário

#### Container Principal
- **Largura máxima**: 400px
- **Padding**: 48px (mobile: 24px)
- **Alinhamento**: Centralizado verticalmente e horizontalmente
- **Background**: Surface color

#### Logo
- **Posição**: Topo do formulário
- **Tamanho**: 48px x 48px
- **Ícone**: GraduationCap (lucide-react)
- **Cor**: Primary color
- **Margin bottom**: 32px

#### Título
- **Texto**: "Bem-vindo de volta"
- **Tipografia**: H2 (36px desktop, 28px mobile)
- **Cor**: Foreground
- **Margin bottom**: 8px

#### Subtítulo
- **Texto**: "Entre com suas credenciais para acessar a plataforma"
- **Tipografia**: Body (16px desktop, 14px mobile)
- **Cor**: Muted
- **Margin bottom**: 32px

#### Formulário
**Campo Email:**
- Label: "Email" - 14px - font-weight: 500 - margin bottom: 8px
- Input: Altura 40px (mobile: 44px)
- Placeholder: "seu@email.com"
- Type: email
- Margin bottom: 16px

**Campo Senha:**
- Label: "Senha" - 14px - font-weight: 500 - margin bottom: 8px
- Input: Altura 40px (mobile: 44px)
- Placeholder: "••••••••"
- Type: password
- Ícone de olho para mostrar/ocultar senha (direita)
- Margin bottom: 8px

**Link "Esqueceu a senha?":**
- Posição: Abaixo do campo senha, alinhado à direita
- Texto: 14px - Primary color
- Hover: Sublinhado
- Margin bottom: 24px

**Botão Entrar:**
- Largura: 100%
- Altura: 44px
- Texto: "Entrar"
- Estilo: Botão primário
- Margin bottom: 16px

**Divisor "ou":**
- Linha horizontal com texto "ou" no centro
- Cor da linha: Border color
- Margin bottom: 16px

**Botão Google:**
- Largura: 100%
- Altura: 44px
- Texto: "Continuar com Google"
- Ícone: Logo do Google (esquerda)
- Estilo: Botão secundário
- Margin bottom: 24px

**Link de Cadastro:**
- Texto: "Não tem uma conta? Cadastre-se"
- Alinhamento: Centro
- "Cadastre-se" em primary color e bold
- Tipografia: 14px

### 2.3 Coluna Direita - Imagem

#### Container
- **Background**: Gradient de primary para secondary
  - `linear-gradient(135deg, #1e40af 0%, #14b8a6 100%)`
- **Padding**: 48px
- **Alinhamento**: Centralizado

#### Conteúdo
- **Ilustração**: Imagem de educação/tecnologia
- **Overlay**: Texto motivacional (opcional)
  - "Educação inclusiva para todos"
  - Tipografia: H2 - Cor: Branco
  - Sombra de texto para legibilidade

---

## 3. TELA DE DASHBOARD

### 3.1 Layout Geral

**Estrutura:**
- Navegação lateral (esquerda) - 280px de largura
- Conteúdo principal (direita) - Largura flexível
- Padding do conteúdo: 32px (mobile: 16px)

**Mobile:**
- Navegação vira menu hamburguer
- Conteúdo ocupa 100% da largura

### 3.2 Navegação Lateral

#### Container
- **Largura**: 280px (fixo em desktop)
- **Background**: Surface color
- **Borda direita**: 1px solid border color
- **Padding**: 24px 16px
- **Altura**: 100vh (sticky)

#### Logo e Nome
- **Logo**: 32px x 32px - Primary color
- **Texto**: "EiEduca+" - 20px - font-weight: 600
- **Margin bottom**: 32px

#### Itens de Menu
**Estrutura de cada item:**
- **Altura**: 40px
- **Padding**: 12px 16px
- **Border radius**: 8px
- **Gap entre ícone e texto**: 12px
- **Margin bottom**: 4px

**Estado Normal:**
- Background: Transparente
- Texto: Foreground color - 14px - font-weight: 500
- Ícone: 20px - Muted color

**Estado Hover:**
- Background: Muted color com opacity 10%

**Estado Ativo:**
- Background: Primary color com opacity 10%
- Texto: Primary color
- Ícone: Primary color
- Borda esquerda: 3px solid primary color

**Itens do Menu:**
1. Dashboard (ícone: LayoutDashboard)
2. Cursos (ícone: BookOpen)
3. Biblioteca (ícone: Library)
4. Certificação (ícone: Award)

#### Perfil do Usuário (rodapé)
- **Posição**: Parte inferior da navegação
- **Avatar**: 40px x 40px - círculo - background gradient
- **Nome**: "Ana Clara" - 14px - font-weight: 500
- **Email**: "ana@email.com" - 12px - muted color
- **Botão logout**: Ícone LogOut - 16px - muted color

### 3.3 Navegação Mobile (Menu Hamburguer)

#### Botão Hamburguer
- **Posição**: Topo esquerdo - fixed
- **Tamanho**: 44px x 44px
- **Ícone**: Menu (3 linhas horizontais) - 24px
- **Background**: Surface color
- **Border**: 1px solid border color
- **Border radius**: 8px
- **Z-index**: 50

#### Menu Overlay
- **Background**: Background color com opacity 95%
- **Largura**: 280px
- **Altura**: 100vh
- **Posição**: Fixed - esquerda
- **Animação**: Slide in from left (300ms)
- **Conteúdo**: Mesmo da navegação desktop

#### Botão Fechar
- **Posição**: Topo direito do menu
- **Ícone**: X - 24px
- **Tamanho**: 40px x 40px

### 3.4 Cabeçalho do Dashboard

#### Container
- **Margin bottom**: 32px (mobile: 24px)

#### Saudação
- **Texto**: "Olá, Ana Clara! 👋"
- **Tipografia**: H1 (48px desktop, 36px mobile)
- **Cor**: Foreground
- **Margin bottom**: 8px

#### Subtítulo
- **Texto**: "Bem-vinda de volta! Aqui está seu progresso de hoje."
- **Tipografia**: Body Large (18px desktop, 16px mobile)
- **Cor**: Muted

### 3.5 Cards de Estatísticas

#### Grid Container
- **Layout**: Grid de 4 colunas (desktop)
- **Gap**: 24px
- **Margin bottom**: 32px

**Responsividade:**
- Desktop (> 1024px): 4 colunas
- Tablet (768px - 1023px): 2 colunas
- Mobile (< 768px): 1 coluna

#### Estrutura de Cada Card
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 24px (mobile: 20px)
- **Sombra**: sm

**Conteúdo:**
1. **Ícone** (topo esquerdo)
   - Tamanho: 40px x 40px
   - Background: Primary/Secondary/Success/Warning com opacity 10%
   - Ícone: 20px - cor correspondente ao background
   - Border radius: 8px

2. **Valor** (abaixo do ícone)
   - Tipografia: 32px (mobile: 28px) - font-weight: 700
   - Cor: Foreground
   - Margin top: 16px

3. **Label** (abaixo do valor)
   - Tipografia: 14px - font-weight: 500
   - Cor: Muted
   - Margin top: 4px

4. **Indicador de mudança** (opcional, abaixo do label)
   - Tipografia: 12px
   - Cor: Success (positivo) ou Error (negativo)
   - Ícone: TrendingUp ou TrendingDown - 14px
   - Margin top: 8px

**Cards:**
1. **Cursos em Andamento**
   - Ícone: BookOpen
   - Valor: "3"
   - Label: "Cursos em andamento"
   - Cor: Primary

2. **Horas de Estudo**
   - Ícone: Clock
   - Valor: "24h"
   - Label: "Esta semana"
   - Indicador: "+12% vs semana passada"
   - Cor: Secondary

3. **Certificados**
   - Ícone: Award
   - Valor: "5"
   - Label: "Certificados conquistados"
   - Cor: Success

4. **Progresso Geral**
   - Ícone: TrendingUp
   - Valor: "68%"
   - Label: "Progresso geral"
   - Indicador: "+5% este mês"
   - Cor: Warning

### 3.6 Seção "Cursos em Andamento"

#### Cabeçalho da Seção
- **Título**: "Cursos em Andamento"
- **Tipografia**: H3 (24px desktop, 20px mobile)
- **Margin bottom**: 16px

#### Grid de Cursos
- **Layout**: Grid de 3 colunas (desktop)
- **Gap**: 24px
- **Margin bottom**: 32px

**Responsividade:**
- Desktop (> 1024px): 3 colunas
- Tablet (768px - 1023px): 2 colunas
- Mobile (< 768px): 1 coluna

#### Card de Curso

**Container:**
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 0 (imagem full-width no topo)
- **Sombra**: sm
- **Hover**: Sombra aumenta para md, transição 300ms

**Estrutura:**

1. **Imagem de Capa** (topo)
   - Altura: 160px
   - Largura: 100%
   - Object-fit: cover
   - Border radius: 12px 12px 0 0
   - Placeholder: Gradient ou imagem relacionada ao curso

2. **Conteúdo** (padding: 20px)
   
   a. **Categoria Badge** (topo)
      - Badge pequeno
      - Texto: Nome da categoria (ex: "Tecnologia")
      - Margin bottom: 12px
   
   b. **Título do Curso**
      - Tipografia: 18px - font-weight: 600
      - Cor: Foreground
      - Margin bottom: 8px
      - Max 2 linhas com ellipsis
   
   c. **Descrição**
      - Tipografia: 14px
      - Cor: Muted
      - Margin bottom: 16px
      - Max 2 linhas com ellipsis
   
   d. **Barra de Progresso**
      - Altura: 8px
      - Background: Muted com opacity 20%
      - Barra: Primary color ou gradient
      - Border radius: 4px (full)
      - Margin bottom: 8px
   
   e. **Texto de Progresso**
      - Tipografia: 12px - font-weight: 500
      - Cor: Muted
      - Texto: "X% concluído"
      - Margin bottom: 16px
   
   f. **Botão "Continuar"**
      - Largura: 100%
      - Altura: 36px
      - Estilo: Botão primário
      - Texto: "Continuar"

**Cursos Exemplo:**
1. **Introdução à IA na Educação**
   - Categoria: Tecnologia
   - Progresso: 65%
   - Descrição: "Aprenda como a inteligência artificial está transformando..."

2. **Metodologias Ativas**
   - Categoria: Pedagogia
   - Progresso: 40%
   - Descrição: "Explore técnicas inovadoras de ensino que colocam..."

3. **Acessibilidade Digital**
   - Categoria: Inclusão
   - Progresso: 80%
   - Descrição: "Descubra como criar conteúdos digitais acessíveis..."

### 3.7 Seção "Recomendações"

#### Cabeçalho
- **Título**: "Recomendado para Você"
- **Tipografia**: H3 (24px desktop, 20px mobile)
- **Margin bottom**: 16px

#### Grid de Recomendações
- **Layout**: Grid de 4 colunas (desktop)
- **Gap**: 20px
- **Margin bottom**: 32px

**Responsividade:**
- Desktop (> 1024px): 4 colunas
- Tablet (768px - 1023px): 2 colunas
- Mobile (< 768px): 1 coluna

#### Card de Recomendação

**Container:**
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 16px
- **Sombra**: sm
- **Hover**: Sombra aumenta para md, borda muda para primary

**Estrutura:**

1. **Ícone** (topo)
   - Tamanho: 48px x 48px
   - Background: Gradient ou cor sólida com opacity 10%
   - Ícone: 24px - cor correspondente
   - Border radius: 8px
   - Margin bottom: 12px

2. **Título**
   - Tipografia: 16px - font-weight: 600
   - Cor: Foreground
   - Margin bottom: 8px
   - Max 2 linhas com ellipsis

3. **Descrição**
   - Tipografia: 13px
   - Cor: Muted
   - Margin bottom: 12px
   - Max 3 linhas com ellipsis

4. **Badge de Duração**
   - Badge pequeno
   - Ícone: Clock - 12px
   - Texto: Duração (ex: "2h 30min")
   - Tipografia: 11px

**Recomendações Exemplo:**
1. **Gestão de Sala de Aula**
   - Ícone: Users
   - Duração: "3h"
   - Cor: Primary

2. **Tecnologia Assistiva**
   - Ícone: Accessibility
   - Duração: "2h 30min"
   - Cor: Secondary

3. **Avaliação Inclusiva**
   - Ícone: ClipboardCheck
   - Duração: "1h 45min"
   - Cor: Success

4. **Educação Socioemocional**
   - Ícone: Heart
   - Duração: "2h"
   - Cor: Warning

### 3.8 Seção "Atividade Recente"

#### Cabeçalho
- **Título**: "Atividade Recente"
- **Tipografia**: H3 (24px desktop, 20px mobile)
- **Margin bottom**: 16px

#### Container de Atividades
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 24px (mobile: 16px)

#### Item de Atividade

**Estrutura:**
- **Layout**: Flexbox horizontal
- **Gap**: 16px
- **Padding**: 16px 0
- **Borda inferior**: 1px solid border color (exceto último item)

**Componentes:**

1. **Ícone** (esquerda)
   - Tamanho: 40px x 40px
   - Background: Cor com opacity 10%
   - Ícone: 20px
   - Border radius: 8px

2. **Conteúdo** (centro - flex-grow)
   
   a. **Título da Atividade**
      - Tipografia: 14px - font-weight: 500
      - Cor: Foreground
   
   b. **Descrição**
      - Tipografia: 13px
      - Cor: Muted
      - Margin top: 4px

3. **Timestamp** (direita)
   - Tipografia: 12px
   - Cor: Muted
   - Alinhamento: Top right

**Atividades Exemplo:**
1. **Certificado Conquistado**
   - Ícone: Award (Success color)
   - Título: "Certificado conquistado"
   - Descrição: "Introdução à IA na Educação"
   - Timestamp: "Há 2 horas"

2. **Aula Concluída**
   - Ícone: CheckCircle (Primary color)
   - Título: "Aula concluída"
   - Descrição: "Módulo 3 - Metodologias Ativas"
   - Timestamp: "Há 5 horas"

3. **Novo Curso Iniciado**
   - Ícone: BookOpen (Secondary color)
   - Título: "Novo curso iniciado"
   - Descrição: "Acessibilidade Digital"
   - Timestamp: "Ontem"

---

## 4. TELA DE CURSOS

### 4.1 Layout Geral

**Estrutura:**
- Navegação lateral (mesma do dashboard)
- Cabeçalho com busca e filtros
- Grid de cursos
- Padding: 32px (mobile: 16px)

### 4.2 Cabeçalho

#### Título
- **Texto**: "Catálogo de Cursos"
- **Tipografia**: H1 (48px desktop, 36px mobile)
- **Margin bottom**: 8px

#### Subtítulo
- **Texto**: "Explore nossa biblioteca de cursos inclusivos"
- **Tipografia**: Body Large (18px desktop, 16px mobile)
- **Cor**: Muted
- **Margin bottom**: 24px

### 4.3 Barra de Busca e Filtros

#### Container
- **Layout**: Flexbox horizontal (desktop) / Vertical (mobile)
- **Gap**: 16px
- **Margin bottom**: 24px

#### Campo de Busca
- **Largura**: Flex-grow (desktop) / 100% (mobile)
- **Altura**: 44px
- **Padding**: 12px 16px
- **Background**: Surface color
- **Borda**: 1px solid border color
- **Border radius**: 8px
- **Ícone**: Search - 20px - esquerda - muted color
- **Placeholder**: "Buscar cursos..."
- **Focus**: Borda primary, ring de 2px

#### Botão de Filtro (Mobile)
- **Largura**: 44px
- **Altura**: 44px
- **Ícone**: Filter - 20px
- **Estilo**: Botão secundário
- **Mostra**: Apenas em mobile
- **Ação**: Abre modal de filtros

### 4.4 Filtros de Categoria

#### Container
- **Layout**: Flexbox horizontal com scroll
- **Gap**: 12px
- **Margin bottom**: 32px
- **Overflow-x**: Auto (scroll horizontal em mobile)
- **Padding bottom**: 8px (para scrollbar)

#### Chip de Categoria

**Estado Normal:**
- **Padding**: 10px 20px
- **Background**: Surface color
- **Borda**: 1px solid border color
- **Border radius**: 20px (pill)
- **Tipografia**: 14px - font-weight: 500
- **Cor**: Foreground
- **White-space**: nowrap
- **Cursor**: pointer

**Estado Hover:**
- **Background**: Muted com opacity 10%

**Estado Ativo:**
- **Background**: Primary color
- **Borda**: Primary color
- **Cor**: Branco
- **Sombra**: sm

**Categorias:**
- Todos
- Tecnologia
- Pedagogia
- Inclusão
- Gestão
- Metodologias
- Avaliação

### 4.5 Seção "Meus Cursos"

#### Cabeçalho
- **Título**: "Meus Cursos"
- **Tipografia**: H3 (24px desktop, 20px mobile)
- **Margin bottom**: 16px

#### Grid
- **Layout**: Grid de 3 colunas (desktop)
- **Gap**: 24px
- **Margin bottom**: 48px

**Responsividade:**
- Desktop (> 1024px): 3 colunas
- Tablet (768px - 1023px): 2 colunas
- Mobile (< 768px): 1 coluna

#### Card de Curso (mesmo do dashboard)
- Estrutura idêntica aos cards de "Cursos em Andamento" do dashboard
- Inclui: Imagem, categoria, título, descrição, barra de progresso, botão

### 4.6 Seção "Cursos Disponíveis"

#### Cabeçalho
- **Título**: "Cursos Disponíveis"
- **Tipografia**: H3 (24px desktop, 20px mobile)
- **Margin bottom**: 16px

#### Grid
- **Layout**: Grid de 3 colunas (desktop)
- **Gap**: 24px

**Responsividade:**
- Desktop (> 1024px): 3 colunas
- Tablet (768px - 1023px): 2 colunas
- Mobile (< 768px): 1 coluna

#### Card de Curso Disponível

**Container:**
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 0
- **Sombra**: sm
- **Hover**: Sombra md, transform scale(1.02), transição 300ms

**Estrutura:**

1. **Imagem de Capa**
   - Altura: 180px
   - Largura: 100%
   - Object-fit: cover
   - Border radius: 12px 12px 0 0

2. **Conteúdo** (padding: 20px)
   
   a. **Header** (flexbox horizontal)
      - **Categoria Badge** (esquerda)
      - **Badge de Nível** (direita)
        - Texto: "Iniciante" / "Intermediário" / "Avançado"
        - Cores diferentes por nível
      - Margin bottom: 12px
   
   b. **Título**
      - Tipografia: 18px - font-weight: 600
      - Cor: Foreground
      - Margin bottom: 8px
      - Max 2 linhas com ellipsis
   
   c. **Descrição**
      - Tipografia: 14px
      - Cor: Muted
      - Margin bottom: 16px
      - Max 3 linhas com ellipsis
   
   d. **Metadados** (flexbox horizontal)
      - **Duração**
        - Ícone: Clock - 16px
        - Texto: "Xh Ymin" - 13px
      - **Aulas**
        - Ícone: PlayCircle - 16px
        - Texto: "X aulas" - 13px
      - Gap: 16px
      - Cor: Muted
      - Margin bottom: 16px
   
   e. **Footer** (flexbox horizontal - space-between)
      - **Avaliação** (esquerda)
        - Ícone: Star (preenchida) - 16px - warning color
        - Texto: "4.8 (234)" - 13px - muted
      - **Botão "Iniciar"** (direita)
        - Estilo: Botão primário pequeno
        - Padding: 8px 16px
        - Texto: "Iniciar"

**Cursos Exemplo:**
1. **Design Thinking na Educação**
   - Categoria: Metodologias
   - Nível: Iniciante
   - Duração: 4h 30min
   - Aulas: 12
   - Avaliação: 4.9 (189)

2. **Gamificação em Sala de Aula**
   - Categoria: Tecnologia
   - Nível: Intermediário
   - Duração: 3h 15min
   - Aulas: 10
   - Avaliação: 4.7 (156)

3. **Neurociência e Aprendizagem**
   - Categoria: Pedagogia
   - Nível: Avançado
   - Duração: 6h
   - Aulas: 18
   - Avaliação: 4.8 (234)

4. **Libras Básico**
   - Categoria: Inclusão
   - Nível: Iniciante
   - Duração: 5h
   - Aulas: 15
   - Avaliação: 4.9 (312)

5. **Tecnologias Assistivas**
   - Categoria: Tecnologia
   - Nível: Intermediário
   - Duração: 4h
   - Aulas: 11
   - Avaliação: 4.8 (198)

6. **Avaliação Formativa**
   - Categoria: Avaliação
   - Nível: Intermediário
   - Duração: 3h 30min
   - Aulas: 9
   - Avaliação: 4.6 (145)

---

## 5. TELA DE BIBLIOTECA

### 5.1 Layout Geral

**Estrutura:**
- Navegação lateral (mesma do dashboard)
- Cabeçalho com busca
- Tabs de filtro por tipo de mídia
- Grid de recursos
- Padding: 32px (mobile: 16px)

### 5.2 Cabeçalho

#### Título
- **Texto**: "Biblioteca de Recursos"
- **Tipografia**: H1 (48px desktop, 36px mobile)
- **Margin bottom**: 8px

#### Subtítulo
- **Texto**: "Acesse materiais de apoio, vídeos e recursos educacionais"
- **Tipografia**: Body Large (18px desktop, 16px mobile)
- **Cor**: Muted
- **Margin bottom**: 24px

### 5.3 Barra de Busca

#### Campo de Busca
- **Largura**: 100%
- **Altura**: 44px
- **Padding**: 12px 16px
- **Background**: Surface color
- **Borda**: 1px solid border color
- **Border radius**: 8px
- **Ícone**: Search - 20px - esquerda - muted color
- **Placeholder**: "Buscar recursos..."
- **Focus**: Borda primary, ring de 2px
- **Margin bottom**: 24px

### 5.4 Tabs de Tipo de Mídia

#### Container
- **Layout**: Flexbox horizontal
- **Gap**: 8px
- **Margin bottom**: 24px
- **Border bottom**: 1px solid border color
- **Overflow-x**: Auto (scroll em mobile)

#### Tab Item

**Estado Normal:**
- **Padding**: 12px 24px (mobile: 10px 16px)
- **Background**: Transparente
- **Tipografia**: 14px - font-weight: 500
- **Cor**: Muted
- **Border bottom**: 2px solid transparente
- **Cursor**: pointer
- **White-space**: nowrap

**Estado Hover:**
- **Cor**: Foreground

**Estado Ativo:**
- **Cor**: Primary
- **Border bottom**: 2px solid primary

**Tabs:**
- Todos
- PDFs
- Vídeos
- Áudios
- Apresentações

### 5.5 Filtros de Categoria

#### Container
- **Layout**: Flexbox horizontal com scroll
- **Gap**: 12px
- **Margin bottom**: 32px
- **Overflow-x**: Auto
- **Padding bottom**: 8px

#### Chip de Categoria
- Mesmo estilo dos chips da página de Cursos

**Categorias:**
- Todas
- Tecnologia
- Pedagogia
- Inclusão
- Metodologias
- Legislação
- Pesquisas

### 5.6 Grid de Recursos

#### Container
- **Layout**: Grid de 3 colunas (desktop)
- **Gap**: 24px

**Responsividade:**
- Desktop (> 1024px): 3 colunas
- Tablet (768px - 1023px): 2 colunas
- Mobile (< 768px): 1 coluna

#### Card de Recurso

**Container:**
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 20px
- **Sombra**: sm
- **Hover**: Sombra md, transição 300ms

**Estrutura:**

1. **Header** (flexbox horizontal - space-between)
   
   a. **Ícone de Tipo** (esquerda)
      - Tamanho: 48px x 48px
      - Background: Cor com opacity 10%
      - Ícone: 24px
      - Border radius: 8px
      - Ícones por tipo:
        - PDF: FileText (vermelho)
        - Vídeo: Video (azul)
        - Áudio: Headphones (verde)
        - Apresentação: Presentation (laranja)
   
   b. **Badge de Categoria** (direita)
      - Badge pequeno
      - Texto: Nome da categoria
   
   - Margin bottom: 16px

2. **Título**
   - Tipografia: 18px - font-weight: 600
   - Cor: Foreground
   - Margin bottom: 8px
   - Max 2 linhas com ellipsis

3. **Descrição**
   - Tipografia: 14px
   - Cor: Muted
   - Margin bottom: 16px
   - Max 3 linhas com ellipsis

4. **Metadados** (flexbox horizontal - wrap)
   - **Avaliação**
     - Ícone: Star - 14px - warning color
     - Texto: "4.8" - 13px
   - **Downloads**
     - Ícone: Download - 14px
     - Texto: "234 downloads" - 13px
   - **Tamanho/Duração**
     - Ícone: Clock ou FileSize - 14px
     - Texto: "2.5 MB" ou "15min" - 13px
   - Gap: 16px
   - Cor: Muted
   - Margin bottom: 16px

5. **Ações** (flexbox horizontal - gap: 8px)
   - **Botão Visualizar**
     - Estilo: Botão secundário
     - Ícone: Eye - 16px
     - Texto: "Visualizar"
     - Flex: 1
   - **Botão Baixar**
     - Estilo: Botão primário
     - Ícone: Download - 16px
     - Texto: "Baixar"
     - Flex: 1

**Recursos Exemplo:**

**PDFs:**
1. **Guia de Acessibilidade Digital**
   - Categoria: Inclusão
   - Descrição: "Manual completo sobre como criar conteúdos digitais acessíveis"
   - Avaliação: 4.9
   - Downloads: 456
   - Tamanho: 3.2 MB

2. **Lei Brasileira de Inclusão**
   - Categoria: Legislação
   - Descrição: "Texto completo da LBI com comentários e análises"
   - Avaliação: 4.7
   - Downloads: 312
   - Tamanho: 1.8 MB

**Vídeos:**
3. **Introdução ao Design Universal**
   - Categoria: Metodologias
   - Descrição: "Vídeo explicativo sobre os princípios do Design Universal"
   - Avaliação: 4.8
   - Downloads: 234
   - Duração: 15min

4. **Tecnologias Assistivas na Prática**
   - Categoria: Tecnologia
   - Descrição: "Demonstração de ferramentas assistivas em sala de aula"
   - Avaliação: 4.9
   - Downloads: 389
   - Duração: 22min

**Áudios:**
5. **Podcast: Educação Inclusiva**
   - Categoria: Pedagogia
   - Descrição: "Episódio sobre desafios e soluções na educação inclusiva"
   - Avaliação: 4.6
   - Downloads: 178
   - Duração: 35min

6. **Audiobook: Metodologias Ativas**
   - Categoria: Metodologias
   - Descrição: "Livro em áudio sobre técnicas de ensino inovadoras"
   - Avaliação: 4.8
   - Downloads: 267
   - Duração: 2h 15min

---

## 6. TELA DE CERTIFICAÇÃO

### 6.1 Layout Geral

**Estrutura:**
- Navegação lateral (mesma do dashboard)
- Cabeçalho com estatísticas
- Tabs (Conquistados / Em Andamento)
- Grid de certificados
- Padding: 32px (mobile: 16px)

### 6.2 Cabeçalho

#### Título
- **Texto**: "Meus Certificados"
- **Tipografia**: H1 (48px desktop, 36px mobile)
- **Margin bottom**: 8px

#### Subtítulo
- **Texto**: "Acompanhe seu progresso e conquistas"
- **Tipografia**: Body Large (18px desktop, 16px mobile)
- **Cor**: Muted
- **Margin bottom**: 32px

### 6.3 Cards de Estatísticas

#### Grid Container
- **Layout**: Grid de 3 colunas (desktop)
- **Gap**: 24px
- **Margin bottom**: 32px

**Responsividade:**
- Desktop (> 1024px): 3 colunas
- Tablet (768px - 1023px): 3 colunas
- Mobile (< 768px): 1 coluna

#### Card de Estatística

**Container:**
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 24px (mobile: 20px)
- **Sombra**: sm

**Estrutura:**

1. **Ícone**
   - Tamanho: 48px x 48px
   - Background: Cor com opacity 10%
   - Ícone: 24px
   - Border radius: 8px
   - Margin bottom: 16px

2. **Valor**
   - Tipografia: 36px (mobile: 32px) - font-weight: 700
   - Cor: Foreground
   - Margin bottom: 4px

3. **Label**
   - Tipografia: 14px - font-weight: 500
   - Cor: Muted

**Estatísticas:**
1. **Total de Certificados**
   - Ícone: Award (Success color)
   - Valor: "5"
   - Label: "Certificados conquistados"

2. **Horas de Estudo**
   - Ícone: Clock (Primary color)
   - Valor: "48h"
   - Label: "Total de horas"

3. **Taxa de Conclusão**
   - Ícone: TrendingUp (Secondary color)
   - Valor: "85%"
   - Label: "Taxa de conclusão"

### 6.4 Tabs

#### Container
- **Layout**: Flexbox horizontal
- **Gap**: 8px
- **Margin bottom**: 24px
- **Border bottom**: 1px solid border color

#### Tab Item
- Mesmo estilo das tabs da Biblioteca

**Tabs:**
- Conquistados
- Em Andamento

### 6.5 Grid de Certificados

#### Container
- **Layout**: Grid de 2 colunas (desktop)
- **Gap**: 24px

**Responsividade:**
- Desktop (> 1024px): 2 colunas
- Tablet (768px - 1023px): 1 coluna
- Mobile (< 768px): 1 coluna

#### Card de Certificado

**Container:**
- **Background**: Card background
- **Borda**: 1px solid border color
- **Border radius**: 12px
- **Padding**: 24px (mobile: 20px)
- **Sombra**: sm
- **Hover**: Sombra md, transição 300ms

**Estrutura:**

1. **Header** (flexbox horizontal - space-between)
   
   a. **Ícone de Certificado** (esquerda)
      - Tamanho: 56px x 56px
      - Background: Gradient (primary to secondary)
      - Ícone: Award - 28px - branco
      - Border radius: 12px
   
   b. **Badge de Status** (direita)
      - Badge
      - Texto: "Concluído" (success) ou "Em andamento" (warning)
   
   - Margin bottom: 16px

2. **Título do Curso**
   - Tipografia: 20px - font-weight: 600
   - Cor: Foreground
   - Margin bottom: 8px

3. **Instituição**
   - Tipografia: 14px
   - Cor: Muted
   - Texto: "EiEduca+"
   - Margin bottom: 16px

4. **Informações** (grid de 2 colunas)
   
   a. **Data de Conclusão**
      - Label: "Concluído em" - 12px - muted
      - Valor: "15/03/2024" - 14px - font-weight: 500
   
   b. **Credencial**
      - Label: "Credencial" - 12px - muted
      - Valor: "EDU-2024-001" - 14px - font-weight: 500 - monospace
   
   c. **Carga Horária**
      - Label: "Carga horária" - 12px - muted
      - Valor: "40 horas" - 14px - font-weight: 500
   
   d. **Validade**
      - Label: "Validade" - 12px - muted
      - Valor: "Indeterminada" - 14px - font-weight: 500
   
   - Gap: 16px
   - Margin bottom: 16px

5. **Habilidades** (opcional)
   - Label: "Habilidades adquiridas" - 12px - muted - margin bottom: 8px
   - Lista de badges pequenos
   - Badges: Texto - 11px - background muted com opacity 10%
   - Gap: 8px
   - Margin bottom: 16px

6. **Ações** (flexbox horizontal - gap: 8px)
   - **Botão Baixar PDF**
     - Estilo: Botão secundário
     - Ícone: Download - 16px
     - Texto: "Baixar PDF"
     - Flex: 1
   - **Botão Compartilhar**
     - Estilo: Botão primário
     - Ícone: Share2 - 16px
     - Texto: "Compartilhar"
     - Flex: 1

**Certificados Exemplo:**

**Conquistados:**
1. **Introdução à IA na Educação**
   - Data: 15/03/2024
   - Credencial: EDU-2024-001
   - Carga: 40 horas
   - Habilidades: IA, Machine Learning, Educação Digital

2. **Metodologias Ativas**
   - Data: 10/02/2024
   - Credencial: EDU-2024-002
   - Carga: 30 horas
   - Habilidades: Design Thinking, Gamificação, Aprendizagem Ativa

3. **Acessibilidade Digital**
   - Data: 05/01/2024
   - Credencial: EDU-2024-003
   - Carga: 35 horas
   - Habilidades: WCAG, Tecnologia Assistiva, Design Universal

**Em Andamento:**
4. **Gestão de Sala de Aula**
   - Progresso: 60%
   - Barra de progresso (mesma do dashboard)
   - Carga: 25 horas
   - Previsão: 30/04/2024

5. **Avaliação Formativa**
   - Progresso: 35%
   - Barra de progresso
   - Carga: 20 horas
   - Previsão: 15/05/2024

### 6.6 Banner Motivacional

#### Container
- **Background**: Gradient (primary to secondary)
- **Border radius**: 12px
- **Padding**: 32px (mobile: 24px)
- **Margin top**: 32px
- **Text align**: Center

#### Conteúdo

1. **Ícone**
   - Tamanho: 64px x 64px
   - Ícone: Trophy - 32px - branco
   - Background: Branco com opacity 20%
   - Border radius: 50%
   - Margin bottom: 16px
   - Centralizado

2. **Título**
   - Texto: "Continue sua jornada de aprendizado!"
   - Tipografia: 24px (mobile: 20px) - font-weight: 600
   - Cor: Branco
   - Margin bottom: 8px

3. **Descrição**
   - Texto: "Você está no caminho certo. Continue se dedicando e conquiste mais certificados!"
   - Tipografia: 16px (mobile: 14px)
   - Cor: Branco com opacity 90%
   - Margin bottom: 24px

4. **Botão**
   - Texto: "Explorar Cursos"
   - Estilo: Botão branco com texto primary
   - Padding: 12px 32px
   - Centralizado

---

## 7. FLUXO DE NAVEGAÇÃO

### 7.1 Mapa de Navegação

\`\`\`
Login (/)
  ↓
Dashboard (/dashboard)
  ├→ Cursos (/cursos)
  │   ├→ Detalhes do Curso (/cursos/[id])
  │   └→ Aula do Curso (/cursos/[id]/aula/[aulaId])
  ├→ Biblioteca (/biblioteca)
  │   ├→ Visualizar Recurso (/biblioteca/[id])
  │   └→ Baixar Recurso (download)
  └→ Certificação (/certificacao)
      ├→ Detalhes do Certificado (/certificacao/[id])
      └→ Compartilhar Certificado (modal)
\`\`\`

### 7.2 Interações Principais

#### Login → Dashboard
- Usuário insere email e senha
- Clica em "Entrar"
- Sistema valida credenciais
- Redireciona para Dashboard

#### Dashboard → Cursos
- Usuário clica em "Cursos" na navegação lateral
- Ou clica em "Continuar" em um card de curso
- Redireciona para página de Cursos

#### Cursos → Detalhes
- Usuário clica em um card de curso
- Abre página de detalhes do curso
- Mostra: descrição completa, módulos, aulas, avaliações

#### Biblioteca → Visualizar/Baixar
- Usuário clica em "Visualizar" em um recurso
- Abre modal ou nova aba com preview
- Usuário clica em "Baixar"
- Inicia download do arquivo

#### Certificação → Compartilhar
- Usuário clica em "Compartilhar" em um certificado
- Abre modal com opções de compartilhamento
- Opções: LinkedIn, Twitter, Email, Copiar link

---

## 8. ESTADOS E INTERAÇÕES

### 8.1 Estados de Botões

#### Normal
- Background e cor conforme tipo (primário/secundário)
- Cursor: pointer

#### Hover
- Background escurece ou clareia
- Transição: 200ms ease

#### Active (clicado)
- Background mais escuro
- Transform: scale(0.98)

#### Focus (teclado)
- Outline: 2px solid primary
- Outline offset: 2px

#### Disabled
- Opacity: 50%
- Cursor: not-allowed
- Sem hover ou active

#### Loading
- Ícone de spinner animado
- Texto: "Carregando..."
- Disabled

### 8.2 Estados de Inputs

#### Normal
- Borda: border color
- Background: surface color

#### Hover
- Borda: cor mais escura

#### Focus
- Borda: primary color
- Ring: 2px primary com opacity 20%
- Outline: none

#### Error
- Borda: error color
- Texto de erro abaixo: 12px - error color
- Ícone de erro (direita)

#### Success
- Borda: success color
- Ícone de check (direita)

#### Disabled
- Opacity: 60%
- Cursor: not-allowed
- Background: mais escuro

### 8.3 Estados de Cards

#### Normal
- Sombra: sm
- Transform: none

#### Hover
- Sombra: md
- Transform: translateY(-2px)
- Transição: 300ms ease

#### Active (clicado)
- Transform: scale(0.98)

#### Loading
- Skeleton loader
- Animação de pulse

### 8.4 Animações

#### Transições Padrão
- Duração: 200-300ms
- Easing: ease ou ease-in-out

#### Fade In
- Opacity: 0 → 1
- Duração: 300ms

#### Slide In
- Transform: translateX(-20px) → translateX(0)
- Opacity: 0 → 1
- Duração: 300ms

#### Scale
- Transform: scale(0.95) → scale(1)
- Duração: 200ms

#### Skeleton Loading
- Background: linear-gradient animado
- Duração: 1500ms
- Loop infinito

---

## 9. RESPONSIVIDADE

### 9.1 Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px
- **Large Desktop**: ≥ 1440px

### 9.2 Ajustes por Dispositivo

#### Mobile (< 768px)

**Layout:**
- Navegação lateral vira menu hamburguer
- Grid de 1 coluna para todos os cards
- Padding reduzido: 16px
- Espaçamentos menores

**Tipografia:**
- H1: 36px
- H2: 28px
- H3: 20px
- Body: 14px

**Componentes:**
- Botões: altura 44px (área de toque maior)
- Inputs: altura 44px
- Cards: padding 16px
- Filtros: scroll horizontal

**Navegação:**
- Menu hamburguer (topo esquerdo)
- Overlay escuro ao abrir menu
- Menu slide in from left
- Botão fechar (topo direito do menu)

#### Tablet (768px - 1023px)

**Layout:**
- Navegação lateral visível
- Grid de 2 colunas para cards
- Padding: 24px

**Tipografia:**
- Intermediária entre mobile e desktop

**Componentes:**
- Tamanhos intermediários

#### Desktop (≥ 1024px)

**Layout:**
- Navegação lateral fixa (280px)
- Grid de 3-4 colunas
- Padding: 32px

**Tipografia:**
- Tamanhos completos

**Componentes:**
- Tamanhos completos
- Hover effects ativos

---

## 10. ACESSIBILIDADE

### 10.1 Contraste de Cores

**WCAG AA (mínimo 4.5:1 para texto normal):**
- Foreground sobre Background: ✓
- Primary sobre Branco: ✓
- Muted sobre Background: ✓

**WCAG AAA (mínimo 7:1 para texto normal):**
- Foreground sobre Background: ✓
- Primary sobre Branco: ✓

### 10.2 Navegação por Teclado

**Tab Order:**
- Ordem lógica de navegação
- Skip links para conteúdo principal
- Focus visível (outline de 2px)

**Atalhos:**
- Tab: Próximo elemento
- Shift + Tab: Elemento anterior
- Enter/Space: Ativar botão/link
- Esc: Fechar modal/menu
- Arrow keys: Navegar em tabs/menus

### 10.3 Screen Readers

**Elementos Semânticos:**
- `<nav>` para navegação
- `<main>` para conteúdo principal
- `<article>` para cards de conteúdo
- `<button>` para ações
- `<a>` para links

**ARIA Labels:**
- `aria-label` para ícones sem texto
- `aria-labelledby` para títulos de seções
- `aria-describedby` para descrições
- `aria-current="page"` para página ativa
- `aria-expanded` para menus expansíveis
- `aria-hidden="true"` para ícones decorativos

**Alt Text:**
- Todas as imagens têm alt text descritivo
- Imagens decorativas: alt=""

### 10.4 Tamanhos Mínimos

**Área de Toque (Mobile):**
- Mínimo: 44px x 44px
- Recomendado: 48px x 48px

**Texto:**
- Mínimo: 14px (mobile)
- Recomendado: 16px

**Espaçamento:**
- Mínimo entre elementos clicáveis: 8px

### 10.5 Indicadores Visuais

**Focus:**
- Outline visível de 2px
- Cor: primary
- Offset: 2px

**Estados:**
- Hover: mudança visual clara
- Active: feedback imediato
- Disabled: opacity 50%

**Feedback:**
- Loading: spinner animado
- Success: mensagem verde
- Error: mensagem vermelha
- Info: mensagem azul

---

## 11. ÍCONES

### 11.1 Biblioteca de Ícones

**Fonte:** Lucide React (https://lucide.dev)

### 11.2 Ícones Utilizados

**Navegação:**
- LayoutDashboard (Dashboard)
- BookOpen (Cursos)
- Library (Biblioteca)
- Award (Certificação)
- LogOut (Sair)
- Menu (Menu hamburguer)
- X (Fechar)

**Ações:**
- Search (Buscar)
- Filter (Filtrar)
- Download (Baixar)
- Share2 (Compartilhar)
- Eye (Visualizar)
- Play (Reproduzir)
- PlayCircle (Aulas)

**Estatísticas:**
- Clock (Tempo)
- TrendingUp (Crescimento)
- Users (Usuários)
- CheckCircle (Concluído)

**Tipos de Arquivo:**
- FileText (PDF)
- Video (Vídeo)
- Headphones (Áudio)
- Presentation (Apresentação)

**Outros:**
- Star (Avaliação)
- Trophy (Conquista)
- GraduationCap (Educação)
- Heart (Favorito)
- Bell (Notificação)

### 11.3 Tamanhos de Ícones

- **Pequeno**: 16px
- **Médio**: 20px
- **Grande**: 24px
- **Extra Grande**: 32px

---

## 12. IMAGENS E ILUSTRAÇÕES

### 12.1 Imagens de Capa de Cursos

**Dimensões:**
- Largura: 400px
- Altura: 180px
- Aspect ratio: 16:9

**Estilo:**
- Fotos de alta qualidade
- Relacionadas ao tema do curso
- Filtro sutil (opcional)
- Overlay escuro para legibilidade de texto (opcional)

**Temas:**
- Tecnologia: computadores, códigos, IA
- Pedagogia: sala de aula, professores, alunos
- Inclusão: diversidade, acessibilidade, tecnologia assistiva
- Metodologias: colaboração, criatividade, inovação

### 12.2 Ilustrações

**Estilo:**
- Flat design ou line art
- Cores da paleta do sistema
- Simples e claras
- Inclusivas (representação diversa)

**Uso:**
- Página de login (coluna direita)
- Estados vazios (sem cursos, sem certificados)
- Banners motivacionais
- Onboarding

### 12.3 Avatares

**Dimensões:**
- Pequeno: 32px x 32px
- Médio: 40px x 40px
- Grande: 64px x 64px

**Estilo:**
- Círculo completo
- Iniciais do nome (fallback)
- Background: gradient ou cor sólida
- Borda: opcional (2px)

---

## 13. COMPONENTES ESPECIAIS

### 13.1 Modal

**Overlay:**
- Background: preto com opacity 50%
- Z-index: 40
- Click para fechar

**Container:**
- Background: card background
- Border radius: 12px
- Padding: 24px
- Max width: 500px (pequeno) / 800px (grande)
- Sombra: xl
- Centralizado na tela
- Z-index: 50

**Header:**
- Título: H3
- Botão fechar (X) - topo direito
- Margin bottom: 16px

**Body:**
- Conteúdo flexível
- Margin bottom: 24px

**Footer:**
- Botões de ação
- Alinhamento: direita
- Gap: 8px

### 13.2 Toast/Notification

**Container:**
- Background: card background
- Borda: 1px solid border color
- Border radius: 8px
- Padding: 16px
- Sombra: lg
- Max width: 400px
- Posição: topo direito (fixed)
- Z-index: 60

**Estrutura:**
- Ícone (esquerda) - 20px
- Conteúdo (centro)
  - Título: 14px - font-weight: 500
  - Descrição: 13px - muted
- Botão fechar (direita) - 16px

**Variantes:**
- Success: ícone CheckCircle - verde
- Error: ícone XCircle - vermelho
- Warning: ícone AlertTriangle - laranja
- Info: ícone Info - azul

**Animação:**
- Slide in from right
- Auto-dismiss após 5 segundos
- Fade out ao fechar

### 13.3 Dropdown Menu

**Trigger:**
- Botão ou elemento clicável
- Ícone: ChevronDown (opcional)

**Menu:**
- Background: card background
- Borda: 1px solid border color
- Border radius: 8px
- Padding: 8px
- Sombra: lg
- Min width: 200px
- Z-index: 30

**Item:**
- Padding: 10px 12px
- Border radius: 4px
- Tipografia: 14px
- Hover: background muted com opacity 10%
- Gap entre ícone e texto: 8px

**Divider:**
- Altura: 1px
- Background: border color
- Margin: 8px 0

### 13.4 Tooltip

**Container:**
- Background: foreground color
- Cor: background color (invertido)
- Padding: 6px 12px
- Border radius: 6px
- Tipografia: 12px
- Max width: 200px
- Z-index: 70

**Arrow:**
- Pequena seta apontando para o elemento
- Mesma cor do container

**Posição:**
- Top, bottom, left, right (automático)
- Offset: 8px do elemento

**Animação:**
- Fade in após 500ms de hover
- Fade out imediato ao sair

### 13.5 Skeleton Loader

**Estrutura:**
- Mesma estrutura do componente final
- Background: muted com opacity 20%
- Border radius: mesmos do componente

**Animação:**
- Gradient animado da esquerda para direita
- Cores: transparente → branco com opacity 40% → transparente
- Duração: 1500ms
- Loop infinito

**Uso:**
- Cards de curso
- Lista de atividades
- Grid de recursos
- Qualquer conteúdo carregando

---

## 14. MICRO-INTERAÇÕES

### 14.1 Hover Effects

**Cards:**
- Sombra aumenta
- Leve elevação (translateY(-2px))
- Transição suave (300ms)

**Botões:**
- Background escurece/clareia
- Cursor: pointer
- Transição rápida (200ms)

**Links:**
- Sublinhado aparece
- Cor muda para primary hover
- Transição: 150ms

**Ícones:**
- Leve rotação ou scale
- Mudança de cor
- Transição: 200ms

### 14.2 Click/Active Effects

**Botões:**
- Scale down (0.98)
- Background mais escuro
- Duração: 100ms

**Cards:**
- Scale down (0.98)
- Sombra reduz
- Duração: 100ms

### 14.3 Loading States

**Botões:**
- Spinner animado
- Texto: "Carregando..."
- Disabled

**Cards:**
- Skeleton loader
- Pulse animation

**Página:**
- Loading spinner centralizado
- Ou skeleton de toda a página

### 14.4 Success/Error Feedback

**Success:**
- Toast verde
- Ícone de check
- Animação de entrada

**Error:**
- Toast vermelho
- Ícone de X
- Shake animation (opcional)

**Form Validation:**
- Borda vermelha em campos com erro
- Mensagem de erro abaixo
- Ícone de erro no campo

---

## 15. DADOS DE EXEMPLO

### 15.1 Usuário Principal

**Nome:** Ana Clara Souza  
**Email:** ana.clara@email.com  
**Idade:** 16 anos  
**Tipo:** Estudante  
**Escola:** Colégio Estadual Horizonte  
**Ano:** 2º ano do Ensino Médio  
**Necessidades:** Usa leitor de tela e aumento de contraste

### 15.2 Cursos

1. **Introdução à IA na Educação**
   - Categoria: Tecnologia
   - Nível: Iniciante
   - Duração: 4h 30min
   - Aulas: 12
   - Progresso: 65%
   - Avaliação: 4.9 (189)
   - Status: Em andamento

2. **Metodologias Ativas**
   - Categoria: Pedagogia
   - Nível: Intermediário
   - Duração: 3h 15min
   - Aulas: 10
   - Progresso: 40%
   - Avaliação: 4.7 (156)
   - Status: Em andamento

3. **Acessibilidade Digital**
   - Categoria: Inclusão
   - Nível: Avançado
   - Duração: 6h
   - Aulas: 18
   - Progresso: 80%
   - Avaliação: 4.8 (234)
   - Status: Em andamento

4. **Design Thinking na Educação**
   - Categoria: Metodologias
   - Nível: Iniciante
   - Duração: 4h 30min
   - Aulas: 12
   - Avaliação: 4.9 (189)
   - Status: Disponível

5. **Gamificação em Sala de Aula**
   - Categoria: Tecnologia
   - Nível: Intermediário
   - Duração: 3h 15min
   - Aulas: 10
   - Avaliação: 4.7 (156)
   - Status: Disponível

6. **Neurociência e Aprendizagem**
   - Categoria: Pedagogia
   - Nível: Avançado
   - Duração: 6h
   - Aulas: 18
   - Avaliação: 4.8 (234)
   - Status: Disponível

### 15.3 Certificados

1. **Introdução à IA na Educação**
   - Data: 15/03/2024
   - Credencial: EDU-2024-001
   - Carga: 40 horas
   - Habilidades: IA, Machine Learning, Educação Digital
   - Status: Concluído

2. **Metodologias Ativas**
   - Data: 10/02/2024
   - Credencial: EDU-2024-002
   - Carga: 30 horas
   - Habilidades: Design Thinking, Gamificação, Aprendizagem Ativa
   - Status: Concluído

3. **Acessibilidade Digital**
   - Data: 05/01/2024
   - Credencial: EDU-2024-003
   - Carga: 35 horas
   - Habilidades: WCAG, Tecnologia Assistiva, Design Universal
   - Status: Concluído

### 15.4 Recursos da Biblioteca

1. **Guia de Acessibilidade Digital (PDF)**
   - Categoria: Inclusão
   - Tamanho: 3.2 MB
   - Downloads: 456
   - Avaliação: 4.9

2. **Lei Brasileira de Inclusão (PDF)**
   - Categoria: Legislação
   - Tamanho: 1.8 MB
   - Downloads: 312
   - Avaliação: 4.7

3. **Introdução ao Design Universal (Vídeo)**
   - Categoria: Metodologias
   - Duração: 15min
   - Downloads: 234
   - Avaliação: 4.8

4. **Podcast: Educação Inclusiva (Áudio)**
   - Categoria: Pedagogia
   - Duração: 35min
   - Downloads: 178
   - Avaliação: 4.6

---

## 16. EXPORTAÇÃO PARA FIGMA

### 16.1 Estrutura de Arquivos

**Páginas:**
1. 🎨 Design System
2. 📱 Mobile Screens
3. 💻 Desktop Screens
4. 🔄 User Flows
5. 📦 Components

### 16.2 Organização de Layers

**Nomenclatura:**
- Páginas: Emoji + Nome
- Frames: [Dispositivo] Nome da Tela
- Grupos: 📁 Nome do Grupo
- Componentes: 🧩 Nome do Componente

**Exemplo:**
\`\`\`
📱 Mobile Screens
  ├─ [Mobile] Login
  │   ├─ 📁 Header
  │   ├─ 📁 Form
  │   └─ 📁 Footer
  ├─ [Mobile] Dashboard
  └─ [Mobile] Cursos
\`\`\`

### 16.3 Componentes Reutilizáveis

**Criar como Components:**
- Botões (primário, secundário, etc.)
- Inputs (text, password, search)
- Cards (curso, recurso, certificado)
- Badges
- Avatares
- Ícones
- Navigation items
- Progress bars

**Variants:**
- Estados: default, hover, active, disabled
- Tamanhos: small, medium, large
- Tipos: primary, secondary, success, error

### 16.4 Auto Layout

**Usar Auto Layout para:**
- Botões (padding horizontal/vertical)
- Cards (padding interno)
- Listas (gap entre itens)
- Grids (gap entre colunas)
- Navigation (gap entre links)

**Configurações:**
- Direction: Horizontal ou Vertical
- Gap: Conforme design system
- Padding: Conforme design system
- Resizing: Hug ou Fill

### 16.5 Constraints

**Configurar Constraints para:**
- Navegação lateral: Left + Top + Bottom
- Conteúdo principal: Left + Right + Top + Bottom
- Botões fixos: Bottom + Right
- Headers: Left + Right + Top

### 16.6 Plugins Recomendados

1. **Iconify** - Para importar ícones do Lucide
2. **Unsplash** - Para imagens de placeholder
3. **Content Reel** - Para gerar conteúdo de exemplo
4. **Stark** - Para verificar contraste e acessibilidade
5. **Autoflow** - Para criar user flows
6. **Lorem Ipsum** - Para texto placeholder

### 16.7 Prototyping

**Interações:**
- Click: Navegar entre telas
- Hover: Mostrar estados hover
- Scroll: Scroll vertical/horizontal
- Overlay: Modais e menus

**Animações:**
- Transição: Dissolve (300ms)
- Easing: Ease Out
- Smart Animate: Para micro-interações

**Flows:**
1. Login → Dashboard
2. Dashboard → Cursos → Detalhes
3. Dashboard → Biblioteca → Visualizar
4. Dashboard → Certificação → Compartilhar

---

## 17. CHECKLIST DE IMPLEMENTAÇÃO

### 17.1 Design System
- [ ] Criar paleta de cores (light + dark)
- [ ] Definir tipografia (tamanhos, pesos)
- [ ] Criar componentes base (botões, inputs, cards)
- [ ] Definir espaçamentos e grid
- [ ] Criar biblioteca de ícones
- [ ] Definir sombras e border radius

### 17.2 Telas
- [ ] Login (desktop + mobile)
- [ ] Dashboard (desktop + mobile)
- [ ] Cursos (desktop + mobile)
- [ ] Biblioteca (desktop + mobile)
- [ ] Certificação (desktop + mobile)

### 17.3 Componentes
- [ ] Navegação lateral
- [ ] Menu hamburguer (mobile)
- [ ] Cards de curso
- [ ] Cards de recurso
- [ ] Cards de certificado
- [ ] Barra de progresso
- [ ] Badges
- [ ] Modais
- [ ] Toasts

### 17.4 Estados
- [ ] Hover states
- [ ] Active states
- [ ] Focus states
- [ ] Disabled states
- [ ] Loading states
- [ ] Error states

### 17.5 Responsividade
- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (≥ 1024px)
- [ ] Testar em diferentes tamanhos

### 17.6 Acessibilidade
- [ ] Contraste de cores (WCAG AA)
- [ ] Tamanhos de fonte adequados
- [ ] Áreas de toque (44px mínimo)
- [ ] Focus visível
- [ ] Alt text em imagens
- [ ] Estrutura semântica

### 17.7 Prototyping
- [ ] Criar flows principais
- [ ] Adicionar interações
- [ ] Testar navegação
- [ ] Adicionar animações
- [ ] Testar em dispositivos

---

## 18. RECURSOS ADICIONAIS

### 18.1 Fontes

**Google Fonts:**
- Geist Sans: https://vercel.com/font
- Inter: https://fonts.google.com/specimen/Inter
- Fira Code: https://fonts.google.com/specimen/Fira+Code

### 18.2 Ícones

**Lucide Icons:**
- Website: https://lucide.dev
- Figma Plugin: Iconify

### 18.3 Imagens

**Unsplash (fotos gratuitas):**
- Educação: https://unsplash.com/s/photos/education
- Tecnologia: https://unsplash.com/s/photos/technology
- Inclusão: https://unsplash.com/s/photos/diversity

**Pexels (fotos gratuitas):**
- https://www.pexels.com

### 18.4 Ilustrações

**unDraw (ilustrações gratuitas):**
- https://undraw.co

**Storyset (ilustrações animadas):**
- https://storyset.com

### 18.5 Ferramentas de Acessibilidade

**Contrast Checker:**
- https://webaim.org/resources/contrastchecker/

**Color Blind Simulator:**
- https://www.color-blindness.com/coblis-color-blindness-simulator/

---

## 19. NOTAS FINAIS

### 19.1 Princípios de Design

1. **Inclusão em Primeiro Lugar**
   - Design acessível por padrão
   - Alto contraste
   - Navegação clara
   - Suporte a tecnologias assistivas

2. **Simplicidade**
   - Interface limpa
   - Hierarquia visual clara
   - Sem elementos desnecessários

3. **Consistência**
   - Padrões visuais repetidos
   - Comportamentos previsíveis
   - Linguagem uniforme

4. **Feedback**
   - Estados visuais claros
   - Confirmações de ações
   - Mensagens de erro úteis

5. **Performance**
   - Carregamento rápido
   - Animações suaves
   - Otimização de imagens

### 19.2 Boas Práticas

1. **Mobile First**
   - Começar pelo mobile
   - Expandir para desktop
   - Testar em dispositivos reais

2. **Acessibilidade**
   - Seguir WCAG 2.1 AA
   - Testar com leitores de tela
   - Navegação por teclado

3. **Usabilidade**
   - Testes com usuários reais
   - Iterar baseado em feedback
   - Medir métricas de uso

4. **Manutenibilidade**
   - Componentes reutilizáveis
   - Documentação clara
   - Sistema de design escalável

---

**Fim do Guia de Design EiEduca+**

Este guia fornece todas as especificações necessárias para implementar o design no Figma. Para dúvidas ou esclarecimentos, consulte as seções específicas ou entre em contato com a equipe de design.

**Versão:** 1.0  
**Data:** Abril 2024  
**Equipe:** Ana Beatriz Alves, Mateus Lima, Samuel Barbosa
