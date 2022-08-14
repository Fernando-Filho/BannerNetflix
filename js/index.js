function info(){


    let infoDesejada = document.getElementsByName('inforadio')
    console.log(infoDesejada)
    // document.querySelectorAll('div.sinopse').style.display = 'none';
    // document.querySelectorAll('div.Trailers').style.display = 'none';
    // document.querySelectorAll('div.Mais').style.display = 'none';
    // document.querySelectorAll('div.Detalhes').style.display = 'none';

    // addEventListener(document.getElementsByName('info')).checked
    // // let conteudoSinopse = document.getElementsByClassName('Sinopse')
    // // let conteudoTrailers = document.getElementsByClassName('Trailers')
    // // let conteudoMais = document.getElementsByClassName('Mais')
    // // let conteudoDetalhes = document.getElementsByClassName('Detalhes')
    
    if (infoDesejada[0].checked) {
        document.querySelectorAll('#info .info_dados .sinopse').style.display = 'block';
        document.querySelectorAll('#info .info_dados .Trailers').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Mais').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Detalhes').style.display = 'none';
    } else if (infoDesejada[1].checked){
        document.querySelectorAll('#info .info_dados .sinopse').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Trailers').style.display = 'block';
        document.querySelectorAll('#info .info_dados .Mais').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Detalhes').style.display = 'none';
    } else if (infoDesejada[2].checked){
        document.querySelectorAll('#info .info_dados .sinopse').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Trailers').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Mais').style.display = 'block';
        document.querySelectorAll('#info .info_dados .Detalhes').style.display = 'none';
    } else if (infoDesejada[3].checked){
        document.querySelectorAll('#info .info_dados .sinopse').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Trailers').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Mais').style.display = 'none';
        document.querySelectorAll('#info .info_dados .Detalhes').style.display = 'block';
    }
}