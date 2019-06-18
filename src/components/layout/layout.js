import React, {Component} from 'react';
import classes from './layout.css';
import Toolbar from './../ui/toolbar/toolbar'

class Layout extends Component{
    render(){
        return (
            <div className = {classes.mainDiv}>
                <Toolbar winner = {this.props.winner} 
                    counter = {this.props.counter} 
                    turn = {this.props.turn} 
                    reset = {this.props.reset}/>
                {this.props.children}
            </div>
            
        );
    }
}

export default Layout;