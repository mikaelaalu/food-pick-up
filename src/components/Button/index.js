import React from "react";

function Button(props) {
  return (
    <div>
      <a href={props.slug}>
        <button>Read more</button>
      </a>
    </div>
  );
}

export default Button;
