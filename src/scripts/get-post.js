async function getPost(id) {
    try {
        let response = await fetch(`http://localhost:3000/blog/posts/${id}`);
        let { post, allCommentsToAPost } = await response.json();
        return { post, allCommentsToAPost, id };
    } catch (error) {
        console.log(error);
    }
};

export { getPost };