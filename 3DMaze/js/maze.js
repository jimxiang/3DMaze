function generateSquareMaze(dimension) {

    function iterate(field, x, y) {
        field[x][y] = false;
        while(true) {
            directions = [];
            // console.log(x,y);
            if(x > 1 && field[x-2][y] == true) {
                directions.push([-1, 0]);
            }
            if(x < field.dimension - 2 && field[x+2][y] == true) {
                directions.push([1, 0]);
            }
            if(y > 1 && field[x][y-2] == true) {
                directions.push([0, -1]);
            }
            if(y < field.dimension - 2 && field[x][y+2] == true) {
                directions.push([0, 1]);
            }
            if(directions.length == 0) {
                return field;
            }
            // console.log(directions);
            dir = directions[Math.floor(Math.random()*directions.length)];
            // console.log(dir);
            field[x+dir[0]][y+dir[1]] = false;
            // console.log(x+dir[0], y+dir[1]);
            field = iterate(field, x+dir[0]*2, y+dir[1]*2);
        }
    }

    // Initialize the field.
    var field = new Array(dimension);
    field.dimension = dimension;
    for(var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    // Gnerate the maze recursively.
    field = iterate(field, 1, 1);
    console.log(field);
    return field;

}


