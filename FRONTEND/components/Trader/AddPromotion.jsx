import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../../AuthService';


const AddPromotion = props=>{

    return(
        <div>
            <form onSubmit>
                <h3>Add promotion</h3>
        
                <input type="text" 
                       name="fname" 
                       className="form-control" 
                       placeholder="Enter Name of the customer"/>
<br></br>

 <br></br>
           
                <input type="text" 
                       name="price"
                       className="form-control" 
                       placeholder="Enter the promotion type"/>

<br></br>
           
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Add promotion</button><br/><br/>

                <a href="/viewpromo"><input className="btn btn-lg btn-primary btn-block"  type="button" Value="View Promotion"/></a>
            </form>
         

        </div>
    )
}


export default AddPromotion;