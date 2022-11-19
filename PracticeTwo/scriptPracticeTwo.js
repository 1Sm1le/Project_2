let array = []

function compare(){
    if(list.children.length === 0){
        list.style.display = 'none'
    }
    else if(list.children.length !== 0){
        list.style.display = 'block'
    }
}
compare()

function add(){
    if(array.includes(+textInput.value) || array.includes(textInput.value)){
        alert('Вы повторно ввели уже имеющееся значение')
    }
    else if(textInput.value != '' &&  textInput.value != +textInput.value){
        array.push(textInput.value)
    }   
    else if(textInput.value != '' &&  textInput.value == +textInput.value){
        array.push(+textInput.value)
    }      
    
    
    showList()
    console.log(array)
}


function showList(){
    list.innerHTML = '' 
    array.forEach((item)=>{
        let li = document.createElement('li')
        let span = document.createElement('span')

        list.appendChild(li)
        li.appendChild(span)

        span.innerText = item       
        textInput.value = ''

        let remove = document.createElement('button')
        
        li.appendChild(remove)
    })
    
    let deleteButton = document.querySelectorAll('li button')
    deleteButton.forEach((item) =>{
        item.addEventListener('click',function(event){
        event.target.parentElement.remove() 

        let i = event.target.previousElementSibling.innerText
        
        array = array.filter((item) =>{
            return item != i ? item : null
        })
        console.log(array)
        
        compare()
        })
    })
    compare()
}
showList()

let toggle = true

sortButton.addEventListener('click', function(){      
    if(toggle === true){            
        array = array.sort(function(a,b){ 
            if(a < b ){
            return 1;
            }else{
            return -1;
            }
        })
        toggle = false   
    }
    else if(toggle === false){    
        array = array.sort(function(a,b){
            if(a > b ){
                return 1;
            }else{
                return -1;
            }
        }) 
        toggle = true
    }   
    showList()
    console.log(array)
})

document.addEventListener('keyup',function(event){
    if (event.key === 'Enter') {
        return add(); 
    }else{
        return null;
    }
})

button.addEventListener('click', add)