
import React,{useState,useEffect} from 'react';
import axios, { Axios } from 'axios';
import Navigationbar from './NavigationBar';

const ViewInventory = () => {


    const [products , setproducts] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:3000/viewList/")
      .then(res=>setproducts(res.data))
      .catch(error=>console.log(error));
  
  
    });
  
      return (
  
  <div className="container">
    
      <Navigationbar/>
  
  <table className="table">
       <thead>
         <tr>
           <th> Product id </th>
            <th > product name  </th>
             <th >description </th>
              <th > quantity  </th>
              <th > price  </th>  
              <th>      </th>  
         </tr>
       </thead>
      
                       <tbody>
                       
                       {products.map((products,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                          <td> 
                               {products.name}
                              
                               </td>
                          <td>{products.description}</td>
                          <td>{products.qty}</td>
                          <td>{products.price}</td>
                          <td><button>Edit Item</button></td>

                        </tr>
                       ))}               
                       </tbody>
       </table>  
      </div>
      );     
      };
  


export default ViewInventory;