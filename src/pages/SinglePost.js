import React from "react";

import client from "./../contentful";

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
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3>{post.fields.dish}</h3>
      <img alt="food" src={post.fields.image.fields.file.url}></img>
      <ul>
        {post.fields.ingredients.map((ingredient, i) => {
          return <li key={i}>{ingredient}</li>;
        })}
      </ul>
      <p>{post.fields.portions} Portions</p>
      <p>{post.fields.price} Kr</p>
      <p>{post.fields.pickUpDate}</p>
      <p>{post.fields.pickUpAddress}</p>
    </div>
  );
}

export default SinglePost;
