const logout = async function () {
    console.log("you pressed the logout button")
    const res = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
};

document
    .querySelector('#logout-btn')
    .addEventListener('click', logout)