const listaClientes = async () => {
   const resposta = await fetch(`http://localhost:3000/profile`)
   if (resposta.ok) {
      return resposta.json()
   }
   throw new Error('Não foi possível listar os clientes')
}

const criaCliente = async (nome, email) => {
   const resposta = await fetch(`http://localhost:3000/profile`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         nome: nome,
         email: email
      })
   })
   if (resposta.ok) {
      return resposta.body
   }
   throw new Error('Não foi possível listar os clientes')
}

const removeCliente = (id) => {
   return fetch(`http://localhost:3000/profile/${id}`, {
      method: 'DELETE',
   })
}

const detalhaCliente = (id) => {
   return fetch(`http://localhost:3000/profile/${id}`)
   .then(resposta => {
      return resposta.json()
   }) 
}

const atualizaCliente = (id, nome, email) => {
   return fetch(`http://localhost:3000/profile/${id}`, {
      method: "PUT",
      headers: {
         'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
         nome: nome,
         email: email
      })
   })
   .then(resposta => {
      return resposta.json()
   })
}


export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente, 
  atualizaCliente
}
