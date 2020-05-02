import React from "react";
import SingleCard from "./../components/SingleCard";
import client from "./../contentful";
import styled from "styled-components";
import Loading from "./../components/Loading";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SinglePost(props) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "quarantineFoodPickUp",
        "fields.slug": props.slug,
      })
      .then((entries) => {
        setPost(entries.items[0]);
      });
  }, [props.slug]);

  if (!post) {
    return <Loading></Loading>;
  }

  const fields = post.fields.pickUpDate.split("T");
  const date = fields[0];

  const orderDate = date.split("-");
  const pickUpdate = `${fields[1]} ${orderDate[2]}/${orderDate[1]}`;

  return (
    <Wrapper>
      <SingleCard
        title={post.fields.dish}
        image={post.fields.image.fields.file.url}
        ingredients={post.fields.ingredients}
        portions={post.fields.portions}
        price={post.fields.price}
        date={pickUpdate}
        address={post.fields.pickUpAddress}
        description={post.fields.description}
      />
    </Wrapper>
  );
}

export default SinglePost;
