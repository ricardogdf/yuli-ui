# Yuli UI

Yuli UI é uma biblioteca de componentes React moderna e acessível, construída com TypeScript, Vite e Storybook.

## 🚀 Começando

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

### Publicar no NPM 
```bash
npm publish --access public
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

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Testing Library](https://testing-library.com/)
