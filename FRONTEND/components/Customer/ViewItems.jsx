import React,{useState,useEffect} from 'react';
import axios, { Axios } from 'axios';
import {Link} from 'react-router-dom';


const ViewItems = () => {


    const [products , setproducts] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:3000/products/")
      .then(res=>setproducts(res.data))
      .catch(error=>console.log(error));
  
  
    });
  
    return (
        
  
        <div className="container">
            
        
        <table className="table">
             <thead>
               <tr>
                
                  <th Scope="col"> product name  </th>
                   <th Scope="col">description </th>
                    <th Scope="col"> price  </th>
                    <th>           </th>
                      <div className="col-lg-9 mt-2 mb-2">
                       
                      </div>
                   
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
                                <td>{products.price}</td>
                                <td><button>Add to cart</button></td>
                                <td><button>Add to wish list</button></td>
      
                              </tr>
                             ))}               
                             </tbody>
             </table> 
             <table align="center">
              <tr >
             <a href="/DCart"><input  className="btn btn-lg btn-primary btn-block" type="button"  value="View Cart"/></a><br/>
             </tr>
             <tr>
             <a href="/Wlist"><input className="btn btn-lg btn-primary btn-block" type="button" value="View Wish List"/></a>
             </tr>
             </table> 
            </div>
            );     
      };
  


export default ViewItems;