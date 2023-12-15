import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import { useGetPosts } from "../hooks/usePosts";
import ButtonAppBar from "../components/Navbar";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const HomePage = () => {
  const { data: posts } = useGetPosts();

  return (
    <>
      <ButtonAppBar />
      <h1>Posts</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "3rem",
          width: "90%",
          margin: "3rem auto",
        }}
      >
        {posts &&
          posts.map((post: Post, index: number) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`details/${post.id}`}
              key={post.id}
            >
              <CardComponent
                title={post.title}
                body={post.body}
                img={`https://picsum.photos/200/300?${index}`}
              />
            </Link>
          ))}
      </div>
    </>
  );
};
export default HomePage;
