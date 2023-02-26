import { useReducer, useState } from "react";

import { UserRow } from "./UserRow";

const initialState = {
    id:1,
    car_title : "",
    caritem: "",
    caritem2: "",
    caritem3: "",
    revenuepricediscounted:"",
    revenuepriceoriginal:"",
    revenuedistance:"",
    ratingtext:"",
};


const reducer = (state, action) => {
  switch(action.type){
    case "car_title":{
      return {...state , car_title:action.payload}
    }
    case "caritem":{
      return {...state ,caritem:action.payload}
    }
    case "caritem2":{
      return {...state ,caritem2:action.payload}
    }
    case "caritem3":{
      return {...state , caritem3:action.payload}
    }
    case "revenuepricediscounted":{
        return {...state ,  revenuepricediscounted:action.payload}
      }
      case "revenuepriceoriginal":{
        return {...state ,  revenuepriceoriginal:action.payload}
      }
      case "revenuedistance":{
        return {...state ,  revenuedistance:action.payload}
      }
      case "ratingtext":{
        return {...state , ratingtext:action.payload}
      }
    case "reset":{
      return initialState
    }
    default:{
      return state
    }
  }
};



function Admin() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
 const [state , dispatch] = useReducer(reducer,initialState)

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);
 
   const HandleSubmitFrom=(e)=>{
       e.preventDefault()
      //  console.log(state) ---> obj 
      setSubmittedData([...submittedData,state])
      dispatch({type:"reset" , payload:{...initialState}})
   }
 
  return (
    <div>
      <div>
        <h1>User Form</h1>
      
        <div className="form-wrapper">
          <form data-testid="form-element" onSubmit={HandleSubmitFrom}>
            <div className="car_title" >
              <label>car title</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="car_title"
                placeholder="Enter Your Car Title"
                 value={state.car_title}
                 onChange={(e) => dispatch({type:"car_title" , payload:e.target.value})}
              />
            </div>
            <div className="caritem" >
              <label>car item</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="caritem"
                placeholder="Enter Your Car Item"
                 value={state.caritem}
                 onChange={(e) => dispatch({type:"caritem" , payload:e.target.value})}
              />
            </div>
            <div className="caritem2" >
              <label>car item2</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="caritem2"
                placeholder="Enter Your car Item2"
                 value={state.caritem2}
                 onChange={(e) => dispatch({type:"caritem2" , payload:e.target.value})}
              />
            </div>
            <div className="caritem3" >
              <label>car item3</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="caritem3"
                placeholder=" Enter Your car Item3"
                 value={state.caritem3}
                 onChange={(e) => dispatch({type:"caritem3" , payload:e.target.value})}
              />
            </div>
            <div className="caritem3" >
              <label>revenue price discounted</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="revenuepricediscounted"
                placeholder="Enter Your Revenue Price Discounted"
                 value={state.revenuepricediscounted}
                 onChange={(e) => dispatch({type:"revenuepricediscounted" , payload:e.target.value})}
              />
            </div>
            <div className="revenuepriceoriginal" >
              <label>car item3</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="revenuepriceoriginal"
                placeholder="Enter Your Revenue Price Original"
                 value={state.caritem3}
                 onChange={(e) => dispatch({type:"revenuepriceoriginal" , payload:e.target.value})}
              />
            </div>
            <div className="revenuedistance" >
              <label>car item3</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="revenuedistance"
                placeholder="Enter Your Revenue Distance"
                 value={state.revenuedistance}
                 onChange={(e) => dispatch({type:"revenuedistance" , payload:e.target.value})}
              />
            </div>
            <div className="ratingtext" >
              <label>car item3</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text"  name="revenuedistance"
                placeholder="Enter Your Revenue Distance"
                 value={state.revenuedistance}
                 onChange={(e) => dispatch({type:"revenuedistance" , payload:e.target.value})}
              />
            </div>
           
           
         
            
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}

        { submittedData.length ?
         <table>
         <thead>
           <tr>
             <th>S.No</th>
             <th>Car Title-</th>
             <th>car item</th>
             <th>car item2</th>
             <th>car item3</th>
             <th>revenue price discounted</th>
             <th>revenue price original</th>
             <th>revenue distance</th>
             <th>rating text</th>
           </tr>
         </thead>
         <tbody>
         
         {submittedData.map((item,index)=>( 
         <UserRow key={index} car_title={item.car_title} id={index} caritem={item.caritem}
         caritem2={item.caritem2}  caritem3={item.caritem3}  revenuepricediscounted={item.revenuepricediscounted}  
         revenuepriceoriginal={item.revenuepriceoriginal}
         revenuedistance={item.revenuedistance} ratingtext={item.ratingtext}
         
          />
          )
         )}
         </tbody>
        </table>:
         <h2 >no users found</h2>
        }
      </div>
    </div>
  );
}


export default Admin;
export {reducer, initialState}

