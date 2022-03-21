/****************************CONFIGURANDO VÍDEO*****************************/
var video = document.querySelectorAll("video");
var playButton = document.querySelectorAll(".img-botao-play");
var closeButton = document.getElementsByClassName("botao-fechar");


/*Play no vídeo */
playButton.forEach( (play,index) => {

    play.addEventListener ("click" , () => { 

         /*Mostrando o vídeo */
        video[index].classList.remove("mostrar-video"); 
        closeButton[index].classList.add("mostrar-botao-fechar");

       
         /*Fechando o vídeo */
        closeButton[index].addEventListener("click", () => {
            video[index].classList.add("mostrar-video")
            closeButton[index].classList.remove("mostrar-botao-fechar")
        })

        video[index].style.display = "block";
    
    })

})