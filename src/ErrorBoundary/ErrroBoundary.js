import React, {Component} from 'react';



class ErrorBoundary extends Component{
    state = { 
        hasError: false,
        errorMessage: ''

    }

    componentDidCatch = (error, info)=>{
        this.setState({
            hasError: true, errorMessage: error
        });

    }
    render(){
        if(this.state.hasError){
            return <h1>{this.state.hasError}</h1>
        }else{
        return this.props.children;
        }


    
    
    
      
    }
       
    
}
export default ErrorBoundary; 


// in app js
{/* <div>
        {this.state.persons.map((person, index)=>{
          return  <ErrorBoundary 
            key ={person.id}>
            <Person
            click={()=> this.deletePersonHandler(index)}
            name={person.name}
            work = {person.work} 
            change ={(event) => this.nameChangeHandler(event, person.id)}
            />
            </ErrorBoundary>

        } */}