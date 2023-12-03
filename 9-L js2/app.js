const btns=document.querySelectorAll('button')
const olTag=document.querySelector('ol')

const url='https://api.sampleapis.com/movies'
console.log(url)


const api={
    mystery:'/mystery',
    animation:'/animation',
    classic:'/classic',
    comedy:'/comedy',
    drama:'/drama',
    horror:'horror',
    family:'/family',
    western:'/western'

}



async function getMystery(){
    const res=await fetch(url+api.mystery)
    const data=await res.json()
    console.log(data);
    renMovies(data)
}
btns[0].onclick=()=>{
    getMystery()

}


async function getAnimation(){
    const res=await fetch(url+api.animation)
    const data=await res.json()
    console.log(data);
    renMovies(data)
}
btns[1].onclick=()=>{
    getAnimation()

}

async function getClassic(){
    const res=await fetch(url+api.classic)
    const data=await res.json()
    console.log(data);
    renMovies(data)
}
btns[2].onclick=()=>{
    getClassic()

}


async function getComedy(){
    const res=await fetch(url+api.comedy)
    const data=await res.json()
    console.log(data);
    renMovies(data)
}
btns[3].onclick=()=>{
    getComedy()
}


async function getDrama(){
    const res=await fetch(url+api.drama)
    const data=await res.json()
    console.log(data);
    renMovies(data)
}
btns[4].onclick=()=>{
    getDrama()
}

async function getwestern(){
    const res=await fetch(url+api.western)
    const data=await res.json()
    console.log(data);
    renMovies(data)
}
btns[5].onclick=()=>{
    getwestern()
}


function renMovies(massive){
    olTag.innerHTML=''
    for (const movi of massive) {
        olTag.innerHTML+=`
        <h2>${movi.title}</h2> <br>
        <img  width='20%'src=${movi.posterURL}  alt="" />
        
        
        
        `
        
    }
}
