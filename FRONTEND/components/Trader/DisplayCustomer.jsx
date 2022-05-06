
import React,{useState,useEffect} from 'react';
import axios, { Axios } from 'axios';


const DisplayCustomer = () => {


    const [Customer , setCustomer] =  useState([]);

    useEffect(() => {
      
      axios
      .get("http://localhost:3000/viewList/")
      .then(res=>setCustomer(res.data))
      .catch(error=>console.log(error));
  
  
    });
  
      return (
  
  <div className="container">
 
  
  <table className="table">
       <thead>
         <tr>
           <th>Full Name</th>
             <th >Email </th>
              <th >Address </th>
              <th >Contact No </th>    
         </tr>
       </thead>
      
                       <tbody>
                       
                       {Customer.map((Customer,index) =>(
                        
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
  
  
                          <td> 
                               {Customer.firstname}
                              
                               </td>
                          <td>{Customer.lastname}</td>
                          <td>{Customer.email}</td>
                          <td>{Customer.address}</td>
                          <td>{Customer.contact}</td>

                        </tr>
                       ))}               
                       </tbody>
       </table>  
       <a href="/apromo"><input className="btn btn-lg btn-primary btn-block"  type="button" value="Promotion"/></a>
      </div>
      );     
      };
  


export default DisplayCustomer;