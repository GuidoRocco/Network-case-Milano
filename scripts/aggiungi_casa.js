
/**
 * Script File per la transazione di aggiunzione di una casa nel registro di un'agenzia immobiliare
 @param {org.acme.model.Aggiungi_Casa} ag - Istanza di aggiunzione
 @transaction
 */

function aggiungi_casa(ag)
{
    var cs = ag.casa_da_aggiungere.id_proprietà;
    if(agenzia.case_possedute.indexOf(cs) == -1)
    {
      ag.agenzia.case_possedute.push(cs);
      return getParticipantRegistry("org.acme.model.Agenzia_Immobiliare").then(function (participantRegistry) {
         return participantRegistry.update(ag.agenzia); }
                                                                           );


    }

    else
    {
      throw Error("La casa è già presente nel registro. La transazione non verrà eseguita");
      return;
    }

}

                                                                        
