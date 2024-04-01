document.getElementById("respostaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var resposta = document.getElementById("resposta").value;
    
    enviarRespostaParaGitHub(resposta);
    
    document.getElementById("resposta").value = "";
});
function enviarRespostaParaGitHub(resposta) {
    var token = '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'; 
    var owner = 'Acoonlost'; 
    var repo = 'foryou'; 
    var path = 'resposta.txt'; 
    var content = btoa(resposta); 
    fetch(https://api.github.com/repos/${owner}/${repo}/contents/${path}, {
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
