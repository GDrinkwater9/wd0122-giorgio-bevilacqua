
        let tbody = document.querySelector('#utenti')
        tbody.classList.add('tbody')

        fetch("/json/users.json")
        .then(res => res.json())
        .then(res => {
            
            console.log(res);
            for(let utente of res){
                    

                let tr = document.createElement('tr')
                

                let tdUsername = document.createElement('td')
                tdUsername.innerHTML = utente.username
    
                let tdNome = document.createElement('td')
                tdNome.innerHTML = utente.firstName
    
                let tdCognome = document.createElement('td')
                tdCognome.innerHTML = utente.lastName

                let tdGender = document.createElement('td')
                tdGender.innerHTML = utente.gender
                
                let tdEmail = document.createElement('td')
                tdEmail.innerHTML = utente.email 

                let tdPhoto1 = document.createElement('td')
                tdPhoto1.innerHTML = `<img src=" ${utente.profileURL}" width=50px>`

                tr.append(tdUsername,tdNome,tdCognome,tdGender,tdEmail,tdPhoto1)

                                
                tbody.append(tr)
            }
        })
        
       
        
 