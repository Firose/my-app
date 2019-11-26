import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    // getDerivedStateFromProps(state, props){
    //     return state;
    //     console.log('[Persons.js] getDerivedStateFromProps');
    // };

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps');

    // }

    shouldComponentUpdate(nextProps, nextState){
        return true;
        console.log('[Persons.js] shouldComponentUpdate');

    };

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
        change = {(event) => this.props.changed(event, person.id)} />
        );
        });

    }

};


    

export default Persons;