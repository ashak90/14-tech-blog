const postId = document.querySelector('input[name="post-id"]').value;

const editPostHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    document.location.replace('/dashboard')
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editPostHandler);