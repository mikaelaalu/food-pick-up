import React from "react";
import Card from "./../components/Card";
import client from "./../contentful";

function Home() {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "quarantineFoodPickUp",
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post, i) => {
          console.log(post);

          return (
            <Card
              key={i}
              title={post.fields.dish}
              image={post.fields.image.fields.file.url}
              price={post.fields.price}
              date={post.fields.pickUpDate}
              address={post.fields.pickUpAddress}
              slug={`posts/${post.fields.slug}`}
            />
          );
        })}
    </div>
  );
}

export default Home;
