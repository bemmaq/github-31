const ulTag=document.querySelector('ul')
const btns=document.querySelectorAll('button')
const inputs=document.querySelectorAll('input')
const url='https://reqres.in/api/users?page=2'

const delurl='https://reqres.in/api/users/'
const api='https://656d6517bcc5618d3c231c43.mockapi.io/drama'

const clurl='https://6558bde3e93ca47020a9ab8a.mockapi.io/clothes'







async function getUsers(){
    const res=await fetch(api)
    const data=await res.json()
    console.log(data);
    renderUsers(data);
    
}
btns[0].onclick=()=>{
    getUsers()
}

function renderUsers(arr){
    ulTag.innerHTML=''
    for (const user of arr) {
        ulTag.innerHTML+=`
        <li>
        <h4 onclick='delUsers(${user.id})'> Name:${user.name}</h4>
        <img  width:'30%'  onclick='changeUsers(${user.id})' width='30%'src=${user.avatar} />
        
        </li>
        `
        
    }
}


async function delUsers(id){
   
    const res=await fetch(clurl+'/'+id,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json; charset=UTF-8'
        }

        
    })
    const data=await res.json()
    console.log(data);
    renderUsers(data)
   
}
btns[1].onclick=async()=>{
    const newUsers={
        name:inputs[0].value,
        avatar:inputs[1].value,
    }
    const res=await fetch(clurl,{
        method:'POST',
        body:JSON.stringify(newUsers),
        headers:{
            'Content-type':'application/json; charset=UTF-8'
        }
    })
    const data=await res.json()
    console.log(data);

}

async function changeUsers(id){
    const newName=prompt('Enter your name')
    const newAvatar=prompt('Enter your avatar')
    const res=await fetch(api+`/${id}`,{
        method:"PUT",
        body: JSON.stringify({name:newName,avatar:newAvatar}),
        headers:{
            'Content-type':'application/json; charset=UTF-8'
        }
    })
}




