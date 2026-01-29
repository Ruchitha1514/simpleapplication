import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { posts, users } = useAppContext();

  const getUserName = (userId) =>
    users.find((user) => user.id === userId)?.name || "Unknown";

  return (
    <div style={{ padding: 20 }}>
      <h1>Posts</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>
            <b>Author:</b> {getUserName(post.userId)}
          </p>

          <Link to={`/post/${post.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
