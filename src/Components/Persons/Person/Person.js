import React, {Component} from 'react';
import classes from './Person.css';
// import styled from 'styled-components';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../Context/auth-context';
class Person extends Component{
    constructor()
    
    {   super()
        this.inputElementRef = React.createRef();

    }
    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);

    };
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
        // <div className={classes.Person}>
        <Aux>
            {/* <AuthContext.Consumer> 
                {context => context.authenticated ? <p>Authenticated!</p> : <p>please login</p>}
            </AuthContext.Consumer> */}
            {this.context.authenticated ? <p>Authenticated!</p> : <p>please login</p>}

            {/* can also Fragment instead of aux/ */}
        {/* // <StyledDiv> */}
              
             <p key = "i1" onClick = {this.props.click}> hi am {this.props.name} and am a {this.props.work}, {Math.floor(Math.random()*5)} years old </p>
            <p key = "i2">{this.props.children}</p>
            <input 
            key = "i3"
             type = "text"
              onChange = {this.props.change}
               value = {this.props.name}
            //    ref = {(inputEl) => this.inputElement = inputEl} 
                    ref = {this.inputElementRef}
               />
        {/* // </StyledDiv> */}
           
        {/* // </div> */}
        </Aux>
    
    );

    }

};

    
Person.propTypes= {
    click: PropTypes.func,
    name:  PropTypes.string,
    work: PropTypes.string,
    change: PropTypes.func

};

export default withClass(Person, classes.Person);