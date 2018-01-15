
/**
 * Script File per la transazione di trasferimento di una casa da un'agenzia immobiliare a un'altra
 @param {org.acme.model.Trasferisci_Casa} trasf - Istanza di trasferimento casa
 @transaction
 */

function trasferisci_casa(trasf)
{
  var cs = trasf.casa_da_trasferire.id_proprietà;
  var index = trasf.agenzia_venditrice.case_possedute.indexOf(cs);
  if(index != -1)
  {
    trasf.agenzia_venditrice.case_possedute.splice(index, 1);
    trasf.agenzia_acquirente.case_possedute.push(cs);
    return getParticipantRegistry("org.acme.model.Agenzia_Immobiliare").then(function (participantRegistry) {
      return participantRegistry.updateAll([trasf.agenzia_venditrice, trasf.agenzia_acquirente]);
    });
  }

  else
  {
    throw Error("Impossibile trovare la casa. La transazione non verrà eseguita");
    return;
  }


}                                                             
