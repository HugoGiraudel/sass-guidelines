
# Convenzione sui nomi

In questa parte, non andremo a parlare di qual è il miglior modo per creare nomi nel CSS in modo da assicurare manutenibilità e scalabilità. Non solo sta a te scegliere, ma è anche fuori dalla portata di queste linee guida Sass. Io suggerisco le convenzioni raccomandate da [CSS Guidelines](http://cssguidelin.es/#naming-conventions).

Ci sono alcune cose di cui si possono creare nomi in Sass, ed è importante nominarle bene, in modo che l'intera codebase sia coerente e facile da leggere:

* variabili;
* funzioni;
* mixin;

I placeholder di Sass sono omessi deliberatamente da questa lista, dato che possono esser considerati come dei normali selettori CSS, che seguono dunque la stessa convenzione sui nomi delle classi.

Riguardo le variabili, le funzioni ed i mixin, rimaniamo con qualcosa di molto CSS: **minuscolo separato da trattino**, e soprattutto che abbia un senso.

{% include snippets/naming/01/index.html %}

###### Approfondimenti

* [CSS Guidelines’ Naming Conventions](http://cssguidelin.es/#naming-conventions)

## Costanti

Se ti capita di essere uno sviluppatore di framework, o di scrivere una libreria, può capitare di trovarsi di fronte variabili che non sono intese come qualcosa da poter aggiornare in ogni circostanza: sono delle costanti. Sfortunatamente (o fortunatamente?), Sass non offre nessuna maniera per definire queste entità, così dobbiamo far leva su una stretta convenzione per i nomi per raggiungere il nostro obiettivo.

Come per molti linguaggi, suggerisco di scrivere delle variabili tutto-maiuscolo divise da trattino basso quando queste sono intese come costanti. Non solo questa è una convenzione piuttosto vecchia, ma rende anche evidente la differenza con le variabili minuscole-trattino.

{% include snippets/naming/02/index.html %}

###### Approfondimenti

* [Dealing With Constants in Sass](http://www.sitepoint.com/dealing-constants-sass/)

## Namespace

Se si vuol distribuire il proprio codice sass, ad esempio in una libreria, un framework, una griglia o qualsiasi altra cosa, si può considerare di applicare un namespace alle proprie variabili, funzioni, mixin e placeholder, in modo da evitare conflitti con altro codice.

Ad esempio, se si lavora su un progetto *Sassy Unicorn* che sarà adottato da sviluppatori di tutto il mondo, si può considerare di usare `su-` come namespace. Questo è abbastanza specifico per prevenire qualsiasi collisione con altri nomi, e abbastanza corto da non essere una palla da scrivere ogni volta.

{% include snippets/naming/03/index.html %}

<div class="note">
  <p>Notare che il namespace automatico è un obiettivo del progetto della prossima ristrutturazione di <code>@import</code> prevista per Sass 4.0. Quando sarà disponibile, diventerà sempre meno utile inserire un namespace a mano; librerie che contengono namespace manuali saranno addirittura più difficili da usare.</p>
</div>

###### Approfondimenti

* [Please Respect the Global CSS Namespace](http://blog.kaelig.fr/post/44554267597/please-respect-the-global-css-namespace)
