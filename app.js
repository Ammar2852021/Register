let _name = document.getElementById('name');
let sentence = "";

_name.addEventListener('input', function() {
    sentence = _name.value;
});

_name.addEventListener('blur', function() {
    if (sentence === "") {
        console.log('no');
    } else {
        console.log('done');
    }
});


let p_Login = document.getElementById('p_Login');
let p_Signup = document.getElementById('p_Signup');

p_Login.addEventListener('click', function() {
    document.getElementById('signup').classList.remove('active');
    document.getElementById('signup').classList.add('inactive');
    document.getElementById('login').classList.remove('inactive');
    document.getElementById('login').classList.add('active');
});

p_Signup.addEventListener('click', function() {
    document.getElementById('login').classList.remove('active');
    document.getElementById('login').classList.add('inactive');
    document.getElementById('signup').classList.remove('inactive');
    document.getElementById('signup').classList.add('active');
});

