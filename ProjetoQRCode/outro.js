function gerarImg2 (){
    const inputUsr = document.querySelector('.ramal').value;
    const urlOr = `https://api.qrserver.com/v1/create-qr-code/?data=${inputUsr}&amp;size=150x150`;
    
    document.getElementById('imgholder').src = urlOr;
      
  }
