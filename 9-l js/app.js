const inputText=document.getElementById('text')
const addBtn=document.getElementById('addBtn')
const list=document.getElementsByClassName('list')[0]

addBtn.onclick=()=>{
    if(inputText.value.length>0){
        let liTag= document.createElement('li')
        list.appendChild(liTag)
        liTag.innerText=inputText.value
        inputText.value=''

        let delBtn=document.createElement('button')
        liTag.appendChild(delBtn)
        delBtn.innerHTML='D'
        delBtn.onclick=()=>{
            liTag.remove()
        }

        let dOBtn=document.createElement('button')
        liTag.appendChild(dOBtn)
        dOBtn.innerHTML='!'
        dOBtn.onclick=()=>{
        liTag.style.color='red'
        liTag.style.fontWeight = 'bold'
        
        }
    }else{
        inputText.style.borderColor='red'
    }
}

        






















