import React from 'react';
import Block from './../block/block';


const gameStructure = props => {
    let divArr = props.gameArr.map((arr,i) => arr.map((el, j) => {
        return (<Block 
                    key={`${i}-${j}`} 
                    i = {i} 
                    j = {j} 
                    el = {el} 
                    clicked = {()=>props.clickHandler(i, j)}
                    winner = {props.winner}/>)
        }) 
    );   
    
    divArr = [].concat(...divArr);
    
    return divArr;
}

export default gameStructure;