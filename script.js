// let windowIsShown = false;

function dontAccept() {
    let window = document.getElementById('hidden-1');
    let hidden = window.getAttribute("hidden");
    if (hidden) {
        window.removeAttribute("hidden");
    }
}
function Accept() {
    let window = document.getElementById('hidden-2');
    let hidden = window.getAttribute("hidden");
    if (hidden) {
        window.removeAttribute("hidden");
    }
}

function No() {
    let window = document.getElementById('notSure');
    let hidden = window.getAttribute("hidden");
    if (hidden) {
        window.removeAttribute("hidden");
    }
}

function Yes() {
    let window = document.getElementById('Sure');
    let hidden = window.getAttribute("hidden");
    if (hidden) {
        window.removeAttribute("hidden");
    }
}


function proceedToWebsite() {
    let window = document.getElementById('hacked-1');
    let hidden = window.getAttribute("hidden");
    if (hidden) {
        window.removeAttribute("hidden");
    }
}

// Event listener on captcha form

function check() {
    let a = document.getElementById("answer");
    if ((a.value == "Ekmek") || (a.value == "ekmek") || (a.value == "EKMEK")) {
        location.reload();
        // document.getElementById('Sure').innerHTML = 'correct';
    }
    else {
        // document.getElementById('answer').innerHTML = 'wrong';
        let window = document.getElementById('error');
        let hidden = window.getAttribute("hidden");
        if (hidden) {
            window.removeAttribute("hidden");
        }
    }
}


// const answer = document.getElementById("answer")
// const form = document.getElementById('Sure')
// const errorElement = document.getElementById('error')


// form.addEventListener('button', (e) => {
//     let messages = []
//     console.log('pushed')
//     // if (answer.value === '' || answer.value == null) {
//     //     messages.push('Input is required')
//     // }

//     if ((answer.value != "ekmek") || (answer.value != "Ekmek") || (answer.value != "EKMEK")) {
//         messages.push('Wrong!')
//         console.log('wrong')
//     }

//     if (messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//     }


// })

    // if ((a.value == "ekmek") || (a.value == "Ekmek") || (a.value == "EKMEK")) {
    //     document.getElementById('confirm').innerHTML = 'correct';
    // }
    // else {
    //     document.getElementById('confirm').innerHTML = 'wrong';

    // }


