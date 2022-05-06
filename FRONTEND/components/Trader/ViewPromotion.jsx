
import React,{useState,useEffect} from 'react';
import axios, { Axios } from 'axios';
import {Link} from 'react-router-dom';

const ViewPromotion = () => {


    const [Customer , setCustomer] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:3000/viewPromo/")
      .then(res=>setCustomer(res.data))
      .catch(error=>console.log(error));
  
  
    });
  
      return (
  
  <div className="container">
  
  <table className="table">
       <thead>
         <tr>
         
            <th Scope="col"> Customer's name  </th>
            <th Scope="col"> promotion </th>
             
                <div className="col-lg-9 mt-2 mb-2">
                 
                </div>
             
         </tr>
       </thead>
      
                       <tbody>
                       
                       {Customer.map((Customer,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                          <td> 
                               {Customer.name}
                              
                               </td>
                          <td>{Customer.promotion}</td>
                         

                        </tr>
                       ))}               
                       </tbody>
       </table>  
      </div>
      );     
      };
  


export default ViewPromotion;