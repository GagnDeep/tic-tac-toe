import React, {Component} from 'react';
import GameStructure from './../../components/gameStructure/gameStructure';
import classes from './ticTacToe.css';
import helper from './../../helperFunctions/helperFunctions';
import Layout from './../../components/layout/layout';

class TicTacToe extends Component {
    
    state = {
        ticTacToe: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
        turn: 'X',
        winner: null,
        counter: 0
    }
    
    // shouldComponentUpdate = ()=>{
    //     return !Boolean(this.state.winner)
    // }
    
    render(){
        if(!this.baseState){
            this.baseState = this.state;
        }
        
        let color = !this.state.winner?(this.state.turn !== 'O'?'#00edff':'rgb(0, 201, 254)'):'rgb(0, 83, 254)';
        document.querySelector('html').style.backgroundColor = color
        
        return (
            <Layout winner = {this.state.winner} 
                    counter= {this.state.counter} 
                    turn= {this.state.turn} 
                    reset= {this.reset}>
                    
                <div className = {classes.blocks}>
                    <GameStructure 
                        clickHandler = {this.clickHandler} 
                        gameArr = {this.state.ticTacToe} 
                        winner = {this.state.winner} /> 
                </div>
                <svg height = '100px' width = '100px'
                style = {{position:'fixed', background: 'black'}}>
                <line x1 = '0' x2 = '100' y1 = '0' y2 = '100' strokeWidth= '5px' stroke = 'white' /></svg>
            </Layout>
        );
    }
    
    reset = ()=>{
        let baseState = this.baseState;
        baseState.ticTacToe = baseState.ticTacToe.map(arr=>arr.map(el=>null));
        this.setState(baseState)
    }
    
    clickHandler = (i, j) => {
        let arrUpdate = [...this.state.ticTacToe];
        
        if(!this.state.winner){
            let turn = this.state.turn, winner = this.state.winner, counter = this.state.counter;
            
            if(turn === 'X') {
                if(!arrUpdate[i][j]){
                    arrUpdate[i][j] = 'X';
                    turn = 'O';
                }
            }else{
            
                if(!arrUpdate[i][j]){
                    arrUpdate[i][j] = 'O';
                    turn = 'X';
                }
            }
            // if(this.checkWinningState(arrUpdate)){
            //     winner = arrUpdate[i][j];
            // }
            
            winner = this.checkWinner(arrUpdate);
            counter++;
            
            this.setState({ticTacToe: arrUpdate, turn: turn, winner: winner, counter: counter});
        }
    }
    
    checkWinner = arr => {
        let winner = null;
        winner = helper.crossed(arr);
        return winner;
    }
} 


export default TicTacToe;