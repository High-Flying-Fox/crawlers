//varibles
let creature
let arms = []
let body, Farm, BLarm, BRarm
let active = 0

//preload the art
function preload() {
  body = loadImage("art/Body.svg")
  Farm = loadImage("art/FrontArm.svg")
  BLarm = loadImage("art/BLarm.svg")
  BRarm = loadImage("art/BRarm.svg")
}

function setup() {
  createCanvas(windowWidth - 17, 5400);

  //making the body
  creature = new crawler(windowWidth / 2, 100, body)

  //making the arms
  arms.push(new arm(25, 30, Farm))
  arms.push(new arm(-25, 30, Farm))
  arms.push(new arm(30, -10, BRarm))
  arms.push(new arm(-30, -10, BLarm))
}

function draw() {
  background(255);

  //moving the body
  if (creature.active == true) {
    creature.setrotation(mouseX, mouseY)

    if (creature.distance(mouseX, mouseY) > 40) {
      if ((creature.distance(mouseX, mouseY) / 20) > 1.4) {
        creature.movement(1.4)
      } else {
        creature.movement((creature.distance(mouseX, mouseY) / 20))
      }
    }
  }
  //moving the arms
  arms[0].doArmStuff(creature.x, creature.y, creature.rotation)
  arms[1].doArmStuff(creature.x, creature.y, creature.rotation)
  arms[2].doArmStuff(creature.x, creature.y, creature.rotation)
  arms[3].doArmStuff(creature.x, creature.y, creature.rotation)

  //showing the legs
  arms[0].show()
  arms[1].show()
  arms[2].show()
  arms[3].show()

  //showing the body
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