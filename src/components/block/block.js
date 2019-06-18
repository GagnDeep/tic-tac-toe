import React from 'react';
import classes from './block.css'

const block = props => {
    
    let divClasses = [classes.blocks];
    
    const position = checkPosition(props.i, props.j);
    
    switch(position){
        
        case 0: 
            divClasses.push(classes.centerDiv);
            break;
            
        case 1:
            props.j === 1? divClasses.push(classes.edgeDivHorizontal): divClasses.push(classes.edgeDivVertical);
            break;
            
        case 2:
            break;
        
        default: 
            alert('somehthing wrong!! close the app');
    }
    if(props.winner){
        props.winner.forEach(winner=>{
            if(winner.i === props.i && winner.j === props.j)
                divClasses.push(classes.winner);
        })
        
    }
    return <div onClick = {props.clicked} className = {divClasses.join(' ')}><p>{props.el}</p></div>;
};

function checkPosition(i, j){
    let state = 0;
    
    if(i-1<0) state++;
    
    if(j-1<0) state++;
    
    if(i+1>2) state++;
    
    if(j+1>2) state++;
    
    return state;
}

export default block;