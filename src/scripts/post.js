import "../styles/index.css";
import "../styles/post.css";

import { getPost } from "./get-post";
import { displayError, displayPost } from "./display-post";

const url = new URL(location.href);
const postId = url.searchParams.get("id");

getPost(postId).then(displayPost).catch(displayError);