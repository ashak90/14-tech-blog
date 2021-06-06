const newPostHandler = async function (event) {
    event.preventDefault();
    // console.log("you pressed the submit button")
    const title = document.querySelector('input[name ="post-title"]').value;
    const content = document.querySelector('[name="post-content"]').value;

    await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: { 'Content-Type': 'application/json' },
    })
    document.location.replace('/dashboard')
};

document
    .querySelector('#new-post')
    .addEventListener('submit', newPostHandler)