let turn = 'x';
let title = document.querySelector(".title");
let sq = [];
function end(num1,num2,num3){
    title.innerHTML = `${sq[1]} winner`;
    document.getElementById('item'+num1).style.background = 'yellow';
    document.getElementById('item'+num2).style.background = 'yellow';
    document.getElementById('item'+num3).style.background = 'yellow';
    setInterval(function(){title.innerHTML += '.'}, 1000);
    setTimeout(function (){location.reload()},4000)
}
function winner(){
for(let i =1;i<10;i++){
sq[i] = document.getElementById('item' + i).innerHTML;
}
if (sq[1] == sq[2] && sq[2] == sq[3] && sq[1] != ''){
       end(1,2,3)
}
else if(sq[4] == sq[5] && sq[5] == sq[6] && sq[4] != ''){
end(4,5,6)
}
else if(sq[7] == sq[8] && sq[8] == sq[9] && sq[7] != ''){
    end(7,8,9)
}
else if(sq[1] == sq[4] && sq[4] == sq[7] && sq[1] != ''){
    end(1,4,7)
}
else if(sq[2] == sq[5] && sq[5] == sq[8] && sq[2] != ''){
    end(2,5,8)
}
else if(sq[3] == sq[6] && sq[6] == sq[9] && sq[3] != ''){
    end(3,6,9)
}
else if(sq[1] == sq[5] && sq[5] == sq[9] && sq[1] != ''){
    end(1,5,9)
}
else if(sq[3] == sq[5] && sq[5] == sq[7] && sq[3] != ''){
    end(3,5,7)
}
}


function game(id){
 let element = document.getElementById(id);
 if(turn === 'x' && element.innerHTML == ''){
    element.innerHTML = 'X';
    turn = 'o';
    title.innerHTML = 'O'
 }
 else if(turn === 'o' && element.innerHTML == ''){
   element.innerHTML = 'O';
   turn = 'x';
   title.innerHTML = 'X'
 }
 winner();
}