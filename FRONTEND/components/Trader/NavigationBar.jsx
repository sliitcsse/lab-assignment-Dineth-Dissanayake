import React from 'react'
import {Link} from 'react-router-dom';

const Navigationbar = () => {
    return (
      <div>
     <table className="table">
  <thead>
    <tr>
  
  
    
         <th Scope="col"> <Link to="/DCustomer">
            
            View Customer
  
        </Link>  </th>
  
        <th Scope="col"> <Link to="/additem">
            
            Add Items
  
        </Link>  </th>
  
           <div className="col-lg-9 mt-2 mb-2">
            
  
           </div>
        
    </tr>
  </thead></table>
     </div>
  
     
    )
  }
  export default Navigationbar;