import React, {PureComponent} from 'react';
import Person from './Person/Person';
import AuthContext from '../../Context/auth-context';

class Persons extends PureComponent{
    // getDerivedStateFromProps(state, props){
    //     return state;
    //     console.log('[Persons.js] getDerivedStateFromProps');
    // };

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps');

    // };

    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed 
    //         ){
    //         return true;
        
    //       }else{
    //         return false;
    //       }
    //     console.log('[Persons.js] shouldComponentUpdate');

    // };

    getSnapshotBeforeUpdate(prevProps, prevState){
        return {message: 'snapshot'}
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    };

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    };

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');

    };



    render(){
        console.log('[Persons.js rendering...');
        return this.props.persons.map((person, index) =>{
        return (<Person
        name = {person.name}
        work = {person.work}
        key = {person.id}
        click = {() => this.props.clicked(index)}
        change = {(event) => this.props.changed(event, person.id)}
        isAuth = {this.props.isAuthenticated} />
        );
        });

    }

};


    

export default Persons;