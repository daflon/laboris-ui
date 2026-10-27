# @laboris/ui

Componentes compartilhados da Suite Laboris.

## Instalação

```bash
# Via npm (quando publicado)
npm install @laboris/ui

# Via GitHub
npm install github:daflon/laboris-ui
```

## Uso

```tsx
import { Button, Card, Input, Badge } from '@laboris/ui';
import '@laboris/ui/styles';  // Importar estilos

function App() {
  return (
    <Card padding="md">
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="primary">Salvar</Button>
      <Badge variant="success">Ativo</Badge>
    </Card>
  );
}
```

## Componentes

| Componente | Descrição |
|------------|-----------|
| `Button` | Botão com variantes (primary, secondary, ghost, danger) |
| `Card` | Container com header, body e footer |
| `Input` | Campo de texto com label e validação |
| `Select` | Dropdown select |
| `Badge` | Status pills (success, warning, danger, info) |
| `PageHeader` | Cabeçalho de página com título e ações |
| `SearchInput` | Campo de busca com ícone |
| `EmptyState` | Estado vazio com ícone e ação |

## Design Tokens

Os tokens de design estão disponíveis como CSS Variables:

```css
--laboris-primary: #0ea5e9;
--laboris-bg: #0f172a;
--laboris-text: #f1f5f9;
/* ... e muitos outros */
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Build
npm run build

# Watch mode
npm run dev
```

## Licença

MIT
