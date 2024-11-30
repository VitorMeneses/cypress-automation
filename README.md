# Automação de Testes - QA Store Cupons

## Sobre o Projeto
Este projeto consiste em uma suite de testes automatizados utilizando Cypress para validar o funcionamento de cupons de desconto em uma loja virtual (QA Store). O foco principal é garantir que diferentes tipos de cupons funcionem corretamente, incluindo descontos percentuais, valores fixos e frete grátis.

## Cenários de Teste
Os cenários foram escolhidos para cobrir as principais funcionalidades de cupons:

1. **Frete Grátis**
   - Valida a aplicação correta do cupom de frete grátis
   - Verifica se a mensagem de confirmação é exibida
   - Garante que o valor do frete seja zerado

2. **Desconto Percentual (10%)**
   - Verifica a aplicação de 10% de desconto no valor total
   - Valida se o desconto é calculado corretamente
   - Confirma a exibição do valor monetário do desconto

3. **Desconto Fixo (R$ 30,00)**
   - Testa a aplicação de desconto com valor fixo
   - Verifica se o valor exato é descontado do total
   - Valida a exibição correta do valor do desconto

4. **Cupom Vencido**
   - Verifica o comportamento do sistema com cupons inválidos
   - Valida a exibição de mensagens de erro apropriadas
   - Garante que o desconto não seja aplicado

## Estrutura do Projeto
```
automation-cypress/
├── cypress/
│   ├── e2e/
│   │   └── cupons.cy.js
│   ├── fixtures/
│   │   └── cupons.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## Tecnologias Utilizadas
- Cypress 12.7.0
- Node.js
- JavaScript
- Allure Report para relatórios

## Pré-requisitos
- Node.js instalado
- NPM ou Yarn instalado

## Instalação
1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

## Executando os Testes

### Todos os Testes
```bash
npm test
```

### Testes Específicos
- Apenas testes de frete grátis:
```bash
npm run test:frete
```

- Testes de descontos (percentual e fixo):
```bash
npm run test:descontos
```

- Testes de cupons válidos:
```bash
npm run test:validos
```

- Testes de cupons inválidos:
```bash
npm run test:invalidos
```

## Boas Práticas Implementadas

### 1. Organização de Código
- **Modularização**: Testes organizados em contextos lógicos
- **Fixtures**: Dados de teste centralizados em arquivos JSON
- **Page Objects**: Comandos personalizados para ações comuns
- **Seletores Otimizados**: Uso de seletores CSS confiáveis e específicos

### 2. Manutenibilidade
- **Dados Externalizados**: Todos os dados de teste em arquivos de fixture
- **Comandos Reutilizáveis**: Funções comuns abstraídas em comandos
- **Documentação Clara**: Descrições detalhadas dos cenários de teste
- **Código Limpo**: Seguindo padrões de código e boas práticas

### 3. Confiabilidade
- **Limpeza de Estado**: Reset do estado entre testes
- **Verificações Explícitas**: Assertions claras e específicas
- **Tratamento de Timeouts**: Configurações adequadas de espera
- **Isolamento de Testes**: Cada teste é independente

## Por que Essas Escolhas?

### 1. Cypress como Framework
- **Performance**: Execução rápida e confiável
- **Documentação**: Excelente documentação e comunidade ativa
- **Debug**: Ferramentas poderosas de debugging
- **Screenshots e Vídeos**: Geração automática de evidências

### 2. Estrutura de Dados
- **JSON para Dados**: Facilita manutenção e alterações
- **Comandos Personalizados**: Reduz duplicação de código
- **Fixtures Centralizadas**: Facilita atualizações de dados de teste

### 3. Estratégia de Testes
- **Cobertura Completa**: Testes para todos os tipos de cupons
- **Cenários Negativos**: Validação de casos de erro
- **Dados Realistas**: Uso de valores e cenários do mundo real

## Próximos Passos
- [ ] Implementar testes para combinação de cupons
- [ ] Adicionar testes de API
- [ ] Integrar com CI/CD
- [ ] Expandir cobertura de testes
- [ ] Adicionar mais relatórios detalhados