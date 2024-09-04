let value=0;

function decrease(){
    value++
    const output = document.querySelector(".value").innerHTML = `${value}`
}

function increase(){
    value--
    const output2 = document.querySelector(".value").innerHTML = `${value}`
}

function reset(){
    value = 0;
    const output3 = document.querySelector(".value").innerHTML = `${value}`
}
