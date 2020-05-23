class Enemy {
    constructor(type, color, element) {
    this.type = type;
    this.color = color;
    this.element = element;
    }
    attack() {
        alert(`The ${this.color} ${this.type} attacks you with a ${this.element} move!`)
    }
}

class Punk extends Enemy {
    constructor(type, color, element){
    super(type, color)
    this.element = element;
    }
    knife() {
        alert(`The ${this.color} ${this.type} slashes you with a knife!`)
    }
}

class Jukugirl extends Enemy {
    constructor(type, color, element) {
    super(type, color)
    this.element = element;
    }
    chain(){
        alert( `The ${this.color} ${this.type} whips you with a chain!`)
    }
}

const redPunk = new Punk("Punk", "Red", "Fire")
const bluePunk = new Punk("Punk", "Blue", "Ice")
const greenPunk = new Punk("Punk", "Green", "Grass")
