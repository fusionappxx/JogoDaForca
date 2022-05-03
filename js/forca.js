const palavras = ['TESTE','COISA','FALAS','MUDAS'];
let palavraEscolhida;
let placeholder = [];
let tentativas = 6;

sortearPalavra();
function sortearPalavra(){
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
	console.log(palavraEscolhida);
}

exibirPalavra();
function exibirPalavra(){

    const palavra = document.getElementById("palavra");
    palavra.innerHTML = "";
   
    for(i = 0; i < palavraEscolhida.length; i++){
        if(placeholder[i] == undefined){
            placeholder[i] = "&nbsp;"
            palavra.innerHTML = palavra.innerHTML + "<div class='letras'>" + placeholder[i] + "</div>"
        }
        else{
            palavra.innerHTML = palavra.innerHTML + "<div class='letras'>" + placeholder[i] + "</div>"
        }
    }
}

// Teclado
montaTeclado();
function montaTeclado(){
	const letrasTeclado = 'QWERTYUIOP ASDFGHJKLÇ ZXCVBNM'.split('');
	const espacoTeclado = document.getElementById("teclado");
    espacoTeclado.innerHTML = "";
	
  for (let i = 0; i < letrasTeclado.length; i++) {
    if (letrasTeclado[i] === " ") {
		espacoTeclado.innerHTML = espacoTeclado.innerHTML + "<br>"
	}	
    else {
		espacoTeclado.innerHTML = espacoTeclado.innerHTML + "<button id=" + letrasTeclado[i] + " onclick=\"verificaTecla('" + letrasTeclado[i] + "')\">" + letrasTeclado[i] + "</button>"
    }
	
  }
	espacoTeclado.innerHTML = espacoTeclado.innerHTML + "<button id=\"reiniciar\">🎮</button>"
}

function verificaTecla(letra){
    // M
    document.getElementById(letra).disabled = true;

    if(tentativas > 0)
    {
        //Compara Palavra
        comparaPalavra(letra);
        //Atualiza a palavra
        exibirPalavra();
    }    
}

function comparaPalavra(letra){
    const pos = palavraEscolhida.indexOf(letra)
    if(pos < 0){
        //Errou a letra
        document.getElementById(letra).style.background = "#cc335e";
        tentativas--
        desenhoForca();

        //Acabou as chances
        if(tentativas == 0){
            alert("\nNão foi dessa vez ... \n A palavra era " + palavraEscolhida);
        }

    }
    else{
        for(i = 0; i < palavraEscolhida.length; i++){
            //Acertou a letra
            if(palavraEscolhida[i] == letra){
                document.getElementById(letra).style.background = "#33caa1";
                placeholder[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraEscolhida.length; i++){
        if(palavraEscolhida[i] != placeholder[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        alert("\nPARABÉNS! Você venceu!");
        tentativas = 0;
    }
}

function desenhoForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

let reiniciar = document.querySelector("#reiniciar")
reiniciar.addEventListener("click", function(){
    location.reload();
});