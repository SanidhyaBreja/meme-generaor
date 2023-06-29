const imageFileInput = document.querySelector("#imageFileInput");
const toptextInput = document.querySelector("#toptextInput");
const bottomtextInput = document.querySelector("#bottomtextInput");
const canvas = document.querySelector("#meme");
let image;
 imageFileInput.addEventListener("change", () =>{
    const imageDataUrl= URL.createObjectURL(imageFileInput.files[0]);
   
    image=new Image();
    image.src = imageDataUrl;
    image.addEventListener("load",() =>{
        updateMemeCanvas(canvas,image,toptextInput.value,bottomtextInput.value);
    },{once: true});

 });
 toptextInput.addEventListener("change", () =>{
    updateMemeCanvas(canvas,image,toptextInput.value,bottomtextInput.value);

 });

 bottomtextInput.addEventListener("change", () =>{
    updateMemeCanvas(canvas,image,toptextInput.value,bottomtextInput.value);

 });
function updateMemeCanvas(canvas,image,toptext,bottomtext)

{
    const ctx=canvas.getContext("2d");
    const width=image.width;
    const height=image.height;
    const fontSize= Math.floor(width/10);
    const yOffset=height/25;


    canvas.width=width;
    canvas.height=height;
    ctx.drawImage(image,0,0);

    //prepare text
    ctx.strokeStyle="black";
    ctx.lineWidth=Math.floor(fontSize/4);
    ctx.fillStyle="white";
    ctx.textAlign="center";
    ctx.lineJoin="round";
    ctx.font=`${fontSize}px sans-serif`;
    //add top text
    ctx.textBaseline="top";
    ctx.strokeText(toptext,width/2,yOffset);
    ctx.fillText(toptext,width/2,yOffset);

    //bottom text
    ctx.textBaseline="bottom";
    ctx.strokeText(bottomtext,width/2,height-yOffset);
    ctx.fillText(bottomtext,width/2,height-yOffset);
}


