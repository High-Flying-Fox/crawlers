//varibles
let creature
let body, bodyoff, Farm, BLarm, BRarm
let active = 0

//preload the art
function preload() {
  body = loadImage("art/Body.svg")
  bodyoff = loadImage("art/BodyOff.svg")
  Farm = loadImage("art/FrontArm.svg")
  BLarm = loadImage("art/BLarm.svg")
  BRarm = loadImage("art/BRarm.svg")
}

function setup() {
  createCanvas(windowWidth - 17, 5400);

  //making the body
  creature = new crawler(windowWidth / 2, 100, body, bodyoff)

  //making the arms
  creature.arms.push(new arm(25, 30, Farm))
  creature.arms.push(new arm(-25, 30, Farm))
  creature.arms.push(new arm(30, -10, BRarm))
  creature.arms.push(new arm(-30, -10, BLarm))
}

function draw() {
  background(255);

  //moving the creature
  creature.settarget(mouseX, mouseY)
  creature.creatureStuff()

  //showing the creature
  creature.show()
}

//activing the "creature"
function mousePressed() {
  activor(creature.x, creature.y, creature)
}

function activor(dx, dy, guy) {
  if (mouseX < dx + 50 && mouseX > dx - 50) {
    if (mouseY < dy + 50 && mouseY > dy - 50) {
      if (guy.active == true) {
        guy.active = false
      } else {
        guy.active = true
      }
    }
  }
}