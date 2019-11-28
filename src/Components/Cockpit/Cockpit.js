import React, {useState, useEffect, useRef, useContext} from 'react';
import Persons from '../Persons/Person/Person';
import classes from './Cockpit.css';
import AuthContext from '../../Context/auth-context';

const Cockpit = (props) => {
  const togBtnRef = useRef(null);


    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);
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
         
         console.log('[Cockpit.js] 1st useEffect');
        //  setEffectCount(effectcount + 1);

        // setTimeout(() => {
        //     alert('data saved'); 
        //     },1000)
        togBtnRef.current.click();

            return ()=> {
              console.log('[Cockpit.js] 1st cleanup');
            };

     }, []);

     useEffect(() =>{
      console.log('[Cockpit] 2nd use effect')

      return ()=>{
        console.log('[Cockpit] 2nd cleanup')
      }
     });
    

    if(props.personsLength <= 1){
      assingedclasses.push(classes.red);
    }
    if(props.personsLength <= 2){
      assingedclasses.push(classes.bold);
    }
   
    // let cntbtn = '';
      const cntbtn = classes.Blue;

    



    return (
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
             <p className= {assingedclasses.join(' ')} >This is my first react app</p>
             <button className = {btnClass} 
             ref = {togBtnRef}
             onClick = {props.toggle}>
             Click Me
             </button>
             count: {count}
             {/* effectcount: {effectcount} */}

             <button className = {cntbtn} onClick = {increment}>click</button>
            {/* <AuthContext.Consumer>
             {context => <button className = {cntbtn} onClick = {context.login} >Login</button>}
              </AuthContext.Consumer>  */}
            <button className = {cntbtn} onClick = {authContext.login} >Login</button>
        </div>
    );
}
export default React.memo(Cockpit);