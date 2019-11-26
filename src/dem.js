import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    person : [
      {name: 'firose' , work: 'IT'},
      {name: 'rose', work: 'devo'}
    ]
    // otherState: "firose"
  })
  const [otherState, setOtherState] = useState("firose");
  console.log(personState, otherState);

 const switchNameHandler = (newName) => {
    // console.log('hello papa')
    setPersonState(
      {person : [
        {name: newName , work: 'love u'},
        {name: 'me always', work: 'SOft'}
  
      ],
      // otherState: personState.otherState
    }
    )
  

 
  }
    return (
      <div className="App">
        <h1>This is my first react app</h1>
        <button onClick = {switchNameHandler.bind(this, 'papa')}>CLick This</button>
        {/* can be used like when efficient */}
        {/* <button onClick = {() => this.switchNameHandler('papa')}>CLick This</button> */}
        {/* //withstat */}
        <Person 
        name={personState.person[0].name} 
        work={personState.person[0].work}/>
        <Person
         name={personState.person[1].name}
          work={personState.person[1].work}
          click={switchNameHandler.bind(this,'loves')}>hobby : developing </Person>
        {/* from component function */}
        {/* // <Person name="rose" work="developer">hobby : developing </Person> */}
      </div>
    );
    // return React.createElement('div', {className: "App"},'hello', React.createElement('h1',{className: "App"},'Firose'));
  }


export default app;
// state = {
//   person : [
//     {name: 'firose' , work: 'IT'},
//     {name: 'rose', work: 'devo'}
//   ]


let persons = null;
    if(this.state.showPerson){
      persons = 
      (
      <div>
        <Persons
          persons ={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}
          />
         {/* {this.state.persons.map((person, index)=>{
          return <Person
            click={()=> this.deletePersonHandler(index)}
            name={person.name}
            work = {person.work} 
            key ={person.id}
            change ={(event) => this.nameChangeHandler(event, person.id)}
            />

        }
          )} */}
        {/* <Person 
        name={this.state.person[0].name} 
        work={this.state.person[0].work}/>
        <Person
        name={this.state.person[1].name}
          work={this.state.person[1].work}
          click={this.switchNameHandler.bind(this,'loves')}
          change={this.nameChangeHandler}
          >hobby : developing </Person> */}
        {/* from component function */}
        {/* // <Person name="rose" work="developer">hobby : developing </Person> */}

        </div> 
      );












      ======================



      import React from 'react';
import classes from './Person.css';
// import styled from 'styled-components';
const person = (props) => {

    console.log('[Person.js rendering...');
    // const StyledDiv = styled.div`
    //     width: 50%;
    //     margin: auto;
    //     border: 1px solid #eee;
    //     box-shadow: 0 2px 3px #ccc;
    //     padding: 16px;
    //     text-align: center;

    //     @media (min-width: 500px) {
    //         width: 450px;
    //     }
    // `;

    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
    // const rnd = Math.random();
    //     if(rnd > 0.7) {
    //         throw new Error('something went wrong');
            

    //     }    
        return(
        // <div className={classes.Person} style={style}>
        <div className={classes.Person}>
        {/* // <StyledDiv> */}
             <p onClick = {props.click}> hi am {props.name} and am a {props.work}, {Math.floor(Math.random()*5)} years old </p>
            <p>{props.children}</p>
            <input type = "text" onChange = {props.change} />
        {/* // </StyledDiv> */}
           
        </div>
    
    );
};


export default person;