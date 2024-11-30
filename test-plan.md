# Plano de Testes - QA Store Cupons

## 1. Introdução

### 1.1 Objetivo
Este plano de testes tem como objetivo documentar a estratégia de testes para validação do sistema de cupons da QA Store, garantindo seu correto funcionamento em diferentes cenários.

### 1.2 Escopo
- Validação de cupons de frete grátis
- Validação de cupons de desconto percentual
- Validação de cupons de desconto com valor fixo
- Validação de cupons vencidos/inválidos

### 1.3 Ambiente de Testes
- **URL**: https://qastoredesafio.lojaintegrada.com.br
- **Navegador**: Chrome
- **Framework**: Cypress 12.7.0

## 2. Estratégia de Testes

### 2.1 Tipos de Teste
- Testes funcionais
- Testes de interface
- Testes de validação
- Testes negativos

### 2.2 Níveis de Teste
- Testes de integração
- Testes end-to-end (E2E)

## 3. Casos de Teste

### 3.1 Cupom de Frete Grátis

#### TC001 - Aplicar Cupom de Frete Grátis
**Objetivo**: Validar a aplicação correta do cupom de frete grátis
**Pré-condições**: 
- Produto adicionado ao carrinho
- Cupom "FRETEGRATIS" disponível

**Passos**:
1. Adicionar produto ao carrinho
2. Inserir cupom "FRETEGRATIS"
3. Validar aplicação do cupom

**Resultados Esperados**:
- Cupom aplicado com sucesso
- Mensagem de confirmação exibida
- Valor do frete zerado

### 3.2 Cupom de Desconto Percentual

#### TC002 - Aplicar Cupom de 10% de Desconto
**Objetivo**: Validar a aplicação correta do desconto percentual
**Pré-condições**: 
- Produto adicionado ao carrinho
- Cupom "10OFF" disponível

**Passos**:
1. Adicionar produto ao carrinho
2. Inserir cupom "10OFF"
3. Validar aplicação do desconto

**Resultados Esperados**:
- Cupom aplicado com sucesso
- Desconto de 10% calculado corretamente
- Valor do desconto exibido na tela

### 3.3 Cupom de Desconto Fixo

#### TC003 - Aplicar Cupom de R$ 30,00 de Desconto
**Objetivo**: Validar a aplicação correta do desconto fixo
**Pré-condições**: 
- Produto adicionado ao carrinho
- Cupom "30REAIS" disponível

**Passos**:
1. Adicionar produto ao carrinho
2. Inserir cupom "30REAIS"
3. Validar aplicação do desconto

**Resultados Esperados**:
- Cupom aplicado com sucesso
- Desconto de R$ 30,00 aplicado
- Valor do desconto exibido corretamente

### 3.4 Cupom Vencido

#### TC004 - Tentativa de Uso de Cupom Vencido
**Objetivo**: Validar o comportamento do sistema com cupom vencido
**Pré-condições**: 
- Produto adicionado ao carrinho
- Cupom vencido disponível

**Passos**:
1. Adicionar produto ao carrinho
2. Inserir cupom vencido
3. Validar mensagem de erro

**Resultados Esperados**:
- Mensagem de erro apropriada
- Cupom não aplicado
- Valores do carrinho inalterados

## 4. Critérios de Aceitação

### 4.1 Critérios Gerais
- Todos os testes devem passar com sucesso
- Nenhum erro crítico encontrado
- Cobertura de código adequada
- Tempo de resposta aceitável

### 4.2 Critérios Específicos
1. **Cupom de Frete Grátis**
   - Frete deve ser zerado após aplicação
   - Mensagem correta deve ser exibida

2. **Cupom de Desconto Percentual**
   - Cálculo preciso do desconto de 10%
   - Valor monetário correto exibido

3. **Cupom de Desconto Fixo**
   - Desconto exato de R$ 30,00 aplicado
   - Valor final corretamente calculado

4. **Cupom Vencido**
   - Mensagem de erro clara e específica
   - Nenhum desconto aplicado

## 5. Riscos e Mitigações

### 5.1 Riscos Identificados
1. Instabilidade do ambiente de testes
2. Mudanças na interface do usuário
3. Alterações nas regras de negócio
4. Problemas de performance

### 5.2 Estratégias de Mitigação
1. Monitoramento constante do ambiente
2. Manutenção regular dos testes
3. Comunicação próxima com a equipe de desenvolvimento
4. Testes de regressão frequentes

## 6. Métricas e Relatórios

### 6.1 Métricas Coletadas
- Taxa de sucesso dos testes
- Tempo de execução
- Cobertura de código
- Número de defeitos encontrados

### 6.2 Relatórios Gerados
- Relatório de execução de testes
- Relatório de defeitos
- Dashboard de métricas
- Relatório de cobertura

## 7. Cronograma

### 7.1 Fases do Teste
1. Preparação do ambiente
2. Execução dos testes
3. Análise dos resultados
4. Correção de defeitos
5. Reteste
6. Validação final

### 7.2 Entregas
- Plano de testes
- Scripts de automação
- Relatórios de execução
- Documentação de defeitos
- Relatório final
