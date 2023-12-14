const resElement = document.getElementById("res");
const input1Element = document.getElementById("San");
const input2Element = document.getElementById("san1");
const plusAdd = document.getElementById("plus");
const subAdd = document.getElementById("sub");
const munusAdd = document.getElementById("munus");
const toDiAdd= document.getElementById("toDi");
const randomAdd = document.getElementById("random");

function res(res) {
    res.textContent = res;
}
plusAdd.addEventListener("click", function() {
    const a = parseFloat(input1Element.value);
    const b = parseFloat(input2Element.value);
    updateResult(a + b);
});

subAdd.addEventListener("click", function() {
    const a = parseFloat(input1Element.value);
    const b = parseFloat(input2Element.value);
    updateResult(a - b);
});

munusAdd.addEventListener("click", function() {
    const a = parseFloat(input1Element.value);
    const b= parseFloat(input2Element.value);
    updateResult(a * b);
});

toDiAdd.addEventListener("click", function() {
    const a = parseFloat(input1Element.value);
    const b = parseFloat(input2Element.value);
    if (a !== 0) {
        updateResult(a/ b);
    } else {
        updateResult("Ошибка: ");
    }
});

randomAdd.addEventListener("click", function() {
    const a = Math.random(input1Element || input2Element) 
    const b = Math.random(input2Element) 
    updateResult(Math.random());
});













  












