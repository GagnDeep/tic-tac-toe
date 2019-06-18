const helper = {
    crossed: board => {
        for (let i=0; i<3; i++){
                
                if (board[i][0] === board[i][1] &&
                    board[i][1] === board[i][2] && 
                    board[i][0] !== null)
                        return ([{i: i, j: 0}, {i: i, j: 1}, {i: i, j: 2}]);
                        
                if (board[0][i] === board[1][i] &&
                    board[1][i] === board[2][i] && 
                    board[0][i] !== null)
                        return ([{i: 0, j: i}, {i: 1, j: i}, {i: 2, j: i}]);
                        
             }
        if (board[0][0] === board[1][1] &&
            board[1][1] === board[2][2] && 
            board[0][0] !== null)
                return ([{i: 0, j: 0}, {i: 1, j: 1}, {i: 2, j: 2}]);
             
        if (board[0][2] === board[1][1] &&
            board[1][1] === board[2][0] &&
             board[0][2] !== null)
                return ([{i: 0, j: 2}, {i: 1, j: 1}, {i: 2, j: 0}]);
                
        return(false);
    }
}

export default helper;