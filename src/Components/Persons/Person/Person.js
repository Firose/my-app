import React, {Component} from 'react';
import classes from './Person.css';
// import styled from 'styled-components';
class Person extends Component{
    render(){
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
             <p onClick = {this.props.click}> hi am {this.props.name} and am a {this.props.work}, {Math.floor(Math.random()*5)} years old </p>
            <p>{this.props.children}</p>
            <input type = "text" onChange = {this.props.change} value = {this.props.name} />
        {/* // </StyledDiv> */}
           
        </div>
    
    );

    }

};

    


export default Person;