// Função para gerar uma senha aleatória
function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const senha = [];
    const comprimentoSenha = 16;

    for (let i = 0; i < comprimentoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha.push(caracteres.charAt(indiceAleatorio));
    }

    return senha.join('');
}

document.getElementById('gerarSenha').addEventListener('click', function() {
    const senhaGerada = gerarSenha();
    document.getElementById('senhaGerada').textContent = `Senha Gerada: ${senhaGerada}`;
});
