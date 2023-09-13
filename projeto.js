// Array com os valores do salário mínimo de 2010 a 2020
const salariosMinimos = [510, 545.0, 622.0, 678.0, 724.0, 788.0, 880.0, 937.0, 1000.0, 1045.0, 1072.0];

// Array com os valores da inflação do IPCA de 2010 a 2020 (em percentagem)
const ipcas = [5.91, 6.5, 5.84, 6.5, 5.84, 6.41, 5.9, 6.29, 4.31, 4.52, 5.01];

let rs = "R$";

// Função para listar Salários Mínimos
function listarSalariosMinimos() {
    const output = document.getElementById('output-text');
    output.innerHTML = ''; // Limpa qualquer conteúdo anterior

    for (let ano = 2010; ano <= 2020; ano++) {
        let salarioMinimo = salariosMinimos[ano - 2010];
        if (typeof salarioMinimo === 'number') {
            output.innerHTML += `Ano ${ano.toString().padStart(10, ".")} | Salário Mínimo ${rs.padStart(10, ".")} ${salarioMinimo.toFixed(2)}\n`;
        } else {
            output.innerHTML += `${ano} Valor não disponível\n`.padStart(5, ".");
        }
    }
}

// Função para listar IPCA
function listarIPCA() {
    const output = document.getElementById('output-text');
    output.innerHTML = ''; // Limpa qualquer conteúdo anterior

    for (let ano = 2010; ano <= 2020; ano++) {
        let ipca = ipcas[ano - 2010];
        if (typeof ipca === 'number') {
            output.innerHTML += `Ano ${ano.toString().padStart(10, ".")} | IPCA ${ipca.toFixed(2).padStart(10, ".")}%\n`;
        } else {
            output.innerHTML += `${ano} | Valor não disponível\n`.padStart(5, ".");
        }
    }
}

// Função para comparar crescimento
function compararCrescimento() {
    const output = document.getElementById('output-text');
    output.innerHTML = ''; // Limpa qualquer conteúdo anterior

    for (let ano = 2010; ano <= 2020; ano++) {
        let salarioMinimo = salariosMinimos[ano - 2010];
        let ipca = ipcas[ano - 2010];
        if (typeof salarioMinimo === 'number' && typeof ipca === 'number') {
            let percentualCrescimento = ((salarioMinimo / salariosMinimos[0]) - 1) * 100;
            output.innerHTML += `Ano ${ano.toString().padStart(10, ".")} | Salário Mínimo ${rs.padStart(10, ".")} ${salarioMinimo.toFixed(2)} | IPCA ${ipca.toFixed(2).padStart(10, ".")}% | Crescimento ${percentualCrescimento.toFixed(2).padStart(10, ".")}%\n`;
        } else {
            output.innerHTML += `${ano} Valores não disponíveis\n`.padStart(10, ".");
        }
    }
}
