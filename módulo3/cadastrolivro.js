const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let livros = []
exibirMenu()

function exibirMenu() {
	console.log(`
Menu:
1. Cadastrar livro
2. Listar livro
3. Editar Livro
4. Remover Livro
	`)
}

rl.question('Escolha uma opção: ', (opcao) => {
    switch (opcao) {
        case '1':
            cadastrarLivro()
            break
        case '2':
            listarLivro()
                break
        case '3':
            editarLivro()
            break
        case '4':
            removerLivro()
            break
        default:
            console.log('Opção inválida, tente novamente.')
            exibirMenu()
            break
    }
})
// cadastrar livro
function cadastrarLivro() {
	rl.question('Digite o nome do livro: ', (nome) => {
		rl.question('Digite o autor do livro: ', (autor) => {
			rl.question('Digite a categoria do livro: ', (categoria) => {
				livros.push({ nome: nome, autor: autor, categoria: categoria })
				console.log('Livro cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
    
}
//listar livro
function listarLivro() {
    for (let i = 0;i < livros.length; i++){
        console.log(livros[i])
    }
    exibirMenu()
}