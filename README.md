# Pokédex - Desafio Técnico Front-end (09/2024)

[![Versão](https://img.shields.io/github/v/release/LiedsonLB/desafio-infoG2)](https://github.com/LiedsonLB/desafio-infoG2/releases)
[![Forks](https://img.shields.io/github/forks/LiedsonLB/desafio-infoG2)](https://github.com/LiedsonLB/desafio-infoG2/network/members)
[![Contribuidores](https://img.shields.io/github/contributors/LiedsonLB/desafio-infoG2)](https://github.com/LiedsonLB/desafio-infoG2/graphs/contributors)
[![Pull Requests Abertos](https://img.shields.io/github/issues-pr/LiedsonLB/desafio-infoG2)](https://github.com/LiedsonLB/desafio-infoG2/pulls)
[![Última Atualização](https://img.shields.io/github/last-commit/LiedsonLB/desafio-infoG2)](https://github.com/LiedsonLB/desafio-infoG2/commits/master) 

<img src="./public/img/icon_pokebola.png" alt="Pokebola" width="150" height="150">

## Descrição do Projeto

Este projeto é uma aplicação web de uma **Pokédex** que permite aos usuários pesquisar, visualizar e filtrar informações sobre os Pokémon, utilizando a **PokeAPI**. O objetivo deste desafio é demonstrar habilidades com **Vue.js 3**, **Composition API**, **Vite**, e **TypeScript** para uma vaga na Baseworks.

## Design

- **Figma:** [Pokedex Figma](https://www.figma.com/design/7CpFuiZ49RpPIBmQ2j9vg1/Pokedex_LiedsonLB)

## Funcionalidades

1. **Listagem de Pokémon**:
   - Exibe uma lista paginada de Pokémon, com suas imagens, nomes e números.
   - Implementação de paginação ou scroll infinito para navegação entre os Pokémon.

2. **Detalhes do Pokémon**:
   - Ao clicar em um Pokémon, são exibidas informações detalhadas como estatísticas, tipos (com cores correspondentes) e cadeia de evolução.

3. **Busca e Filtro**:
   - Barra de pesquisa que permite buscar Pokémon pelo nome ou número.
   - Filtro para listar Pokémon por tipo (água, fogo, grama, etc.).

4. **Responsividade**:
   - O design é totalmente responsivo, adaptando-se a diferentes tamanhos de tela, de dispositivos móveis a desktops.

## Funcionalidades Extras (Opcional)

- **Favoritos**: Permite ao usuário marcar Pokémon como favoritos e exibi-los em uma seção dedicada.
- **Animações e Transições**: Melhoria da experiência visual com animações suaves.

## Tecnologias Utilizadas

- **Vue.js 3** com **Composition API**
- **Vite**
- **TypeScript**
- **Pinia**
- **PokeAPI**: [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)

## Testes

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cypressio/cypressio-original.svg" alt="cypress" height="30" width="40" style="margin: 0 auto; width: 100%"> <br />
<p style="text-align: center">Ferramenta de Testes: Cypress</p>

- Teste de carregamento de componentes HTML ❌
- Envio de dados normal ❌
- Testes funcionais ❌
- Testes de banco e API ❌
- Testes de sistema ❌

## Decisões Técnicas

- **Composition API** foi utilizada para maior flexibilidade e organização de código.
- **Pinia** foi utilizado para gerenciamento de estado global, facilitando a manipulação dos dados entre os componentes.
- **TypeScript** foi adotado para garantir maior segurança na tipagem de dados e melhorar a manutenção do código.

## Deploy

O projeto está disponível em produção no seguinte link: [https://semUrlAinda.vercel.app](https://semUrlAinda.vercel.app).

## Execute o Vue

### 1. Navegue até o diretório<br/>
`/pokedex`.
### 2. Instale as dependências utilizando npm ou yarn:
``` bash
npm install
```
ou
``` bash
yarn install
```

### 3. Inicie o servidor de desenvolvimento:
``` bash
npm run dev
```
ou
``` bash
yarn dev
```

## Contribuições

Caso deseje contribuir com o projeto:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature 
```
git checkout -b feature/nova-feature
```

3. Faça commit das suas alterações 
```
git commit -m 'Adiciona nova feature'
```

4. Envie suas alterações 
```
git push origin feature/nova-feature
```
5. Abra um Pull Request.

## Contato

Se tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato através de:

- **Email**: [liedson.b9@gmail.com](mailto:liedson.b9@gmail.com)
- **LinkedIn**: [liedsonlb](https://linkedin.com/in/liedsonlb)
- **Instagram:** [liedson.vue](https://www.instagram.com/liedson.vue)
- **Github:** [LiedsonLB](https://github.com/LiedsonLB)
- **Portfólio:** [Liedson Barros](https://liedsonbarros.vercel.app)
---
## Releases

- Release v1.0 ✅

**Prazo de Entrega**: 03/10/2024 às 23:59