import React from 'react'
import { workExp } from './none'
import WorkExp from './WorkExp'

function Experience() {
  return (
    <div className=' bg-dark'>
      <div class="card exp__dark text-light p-2" id="experience">
        <h2 className="project__heading text-bold ">Experience</h2>
        {workExp.map((ele) => (
          <WorkExp ele={ele} />
        ))}
      </div>
    </div>
  );
}

export default Experience