async function getPost(id) {
    try {
        let response = await fetch(`https://blog-api-3e85.onrender.com/blog/posts/${id}`);
        let { post, allCommentsToAPost } = await response.json();
        return { post, allCommentsToAPost, id };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export { getPost };