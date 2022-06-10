export interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const API_END_POINT = "https://jsonplaceholder.typicode.com";

export async function getAllPosts(): Promise<Post[]> {
  return fetch(`${API_END_POINT}/posts`).then((resp) => resp.json());
}

export async function getCommentsByPostId(postId: number): Promise<Comment[]> {
  return fetch(`${API_END_POINT}/posts/${postId}/comments`).then((resp) =>
    resp.json()
  );
}

export async function sendPost(post: Post): Promise<Post> {
  return fetch(`${API_END_POINT}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  }).then((resp) => resp.json());
}
