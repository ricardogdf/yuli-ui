# Yuli UI

Yuli UI é uma biblioteca de componentes React moderna e acessível, construída com TypeScript, Vite e Storybook.

## 🚀 Começando

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 9 ou superior)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/yuli-ui.git
cd yuli-ui
```

2. Instale as dependências:
```bash
npm install
```

## 🛠️ Desenvolvimento

### Rodando o Storybook

Para visualizar e desenvolver os componentes:
```bash
npm run storybook
```
O Storybook estará disponível em [http://localhost:6006](http://localhost:6006)

### Rodando os Testes

Para executar os testes:
```bash
npm test
```

Para executar os testes em modo watch:
```bash
npm run test:watch
```

Para verificar a cobertura de testes:
```bash
npm run test:coverage
```

### Build

Para construir a biblioteca:
```bash
npm run build
```

## 📦 Estrutura do Projeto

```
src/
├── components/         # Componentes React
│   └── Button/        # Exemplo de componente
│       ├── Button.tsx # Implementação
│       ├── Button.css # Estilos
│       ├── Button.test.tsx # Testes
│       └── stories/   # Documentação e exemplos
├── assets/            # Recursos estáticos
└── index.ts          # Ponto de entrada
```

## 🎨 Design System

### Princípios

- **Acessibilidade**: Todos os componentes seguem as diretrizes WCAG 2.1
- **Consistência**: Design consistente em todos os componentes
- **Customização**: Fácil personalização através de props e CSS
- **Performance**: Componentes otimizados para performance

### Componentes Disponíveis

- Button
  - Variantes: primary, secondary, outline
  - Tamanhos: small, medium, large
  - Estados: disabled, loading

## 📚 Documentação

A documentação completa está disponível no Storybook, incluindo:
- Exemplos de uso
- Props e tipos
- Acessibilidade
- Boas práticas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Testing Library](https://testing-library.com/)
