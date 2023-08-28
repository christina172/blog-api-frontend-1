async function getPosts() {
    try {
        let response = await fetch("http://localhost:3000/blog/posts");
        let posts = await response.json();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export { getPosts };