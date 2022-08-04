import { Link } from 'react-router-dom';

function Sale() {
  return (
   
      <div className="container-fluid">
        
        
          <ul className=" me-auto mb-2 mb-lg-0">
             <li className="nav-item">
            <Link className="nav-link" to="/salesperson">Add Sales Person</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/customer">Add Customer</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/record">Create a sale record</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/saleslist">List all sales</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/saleshistory">Sales person history</Link>
            </li> 
            
          </ul>
        </div>
   
    
  )
}

export default Sale;