import format from 'date-fns/format';

const postContainer = document.querySelector(".post-container");
const form = document.querySelector("form");

function submitComment(e, id) {
    e.preventDefault();
    const author = document.getElementById("name").value;
    const text = document.getElementById("comment-text").value;
    const checkVal = form.checkValidity();
    form.reportValidity();
    if (checkVal) {
        fetch(`https://blog-api-3e85.onrender.com/blog/posts/${id}/comments`, {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "author": author, "text": text })
        }).then(res => res.json())
            .then(res => {
                location.reload();
            });
    };
};

const displayError = function (err) {
    postContainer.textContent = "Something went wrong.";
};

function displayPost(response) {
    const { post, allCommentsToAPost, id } = response;

    const postTitle = document.querySelector(".post-title");
    postTitle.textContent = post.title;

    const postText = document.querySelector(".post-text");
    postText.textContent = post.text;

    const postDate = document.querySelector(".post-date");
    postDate.textContent = `Published on ${format(new Date(post.timestamp), "PPPp")}`;

    form.setAttribute("action", `https://blog-api-3e85.onrender.com/blog/posts/${id}/comments`);
    form.addEventListener("submit", (e) => {
        submitComment(e, id)
    });

    const comments = document.querySelector(".comments");

    if (allCommentsToAPost.length) {
        allCommentsToAPost.forEach(comment => {
            const commentContainer = document.createElement("div");
            commentContainer.classList.add("comment");
            const commentInfo = document.createElement("div");
            commentInfo.classList.add("comment-info");
            const commentAuthor = document.createElement("h4");
            commentAuthor.textContent = comment.author;
            const commentDate = document.createElement("p");
            commentDate.textContent = format(new Date(comment.timestamp), "PPPp");
            commentInfo.append(commentAuthor, commentDate);
            const commentText = document.createElement("p");
            commentText.textContent = comment.text;
            commentContainer.append(commentInfo, commentText);
            comments.append(commentContainer);
        });
    }
};

export { displayError, displayPost };