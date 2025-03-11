class crawler {

    constructor(x, y, body, bodyoff) {
        this.x = x
        this.y = y
        this.body = body
        this.bodyoff = bodyoff
        this.rotation = 0
        this.active = false
    }

    show() {
        push()
        imageMode(CENTER)
        angleMode(DEGREES)
        translate(this.x, this.y, 10)
        rotate(this.rotation + 90)
        if (this.active == true) {
            image(this.body, 0, 0)
        } else {
            image(this.bodyoff, 0, 0)
        }
        
        pop()
    }

    setrotation(dx, dy) {
        let num

        if (dy < this.y) {
            num = 1
        } else {
            num = 0
        }
        angleMode(DEGREES)
        this.rotation = (atan((this.x - dx) / (dy - this.y))) + (180 * num)
    }

    distance(dx, dy) {
        return round(sqrt(((this.x - dx) * (this.x - dx)) + ((this.y - dy) * (this.y - dy))))
    }

    movement(power) {
        this.x -= (power * sin(this.rotation))
        this.y += (power * cos(this.rotation))
    }

}

class arm {

    constructor(dx, dy, body) {
        this.x = 0
        this.y = 0
        this.rotation = 0
        this.body = body
        this.targetx = 0
        this.targety = 0
        this.offsetx = dx
        this.offsety = dy
        this.pointx = 0
        this.pointy = 0
    }

    show() {
        push()
        imageMode(CENTER)
        angleMode(DEGREES)
        translate(this.x, this.y, -10)
        rotate(this.rotation + 90)
        image(this.body, 0, 0)
        pop()
    }

    //Math for moving the legs and stuff
    doArmStuff(dx, dy, drotation) {
        this.pointx = dx
        this.pointy = dy
        this.rotation = drotation

        this.pointx -= (this.offsety * sin(this.rotation))
        this.pointy += (this.offsety * cos(this.rotation))

        this.pointx -= (this.offsetx * sin(this.rotation + 90))
        this.pointy += (this.offsetx * cos(this.rotation + 90))

        this.x += ((this.targetx - this.x) / 3)
        this.y += ((this.targety - this.y) / 3)

        if (this.distance(this.pointx, this.pointy) > 25) {
            this.targetx = this.pointx
            this.targety = this.pointy
            console.log("leg raise")
        }

        this.setrotation(dx, dy)
        this.setrotation(dx, dy)
    }

    distance(dx, dy) {
        return round(sqrt(((this.x - dx) * (this.x - dx)) + ((this.y - dy) * (this.y - dy))))
    }

    setrotation(dx, dy) {
        let num

        if (dy < this.y) {
            num = 1
        } else {
            num = 0
        }
        angleMode(DEGREES)
        this.rotation = (atan((this.x - dx) / (dy - this.y))) + (180 * num)
    }
}

