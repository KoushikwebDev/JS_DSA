// 994. Rotting Oranges

/**
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
 */


const orangesRotting = function(grid) {
    
    let m = grid.length; // rows
    let n = grid[0].length; // column
    
    let queue = [];
    
    // first add all rotten orange's index in the queue
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 2){
                queue.push([i, j, 0]); // here pushed the rotten indexes to the queue, last value is for the minutes
            }
        }
    }

    let maxMinutes = 0;

    // mark adj nodes as rotten and push it in the queue till queue is not empty
    while(queue.length){
        let [x, y, min] = queue.shift(); //removing the 1st ele and storing the rotten element's index in x and y and current minutes
        // now check for the left
        if(x > 0 && grid[x - 1][y] === 1){ // if fresh
            grid[x - 1][y] = 2;
            queue.push([x -1, y, min + 1]); // pushing to the queue and increasing the minutes
        }
        // now chck for the right
        if(x < m -1 && grid[x + 1][y] === 1){
            grid[x + 1][y] = 2;
            queue.push([x +1, y, min + 1]);
        }
        // now check for the top
        if(y > 0 && grid[x][y - 1] === 1){
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, min + 1]);

        }
        // now check for the bottom
        if( y < n -1 && grid[x][y + 1]=== 1){
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, min + 1]);
        }

        maxMinutes = Math.max(maxMinutes, min);
    }
    // finally loop through in elements to check if any fresh is remaining
        for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    }

    return maxMinutes;

};