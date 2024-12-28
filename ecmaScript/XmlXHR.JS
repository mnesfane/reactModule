const Xhr = new XMLHttpRequest();
Xhr.open("GET", "https://api.github.com/users/elzerowebschool/repos");
Xhr.send();
console.log(Xhr)

Xhr.onreadystatechange = () =>{
    console.log(this.readyState)
    console.log(this.status)

    if(this.readyState === 4 && this.status ===  200){
        console.log('monef' + this.responseText)
        let jsData = JSON.parse(this.responseText)
        console.log(jsData)
        for(let data of jsData){
            let div = document.createElement('div')
            div.innerHTML = data.name
            document.body.appendChild(div)
        }
    }
}