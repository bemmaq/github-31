// // //CRUD Create-POST ({JSON.stringify()}), Read-GET, Update-PUT, Delete-DELETE

// const inputs=document.querySelectorAll('input')
// const add=document.querySelector('button')
// const ulTag=document.querySelector('ul')

// // const url='https://6558bde3e93ca47020a9ab8a.mockapi.io/clothes'

// // add.onclick=async()=>{
    
// //     if (inputs[0].value.trim().length<=0 && inputs[1].value.trim().length<=0) {
// //         console.log("Аватарка жок");
// //       } else {
      
// //           const newUser={
// //               name:inputs[0].value, 
// //               avatar:inputs[1].value
// //           }
          
      
// //           const res=await fetch(url, {
// //               method:'POST',
// //               body:JSON.stringify(newUser),
// //               headers: {
// //                   'Content-Type':'application/json; charset=UTF-8'
// //               }
// //           })
// //           const data=await res.json()
// //           console.log(data);
// //       }
// //       }

// // async function getUsers(){
// //     const res=await fetch(url)
// //     const data=await res.json()
// //     console.log(data);
// //     renderUsers(data);
// // }
// // getUsers()

// // function renderUsers(arr){
// //     ulTag.innerHTML=''
// //     for (const user of arr) {
// //         ulTag.innerHTML+=`
// //         <li>
// //         <h4>${user.name}</h4>
// //         <img src='${user.avatar}' />
// //         <button onclick='delUsers(${user.id})'>d</button
        
// //         >
// //         </li>
// //         `
        
      
// //     }
 
    

// //     }



// // async function delUsers(id){
// //      const res=await fetch(url+'/'+id,{
// //         method:'DELETE',
// //         headers:{
// //             'Content-type':'application/json; charset=UTF-8'
// //         }
        

        
// //     })
// //     const data=await res.json()
// //     console.log(data);
   
// // } 


// const addBtn=document.querySelector('#add-btn');
// const newTaskInput=document.querySelector('#wrapper input ');
// const taskContainer=document.querySelector('#tasks');
// const error=document.getElementById('error');
// const countValue=document.querySelector('.count-value ')

// let taskCount=0;

// const displayCount=(taskCount)=>{
//     countValue.innerHTML=taskCount;

// };

// const addTask=()=>{
//     const taskName=newTaskInput.value.trim();
//     error.style.display="none";
//     if(!taskName){
//         setTimeout(()=>{
//             error.style.display="block";

//         },200);
//         return;
//     }
//     const task=`
//     <div class="task">
//     <input type="checkbox" class="task-check">
//     <span class="taskname">${taskName}</span>
//     <button class="edit">
//     <i class="fa-solid fa-pen-to-square"></i>
//     </button>
//     <button class="delete">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//     </div>
//     `;
//     taskContainer.insertAdjacentHTML("beforeend", task)

//     const deleteButtons=document.querySelectorAll(".delete")
//     deleteButtons.forEach(button=>{
//         button.onclick=()=>{
//             button.parentNode.remove();
//             taskCount -=1;
//             displayCount(taskCount);
//         }
//     });
//     const editButtons=document.querySelectorAll(".edit");
//     editButtons.forEach((editBtn) =>{
//         let targetElement=e.target;
//         if(!(e.target.className== "edit")){
//             targetElement=e.target.parentElement;
//         }
//         newTaskInput.value = targetElement.previousElementSibling?.innerText;
//         targetElement.parentNode.remove();
//         taskCount -= 1;
//         displayCount(taskCount)
//     })
//     const taskCheck=document.querySelectorAll(".task-check")
//     taskCheck.forEach((checkBox) =>{
//         checkBox.nextElementSibling.classList.toggle("completed");
//         if(checkBox.checked){
//             taskCount -= 1;
//         } else{
//             taskCount += 1;
//         }
//         displayCount(taskCount)
//     })
//     taskCount += 1;
//     displayCount(taskCount)
//     newTaskInput.value="";

// }


// addBtn.onclick=()=>{
//   addTask()
// }

// window.onload=()=>{
//     taskCount= 0;
//     displayCount(taskCount);
//     newTaskInput.value.
// }









const addBtn=document.querySelector('#add-btn');
const newTaskInput=document.querySelector('#wrapper input ');
const taskContainer=document.querySelector('#tasks');
const error=document.getElementById('error');
const countValue=document.querySelector('.count-value ')

let taskCount=0;

const displayCount=(taskCount)=>{
    countValue.innerHTML=taskCount;

};

const addTask=()=>{
    const taskName=newTaskInput.value.trim();
    error.style.display="none";
    if(!taskName){
        setTimeout(()=>{
            error.style.display="block";

        },200);
        return;
    }
    const task=`
    <div class="task">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>
    `;
    taskContainer.insertAdjacentHTML("beforeend", task)

    const deleteButtons=document.querySelectorAll(".delete")
    deleteButtons.forEach(button=>{
        button.onclick=()=>{
            button.parentNode.remove();
            taskCount -=1;
            displayCount(taskCount);
        }
    });
    const editButtons=document.querySelectorAll(".edit");
    editButtons.forEach((editBtn) =>{
        editBtn.onclick=(e)=>{

            let targetElement=e.target;
            if(!(e.target.className == "edit")){
                targetElement = e.target.parentElement;
            }
            newTaskInput.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount)
        }
    })
    const taskCheck=document.querySelectorAll(".task-check")
    taskCheck.forEach((checkBox) =>{
        checkBox.nextElementSibling.classList.toggle("completed");
        if(checkBox.checked){
            taskCount -= 1;
        } else{
            taskCount += 1;
        }
        displayCount(taskCount)
    })
    taskCount += 1;
    displayCount(taskCount)
    newTaskInput.value="";

}


addBtn.onclick=()=>{
  addTask()
}

window.onload=()=>{
    taskCount= 0;
    displayCount(taskCount);
    newTaskInput.value="";
}