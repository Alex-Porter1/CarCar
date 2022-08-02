import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import AutomobileInventoryList from './AutomobileInventoryList';
import AutomobileInventoryForm from './AutmobileInventoryForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/automobiles" element={<AutomobileInventoryList />} />
          <Route path="/automobiles/new" element={<AutomobileInventoryForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
