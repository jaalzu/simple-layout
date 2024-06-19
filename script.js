// function validation() {
//     let form = document.getElementById('myForm');
//     let email = document.getElementById('emailInput').value;
//     let text = document.getElementById('errorText')

//     let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}%/;

//     if (email.match(pattern))
//         {
//             form.classList.add('valid')
//             form.classList.remove('invalid')
//             text.innerHTML = "your email address is valid";
//             text.style.color = "#00ff00"
//         }
//         else{
//             form.classList.remove('valid')
//             form.classList.add('invalid')
//              text.innerHTML = "Please provide a valid email";
//             text.style.color = "#ff0000"
//         }
// }.


const input = document.getElementById('emailInput')

input.addEventListener('blur',validar)

function validar(e){
    if(e.target.value.trim() ===''){
        console.log('el input email esta vacio')
    }
    else{
        console.log(e.target.value)
    }

    if(e.target.id === 'email'){
        const regex =  /^[^ ]+@[^ ]+\.[a-z]{2,3}%/
        const result = regex.test(e.target.value)

        if(result != true){
            console.log('email invalido')
        }
        else{
            console.log('el email es valido')
        }
    }
}