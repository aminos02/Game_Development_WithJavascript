
const canvas=document.getElementById('rootCanvas');
const ctx=canvas.getContext('2d')
const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;
const spriteWidth=575;
const spriteHeight=523;
let frameX=0;
let frameY=0;
const playerImage=new Image();
playerImage.src='shadow_dog.png';
let gameFrame=0;
let staggerFrames=5;

const animationsStates = [
    { name: "idle", frame: 7 },
    { name: "jump", frame: 7 },
    { name: "fall", frame: 7 },
    { name: "run", frame: 9 },
    { name: "dizzy", frame: 11 },
    { name: "sit", frame: 5 },
    { name: "roll", frame: 7 },
    { name: "bit", frame: 7 },
    { name: "ko", frame: 12 },
    { name: "getHit", frame: 4 },
];
const spriteAnimations=[];
animationsStates.forEach((state,index)=>{
    let o={
        loc:[]
    };
    for(let i=0;i<state.frame;i++){
        let x=i*spriteWidth;
        let y=index*spriteHeight;
        o.loc.push({x,y})
    }
    spriteAnimations[state.name]=o
})
let animationName='run';
document.getElementById('selector').addEventListener('change',(e)=>{

    animationName=e.target.value
})

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100)
    let position=Math.floor(gameFrame/staggerFrames)%spriteAnimations[animationName].loc.length;

    frameX=spriteAnimations[animationName].loc[position].x;
    frameY=spriteAnimations[animationName].loc[position].y
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight)
    // animate()
    if(gameFrame %staggerFrames==0){
        if(frameX<6)
        frameX++;
        else frameX=0
    }
    requestAnimationFrame(animate)
    gameFrame++
}

// setTimeout(()=>{
//     animate()
// )
animate()
