import React from 'react'
import {Data_json} from '../Data/Api'
import Card from './Card'
function Projects() {
  return (
    <div className='bg-dark text-dark'>
        <br />
        <h2 className='text-light project__heading' >PROJECTS</h2>
      <div className="m-5 mobile__view " id="projects-items">
        {Data_json && Data_json.map((ele) => <Card data={ele} />)}
      </div>
    </div>
  );
}

export default Projects