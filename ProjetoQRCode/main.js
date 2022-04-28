class GeraQrCode {
    constructor() {
      this.formulario = document.querySelector('.form'); //pegando o formulário html pela classe
      this.eventos(); //executando um metodo.
      
    }
  
    eventos() {
      this.formulario.addEventListener('submit', e => { 
        this.handleSubmit(e); //impedindo a execução do submit
      });
    }

    handleSubmit(e) {
        e.preventDefault();

        const campoValido = this.campoEValido();


        if(campoValido){
            
          gerarImg2();
         
        }
      }
     
      campoEValido() { //Verifica se as senhas são validas
        let valid = true; //flag predefinindo o valor de senhas validas.
    
        for(let errorText of this.formulario.querySelectorAll('.error-text')) { // caso algum erro tenha sido enviado antes, remove os anteriores
          errorText.remove(); // caso algum erro tenha sido enviado antes, remove os anteriores
        }

        const ramal = this.formulario.querySelector('.ramal'); //variavel pegando o campo senha do formulário pela classe .senha
         //variavel pegando o campo senha do formulário pela classe .senha
    
        if(ramal.value.length < 4) { //verifica se o valores do campo senha não estão entre 6 e 12 caracteres
          valid = false; //define para falso o valor da flag 
          this.criaErro(ramal, 'Ramal precisa ter de 4 a 6 digitos'); //joga o erro no formulario após o campo senha
        }

        if(!ramal.value){
          this.criaErro(ramal, 'Ramal não pode estar vazio');
        }
    
        return valid; //retorna o valor de valid para o metodo
      }
    
    
  
      criaErro(campo, msg) { //cria o erro dentro do html
        const div = document.createElement('div') //cria uma div
        div.innerHTML = msg; //dentro da div cria uma msg
        div.classList.add('error-text'); //adicionar a classe erro-text dentro do html e da div adicionada que agora tem um texto.
        campo.insertAdjacentElement('afterend', div); //posiciona a div com texto e a classe depois do campos
      }
       
      gerarImg (){
        const inputUsr = document.querySelector('.ramal').value;
        const urlOr = 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=';
        const final = urlOr + inputUsr;
    
        document.getElementById('imgholder').src = final;
          
      }


    }



    const valida = new GeraQrCode(); //instancia a classe principal ValidaFormulario(); com todas as regras e verificações