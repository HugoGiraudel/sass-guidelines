
# Longo Demais; Não Li

Essas diretrizes são longas e, de vez em quando, é bom tê-las resumidas. Portanto, abaixo segue o resumo.

## Princípios chaves

* Ter um guia de estilo diz a respeito de ter consistência. Se você discorda com algumas nossas regras, está tudo bem, se você é consistente. [↩](#why-a-styleguide)
* O Sass deve ser mantido tão simples quanto ele é. Portanto, evite criar sistemas complexos, a não ser que seja absolutamente necessário. [↩](#key-principles)
* Mantenha em mente que, às vezes, o princípio *KISS* (Keep It Simple, Stupid) é melhor que o *DRY* (Don’t Repeat Yourself). [↩](#key-principles)

## Sintaxe e formatação

* Identação é feita com com dois (2) espaços, sem tabulações. [↩](#syntax--formatting)
* Linhas devem ser, tanto quanto possível, menores que 80 caracteres. Sinta-se à vontade para dividi-las em várias linhas, quando necessário. [↩](#syntax--formatting)
* O CSS deve ser bem escrito e, possivelmente, seguindo o [CSS Guidelines](http://cssguidelin.es) de Harry Roberts. [↩](#syntax--formatting)
* Espaços em branco são gratuitos, então, use-o para separar itens, regras e declarações. Portanto, não hesite em deixar linhas em branco, afinal, não machuca ninguém. [↩](#syntax--formatting)

### Strings

* Declarar a diretiva `@charset` no topo da folha de estilos é altamente recomendado. [↩](#encoding)
* A não ser que aplicadas como identificadores CSS, strings devem ser envoltas em aspas simples. Além disso, URLs também devem ser envoltas em aspas. [↩](#strings-as-css-values)

### Números

* O Sass não faz distinção entre números inteiros e pontos flutuantes, então zeros (0) a esquerda devem ser omitidos. Contudo, zeros (0) a direita ajudam na legibilidade e devem ser adicionados. [↩](#zeros)
* Valores nulos (0) não devem ter unidades. [↩](#units)
* Manipulação de unidades devem ser pensadas como operações aritméticas e, não como operações de strings. [↩](#units)
* A fim de melhorar a legibilidade, cálculos complexos devem estar envoltos em parênteses. Além do mais, operações matemáticas complexas devem ser divididas em pedaços menores. [↩](#calculations)
* Números mágicos dificultam a manutenção do código e devem ser evitados ao máximo. Se hesitar, extensivamente explique este valor questionável. [↩](#magic-numbers)

### Colors

* Cores devem ser expressas com valores HSL quando possível, então, RGB e depois valores hexadecimais (minúsculos e encurtados). Além disso, keywords devem ser evitadas. [↩](#color-formats)
* Prefira `mix(..)`, invés de `darken(..)` e `lighten(..)`, quando clareando ou escurecendo uma cor. [↩](#lightening-and-darkening-colors)

### Listas

* A menos que usadas como um mapeamento direto para valores CSS separados com espaço, listas devem ser separadas com vírgulas. [↩](#lists)
* Envoltá-las em parênteses deve ser considerado para melhorar a legibilidade. [↩](#lists)
* Listas em única linha não devem ter vírgula ao final, diferente de listas com múltiplas linhas. [↩](#lists)

### Mapas

* Mapas com mais de um par, devem ser escritos em múltiplas linhas. [↩](#maps)
* Para ajudar a manutenção, o último par do mapa deve ter vírgula no final. [↩](#maps)
* Keys que são strings devem ser envoltas em aspas, como qualquer outra string. [↩](#maps)

### Classificação de declarações

* O sistema usado para classificar declarações (alfabético, por tipo e etc.) não importa, contanto que seja consistente. [↩](#declaration-sorting)

### Aninhamento de seletores

* Evite aninhamento de seletores quando não é necessário (maioria dos casos). [↩](#selector-nesting)
* Use aninhamento de seletores para pseudo-classes e pseudo-elementos. [↩](#selector-nesting)
* Media queries também podem ser aninhadas dentro de seus seletores mais importantes. [↩](#selector-nesting)

## Convenções de nomeclatura

* É melhor se apegar as convenções de nomeclatura CSS (exceto algumas) que usam letras minúsculas e delimitação com hífen. [↩](#naming-conventions)

## Comentando

* CSS é uma linguagem complicada, então, não hesite em escrever longos comentários sobre coisas que parecem (ou são) esquisitas. [↩](#commenting)
* Para variáveis, funções, mixins e placeholders usando uma API pública, use comentários do SassDoc. [↩](#documentation)

## Variáveis

* Não use a flag `!default` para variáveis que são parte de uma API pública, as quais podem ser facilmente alteradas. [↩](#default-flag)
* Não use a flag `!global` no escopo raíz, já que isso pode se tornar uma violação da sintaxe Sass, no futuro. [↩](#global-flag)

## Extend

* Prefira extender placeholders e, não seletores CSS. [↩](#extend)
* Extenda placeholders o menos possível, a fim de evitar efeitos colaterais. [↩](#extend)