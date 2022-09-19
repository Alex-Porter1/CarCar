import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import * as React from "react";
import "./index.css";
import RecordForm from "./RecordForm";
import ReviewForm from "./ReviewForm";



function MainPage() {
  return (
    <>
    <div className="px-4 mt-5 text-center">
    <h1 className="display-5 fw-bold MainpageTitle">CarCar</h1>
    <div className="col-lg-10 mx-auto">
      <p className="lead mb-4 MainpageTitle1 mt-3 mb-3">
        The premiere solution for automobile dealership
        management!
      </p>


      <div className="row">
        <div className="col shoes">
          <div className="card mb-3 shadow eachCard">
            <img src="https://www.teahub.io/photos/full/40-409804_vintage-car.jpg" height="400px" className="card-img-top" alt="This is a discription"/>
            <div className="card-body mainpageBotton cardTitle1 cardTitle">
              <h4 className="card-title">INVENTORY</h4>
              <NavLink className="dropdown-item choice" to="/manufacturers">Manufacturers</NavLink>
              <NavLink className="dropdown-item choice" to="/models">Vehicle Models</NavLink>
              <NavLink className="dropdown-item choice" to="/automobiles">Automobiles</NavLink>
            </div>
          </div>
        </div>
    
  
        <div className="col hats">
          <div className="card mb-3 shadow eachCard">
            <img src="https://media.istockphoto.com/photos/visiting-car-dealership-picture-id671021358?k=20&m=671021358&s=612x612&w=0&h=O_Sf_6XHP9jTm2A30a84WN_snAojzomzefXNMJa4fRE=" className="card-img-top mainPicture" height="400px" alt="This is a discription"/>
            <div className="card-body mainpageBotton cardTitle2 cardTitle">
              <h4 className="card-title">SALES</h4>
              <NavLink className="dropdown-item choice" to="/saleslist">Sales Records</NavLink>
              <NavLink className="dropdown-item choice" to="/saleshistory">Sales History</NavLink>

            </div>
          </div>
        </div>
    
        <div className="col hats">
          <div className="card mb-3 shadow eachCard">
            <img src="https://media.istockphoto.com/photos/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage-picture-id1347150429?b=1&k=20&m=1347150429&s=170667a&w=0&h=RKG23YFnuqu8RtEYHBX7xmaJR6uOtb8c0xYCTboMYUw=" className="card-img-top mainPicture" height="400px" alt="This is a discription"/>
            <div className="card-body mainpageBotton cardTitle2 cardTitle">
              <h4 className="card-title">SERVICES</h4>
              <NavLink className="dropdown-item choice" to="/services">Appointments List</NavLink>
              <NavLink className="dropdown-item choice" to="/history">Service History</NavLink>
            </div>
          </div>
        </div>
      
      </div>

    </div>
  </div>

  <div>
    <ReviewForm/>
  </div>

  </>

    // <div className="px-4 py-5 my-5 text-center">
    //   <h1 className="display-5 fw-bold">CarCar</h1>
      
    //     <p className="lead mb-4">
    //       The premiere solution for automobile dealership
    //       management!
    //     </p>

    //     <div className="col-lg-6 mx-auto">

    //     <div className="col">
    //         <div className="card mb-3 shadow eachCard">
    //           <img src='https://www.teahub.io/photos/full/40-409804_vintage-car.jpg' className="card-img-top mainPicture" height="480px" alt=""/>
    //           <div className="card-body mainpageBotton cardTitle1 cardTitle">
    //             <h4 className="card-title">INVENTORY</h4>
    //             <NavLink className="dropdown-item choice" to="/manufacturers">Manufacturers</NavLink>
    //             <NavLink className="dropdown-item choice" to="/models">Vehicle Models</NavLink>
    //             <NavLink className="dropdown-item choice" to="/automobiles">Automobiles</NavLink>
    //           </div>
    //         </div>
    //       </div>

    //     <div className="col">
    //         <div className="card mb-3 shadow eachCard">
    //           <img src="https://media.istockphoto.com/photos/visiting-car-dealership-picture-id671021358?k=20&m=671021358&s=612x612&w=0&h=O_Sf_6XHP9jTm2A30a84WN_snAojzomzefXNMJa4fRE=" className="card-img-top mainPicture" height="480px" alt=""/>
    //           <div className="card-body mainpageBotton cardTitle2 cardTitle">
    //             <h4 className="card-title">SALES</h4>
    //             <NavLink className="dropdown-item choice" to="/saleslist">Sales Records List</NavLink>
    //             <NavLink className="dropdown-item choice" to="/saleshistory">Sales History</NavLink>

    //           </div>
    //         </div>
    //       </div>

    //       <div className="col">
    //         <div className="card mb-3 shadow eachCard">
    //           <img src="https://media.istockphoto.com/photos/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage-picture-id1347150429?b=1&k=20&m=1347150429&s=170667a&w=0&h=RKG23YFnuqu8RtEYHBX7xmaJR6uOtb8c0xYCTboMYUw=" className="card-img-top mainPicture" height="480px" alt=""/>
    //           <div className="card-body mainpageBotton cardTitle2 cardTitle">
    //             <h4 className="card-title">SERVICES</h4>
    //             <NavLink className="dropdown-item choice" to="/services">Appointments List</NavLink>
    //             <NavLink className="dropdown-item choice" to="/history">Service History</NavLink>
    //           </div>
    //         </div>
    //       </div>





      

    //   </div>
    // </div>

  
  
  );
}

export default MainPage;
