import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import Nav from './Nav';
import ModelsList from './ModelsList';
import ModelForm from './ModelForm';
import SAForm from './SAForm';
import CustomerForm from './CustomerForm';
import RecordForm from './RecordForm';
import SalesList from './SalesList';
import SalesHistoryList from './SalesHistory';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import AutomobileInventoryList from './AutomobileInventoryList';
import AutomobileInventoryForm from './AutmobileInventoryForm';
import ServiceAppointmentList from './ServiceAppointmentList';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import ServiceHistory from './ServiceHistory';
import TechnicianForm from './TechnicianForm';
import './index.css'
import Login from './login.component';
import SignUp from './signup.component';


function App(props) {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');
  return (
    <BrowserRouter basename={basename} >
      <Nav />
      <div className='container'>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models" element={<ModelsList models={props.models} />} />
          <Route path="/models/new" element={<ModelForm />} />
          <Route path="salesperson" element={<SAForm />} />
          <Route path="customer" element={<CustomerForm />} />
          <Route path="record" element={<RecordForm />} />
          <Route path="saleslist" element={<SalesList />} />
          <Route path="saleshistory" element={<SalesHistoryList />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/automobiles" element={<AutomobileInventoryList />} />
          <Route path="/automobiles/new" element={<AutomobileInventoryForm />} />
          <Route path="/services" element={<ServiceAppointmentList />} />
          <Route path="/services/new" element={<ServiceAppointmentForm />} />
          <Route path="/history" element={<ServiceHistory />} />
          <Route path="/technicians" element={<TechnicianForm />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
