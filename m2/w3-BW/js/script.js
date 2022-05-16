let tbody = document.querySelector('#utenti')
let thead = document.querySelector('#thead')

fetch("http://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(res =>{

    for(let utente of res){

        
        let tr = document.createElement('tr')
        
        let tdId = document.createElement('td')
        tdId.innerHTML = utente.id

        let tdNome = document.createElement('td')
        tdNome.innerHTML = utente.name

        let tdUsername = document.createElement('td')
        tdUsername.innerHTML = utente.username

        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = utente.email 

        
        let vedi = document.createElement('button')
        vedi.classList.add('btn','bg-info')
        vedi.innerHTML = 'View'
        
        let modifica = document.createElement('button')
        modifica.classList.add('btn','bg-warning','my-2')
        modifica.innerHTML = 'Edit'
        
        let elimina = document.createElement('button')
        elimina.classList.add('btn','bg-danger','text-white',)
        elimina.innerHTML = 'Delete'

        let rowButton = document.createElement('div')
        rowButton.classList.add('row')

        rowButton.append(vedi,modifica,elimina)

        tr.append(tdId,tdNome,tdUsername,tdEmail,rowButton)

        tbody.append(tr)

    }
})
