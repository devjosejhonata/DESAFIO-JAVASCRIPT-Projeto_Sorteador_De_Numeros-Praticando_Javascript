
// Função principal para sortear os números
function sortear() {

    // Obtém os valores digitados pelo usuário e os converte para números inteiros
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Calcula o total de números disponíveis no intervalo definido pelo usuário
    let totalNumerosDisponiveis = ate - de + 1;

    // Verifica se a quantidade solicitada é maior do que o total de números disponíveis
    // Se for, exibe uma mensagem de erro e interrompe a execução da função
    if (quantidade > totalNumerosDisponiveis) {
        alert(`Erro: Não é possível sortear ${quantidade} números de um intervalo que possui apenas ${totalNumerosDisponiveis} números disponíveis.`);
        return; // Para a execução da função para evitar erros
    }

    let sorteados = [];// Array para armazenar os números sorteados
    let numero;

    // Loop para sortear os números
    for (let i = 0; i < quantidade; i++) {

        // Sorteia um número aleatório dentro do intervalo especificado
        numero = obterNumeroAleatorio(de, ate);

        // Verifica se o número já foi sorteado
        // Se sim, continua sorteando até encontrar um número não repetido
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        // Adiciona o número sorteado à lista de sorteados
        sorteados.push(numero);
    }

    // Exibe os números sorteados na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    // Altera o status do botão de reiniciar
    alterarStatusBotao();
}

// Função para obter um número aleatório entre 'min' e 'max' (inclusive)
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar o status do botão de reiniciar
// Habilita ou desabilita o botão de acordo com a situação atual
function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        // Se o botão está desabilitado, habilita-o
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        // Se o botão está habilitado, desabilita-o
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar o sorteio, limpando os campos de entrada e o resultado
function reiniciar() {
    
    // Limpa os valores dos campos de entrada
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Reseta o texto exibido na área de resultados
    document.getElementById('resultado').innerHTML = `
       <label class="texto__paragrafo">Números sorteados: nenhum até agora</label>
    `;

    // Altera o status do botão de reiniciar
    alterarStatusBotao();
}
