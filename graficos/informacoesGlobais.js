const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function vizualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json();
    const pessoasConectadas = dados.total_pessoas_conectadas/le9;
    const pessoasNoMundo = dados.total_pessoas_mundo/le9;
    const horas = parseInt (dado.tempo_medio);
    const minutos = Math.round((dados.tempo_medio - hora)*60);
    const porcentagemConectada = ((pessoasConectada/ pessoasNoMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem 
    <span> ${pessoasNoMundo} bilhões </span> de pessoas e que aproximadamente 
    <span> ${pessoasConectadas} bilhões </span> estão conectadas em alguma 
    rede social e passam em média <span> ${horas} </span> horas e <span> ${minutos} </span> minutos 
    conectada. <br> Isso significa que aproximadamente <span> ${porcentagemConectada}% </span> de
    pessoas estão conectadas alguma rede social.`
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais();