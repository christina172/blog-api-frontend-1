import format from 'date-fns/format';

const postsContainer = document.querySelector(".posts-container");

const isPublished = (post) => post.published === true;

const displayError = function (err) {
    postsContainer.innerHTML = "";
    postsContainer.textContent = "Something went wrong.";
    console.log(err);
};

function displayPosts(posts) {
    if (posts && posts.some(isPublished)) {
        postsContainer.textContent = "";
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            if (post.published) {
                const postContainer = document.createElement("div");
                postContainer.classList.add("post-container");
                const postInfo = document.createElement("div");
                postInfo.classList.add("post-info");
                const postLink = document.createElement("a");
                postLink.classList.add("post-link");
                postLink.setAttribute("href", `post.html?id=${post._id}`);
                postLink.textContent = "View";
                const postTitle = document.createElement("h3");
                postTitle.classList.add("post-title");
                postTitle.textContent = post.title;
                const postText = document.createElement("p");
                postText.classList.add("post-text-preview");
                postText.textContent = post.text;
                const postDate = document.createElement("p");
                postDate.textContent = `Published on ${format(new Date(post.timestamp), "PPPp")}`;
                postDate.classList.add("post-date");
                postInfo.append(postTitle, postText, postDate);
                postContainer.append(postInfo, postLink);
                postsContainer.append(postContainer);
            }
        });
    } else {
        postsContainer.innerHTML = "";
        postsContainer.textContent = "There are no published posts.";
    }
};

export { displayError, displayPosts };