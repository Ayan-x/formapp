// import logo from './logo.svg';
import {  useState } from 'react';
import './App.css';
// About form in react
function App() {
  const[formData, setformData] = useState({firstName:"", lastName:"",email:"", comments:"", isVisible:false,
   mode:"", favCar:""});
    
  // ChangeHanler is used to save the prev data and also to update the value
  // of element on which it fget triggered. 
  function changeHandler(event){
    const{name,value,checked,type} = event.target; //Destructuring of input
    setformData(prevFormData=>{
     return{...prevFormData,
      [name] : type==='checkbox'? checked: value 
     }
    })

  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing the form finally....");
    console.log(formData);
    
  } 
  return (

    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
        type='text'
        placeholder='firstName'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}/>
        <br/>
        <br/>

        <input 
        type='text'
        placeholder='lastName'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}/>

        <br/>
        <br/>

        <input 
        type='text'
        placeholder='email'
        onChange={changeHandler}
        name='email'
        value={formData.email}/>
    
      <br/>
      <br/>
      <textarea
      placeholder='Enter your Comments'
      name='comments'
      onChange={changeHandler}
      value={formData.comments}/>

      <br/>
      <br/>
      <input
      type='checkbox'
      name='isVisible'
      id='isVisible'
      onChange={changeHandler}
      checked={formData.isVisible}/>
      <label htmlFor='isVisible'>Am i Visible?</label>

      <br/>
      <br/>
      <fieldset>
        <legend>Mode:</legend>
        <input
      type='radio'
      name='mode'
      id='Online-mode'
      value="Online-mode"
      onChange={changeHandler}
      checked={formData.mode==="Online-mode"}/>
      <label htmlFor='Online-mode'>Online Mode</label>

      <input
      type='radio'
      name='mode'
      id='Offline-mode'
      value="Offline-mode"
      onChange={changeHandler}
      checked={formData.mode==="Offline-mode"}/>
      <label htmlFor='Offline-mode'>Offline Mode</label>
      </fieldset>
      <br/>
      <br/>

      <label htmlFor='favCar'>Favourite Car </label>
      <select
      name='favCar'
      id='favCar'
      onChange={changeHandler}
      value={formData.favCar}>

        <option value="scarpio">scarpio</option>
        <option value="fartuner">fartuner</option>
        <option value="defender">defender</option>
        <option value="legender">legender</option>

      </select>
      <br></br>
      <br></br>

      <button>Submit</button>
      
      </form>  
     
    </div>
  );
}

export default App;
