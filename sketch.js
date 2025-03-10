let guy
let arms = []
let body, Farm, BLarm, BRarm


function preload() {
  body = loadImage("art/Body.svg")
  Farm = loadImage("art/FrontArm.svg")
  BLarm = loadImage("art/BLarm.svg")
  BRarm = loadImage("art/BRarm.svg")
}

function setup() {
  createCanvas(windowWidth - 17, 5400);

  guy = new crawler(windowWidth / 2, 100, body)

  arms.push(new arm(25, 30, Farm))
  arms.push(new arm(-25, 30, Farm))
  arms.push(new arm(30, -10, BRarm))
  arms.push(new arm(-30, -10, BLarm))
}

function draw() {
  background(255);

  guy.setrotation(mouseX, mouseY)

  if (guy.distance(mouseX, mouseY) > 40) {
    if ((guy.distance(mouseX, mouseY) / 20) > 1.4) {
      guy.movement(1.4)
    } else {
      guy.movement((guy.distance(mouseX, mouseY) / 20))
    }
  }

  arms[0].doArmStuff(guy.x, guy.y, guy.rotation)
  arms[1].doArmStuff(guy.x, guy.y, guy.rotation)
  arms[2].doArmStuff(guy.x, guy.y, guy.rotation)
  arms[3].doArmStuff(guy.x, guy.y, guy.rotation)

  arms[0].show()
  arms[1].show()
  arms[2].show()
  arms[3].show()

  guy.show()
}
