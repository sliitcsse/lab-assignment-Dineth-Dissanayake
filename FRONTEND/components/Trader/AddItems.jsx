import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../../AuthService';


const AddItems = props=>{

    return(
        <div>
            <form  onSubmit>
                <h3>Add Items</h3>
            
                <input type="text" 
                       name="fname" 
                       className="form-control" 
                       placeholder="Enter product name"/>
<br></br>

                <input type="text" 
                       name="description" 
                       className="form-control" 
                       placeholder="Enter description"/>
 <br></br>

              
                <input type="text" 
                       name="quantity"
                       className="form-control" 
                       placeholder="Enter quantity"/>
 <br></br>
                
                <input type="text" 
                       name="price"
                       className="form-control" 
                       placeholder="Enter price"/>

<br></br>
           
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Add item</button>
            </form>
         

        </div>
    )
}


export default AddItems;
