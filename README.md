# Network-case-Milano

> Network Case Milano è un business network che implementa una Blockchain in grado di gestire istantaneamente e in modo 
sicuro transazioni di proprietà immobiliari. L'idea sottostante è quella di semplificare e ottimizzare il processo 
di vendita e di acquisto di case nella città di Milano. 
Il model file (.cto) contiene, in un formato simile al JSON, tutte le informazioni necessarie del business network 
in questione. 
Tale network è composto da: 

**Partecipanti**

`Proprietari` 

I proprietari sono cittadini di Milano che hanno/non hanno una casa. Ciascun proprietario è identificato con un ID, 
che può essere un hash che identifica univocamente la persona. Inoltre, ogni identità è dotata di codice fiscale, 
nome e cognome. Un saldo e una busta paga mensile modellano la capacità di una persona di acquistare/vendere 
proprietà. 

Per garantire il corretto funzionamento della blockchain, è necessario implementare un proprietario fittizio avente id 2000. 
Questo proprietario rappresenta tutti i proprietari che non sono cittadini (nel nostro caso, banche e agenzie immobiliari). 


`Banche` 

Tra le banche, il business network prevede Intesa San paolo, BPM, Deutsche Bank ed altre banche 
di proprietà italiana o straniera operative nel territorio di Milano. 
Nel Business Network, si suppone che le banche abbiano un saldo illimitato (essendo comunque disagevole 
implementare un saldo che comprenda valori numerici molto alti). 

`Agenzie Immobiliari` 

Le Agenzie Immobiliari si occupano di mediare tra proprietari nel caso di acquisto/vendita di proprietà. 
Ogni agenzia immobiliare è dotata di una lista contenenete gli identificativi delle case possedute. 
Nel caso di acquisto, l'agenzia immobiliare trattiene il 5% del prezzo di vendita come commissione. 

**Assets** 

`Proprietà immobiliari` 

Una proprietà immobiliare può essere un appartamento, una casa o una proprietà commerciale (impresa, bar, negozio, ecc.), 
legalmente registrata al catasto del Comune di Milano. 

**Transazioni** 

`Acquisto` 

La transazione di acquisto modella l'acquisto di un immobile legalmente posseduto da un partecipante da parte di 
un altro partecipante. L'acquisto avviene mediante il trasferimento di denaro dal saldo di un proprietario 
al saldo dell'altro. Si suppone che eventuali tasse relative all'acquisto siano già comprese nel prezzo finale. 

`Acquisto con Agenzia` 

La transazione di acquisto può anche avvenire tramite un'agenzia immobiliare. Il proprietario acquista, in tal caso, 
la proprietà direttamente dall'agenzia in questione. Il prezzo di acquisto non prevede la commissione dell'agenzia, 
che verrà calcolata come il 5% del valore dell'immobile al momento dell'acquisto. 
Successivamente alla transazione in questione, la proprietà dell'immobile passa dall'agenzia immobiliare 
(identificata con un ID fittizio, nel nostro caso #2000) al proprietario. 

`Mutuo` 

La transazione Mutuo avviene tra un partecipante e una banca. Uno smart contract implementato nella blockchain 
controlla che la rata mensile del mutuo non superi il 33% della busta paga del proprietario: in caso ciò avvenga 
il mutuo è accettato, in caso contrario la transazione è automaticamente annullata. 
Nella rata del mutuo devono essere comprese eventuali tasse. 

`Aggiungi Casa` 

La transazione Aggiungi Casa può essere effettuata dal catasto o dall'agenzia immobiliare. Il risultato 
della transazione è l'aggiunzione di una proprietà nel registro delle case dell'agenzia immobiliare. 

`Rimuovi Casa` 

La transazione Rimuovi Casa può essere effettuata dal catasto o dall'agenzia immobiliare. Il risultato 
della transazione è la rimozione di una proprietà dal registro delle case dell'agenzia immobiliare. 

`Trasferisci Casa` 

La transazione Trasferisci Casa modella il trasferimento di una casa tra due agenzie immobiliari. 

`Vendi ad Agenzia`

La transazione Vendi ad Agenzia modella la vendita di una casa da parte di un proprietario a 
un'agenzia immobiliare. 

**Regole** 

Un file .acl gestisce i permessi della Blockchain specificando chi può/non può compiere 
determinate azioni (leggere, creare, modificare dati). 

**Query**

Un file query (.qry) definisce le query della Blockchain. Una legenda è compresa nel file. 


