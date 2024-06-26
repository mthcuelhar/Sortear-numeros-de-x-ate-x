function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
    function sortear(){
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let de = parseInt(document.getElementById('de').value);
        let ate = parseInt(document.getElementById('ate').value);
        let botao = document.getElementById('btn-reiniciar');

        if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade <= 0 || de <= 0 || ate <= 0) {
            alert('Por favor, preencha todos os campos.');
            document.getElementById('quantidade').value = '';
            document.getElementById('de').value = '';
            document.getElementById('ate').value = '';
            document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum ate agora </label>';
            if (botao.classList.contains('container__botao')){
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
            }
            return;
        }
        
        if (botao.classList.contains('container__botao')){
        alert('Reinicie')

        } else {
            if (ate <= de){
                alert('Numero minimo nao pode ultrapassar o numero maximo')
                document.getElementById('quantidade').value = '';
                document.getElementById('de').value = '';
                document.getElementById('ate').value = '';
                document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum ate agora </label>';

            } else {

            let sorteados = [];
            let numero;

            for (let i = 0; i < quantidade; i++){
                numero = numeroAleatorio(de, ate);

            while (sorteados.includes(numero)){
                numero = numeroAleatorio(de, ate);
                }
        if (quantidade <= (ate -de)){
                sorteados.push(numero);
        }   else {
            alert('Quantidade escolhida nao corresponde ao intervalo de numeros escolhidos');
            document.getElementById('quantidade').value = '';
            document.getElementById('de').value = '';
            document.getElementById('ate').value = '';
            document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum ate agora </label>';
            return;    
            } 

            
    }

            let numerosSorteados = document.getElementById('resultado');
                numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
                alterarStatusBotaoReiniciar();
            }
        }

}

function reiniciar(){
    let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao')){
            document.getElementById('quantidade').value = '';
            document.getElementById('de').value = '';
            document.getElementById('ate').value = '';
            document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum ate agora </label>';
            alterarStatusBotaoReiniciar()
        }
}
