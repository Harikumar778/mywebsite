import React from 'react'


function Footer() {
  return (
    <footer className="p-5 bg-dark text-light position-relative">
      <h6 className="text-light">Made with  ❤️️  in India.</h6>
      <div className="container">
        <p className="lead text-center ">Copyright &copy; 2022</p>
        <h6 className="lead text-center">All rights are reserved</h6>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <img src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-upward-arrow-arrow-kmg-design-outline-color-kmg-design.png" />
        </a>
        <p className="text-bold">
          Got a project? Lets connect, i work to learn!
        </p>
        <em>The website is not completely built.</em>
      </div>
    </footer>
  );
}

export default Footer