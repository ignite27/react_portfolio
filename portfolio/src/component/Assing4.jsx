import React from 'react'

export default function Assing4() {
  return (
    <>
    <div class="container bg-success-subtle">
    <div class="container ">
       
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
          <a class="navbar-brand" href="#">Dev-Pro-1.0</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <div  class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../assingment1_files/index.html">Assingment1</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="../assingment2_files/index.html">Assingment2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../assingment3_files/index.html">Assingment3</a>
              </li>
              
            </div>
            </div>
            </nav>
     </div>
    



<div class="container">
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
  <img src="img1.jpg" class="d-md-block w-100" alt="..." height="500px"/>
</div>
<div class="carousel-item">
  <img src="img2.jpg" class="d-md-block w-100" alt="..." height="500px"/>
</div>
<div class="carousel-item">
  <img src="img3.jpg" class="d-md-block w-100" alt="..." height="500px"/>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
</div>
<div class="container">
    <h3 style={{display: "flex;justify-content: center"}}>Courses</h3>
    <div class="row">
    <div class="row mt-4">
        <div class="col-4 mb-4">
    <div class="card h-100"  >
        <img src="Python-PNG-File.png" class="card-img-top" alt="..." height="250px"/>
        <div class="card-body">
          <h5 class="card-title">Python Development </h5>
           
          <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
        </div>
          
        <div class="col-4 mb-4">
      <div class="card h-100" >
        <img src="mean.png" class="card-img-top " alt="..." style={{height: "250px"}}/>
        <div class="card-body h-100" >
          <h5 class="card-title">full stack development
          </h5>
          
          <a href="#" class="btn btn-primary po" >Details</a>
          
        </div>
      </div>
    </div>
      
      <div class="col-4 mb-4">
      <div class="card h-100"  >
        <img src="java.png" class="card-img-top" alt="..." style={{height: "250px"}}/>
        <div class="card-body">
          <h5 class="card-title">Java Course</h5>
    
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>  
</div>
</div>
</div>


 
<div class="container">
  <h3 style={{display:" flex;justify-content: center"}}>Courses</h3>
  <div class="row">
  <div class="row mt-4">
      <div class="col-4 mb-4">
  <div class="card h-100"  >
      <img src="timtable.png" class="card-img-top" alt="..." height="250px"/>
      <div class="card-body h-100">
        <h5 class="card-title">Assingment1 </h5>
        {/* <p class="card-text">Python full development course with machine leaening and AI</p>  */}
        <a href="day1.html" class="btn btn-primary">View</a>
      </div>
  </div>
      </div>
        
      <div class="col-4 mb-4">
    <div class="card h-100" >
      <img src="assingment12.png" class="card-img-top " alt="..." style={{height:"250px"}}/>
      <div class="card-body h-100" >
        <h5 class="card-title">Assingment2
        </h5>
        
        <a href="day2.html" class="btn btn-primary po" >View</a>
        
      </div>
    </div>
  </div>
    
    <div class="col-4 mb-4">
    <div class="card h-100"  >
      <img src="assingment21.png" class="card-img-top" alt="..." style={{height: "250px"}}/>
      <div class="card-body h-100 ">
        <h5 class="card-title">Assingment3</h5>
         <p class="card-text">Full java development course || Duration 3 Months.</p> 
        <a href="day3.html" class="btn btn-primary">View</a>
      </div>
    </div>  
</div>
</div>
  </div>
  </div>
  </div>
  </div>
  
  </>
  )
}
