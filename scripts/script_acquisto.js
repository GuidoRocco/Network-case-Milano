
/**
 * Script File per la transazione di acquisto diretto
 * @param {org.acme.model.Acquisto} ac - Proposta di acquisto
 * @transaction
 */

function acquisto_diretto(ac)
{
  if(ac.nuovo_proprietario.saldo >= ac.proprietà.prezzo)
  {
     var casa_prezzo = ac.prezzo;
     ac.proprietario.saldo += casa_prezzo;
     ac.nuovo_proprietario.saldo -= casa_prezzo;
     ac.proprietà.proprietario = ac.nuovo_proprietario;
     getAssetRegistry("org.acme.model.Proprietà").then(function (assetRegistry) {
       return assetRegistry.update(ac.proprietà); });
     return getParticipantRegistry("org.acme.model.Proprietario").then(function (participantRegistry) {
                                              return participantRegistry.updateAll([ac.proprietario, ac.nuovo_proprietario]); });

}

else
{
  throw Error("Non si dispone dei requisiti necessari per la transazione. La transazione verrà annullata");
  return;
 }
}
