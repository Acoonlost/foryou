document.getElementById("respostaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente
      
    var resposta = document.getElementById("resposta").value;
    
    // Chama a função para enviar a resposta para o GitHub
    enviarRespostaParaGitHub(resposta);
    
    // Limpa o campo de resposta
    document.getElementById("resposta").value = "";
});

function enviarRespostaParaGitHub(resposta) {
    var token = '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'; // Substitua pelo seu token de acesso pessoal
    var owner = 'Acoonlost'; // Substitua pelo seu nome de usuário do GitHub
    var repo = 'foryou'; // Substitua pelo nome do seu repositório
    var path = 'resposta.txt'; // Substitua pelo caminho do arquivo onde deseja armazenar a resposta
    var content = btoa(resposta); // Codifica a resposta para Base64
    
    fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
            'Authorization': 'token ' + token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: 'Atualizando resposta',
            content: content
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Resposta enviada com sucesso para o GitHub!');
        } else {
            console.error('Erro ao enviar resposta para o GitHub:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Erro ao enviar resposta para o GitHub:', error);
    });
}
