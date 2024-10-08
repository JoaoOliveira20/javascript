/* Async e Await

 - As funções assíncronas funcionam como Promises, porém com uma sintaxe mais simples;
 - Precisamos declarar a função com a palavra async;
 - E quando precisamos aguardar por algo, a instrução precisa de await;
 - Podemos aplicar o recurso em funções anônimas e métodos de classe;
 - Tentar usar o await sem o async gera um erro;
 - Exemplo de uso: inserção de dado no banco;

*/

function primeirafuncao() {

    return new Promise((resolve) => {
        setTimeout(() => { console.log("Esperou isso aqui")
            resolve()
        },1000);
    })

}

async function segundaFuncao() {
    console.log("Iniciou")

    await primeirafuncao()

    console.log("Terminou")
}

// segundaFuncao()



// Exemplo prático
function getUser(id) {

    return fetch(`http://reqres.in/api/users?id=${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

async function showUserName(id) {

    try {

    } catch(err) {
        console.log(`erro: ${err}`)
    }

    const user = await getUser(id)

    console.log(`O nome do usuário é: ${user.data.first_name}`)

}

// showUserName(10)