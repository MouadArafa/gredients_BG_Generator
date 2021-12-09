let change =()=>{
    let clr1 = document.querySelector('#colorOne');
    let clr2 = document.querySelector('#colorTwo');
    let body = document.body;
    let finalValue =document.querySelector("#finalValue");
    clr1.addEventListener('input',()=>{
        body.style.backgroundImage = 'linear-gradient(to right ,'+clr1.value+','+clr2.value+')';
        finalValue.value='linear-gradient(to right ,'+clr1.value+','+clr2.value+')';
    })
    clr2.addEventListener('input',()=>{
        body.style.backgroundImage = 'linear-gradient(to right ,'+clr1.value+','+clr2.value+')';
        finalValue.value='linear-gradient(to right ,'+clr1.value+','+clr2.value+')';
    })
}
change();