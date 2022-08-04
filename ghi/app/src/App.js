import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Sale from './Sales';
import Inventory from './Inventory';



function App(props) {
  
  return (
    <BrowserRouter>
      <Nav />
      
     
      <div className='container'>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="sales" element={<Sale />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="models"  element={<ModelsList models={props.models}/>}/>
            <Route path="/models/new" element={<ModelForm />} />
            <Route path="salesperson" element={<SAForm />} />
            <Route path="customer" element={<CustomerForm />} />
            <Route path="record" element={<RecordForm />} />
            <Route path="saleslist" element={<SalesList />} /> 
            <Route path="saleshistory" element={<SalesHistoryList />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
