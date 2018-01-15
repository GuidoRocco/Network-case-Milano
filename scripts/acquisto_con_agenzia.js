

/**
 * Script file per la transazione di acquisto tramite agenzia immobiliare
 * @param {org.acme.model.Acquisto_con_Agenzia} acq - Proposta di acquisto mediante agenzia
 * @transaction
 */

function acquisto_agenzia(acq)
{
  var id_cs = acq.proprietà_da_acquistare.id_proprietà;
  var index = acq.agenzia.case_possedute.indexOf(id_cs);
  var commissione = (acq.proprietà_da_acquistare.prezzo * 5) / 100;
  var costo_totale = acq.proprietà_da_acquistare.prezzo + commissione;
  if(index != -1 && acq.nuovo_proprietario.saldo >= costo_totale)
  {
    acq.agenzia.case_possedute.splice(index, 1);
    acq.nuovo_proprietario.saldo -= costo_totale;
    acq.proprietà_da_acquistare.proprietario = acq.nuovo_proprietario;
    getAssetRegistry("org.acme.model.Proprietà").then(function (assetRegistry) {
      return assetRegistry.update(acq.proprietà_da_acquistare); });
    getParticipantRegistry("org.acme.model.Agenzia_Immobiliare").then(function (participantRegistry) {
      return participantRegistry.update(acq.agenzia); });
    return getParticipantRegistry("org.acme.model.Proprietario").then(function (participantRegistry) {
      return participantRegistry.update(acq.nuovo_proprietario); });
  }
  else
  {
    throw Error("Non si dispone dei requisiti necessari per la transazione. La transazione verrà annullata");
    return;
  }

} 
