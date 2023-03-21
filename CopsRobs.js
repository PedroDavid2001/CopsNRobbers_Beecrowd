//===========================
//matriz usada apenas para depuração local

lines = [
    '2',

    '0 0 0 0 1',
    '1 1 0 0 1',
    '0 1 0 0 0',
    '0 0 0 1 1',
    '1 1 0 0 0',
    
    '0 0 0 0 1',
    '1 1 0 0 1',
    '0 1 0 0 0',
    '0 0 1 1 1',
    '1 1 0 0 0'
];

//==========================

const matrix = [];
var gotcha;


function initial_move(arr){
    gotcha = false;
    if(arr[4][4] === 1){
        return;
    }
    move_cops(arr, 0, 1);
    move_cops(arr, 1, 0);
}

function move_cops(arr, x, y){
    
    if(arr[x][y] == 1){
        return;
    }

    if(x == 4 && y == 4){
        gotcha = true;
        return;
    }

    if(x >= 0 && y >= 0 && x < 5 && y < 5){
    
        if(x <= 3 && arr[x + 1][y] === 0){
            arr[x][y] = 1
            move_cops(arr, x + 1, y);
        }
        if(y <= 3 && arr[x][y + 1] === 0){
            arr[x][y] = 1
            move_cops(arr, x, y + 1);
        }
        if(x >= 1 && arr[x - 1][y] === 0){
            arr[x][y] = 1
            move_cops(arr, x - 1, y);
        }
        if(y >= 1 && arr[x][y - 1] === 0){
            arr[x][y] = 1
            move_cops(arr, x, y - 1);
        }
        
    }
}

for(let i = 1; i < lines.length; i++){
    if(lines[i].split('').length > 1){
        matrix.push(lines[i].split(' ').map( (num) => +num ));
    }
}

for(let i = 0; i < matrix.length; i += 5){
    var tmp_arr = []
    for(let j = 0; j < 5; j++){
        tmp_arr.push(matrix[i + j]);
    }
    initial_move([...tmp_arr]);
    console.log(gotcha === true ? 'COPS' : 'ROBBERS');
}