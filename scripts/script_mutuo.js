
/**
 * Script File per la transazione di mutuo 
 @param {org.acme.model.Mutuo} mt - Istanza di mutuo 
 @transaction 
 */ 

function mutuo (mt) 
{ 
  var terzo_dello_stipendio = mt.contraente_mutuo.busta_paga / 3; 
  if(terzo_dello_stipendio >= mt.rata && mt.contraente_mutuo.mutuo == false) 
  { 
    mt.contraente_mutuo.mutuo = true; 
    mt.contraente_mutuo.saldo += mt.somma; 
    mt.contraente_mutuo.busta_paga -= mt.rata; 
    return getParticipantRegistry("org.acme.model.Proprietario").then(function (assetRegistry) 
                                                                { 
      return assetRegistry.update(mt.contraente_mutuo); } ); 
  } 
  
  else 
  { 
    throw Error("Non si dispone dei prerequisiti necessari per ottenere un mutuo. La transazione verr� annullata."); 
    return; 
  } 
  
  
} 


  
  
    
