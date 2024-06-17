const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
exibirMenu()

function exibirMenu() {
	console.log(`
Menu:
1. Cadastrar funcionário
2. Listar funcionário
3. Exibir Maior Salário
4. Editar funcionário
5. Remover funcionário
6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
            case '2':
                listarFuncionario()
                    break
            case '3':
				exibirMaiorSalario()
				break
			case '4':
				editarFuncionario()
				break
			case '5':
				removerFuncionario()
				break
			case '6':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}
// cadastrar funcionario
function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
    
}
//listar funcionario
function listarFuncionario() {
    for (let i = 0;i < funcionarios.length; i++){
        console.log(funcionarios[i])
    }
    exibirMenu()
}


//exibir maior salario
function exibirMaiorSalario() {
	if (funcionarios.length == 0) {
	console.log('Nenhum funcionário cadastrado.')
	} else {
	let exibirMaiorSalario = funcionarios[0]
	for (let i = 1; i < funcionarios.length; i++) {
	if (funcionarios[i].salario > exibirMaiorSalario.salario) {
	exibirMaiorSalario = funcionarios[i]
	}
	}
    console.log(`funcionario com maior salario é ${exibirMaiorSalario.salario}`)
	}
	exibirMenu()
	}

	//editar funcionario
    function editarFuncionario(){
		if(funcionarios.length == 0){
		console.log('Nada cadastrado!')
		 exibirMenu()
		}else{
			console.log('Lista de funcionários')
			funcionarios.forEach((funcionarios, index) => {
			console.log(`${index + 1}. ${funcionarios.nome}`)
			})
			rl.question('Digite o número do elemento que deseja editar:', (numero) => {
				if(numero > 0 && numero <= funcionarios.length){
					rl.question('Digite o novo nome:', (nome) =>{
					rl.question('Digite o novo cargo:', (cargo) =>{
					rl.question('Digite o novo salario:', (salario) =>{
                                funcionarios[numero - 1]={
									nome,
									cargo,
									salario
								}
								console.log('Editado com sucesso!')
								exibirMenu()
						})
					})
					})
				}else{
					console.log('Numero invalido!')
					exibirMenu()
				}
			})
		}
	}

// remover funcionario
function removerFuncionario(){
     if(funcionarios.length == 0){
		console.log('Nada cadastrado!')
		exibirMenu()
	 }else{
		console.log('Lista de funcionarios')
		funcionarios.forEach((funcionarios, index) =>{
		console.log(`${index + 1}. ${funcionarios.nome}`)
		})
		rl.question('Digite o número do elemento que deseja remover:' , (numero) => {
			if (numero > 0 && numero <= funcionarios.length){
				funcionarios.splice(numero - 1, 1)
             console.log('Elemento removido com sucesso!')
             exibirMenu()
			}else{
				console.log('Numero inválido,tente novamente!')
				exibirMenu()
			}
		})
	 }
	

}