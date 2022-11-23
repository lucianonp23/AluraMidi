function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio); 

    if( elemento && elemento.localName ==='audio'){

        elemento.play();  
    }

    /*else  {

        console.log("Elemento não encontrado ou Seletor inválido");
    }*/
}



const listaDeTeclas=document.querySelectorAll('.tecla');


for (let contador=0; contador < listaDeTeclas.length; contador= contador+1) {
    
    const tecla= listaDeTeclas[contador]; 
    const instrumento = tecla.classList[1];
    //template string
    const idAudio= `#som_${instrumento}`;
    
    
   tecla.onclick = function (){

        tocaSom(idAudio);
    }   
   
    tecla.onkeydown= function(evento){
        if(evento.code ==="Enter"|| evento.code==="Space"){

             tecla.classList.add('ativa');

        }
       
    }
    
    tecla.onkeyup= function(){

        tecla.classList.remove('ativa');
    }
    
}








