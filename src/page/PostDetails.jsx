import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchPostById,
  fetchUserById,
  fetchCommentsByPostId,
} from "../api/api";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchPostById(id).then((data) => {
      setPost(data);
      fetchUserById(data.userId).then(setUser);
    });

    fetchCommentsByPostId(id).then(setComments);
  }, [id]);

  if (!post || !user) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <h3>Author Details</h3>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>

      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: 10 }}>
          <p>
            <b>{comment.email}</b>
          </p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetails;
