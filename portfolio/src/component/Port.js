import React from 'react'



function Port() {
  return (
    <div className='content bg-primary-subtle'><div className="container">
    <nav className="navbar navbar-expand-lg  ">
    <div className="container-fluid bg-success-subtle ">
      <a className="navbar-brand" href="#">CRC_Training</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Assingments
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Assingment-1</a></li>
              <li><a className="dropdown-item" href="#">Assingment-2</a></li>
              <li><a className="dropdown-item" href="#">Assingment-3</a></li>
              <li><a className="dropdown-item" href="#">Assingment-4</a></li>
              <li><a className="dropdown-item" href="#">Assingment-5</a></li>
              <li><a className="dropdown-item" href="#">Assingment-6</a></li>
              <li><a className="dropdown-item" href="#">Assingment-7</a></li>
              <li><a className="dropdown-item" href="#">Assingment-8</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="abesit.jpeg" className="d-block w-100 h-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="resumephotu.jpg" className="d-block w-100 h-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="resumephotu.jpg" className="d-block w-100 h-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
   <div className="row mt-3 ">
   <div className="col-3 md-3  "><div className="card" >
        <img src="assignme.png" className="card-img-top" alt="..."/>
        <div className="card-body h-100 ">
          <h5 className="card-title">Assingment-1</h5>
          <p className="card-text"> </p>
          <a href="day1.html" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
    <div className="col-3 md-3"><div className="card" >
        <img src="assignme.png" className="card-img-top" alt="..."/>
        <div className="card-body h-100">
          <h5 className="card-title">Assingment-2</h5>
          <p className="card-text "></p>
          <a href="day2.html" className="btn btn-primary">Go somewhere</a>
        </div>
    
   
    </div>
    </div>

    <div className="col-3 md-3"><div className="card" >
        <img src="assignme.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Assingment-3</h5>
          <p className="card-text"> </p>
          <a href="day3.html" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
    <div className="col-3 md-3"><div className="card" >
        <img src="assignme.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Assingment-4</h5>
          <p className="card-text"> </p>
          <a href="day4.html" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </div>
   </div>
    

   
        <div className="row mt-3">
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Assingment-5</h5>
                  <p className="card-text"> </p>
                  <a href="day5.pptx" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Assingment-6</h5>
                  <p className="card-text"> </p>
                  <a href="day6.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Assingment-7</h5>
                  <p className="card-text"> </p>
                  <a href="day7.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Assingment-8</h5>
                  <p className="card-text"> </p>
                  <a href="day8.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Assingment-9</h5>
                  <p className="card-text"> </p>
                  <a href="day9.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Assingment-10</h5>
                  <p className="card-text"> </p>
                  <a href="day10.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Assingment-11</h5>
                  <p className="card-text"> </p>
                  <a href="day11.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-3 md-3"><div className="card" >
                <img src="assignme.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Assingment-12</h5>
                  <p className="card-text"> </p>
                  <a href="day12.html" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>
       

    
    
</div>
</div>
  )
}

export default Port