import React from 'react'

import { useEffect } from 'react'



function Skillsection() {
    const getData=()=>{
        const bars= document.querySelectorAll('.progress_bar')
      bars.forEach((bar)=>{
          let percent=bar.dataset.percent;
          let progress_bar=bar.children[0]
          progress_bar.innerText=percent+'%'
          bar.style.width=percent+'%'
      })

    }
useEffect(()=>{
    getData()
},[])    


  return (
    <section className='text-dark p-4 skill_section' id='skill_sec'>
    <div className=" row container m-2 ">
        <h2 className="">SKILLS</h2>
        <div className=" container left col-md mb-3 align-items-center ">
            <div className="lang p-2 ">
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                <img src="https://img.icons8.com/color/48/000000/python--v1.png"/>
                <img src="https://img.icons8.com/color/64/000000/nodejs.png"/>"
                <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"/>
            </div>
        </div>
        <div className="right col ">
            <div className="skill_title">
                <h6 >HTML & CSS</h6>
                <div className="skill_progress_bar mb-2">
                    <span data-percent="78" className="progress_bar">
                        <span className="tool_tip">78%</span>
                    </span>
                </div>
            </div>
            <div className="skill_title">
                <h6>JAVASCRIPT</h6>
                <div className="skill_progress_bar  mb-2">
                    <span data-percent="80" className="progress_bar">
                        <span className="tool_tip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill_title">
                <h6>NODE JS</h6>
                <div className="skill_progress_bar  mb-2">
                    <span data-percent="75" className="progress_bar">
                        <span className="tool_tip">75%</span>
                    </span>
                </div>
            </div>
            <div className="skill_title">
                <h6>REACT JS</h6>
                <div className="skill_progress_bar  mb-2">
                    <span data-percent="70" className="progress_bar">
                        <span className="tool_tip">70%</span>
                    </span>
                </div>
            </div> 
            <div className="skill_title">
                <h6>PYTHON</h6>
                <div className="skill_progress_bar  mb-2">
                    <span data-percent="88" className="progress_bar">
                        <span className="tool_tip">88%</span>
                    </span>
                </div>
            </div>
            <div className="skill_title">
                <h6>MONGODB</h6>
                <div className="skill_progress_bar  mb-2">
                    <span data-percent="68" className="progress_bar">
                        <span className="tool_tip">68%</span>
                    </span>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Skillsection