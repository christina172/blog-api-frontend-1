import "../styles/index.css";
import { getPosts } from "./get-posts-logic";
import { displayError, displayPosts } from "./get-posts-dom";

getPosts().then(displayPosts).catch(displayError);