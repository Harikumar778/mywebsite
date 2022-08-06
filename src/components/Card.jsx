import React from 'react'


function Card({data}) {
  return (
    <div class="card m-2 p-2 card__view d-flex">
      <div class="container">
        <h4>
          <b>{data.title}</b>
        </h4>
        <img className='img-fluid' src={data.image} alt="" />
        <a  className='btn btn-primary stretched-link m-1' href={data.link}>View</a>
      </div>
    </div>
  );
}

export default Card