//By Ahmet Kadir Zengin
let win = false;
let lose = false;
let tie = false;
var arr_x = new Array(3); // row
var arr_y = new Array(3); // column
var check = Array(3).fill(true).map(x => Array(3).fill(true));
var winner = Array(3).fill(2).map(x => Array(3).fill(2));
let square_s = 100; // inorder to change the square's size
var boardd;
var player = false; // player is 0
var computer = false; // computer is 1

function setup() {
  createCanvas(400,380);
  background(255,255,255);
  noLoop();
  boardd = new board();
}

function draw() {
noFill();
update();
}

function board()
{
  let square_x = 50; // inorder to change the square's width
  let square_y = 50; // inorder to change the square's height
  let size = 3; // inorder to change the board's size
  for(let i =0;i<size;i++) // creation of the 3x3 board
  {
    for(let j =0;j<size;j++)
    {
      arr_x[j] = square_x;
      rect(square_x,square_y,square_s);
      square_x += 100;
    }
    arr_y[i] = square_y;
    square_y += 100;
    square_x = 50;
  }
}

function pStarts()
{
    player = true;
    computer = false;
}
function cStarts()
{
    player = false;
    computer = true;
    computerAI(1,1);
}

function mousePressed()
{
  if(player)
  {
    if((win == false && lose == false && tie == false) && (check[0][0] != false) && (mouseX >= arr_x[0] && mouseX < arr_x[0] + square_s) && (mouseY >=arr_y[0] && mouseY < arr_y[0] + square_s)) // 0,0
    {
      check[0][0] = false;
      winner[0][0] = 0;
      ellipse(arr_x[0]+square_s/2,arr_y[0]+square_s/2,+ square_s/2);
      player = false;
      computer = true;
    }
    else if((win == false && lose == false && tie == false) && (check[1][0] != false) && (mouseX >= arr_x[1] && mouseX < arr_x[1] + square_s) && (mouseY >=arr_y[0] && mouseY < arr_y[0] + square_s)) // 0,1
    { 
      check[1][0] = false;
      winner[1][0] = 0;
      ellipse(arr_x[1]+square_s/2,arr_y[0]+square_s/2,+ square_s/2);
      player = false;
      computer = true;
    }
    else if((win == false && lose == false && tie == false) && (check[2][0] != false) && (mouseX >= arr_x[2] && mouseX < arr_x[2] + square_s) && (mouseY >=arr_y[0] && mouseY < arr_y[0] + square_s)) // 0,2
    {
      check[2][0] = false;
      winner[2][0] = 0;
      ellipse(arr_x[2]+square_s/2,arr_y[0]+square_s/2,+ square_s/2);
      player = false;
      computer = true; 
    }
    else if((win == false && lose == false && tie == false) && (check[0][1] != false) && (mouseX >= arr_x[0] && mouseX < arr_x[0] + square_s) && (mouseY >=arr_y[1] && mouseY < arr_y[1] + square_s)) // 1,0
    {
      check[0][1] = false;
      winner[0][1] = 0;
      ellipse(arr_x[0]+square_s/2,arr_y[1]+square_s/2,+ square_s/2);  
      player = false;
      computer = true;
    }
    else if((win == false && lose == false && tie == false) && (check[1][1] != false) && (mouseX >= arr_x[1] && mouseX < arr_x[1] + square_s) && (mouseY >=arr_y[1] && mouseY < arr_y[1] + square_s)) // 1,1
    {
      check[1][1] = false;
      winner[1][1] = 0;
      ellipse(arr_x[1]+square_s/2,arr_y[1]+square_s/2,+ square_s/2);
      player = false;
      computer = true;   
    }
    else if((win == false && lose == false && tie == false) && (check[2][1] != false) && (mouseX >= arr_x[2] && mouseX < arr_x[2] + square_s) && (mouseY >=arr_y[1] && mouseY < arr_y[1] + square_s)) // 1,2
    {
      check[2][1] = false;
      winner[2][1] = 0;
      ellipse(arr_x[2]+square_s/2,arr_y[1]+square_s/2,+ square_s/2);
      player = false;
      computer = true;    
    }
    else if((win == false && lose == false && tie == false) && (check[0][2] != false) && (mouseX >= arr_x[0] && mouseX < arr_x[0] + square_s) && (mouseY >=arr_y[2] && mouseY < arr_y[2] + square_s)) // 2,0
    {
      check[0][2] = false;
      winner[0][2] = 0;
      ellipse(arr_x[0]+square_s/2,arr_y[2]+square_s/2,+ square_s/2);
      player = false;
      computer = true;  
    }
    else if((win == false && lose == false && tie == false) && (check[1][2] != false) && (mouseX >= arr_x[1] && mouseX < arr_x[1] + square_s) && (mouseY >=arr_y[2] && mouseY < arr_y[2] + square_s)) // 2,1
    {
      check[1][2] = false;
      winner[1][2] = 0;
      ellipse(arr_x[1]+square_s/2,arr_y[2]+square_s/2,+ square_s/2);
      player = false;
      computer = true;
    }
    else if((win == false && lose == false && tie == false) && (check[2][2] != false) && (mouseX >= arr_x[2] && mouseX < arr_x[2] + square_s) && (mouseY >=arr_y[2] && mouseY < arr_y[2] + square_s)) // 2,2
    {
      check[2][2] = false;
      winner[2][2] = 0;
      ellipse(arr_x[2]+square_s/2,arr_y[2]+square_s/2,+ square_s/2);
      player = false;
      computer = true;
    }
  }
  update();
}

async function computerAI(r,c) //random AI
{
  await new Promise(resolve => setTimeout(resolve, 5));
  console.log(["computer", computer, check[r][c],r,c]);
  if((win == false && lose == false && tie == false) && (computer && check[r][c] == true))
  {
    check[r][c] = false;
    winner[r][c] = 1;
    rect(arr_x[r]+square_s/4,arr_y[c]+square_s/4,+ square_s/2);
    computer = false;
    player = true;
    control();
  }
  else if((win == false && lose == false && tie == false)&& (computer && check[r][c] != true))
  {
    console.log("Don't go in");
    update();
  }
}

function update()
{
  let r;
  let c;
  if(computer)
  {
    r = Math.floor(Math.random() * 3);
    c = Math.floor(Math.random() * 3);
    computerAI(r,c);
  }
  control();
}

function control()
{
  if((winner[0][0] == 0 && winner[1][0] == 0 && winner[2][0] == 0)|| // player win
  (winner[0][1] == 0 && winner[1][1] == 0 && winner[2][1] == 0)||
  (winner[0][2] == 0 && winner[1][2] == 0 && winner[2][2] == 0)||
  (winner[0][0] == 0 && winner[0][1] == 0 && winner[0][2] == 0)||
  (winner[1][0] == 0 && winner[1][1] == 0 && winner[1][2] == 0)||
  (winner[2][0] == 0 && winner[2][1] == 0 && winner[2][2] == 0)||
  (winner[0][0] == 0 && winner[1][1] == 0 && winner[2][2] == 0)||
  (winner[0][2] == 0 && winner[1][1] == 0 && winner[2][0] == 0)){
    win = true;
  }
  else if((winner[0][0] == 1 && winner[1][0] == 1 && winner[2][0] == 1)|| // computer win
  (winner[0][1] == 1 && winner[1][1] == 1 && winner[2][1] == 1)||
  (winner[0][2] == 1 && winner[1][2] == 1 && winner[2][2] == 1)||
  (winner[0][0] == 1 && winner[0][1] == 1 && winner[0][2] == 1)||
  (winner[1][0] == 1 && winner[1][1] == 1 && winner[1][2] == 1)||
  (winner[2][0] == 1 && winner[2][1] == 1 && winner[2][2] == 1)||
  (winner[0][0] == 1 && winner[1][1] == 1 && winner[2][2] == 1)||
  (winner[0][2] == 1 && winner[1][1] == 1 && winner[2][0] == 1)){
    lose = true;
  }
  else // draw
  {
    let decide = true;
    for(let a=0;a<3;a++)
    {
      for(let b=0;b<3;b++)
      {
        if(check[a][b] == true)
        {
          decide = false;
        }
      }
    }
    if(decide)
    {
      tie = true;
    }
  }
  result();
}

async function result()
{
  await new Promise(resolve => setTimeout(resolve, 150));
  if(win)
  {
    alert("YOU WIN!");
  }
  else if(lose)
  {
    alert("YOU LOSE!");
  }
  else if(tie)
  {
    alert("DRAW!");
  }
  location.reload();
}
