function adicionarLivro(livroId) {
    const rotaControlador = "/adicionarLivro";

    fetch(rotaControlador, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ livroId: livroId }),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Exemplo: "Livro adicionado com sucesso!"
    })
    .catch(error => {
        console.error("Erro ao adicionar livro:", error);
    });
}
