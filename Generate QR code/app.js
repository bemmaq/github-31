// const wrapper=document.querySelector(".wrapper")
// grInput=wrapper.querySelector(".form input")
// generateBtn=wrapper.querySelector(".form button")
// grImg=wrapper.querySelector(".qr_code img")
// let preValue;

// generateBtn.addEventListener("click", ()=>{
//     let qrValue =qrInput.value.trim();
//     if(!qrValue || preValue ===qrValue) return;
//     preValue=qrValue;
//     generateBtn.innerTEXT="Generating QR code...";
//     qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
//     qrImg.addEventListener("load",()=>{
//         wrapper.classList.add("active");
//         generateBtn.innerTEXT="Generate QR Code";


//     });
// });

// qrInput.addEventListener("keyup", ()=>{
//     if(!qrInput.value.trim()){
//         wrapper.classList.remove("active");
//         preValue="";
//     }
// });

const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr_code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
