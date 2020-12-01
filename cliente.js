class Cliente {
    constructor(){
        this.clientes = localStorage.getItem('tbClientes') === null
                        ? []
                        : JSON.parse(localStorage.getItem('tbClientes'))
    }
    /*salva(cliente){
         this.clientes.push(cliente) //adiciona um novo elemento ao array
         alert('Cliente salvo com Sucesso!')
         localStorage.setItem('tbClientes', JSON.stringify(this.clientes)) 
    }*/

    salva(cliente) {
        this.clientes.push(cliente)
        localStorage.setItem("tbClientes", JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')
        this.limpa()
        return true
    }

  
    edita(cliente){
        document.getElementById('nome').value = cliente.nome
        document.getElementById('rg').value = cliente.rg 
        document.getElementById('datadenascimento').value = cliente.datadenascimento
        document.getElementById('endereco').value = cliente.endereco
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        document.getElementById('celular').value = cliente.celular
        document.getElementById('cpf').value = cliente.cpf
        document.getElementById('cep').value = cliente.cep
        document.getElementById('uf').value = cliente.uf
        document.getElementById('email').value = cliente.email
        document.getElementById('observacoes').value = cliente.observacoes
        
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente=> cliente.codigo == codigo)
        this.clientes.splice(index, 1) //splice remove o item do índice do array
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }
    lista(){
        const listagem = this.clientes.map((cliente) => (
            `<tr>   
                <td>${cliente.nome}</td>
                <td>${cliente.rg}</td> 
                <td>${cliente.datadenascimento}</td>      
                <td>${cliente.endereco}</td>
                <td>${cliente.bairro}</td>    
                <td>${cliente.cidade}</td>
                <td>${cliente.celular}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.cep}</td>
                <td>${cliente.uf}</td>
                <td>${cliente.email}</td>
                <td>${cliente.observacoes}</td>
                <td>
                
                <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
                🗑️Apagar </button>
                        
                <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
                📝 Editar </button>
            </td>
                
             </tr>
            `
        ))
        return(`<table border='1' class='paleBlueRows'>
        <caption>Relação de Clientes</caption>
        <thead>   
            <th>Nome</th>
            <th>Rg/IE</th>
            <th>Data de Nascimento</th>         
            <th>Endereço</th>
            <th>Bairro</th>      
            <th>Cidade</th>
            <th>Celular</th>
            <th>CPF</th>
            <th>CEP</th>
            <th>UF</th>
            <th>E-mail</th>
            <th>Observações</th> 
            <th>Opções</th>
                
        </thead>
        <tbody>${listagem}</tbody>
        </table>    
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
    

    
} 
//instanciamos um novo objeto
const cliente = new Cliente()
//tratamos o botão salvar
document.getElementById('salvar').onclick = function(){
    const registro = {
        nome: document.getElementById('nome').value,
        rg:  document.getElementById('rg').value,        
        datadenascimento: document.getElementById('datadenascimento').value,
        endereco:document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,        
        celular: document.getElementById('celular').value,
        cpf: document.getElementById('cpf').value,
        cep: document.getElementById('cep').value,
        uf: document.getElementById('uf').value,
        email: document.getElementById('email').value,
        observacoes: document.getElementById('observacoes').value,
    }
    cliente.salva(registro)
}
//tratamos a listagem
window.onload = function() {
    cliente.atualiza()
}

