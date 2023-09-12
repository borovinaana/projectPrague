let inputName = document.getElementById('nameInput');
let lastNameInput = document.getElementById('lastNameInput');
let posalji = document.getElementById('submit');
let email = document.getElementById('email');
let message = document.getElementById('field5');


posalji.addEventListener("click", function () {
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    let select = document.getElementById('field4');
    let value = select.options[select.selectedIndex].value;

    if (inputName.value == '') {
        alert("Morate uneti podatke za ime")
        return false
    } else if (lastNameInput.value == '') {
        alert("Morate uneti podatke za prezime")
        return false
    } else if (validateEmail(email.value) == false) {
        alert("Morate uneti podatke za Email")
        return false
    } else if (message.value == '') {
        alert("Morate uneti poruku")
        return false
    } else {
        alert(`Podaci su sledeci: \nIme i prezime: ${inputName.value} ${lastNameInput.value} \nVasa poruka je: ${message.value} \nVasa Email adresa je: ${email.value} \nSadrzaj poruke koju ste poslali je: ${message.value}`)
        alert('Poslali ste uspesno podatke')
    }
});

$(document).ready(function () {
    var max_length = 150;
    $('textarea').keyup(function () {
        var len = max_length - $(this).val().length;
        $('.GFG').text(len);
    });

});

