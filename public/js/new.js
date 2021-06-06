const newPostHandler = async function (event) {
    event.preventDefault();
    // console.log("you pressed the submit button")
    const title = document.querySelector('input[name ="post-title"]').value;
    const body = document.querySelector('[name="post-body"]').value;

    await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    document.location.replace('/dashboard')
};

document
    .querySelector('#new-post')
    .addEventListener('submit', newPostHandler)