import React, { Component } from 'react'
import classes from './App.css';
import Person from '../Components/Persons/Person/Person';
import { cursorTo } from 'readline';
import styled from 'styled-components';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../Context/auth-context';

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'blue'};
//       color: white;
//       font: inherit;
//       border: 1x solid blue;
//       padding: 8x;
//       cursor: pointer;

//       &:hover { 
//           background-color: ${props => props.alt ? 'lightgreen' : 'lightblue'};
//           color: black;}

// `;

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons : [
      { id: "1",name: 'firose' , work: 'IT'},
      {id: "2",name: 'rose', work: 'devo'}
    ],
    otherState: "firose",
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };
 static getDerivedStateFromProps(props, state) {  
   console.log('[App.js] getDerivedStaterFromProps' ,props);
   return state;
   }
//  componentWillMount(){
//   console.log('[App.js] componentDidMount');

//  };



shouldComponentUpdate(nextProps, nextState){
  return true;
  console.log('[App.js] shouldComponentUpdate');
};

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');

};

 componentDidMount(){
   console.log('[App.js] componentDidMount');
 };

  switchNameHandler = (newName) => {
    // console.log('hello papa')
    this.setState(
      {persons : [
        {name: newName , work: 'it'},
        {name: 'rose', work: 'soft'}

      ]}
    )
  }
   nameChangeHandler =(event, id)=>{
     const personIndex = this.state.persons.findIndex(p =>{
      return p.id == id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState((prevState, props) =>{
     return {
        persons : persons,
        changeCounter : prevState.changeCounter + 1
     };
    }); 
  };  
   togglePersonHandler = ()=>{
     const doesShow = this.state.showPerson;
     this.setState({showPerson: !doesShow})

   }

   loginHandler= ()=>{
     this.setState({authenticated: true})


   }

   deletePersonHandler = (personIndex) =>{
    //  const person = this.state.person.slice();
     const persons = [...this.state.persons]
     persons.splice(personIndex, 1); 
     this.setState({persons: persons});

   }

  render() {
    console.log('[App.js] render');
    // const style = {
    //   // backgroundColor: 'yellow',
    //   // color: 'white',
    //   // font: 'inherit',
    //   // border: '1x solid blue',
    //   // padding: '8x',
    //   // cursor: 'pointer',
    //   // ':hover': { 
    //   //   backgroundColor: 'lightgreen'}
    // };
     
    // let btnClass = [classes.Button];
    // let btnClass = '';
  

    let persons = null;
    if(this.state.showPerson){
      persons = 
      // div removed
        <Persons
          persons ={this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler}
          isAuthenticated = {this.state.authenticated}
          
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

      

      // style.backgroundColor = 'red';
      // style[':hover'] = { 
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
      // btnClass.push(classes.Red);
      // btnClass = classes.Red

    }
    // let classes = ['red' , 'bold'].join(' ');



    // const assingedclasses = []
    // if(this.state.persons.length <= 1){
    //   assingedclasses.push(classes.red);
    // }
    // if(this.state.persons.length <= 2){
    //   assingedclasses.push(classes.bold);
    // }
      
    
  
    

    return (


      <Aux>
        <button onClick = {()=>{this.setState({showCockpit: false});
      }}>
        Remove cockpit
        </button>
        <AuthContext.Provider value= {{authenticated: this.state.authenticated, login: this.loginHandler, name: this.state.persons }}>
       {this.state.showCockpit ? <Cockpit
        title = {this.props.appTitle}
        // persons = {this.state.persons}
        personsLength = {this.state.persons.length}
        Showpersons = {this.state.showPerson}
        toggle = {this.togglePersonHandler}
        login = {this.loginHandler}
        /> : null}
        {/* <p className= {assingedclasses.join(' ')} >This is my first react app</p>
        <button  className = {btnClass} onClick = {this.togglePersonHandler}>Click Me</button> */}

        {/* ============================== */}
        {/* <button  className = {btnClass.join(' ')} onClick = {this.togglePersonHandler}>Click Me</button> */}
        {/* <StyledButton alt = {this.state.showPerson} onClick = {this.togglePersonHandler}>
          Click Me
        </StyledButton> */}
        {/* <button style = {style} onClick = {() => this.deletePersonHandeler}>Delet</buttom> */}
        {/* can be used like when efficient */}
        {/* <button onClick = {() => this.switchNameHandler('papa')}>CLick This</button> */}
        {/* //withstat */}
        {persons}
        
        </AuthContext.Provider>
        
      </Aux>
    );
    // return React.createElement('div', {className: "App"},'hello', React.createElement('h1',{className: "App"},'Firose'));
  }
}

export default withClass(App, classes.App);
