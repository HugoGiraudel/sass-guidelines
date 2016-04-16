
# I Mixin

I _Mixin_ sono una delle caratterstiche più usate dell'intero linguaggio Sass. Sono la chiave per ottenere componenti riusabili e fedeli al _DRY_. Per una buona ragione: i _Mixin_ danno l'opportunità all'autore di definire stili che possono essere riusati all'interno del foglio di stile senza aver bisogno di classi non semantiche come `.float-left`.

Possono contenere una serie di regole CSS e grosso modo tutto ciò che è lecito dovunque in un documento Sass. Possono anche accettare argomenti, proprio come le funzioni. Inutile dire che le possibilità sono infinite.

Devo però fare un avviso contro l'abuso del potere dei _Mixin_. Una volta ancora, la chiave qui è la *semplicità*. Costruire un _Mixin_ estremamente potente con un sacco di logica dentro potrebbe sembrare una buona idea, ma saremmo di fronte ad un caso di sovra-ingegnerizzazione, una malattia di cui molti sviluppatori soffrono. Se un _Mixin_ finisce per avere più di venti righe di codice, allora dovrebbe essere diviso in pezzetti più piccoli, o completamente rivisto.

## Le basi

Detto questo, i _Mixin_ sono estremamente utili e vi capiterà di usarne qualcuno. La regola di base è che se ci si accorge di avere un gruppo di proprietà CSS che compaiono sempre insieme per una ragione (non per coincidenza), queste dovrebbero essere inserite dentro un _Mixin_. Ad esempio, il [micro-clearfix hack di Nicolas Gallagher](http://nicolasgallagher.com/micro-clearfix-hack/) merita di esser messo (senza argomenti) in un _Mixin_.

{% include snippets/mixins/01/index.html %}

Un altro esempio valido potrebbe essere un _Mixin_ per impostare la grandezza di un elemento, definendo `width` e `height` nello stesso tempo. Non solo renderà il codice più veloce da scrivere, ma anche più facile da leggere.

{% include snippets/mixins/02/index.html %}

###### Approfondimenti

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)

## Mixin senza argomenti

Ci sono casi in cui i _Mixin_ sono utilizzati solamente per evitare di ripetere lo stesso gruppo di dichiarazioni più e più volte e, o non hanno bisogno di nessun parametro, o hanno dei valori di default che non necessitano alcun passaggio di argomenti.

In questi casi, possiamo tranquillamente omettere le parentesi quando li richiamiamo. L'istruzione `@include` (o il simbolo `+` nella sintassi indentata) bastano a indicare che quella linea è la chiamata di un _Mixin_; non c'è bisogno di parentesi extra.

{% include snippets/mixins/08/index.html %}

## Lista di argomenti

Quando c'è da aver a che fare con un numero sconosciuto di argomenti in un _Mixin_, meglio usare un `arglist` piuttosto che una _Lista_. Pensate ad `arglist` come l'ottavo tipo di dati in Sass, nascosto e non documentato, che è implicitamente usato quando passiamo un numero arbitrario di argomenti ad un _Mixin_ o ad una funzione la cui firma contiene `...`.

{% include snippets/mixins/03/index.html %}

Ora, quando si costruisce un _Mixin_ che accetta una manciata di argomenti (diciamo 3 o più), pensiamoci due volte prima di unirli in una lista o in una mappa: potrebbe essere più semplice passarli uno per uno.

Sass è piuttosto intelligente con la dichiarazione di _Mixin_ e funzioni, così tanto che si può passare una lista o una mappa coe una _arglist_ ad una funzione/mixin in modo che sia interpretata come una serie di argomenti.

{% include snippets/mixins/04/index.html %}

###### Approfondimenti

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

## I mixin e i prefissi vendor

Si potrebbe essere tentati di definire un mixin personalizzato per avere i prefissi _vendor_ da applicare a proprietà CSS non ancora supportate o supportate solo parzialmente. Ma non vogliamo certo farlo. Prima di tutto, se si può usare [Autoprefixer](https://github.com/postcss/autoprefixer), che si usi Autoprefixer. Autoprefixer rimuoverà dal vostro progetto del codice Sass superfluo, sarà sempre aggiornato e sarà compilato in una maniera più efficiente di quanto si possa fare da soli.

Sfortunatamente, non è sempre possibile avere a disposizione Autoprefixer. Se però usate [Bourbon](http://bourbon.io/) o [Compass](http://compass-style.org/) scoprirete che entrambi mettono a disposizione una collezione di Mixin per applicare i prefissi vendor. Usateli.

Se non si può usare Autoprefixer, e nemmeno Bourbon o Compass, allora, e solo allora, si può creare un mixin per applicare i prefissi alle proprietà CSS. Ma per favore, non create un mixin per ogni proprietà, che stampa manualmente ogni prefisso.

{% include snippets/mixins/05/index.html %}

Fatelo nella maniera intelligente.

{% include snippets/mixins/06/index.html %}

Usare questo Mixin ora è facilissimo:

{% include snippets/mixins/07/index.html %}

Tenete a mente che questa è una soluzione molto semplice. Per esempio, non può interagire con polyfill complessi come quelli richiesti per Flexbox. In questo senso, Autoprefixer rimane l'opzione ideale.

###### Approfondimenti

* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)
