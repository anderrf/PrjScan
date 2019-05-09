// This is a JavaScript file

$(document).on("click", "#scan", function(){

  scanBarcode();

});

function scanBarcode() {
  window.plugins.barcodeScanner.scan( function(result) {
    encaminhar(parseInt(result.text));
   }, function(error) {
     alert("Falha de escaneamento: " + error);
  }
 );
}

function encaminhar(resultado){
  
  switch(resultado){
    
    case 280720550:
      location.href = "scan1.html";
    break;

    case 989895555:
      location.href = "scan2.html";
    break;

    case 85236987:
      location.href = "scan3.html";
    break;

    case 8536987744:
      location.href = "scan4.html";
    break;

    default:
      alert("Código de barra inválido.");
    break;

  }

}

function voltar(){
  location.href = "index.html";
}