
//Mostrar Senha
const senhaInput = document.querySelector(".senha");
const conSenhaInput = document.querySelector(".conSenha");
        const mostrarSenhaCheckbox = document.querySelector(".mostrarSenha");

        mostrarSenhaCheckbox.addEventListener("change", function () {
            senhaInput.type = this.checked ? "text" : "password";
            conSenhaInput.type = this.checked ? "text" : "password";
        });


// Função para formatar o CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o traço
    return cpf;
}

// Adiciona um ouvinte de evento de entrada ao campo de CPF
const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", function () {
    this.value = formatarCPF(this.value);
});

//formatação do input do telefone
const telefoneInput = document.getElementById("telefone");

        telefoneInput.addEventListener("input", function () {
            let value = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos
            if (value.length > 2) {
                value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
            }
            if (value.length > 10) {
                value = `${value.substring(0, 10)}-${value.substring(10, 14)}`;
            }
            this.value = value;
        });

