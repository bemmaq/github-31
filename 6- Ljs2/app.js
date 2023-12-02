const btn=document.querySelector('button')
const ol=document.querySelector('ol')
const src=document.querySelector('img')
const spinner=document.querySelector('#spin')

const users=[
    {name:'Макбук', year:2023, core:'i5', version:14.1,img:'https://www.cnet.com/a/img/resize/f9fbf5deab6aeb929c5de5eb526dcc00438a793d/hub/2022/06/06/c720403b-ca1b-4b03-95f0-2042eebc74ac/img-0413.jpg?auto=webp&fit=crop&height=1200&width=1200'},
    {name:'Hp', year:2019, core:'i7', version:11,img:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08227647.png'},
    {name:'Asus', year:2022, core:'i4', version:13,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNmUsHW2DJ7kBrbqbdfkxI31MujBU2mCtRQ&usqp=CAU'},
    {name:'Huawei', year:2021, core:'i5', version:10,img:'https://www.ixbt.com/img/r30/00/02/50/36/IMG0338.jpg'},
    {name:'Lenovo', year:2020, core:'i3', version:7,img:'https://it-mix.by/wp-content/uploads/2023/03/remont-noutbukov-v-breste-lenovo2.jpg'},
]



function getUsers(isData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(isData){
                resolve(users)
            } else {
                reject('Kata')
            }
        }, 5000)
    })
}

btn.onclick=()=>{
    spinner.style.display='block'
    getUsers(true)
        .then((massive)=>{
            console.log(massive);
            showUsers(massive)
        })
        .catch((err)=>{
            console.error(err);
        })
        .finally(()=>{
            
            spinner.style.display='none'
            
        })
}

function showUsers(array){
    ol.innerHTML=''
    for (const user of array) {
        ol.innerHTML+=`
        <li style='color:indigo'>${user.name}<br> ${user.year}-year<br> core- ${user.core}<br> version- ${user.version}</li>
        <img src=${user.img}  width="200px">
        <h6 style='color:blue'> </h6>
        ` 
    }
}