async function getPosts() {
    try {
        let response = await fetch("https://blog-api-3e85.onrender.com/blog/posts");
        let posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export { getPosts };