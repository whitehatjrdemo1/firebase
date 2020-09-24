var ball;
var hypball,database;
var position;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
    hypball = createSprite(250,250,10,10);
    hypball.shapeColor = "red";
    var hypballPosition=database.ref('ball/position');
    hypballPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    hypball.x = hypball.x + x;
    hypball.y = hypball.y + y;
}
function readPosition(data){
    position=data.val();
    hypball.x=position.x;
    hypball.y=position.y
}
function writePosition(x,y){
    database.ref('ball/postion').set({
        'x':position.x+x,
        'y':position.y+y
    })
}