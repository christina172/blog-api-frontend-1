import "../styles/index.css";
import { getPosts } from "./get-posts";
import { displayError, displayPosts } from "./display-posts";

getPosts().then(displayPosts).catch(displayError);