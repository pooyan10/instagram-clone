import Post from "./Post";

const post = [
  {
    id: "123",
    username: "ali",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "lets goooo baby",
  },
  {
    id: "334",
    username: "hamid",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "say my name",
  },
];

function Posts() {
  return (
    <div className="">
      {post.map(({ id, username, userImg, img, caption }) => (
        <Post
          key={id}
          id={id}
          username={username}
          userImg={userImg}
          img={img}
          caption={caption}
        />
      ))}
    </div>
  );
}

export default Posts;
