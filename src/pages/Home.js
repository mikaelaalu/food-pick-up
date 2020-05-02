import React from "react";
import Card from "./../components/Card";
import client from "./../contentful";
import styled from "styled-components";
import Loading from "./../components/Loading";

const Wrapper = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  jusify-content: center;
  align-items: center;
  flex-direction: column;
`;

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

  if (!posts) {
    return <Loading></Loading>;
  }

  return (
    <Wrapper>
      {posts &&
        posts.map((post, i) => {
          const fields = post.fields.pickUpDate.split("T");
          const date = fields[0];

          const orderDate = date.split("-");
          const pickUpdate = `${fields[1]} ${orderDate[2]}/${orderDate[1]}/${orderDate[0]}`;

          return (
            <Card
              key={i}
              title={post.fields.dish}
              image={post.fields.image.fields.file.url}
              price={post.fields.price}
              date={pickUpdate}
              address={post.fields.pickUpAddress}
              slug={`posts/${post.fields.slug}`}
            />
          );
        })}
    </Wrapper>
  );
}

export default Home;
