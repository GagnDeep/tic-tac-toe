import React from 'react';
import classes from './toolbar.css';

const toolbar = props => {
    return (
        <header className = {classes.navigation}>
            <p className = {classes.heading}>Tic-Tac-Toe</p>
            <p>By Gagandeep Singh</p>
            {!props.winner?<h2>Turn: {props.turn}</h2>:null}
            {props.winner?<h2>Winner: {props.turn === 'O'?'X':'O'}</h2>:null}
            {props.winner?<button onClick = {props.reset}>Play Again?</button>:null}
            {!props.winner&&props.counter?<button onClick = {props.reset}>Reset</button>: null}
            
        </header>
    );
}

export default toolbar;