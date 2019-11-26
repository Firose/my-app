import React, {useState, useEffect} from 'react';
import Persons from '../Persons/Person/Person';
import classes from './Cockpit.css';


const Cockpit = (props) => {



    const assingedclasses = [];
    let btnClass= '';
    if(props.Showpersons){
        btnClass = classes.Red;
        
     }
     const [count, setcount] = useState(0);
     const [effectcount, setEffectCount] = useState(0);
     const increment = () =>{
         setcount(count + 1);
     }
     useEffect(() =>{
         
         console.log('[Cockpit.js useEffect');
        //  setEffectCount(effectcount + 1);
        setTimeout(() => {
            alert('data saved')   ; 
            },1000)

     },[count, props.persons]
     );
    

    if(props.persons.length <= 1){
      assingedclasses.push(classes.red);
    }
    if(props.persons.length <= 2){
      assingedclasses.push(classes.bold);
    }
   
    // let cntbtn = '';
      const cntbtn = classes.Blue;

    



    return (
        <div className = {classes.Cockpit}>
            <h1>{props.Showpersons}</h1>
            
             <p className= {assingedclasses.join(' ')} >This is my first react app</p>
             <button className = {btnClass} 
             onClick = {props.toggle}>
             Click Me
             </button>
             count: {count}
             {/* effectcount: {effectcount} */}

             <button className = {cntbtn} onClick = {increment}>click</button>
        </div>
    );
}
export default Cockpit; 