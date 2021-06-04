const loginBtn = document.getElementById('login-btn')

loginBtn.addEventListener("click", async function (event) {
    event.preventDefault()
    const usernameEl = document.getElementById('username-input-login');
    const passwordEl = document.getElementById('password-input-login')

    const res = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        document.location.replace('/dashboard');
        // console.log("Good response")
        // console.log(res)
    } else {
        console.log(res)
        alert("Failed to login")

    }
})


// const loginFormHandler = async function (event) {
//     event.preventDefault();

//     const usernameEl = document.querySelector('#username-input-login');
//     const passwordEl = document.querySelector('#password-input-login');

//     const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({
//             username: usernameEl.value,
//             password: passwordEl.value,
//         }),
//         headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         console.log(response)
//         alert('Failed to login');
//     }
// };

// document
//     .querySelector('#login-form')
//     .addEventListener('submit', loginFormHandler);
