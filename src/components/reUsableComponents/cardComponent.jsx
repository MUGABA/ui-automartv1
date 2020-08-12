import React from "react";

function Card({ imageUrl }) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src={require(`../../photos/${imageUrl}`)}
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/login" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
