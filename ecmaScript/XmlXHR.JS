const Xhr = new XMLHttpRequest();
console.log(Xhr)

let checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', (e)=>{
    if(checkbox.checked){  
        Xhr.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);
        Xhr.send();
        Xhr.onreadystatechange = () =>{
            console.log(Xhr.readyState)
            console.log(Xhr.status)
            if(Xhr.readyState === 4 && Xhr.status ===  200){
                console.log('monef' + Xhr.responseText)
                let jsData = JSON.parse(Xhr.responseText)
                let parentComponent = document.createElement('div')
                parentComponent.className = 'parentComponent'
                console.log(jsData)
                for(let data of jsData){
                    let div = document.createElement('div')
                    div.innerHTML = data.name
                    parentComponent.append(div)
                    document.body.append(parentComponent)
                }
            }
        }
    }
    else{
        let parentComponent = document.querySelector('.parentComponent')
        if(parentComponent){
            parentComponent.remove();
        }
    }
})