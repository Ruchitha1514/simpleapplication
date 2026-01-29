const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () =>
  fetch(`${BASE_URL}/posts`).then((res) => res.json());

export const fetchUsers = () =>
  fetch(`${BASE_URL}/users`).then((res) => res.json());

export const fetchPostById = (id) =>
  fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());

export const fetchUserById = (id) =>
  fetch(`${BASE_URL}/users/${id}`).then((res) => res.json());

export const fetchCommentsByPostId = (id) =>
  fetch(`${BASE_URL}/posts/${id}/comments`).then((res) => res.json());
