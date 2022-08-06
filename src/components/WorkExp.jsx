import React from 'react'

function WorkExp({ele}) {
  return (
    <div class="card m-2 p-2  d-flex" >
      <div class="container text-dark">
        <h4>
          <b>{ele.title}</b>
        </h4>
        <p>{ele.role}</p>
        <em className='text-bold' >{ele.duration}</em>
      </div>
    </div>
  );
}

export default WorkExp