import React from "react";
import { Link } from "react-router-dom";


export default function Corousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="abesit.jpeg" className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="resumephotu.jpg" className="d-block w-100  " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="mern.webp" className="d-block w-100 " alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div> <div className="row mt-3 ">
    <div className="col-3 md-3  "><div className="card" id='a1' >
         <img src="assignme.png" className="card-img-top" alt="..."/>
         <div className="card-body h-100 ">
           <h5 className="card-title">Assingment-1</h5>
           <p className="card-text"> </p>
           <a href="day1.html" className="btn btn-primary">View Assingment</a>
         </div>
     </div>
     </div>
     <div className="col-3 md-3"><div className="card" id='a2' >
         <img src="assignme.png" className="card-img-top" alt="..."/>
         <div className="card-body h-100">
           <h5 className="card-title">Assingment-2</h5>
           <p className="card-text "></p>
           <Link to="/Assingment2" className="btn btn-primary">View Assingnment</Link>
         </div>
     
    
     </div>
     </div>
 
     <div className="col-3 md-3"><div className="card" id='a3' >
         <img src="assignme.png" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Assingment-3</h5>
           <p className="card-text"> </p>
           <Link to="/Assingment3"  className="btn btn-primary">View Assingnment</Link>
         </div>
     </div>
     </div>
     <div className="col-3 md-3"><div className="card"  id='a4'>
         <img src="assignme.png" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Assingment-4</h5>
           <p className="card-text"> </p>
           <Link to="/Assingment4" className="btn btn-primary">View Assingnment</Link>
         </div>
     </div>
     </div>
    </div>
     
 
    
         <div className="row mt-3">
             <div className="col-3 md-3"><div className="card" id='a5' >
                 <img src="assignme.png" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">Assingment-5</h5>
                   <p className="card-text"> </p>
                   <Link to="/Assingment5"  className="btn btn-primary">View Assingnment</Link>
                 </div>
             </div>
             </div>
             <div className="col-3 md-3"><div className="card" id='a6' >
                 <img src="assignme.png" className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">Assingment-6</h5>
                   <p className="card-text"> </p>
                   <a href="Assingment6"  className="btn btn-primary">View Assingnment</a>
                 </div>
             </div>
             </div>
             <div className="col-3 md-3"><div className="card" id='a7' >
                 <img src="assignme.png" className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">Assingment-7</h5>
                   <p className="card-text"> </p>
                   <a href="day7.html" className="btn btn-primary">View Assingnment</a>
                 </div>
             </div>
             </div>
             <div className="col-3 md-3"><div className="card" id='a8' >
                 <img src="assignme.png" className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">Assingment-8</h5>
                   <p className="card-text"> </p>
                   <a href="day8.html" className="btn btn-primary">View Assingnment</a>
                 </div>
             </div>
             </div>
         </div>
 
         <div className="row mt-3">
             <div className="col-3 md-3"><div className="card" id='a9' >
                 <img src="assignme.png" className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">Assingment-9</h5>
                   <p className="card-text"> </p>
                   <a href="day9.html" className="btn btn-primary">View Assingnment</a>
                 </div>
             </div>
             </div>
             <div className="col-3 md-3"><div className="card" id='a10'>
                 <img src="assignme.png" className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">Assingment-10</h5>
                   <p className="card-text"> </p>
                   <a href="day10.html" className="btn btn-primary">View Assingnment</a>
                 </div>
             </div>
             </div>
             <div className="col-3 md-3"><div className="card" id='a11' >
                 <img src="assignme.png" className="card-img-top" alt="..."/>
                 <div className="card-body ">
                   <h5 className="card-title">Assingment-11</h5>
                   <p className="card-text"> </p>
                   <a href="day11.html" className="btn btn-primary">View Assingnment</a>
                 </div>
             </div>
             </div>
             <div className="col-3 md-3"><div className="card" id='a12'>
                 <img src="assignme.png" className="card-img-top" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">Assingment-12</h5>
                   <p className="card-text"> </p>
                   <a href="day12.html" className="btn btn-primary">View Assingnment</a>
                 </div>
             </div>
             </div>
         </div></div>
    </div>
  );
}
