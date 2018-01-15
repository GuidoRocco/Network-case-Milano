
/**
 * Script File per la transazione Vendi ad Agenzia
 @param {org.acme.model.Vendi_ad_Agenzia} vd - Istanza di vendita ad agenzia immobiliare
 @transaction
 */

function vendi_ad_agenzia(vd)
{
  var cs = vd.proprietà_da_vendere.id_proprietà;
  vd.proprietario.saldo += vd.prezzo;
  vd.proprietà_da_vendere.proprietario = vd.nuovo_proprietario;
  vd.agenzia.case_possedute.push(cs);
  getAssetRegistry("org.acme.model.Proprietà").then(function (assetRegistry) {
    return assetRegistry.update(vd.proprietà_da_vendere); });
  getParticipantRegistry("org.acme.model.Proprietario").then(function (participantRegistry) {
    return participantRegistry.update(vd.proprietario); });
  return getParticipantRegistry("org.acme.model.Agenzia_Immobiliare").then(function (participantRegistry) {
    return participantRegistry.update(vd.agenzia); });
}                                                           
