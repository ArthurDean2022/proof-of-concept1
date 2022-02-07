const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const imgSize = 600
const gridImageSize = 200
const numShirts = 5
const numRows = 3
const numCols = 4
let shirt1front, shirt1back,shirt2front, shirt2back,shirt3front,shirt3back,shirt4front, shirt4back, shirt5front, shirt5back, shirt6front, shirt6back, shirt7front, shirt7back, shirt8front, shirt8back, shirt9front, shirt9back, shirt10back, shirt11front, shirt12front, shirt13front, shirt13back, shirt14front, shirt14back
let drawing1front, drawing1back, drawing2front, drawing2back, drawing3front, drawing3back, drawing4front, drawing4back, drawing5front, drawing5back, drawing6front, drawing6back, drawing7front, drawing7back, drawing8back, drawing8front, drawing9front, drawing9back, drawing10front, drawing10back, drawing11front, drawing11back, drawing12front, drawing12back, drawing13front, drawing13back, drawing14front, drawing14back, drawing15front, drawing15back
let thetaX = 0
let thetaY = 0
let mouseStart = {x: 0, y: 0}

let shirts = []

let drawings = []



const controlCircleSize = 25
let shirtControlCircleData
let drawingControlCircleData

let toggleButtons
const toggleButtonWidth = 100
const toggleButtonHeight = 50
const numToggles = 2
// const toggleButtonNames = ['single', 'grid', 'doodles']


let counter = 0
let overallState = 1
const numStates = 2


function preload(){
  shirt1front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196870/Color_Concept_3_mp04vw.png');
  shirt1back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt2front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196870/Color_Concept_1_i7qyu0.png');
  shirt2back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt3front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196870/Color_Concept_4_oxtpkn.png');
  shirt3back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt4front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196870/Color_Concept_10_gm6xaa.png');
  shirt4back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt5front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196870/Color_Concept_2_s4tom8.png');
  shirt5back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt6front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196874/Color_Concept_7_w3ez5h.png');
  shirt6back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt7front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196874/Color_Concept_9_audqdo.png');
  shirt7back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt8front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196874/Color_Concept_5_xpvpyj.png');
  shirt8back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt9front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196874/Color_Concept_8_qfpl1n.png');
  shirt9back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt10front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644196876/Color_Concept_6_hwqba9.png');
  shirt10back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt11front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644198740/Color_Concept_12_sfhbrk.png');
  shirt11back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt12front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644198737/Color_Concept_11_dtkdml.png');
  shirt12front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt13front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644198740/Color_Concept_14_k5pshx.png');
  shirt13back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  shirt14front = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644198741/Color_Concept_13_puxxuo.png');
  shirt14back = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1644197751/ucseal_blu_gold_m9ryjr.jpg');

  drawing1front = loadImage('drawing-1.png')
  drawing1back= loadImage('drawing-2.png')
  
  drawing2front = loadImage('drawing-3.png')
  drawing2back= loadImage('drawing-4.png')
  
  drawing3front = loadImage('drawing-5.png')
  drawing3back= loadImage('drawing-6.png')
  
  drawing4front = loadImage('drawing-7.png')
  drawing4back= loadImage('drawing-8.png')
  
  drawing5front = loadImage('drawing-9.png')
  drawing5back= loadImage('drawing-10.png')
  
  drawing6front = loadImage('drawing-11.png')
  drawing6back= loadImage('drawing-12.png')
  
  drawing7front = loadImage('drawing-13.png')
  drawing7back= loadImage('drawing-14.png')
  
  drawing8front = loadImage('drawing-15.png')
  drawing8back= loadImage('drawing-16.png')
  
  drawing9front = loadImage('drawing-18.png')
  drawing9back= loadImage('drawing-19.png')
  
  drawing10front = loadImage('drawing-19.png')
  drawing10back= loadImage('drawing-20.png')
  
   drawing11front = loadImage('drawing-21.png')
  drawing11back= loadImage('drawing-22.png')
  
  drawing12front = loadImage('drawing-23.png')
  drawing12back= loadImage('drawing-24.png')
  
  drawing13front = loadImage('drawing-25.png')
  drawing13back= loadImage('drawing-26.png')
  
  drawing14front = loadImage('drawing-29.png')
  drawing14back= loadImage('drawing-28.png')
  
  drawing15front = loadImage('drawing-27.png')
  drawing15back= loadImage('drawing-30.png')

 

  const shirt1 = {
    front: shirt1front,
    back: shirt1back,
  }

  const shirt2 = {
    front: shirt2front,
    back: shirt2back,
  }
  
  const shirt7 = {
    front: shirt7front,
    back: shirt7back,
  }

  const shirt8 = {
    front: shirt8front,
    back: shirt8back,
  }
  
  const shirt5 = {
    front: shirt5front,
    back: shirt5back,
  }

  const shirt6 = {
    front: shirt6front,
    back: shirt6back,
  }

  const shirt3 = {
    front: shirt3front,
    back: shirt3back,

    
  }
  const shirt4 = {
    front: shirt4front,
    back: shirt4back,

    
  }
  
  const shirt9 = {
    front: shirt9front,
    back: shirt9back,

    
  }

  const shirt10 = {
    front: shirt10front,
    back: shirt10back,

    
  }

  const shirt11 = {
    front: shirt11front,
    back: shirt11front,

    
  }

  const shirt12 = {
    front: shirt12front,
    back: shirt12front,

    
  }

  const shirt13 = {
    front: shirt13front,
    back: shirt13back,

    
  }

  const shirt14 = {
    front: shirt14front,
    back: shirt14back,

    
  }

  const drawing1 = {
    front: drawing1front,
    back: drawing1back,

    
  }

  const drawing2 = {
    front: drawing2front,
    back: drawing2back,
  }

  const drawing3 = {
    front: drawing3back,
    back: drawing3front,
  }

  const drawing4 = {
    front: drawing4front,
    back: drawing4back,
  }

  const drawing5 = {
    front: drawing5front,
    back: drawing5back,
  }

  const drawing6 = {
    front: drawing6front,
    back: drawing6back,
  }

  const drawing7 = {
    front: drawing7front,
    back: drawing7back,
  }

  const drawing8 = {
    front: drawing8front,
    back: drawing8back,
  }

  const drawing9 = {
    front: drawing9front,
    back: drawing9back,
  }

  const drawing10 = {
    front: drawing10front,
    back: drawing10back,
  }

  const drawing11 = {
    front: drawing11front,
    back: drawing11back,
  }

  const drawing12 = {
    front: drawing12front,
    back: drawing12back,
  }
  
  const drawing13 = {
    front: drawing13front,
    back: drawing13back,
  }

 const drawing15 = {
    front: drawing15front,
    back: drawing15back,
  }

  const drawing14 = {
    front: drawing14front,
    back: drawing14back,
  }

  

  shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12, shirt13, shirt14]
   drawings = [drawing1, drawing2, drawing3, drawing4, drawing5, drawing6, drawing7, drawing8, drawing9, drawing10, drawing11, drawing12, drawing13, drawing14, drawing15]
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);  
  shirtControlCircleData = Array.from({length: shirts.length}, (el, i) => {
    const x = canvasWidth/2 - controlCircleSize * 2
    const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.9)
    const col = [random(0, 255), random(0, 255), random(0, 255),]
    return {
        x,y, col
    }
})

drawingControlCircleData  = Array.from({length: drawings.length}, (el, i) => {
  const x = canvasWidth/2 - controlCircleSize * 2
  const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.8)
  const col = [random(0, 255), random(0, 255), random(0, 255),]
  return {
      x,y, col
  }
})


toggleButtons = Array.from({ length: numToggles}, (el, i  ) => {
  const x = - ((numToggles - 1) * toggleButtonWidth) + (i * toggleButtonWidth * 1.5) - toggleButtonWidth/2
  const y = -canvasHeight/2 + 50
  const col = [random(255), random(255), random(255)]
  const hoverCol = [random(255), random(255), random(255)]
  return {
    x,
    y,
    col,
    hoverCol,
    width: toggleButtonWidth,
    height: toggleButtonHeight
  } 
})

}

function draw(){
  background(120, 120, 120, 100)
  rectMode(CENTER);
  drawToggleButtons()
  renderCurrentState(overallState)
}

function mousePressed(){
  mouseStart = {x: mouseX, y: mouseY}
  checkCircles(mouseX - canvasWidth/2, mouseY - canvasHeight/2)
  const clicked = (checkToggles(mouseX - canvasWidth/2, mouseY - canvasHeight/2))
  
  if(clicked){
    overallState = clicked
    }
  

}

function mouseDragged(){
    thetaY = map(Math.abs(mouseX - mouseStart.x), 0,  200, 0, TWO_PI)
    thetaX = map(Math.abs(mouseY - mouseStart.y), 0,  200, 0, TWO_PI)
    // console.log(theta)
}


const drawShirtControlCircles = () => {
  
  shirtControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawDrawingControlCircles = () => {
  
  drawingControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}


const drawToggleButtons = () => {
  toggleButtons.forEach(button => {
    fill(button.col)
    rect(button.x, button.y, button.width, button.height, 120)
  })
  
}



// const checkHover = () => {
//   if(mouseX > canvasWidth/4 && 
//       mouseX < canvasWidth/4 + canvasWidth/2 &&
//       mouseY > canvasHeight/4 && 
//       mouseY < canvasHeight/4 + canvasHeight/2){
//           return true
//       }else{
//           return false
//       }

// }

const checkCircles = (mX, mY) => {
  console.log(mX, mY)
  if(overallState === 2){
    shirtControlCircleData.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })
  }else if(overallState === 3){
    drawingControlCircleData.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })

}else if(overallState === 4){
  funstuffControlCircleData.forEach((circlePosition, idx) => {
    if(mX > circlePosition.x - controlCircleSize/2 &&
        mX < circlePosition.x + controlCircleSize/2 &&
        mY > circlePosition.y - controlCircleSize/2 &&
        mY < circlePosition.y + controlCircleSize/2){
            counter = idx
        }
})

  }
}

const checkToggles = (mX, mY) => {
  console.log(mX, mY)
  const toggleChecks = toggleButtons.map((toggle, idx) => {
      if(mX > toggle.x  - toggleButtonWidth/2&&
          mX < toggle.x + toggleButtonWidth/2 &&
          mY > toggle.y - + toggleButtonHeight/2 &&
          mY < toggle.y + toggleButtonHeight/2){
              return idx + 1
          }else{
            return false
          }
  })
  const found = toggleChecks.filter((el, i) => el > 0)
  if(found){
    return found[0] 
  }
}


function drawBackgroundBox(size, xOff, yOff){
  push()
    translate(xOff - imgSize/4, yOff,0)
    rotateX(-thetaX)
    rotateY(-thetaY)
    fill(130)
    box(size,size,1)
  pop()
}


function drawShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(xOff, yOff, side)
    translate(xOff,yOff, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    translate(xOff, yOff, side)
    // console.log(img)
    texture(img)
    rect(0,0, size, size)
  pop()
}




function drawGridShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(-size/2 + xOff, -size/2 + yOff, side)
    // translate(size/2,size/2, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    // translate(-size/2, -size/2, side)
    
    texture(img)
    rect(0,0, size, size)
  pop()
}



const renderCurrentState = (overallState) => {
  // console.log(overallState)
  switch(overallState){
    case 1:
      drawGrid()
      return
    case 2: 
      drawCloseUp()
      drawShirtControlCircles()
      return
      case 3:
        showDrawings()
        drawDrawingControlCircles()
        return
    default : 
      return
  }
}

const drawGrid = () => {

    // rotateX(PI)
  let count = 0
  for(let i = 0; i< numCols; i++){
    for(let j = 0; j < numRows; j++){
      // drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

      drawGridShirtSide(shirts[count].front, gridImageSize, 
                      (i * gridImageSize) - canvasWidth/6, 
                      (j * gridImageSize) - canvasHeight/6 + 100, 2)
      drawGridShirtSide(shirts[count].back, gridImageSize,
                      (i * gridImageSize) - canvasWidth/6,  
                      (j * gridImageSize) - canvasHeight/6 + 100, -2)
      //shirtCount++
      count++
    }

  }
}


const drawCloseUp = () => {
  console.log(counter, shirts)
  console.log(shirts[counter])
  drawShirtSide(shirts[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(shirts[counter].back, imgSize, 0, 0 , -1)
}

const showDrawings = () => {
  console.log(counter, drawings)
  console.log(drawings[counter])
  drawShirtSide(drawings[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(drawings[counter].back, imgSize, 0, 0 , -1)
}
