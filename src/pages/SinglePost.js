import React from "react";

import client from "./../contentful";

function SinglePost() {
  React.useEffect(() => {
    client
      .getEntries({
        content_type: "quarantineFoodPickUp",
      })
      .then((entries) => {
        console.log(entries);
      });
  });
  return <div>hej</div>;
}

{
  /* <ul>
{post.fields.ingredients.map((ingredient, i) => {
  return <li key={i}>{ingredient}</li>;
})}
</ul> */
}

export default SinglePost;
