
document.querySelector('#addButton').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Вы ничего не ввели")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <span>X</span>
                </button>
            </div>`;

        var inputs = document.querySelectorAll(".delete");
        for(var i=0; i<inputs.length; i++){
            inputs[i].onclick = function(){
                this.parentNode.remove();
            }
        }

      

 
    }
}