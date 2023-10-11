# LitSpot

<div align="center">
    <img src="https://github.com/Savyo-Marques/LitSpot/assets/129305960/a122e173-7eee-45d4-96ae-fb669e37df37" width="450px"/>
</div>

## Introdução
O sistema LitSpot é uma aplicação móvel desenvolvida em React Native que permite aos usuários pesquisar e encontrar informações sobre livros. 
## Componentes e Bibliotecas

O código implementado no LitSpot utiliza várias bibliotecas e componentes do React Native e outras bibliotecas de terceiros. Aqui estão alguns dos principais componentes e bibliotecas:

- `TextInput`: É um componente de entrada de texto que permite ao usuário inserir o termo de pesquisa.
- `View`: Componente usado para organizar outros componentes na interface do aplicativo.
- `Text`: Componente de texto para exibir informações na tela.
- `Image`: Componente para exibir imagens na tela.
- `TouchableOpacity`: Componente que permite que ações sejam executadas quando tocado.
- `FlatList`: É um componente para exibir uma lista rolável de elementos.
- `LinearGradient` (da biblioteca Expo): Um componente que cria um fundo gradiente colorido na tela.
- `Icon` (da biblioteca react-native-vector-icons/FontAwesome.js): Componente para exibir ícones na tela.
- `StarRating` (da biblioteca react-native-star-rating): Componente para exibir e coletar classificações dos livros.

Além disso, o código faz uso da biblioteca `axios` para realizar solicitações HTTP à API do Algolia e recuperar informações sobre livros com base na pesquisa do usuário.

## Pesquisa de Livros

O principal objetivo do aplicativo LitSpot é permitir que os usuários pesquisem livros com base em palavras-chave. O processo de pesquisa é realizado da seguinte maneira:

1. O usuário insere um termo de pesquisa na caixa de texto.
2. Ao pressionar a tecla "Enter" ou tocar no botão de pesquisa, a função `realizarPesquisa` é chamada.
3. A função `realizarPesquisa` faz uma solicitação à API do Algolia com o termo de pesquisa fornecido.
4. Os resultados da pesquisa são exibidos na forma de uma lista de livros encontrados.

## Lista de Livros Encontrados

A lista de livros encontrados é exibida usando o componente `FlatList`. Cada item da lista contém as seguintes informações sobre o livro:

- Título do Livro
- Autor do Livro
- URL do Livro
- Classificação do Livro

O título do livro, autor e URL são exibidos em textos simples, enquanto a classificação do livro é exibida usando o componente `StarRating`.

<div align="center">
    <img src="https://github.com/Savyo-Marques/LitSpot/assets/129305960/63fdced7-71de-4e04-8cbf-2f14f5b462b3" width="450px"/>
</div>

## Interface do Usuário

A interface do usuário do LitSpot é projetada de forma agradável e funcional. Ela inclui um cabeçalho com o logotipo do aplicativo e um ícone de pesquisa. Os elementos são organizados em um gradiente de cores para tornar a experiência do usuário mais agradável.

## Considerações Finais

O sistema LitSpot é uma aplicação React Native que permite aos usuários pesquisar e encontrar informações sobre livros. Ele utiliza uma série de componentes e bibliotecas para criar uma interface amigável e funcional. Este documento forneceu uma visão geral do código implementado no aplicativo LitSpot e de suas principais funcionalidades.
