
/**
 * Script File per la transazione di mutuo
 @param {org.acme.model.Rimuovi_Casa} rm - Proposta di mutuo
 @transaction
 */

function rimuovi_casa(rm)
{
  var cs = rm.casa_da_rimuovere.id_proprietà;
  var index = rm.agenzia.case_possedute.indexOf(cs);
  if(index != -1) {

     rm.agenzia.case_possedute.splice(index, 1);
     return getParticipantRegistry("org.acme.model.Agenzia_Immobiliare").then(function (participantRegistry) {
        return participantRegistry.update(rm.agenzia); }
                                                                           );
  }
  else
  {
    throw Error("Impossibile trovare la casa. La transazione non verrà eseguita");
  }
}
                                                                    
