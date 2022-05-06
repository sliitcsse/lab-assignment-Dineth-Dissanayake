import React,{useState,useEffect} from 'react';
import axios, { Axios } from 'axios';
import {Link} from 'react-router-dom';


const DisplayCart = () => {


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
                   <th Scope="col" >Quatity</th>
                    <th Scope="col"> price  </th>
                
                      <div className="col-lg-9 mt-2 mb-2">
                       
                      </div>
                   
               </tr>
             </thead>
            
                        
      
                        
             </table>  
            </div>
            );     
      };
  


export default DisplayCart ;