
const canvas=document.getElementById('rootCanvas');
const ctx=canvas.getContext('2d')
const CANVAS_WIDTH=canvas.width=800;
const CANVAS_HEIGHT=canvas.height=700;

const bg_layer1=new Image();
bg_layer1.src="assets/layer-1.png"
const bg_layer2=new Image();
bg_layer2.src="assets/layer-2.png"
const bg_layer3=new Image();
bg_layer3.src="assets/layer-3.png"
const bg_layer4=new Image();
bg_layer4.src="assets/layer-4.png"
const bg_layer5=new Image();
bg_layer5.src="assets/layer-5.png"

const imageWidth=2400;
let x=0;
let y=imageWidth;
let gameSpeed=5;

const slider=document.getElementById('slider');
slider.value=gameSpeed;
const spanShowSpeed=document.getElementById('show_speed');
spanShowSpeed.innerHTML=gameSpeed;
slider.addEventListener(('change'),(e)=>{
    gameSpeed=e.target.value;
    spanShowSpeed.innerHTML=gameSpeed;
});


class Layer{
    constructor(image,speedModifier){
        this.x=0;
        this.y=0;
        this.width=2400;
        this.height=700;
        this.image=image;
        this.speedModifier=speedModifier;
        this.speed=speedModifier*gameSpeed;
    }
    update(){
        this.speed=this.speedModifier*gameSpeed;
        if(this.x<=-this.width){
            this.x=0
        } 
        this.x-=gameSpeed;
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height)        
    }
}
const layers=[
    new Layer(bg_layer1,0.5),
    new Layer(bg_layer2,0.5),
    new Layer(bg_layer3,0.5),
    new Layer(bg_layer4,0.5),
    new Layer(bg_layer5,1),
]

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    layers.forEach(layer=>{
        layer.draw();
        layer.update()
    })
    requestAnimationFrame(animate)
}
animate()