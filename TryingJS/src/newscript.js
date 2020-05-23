class Monster {
    constructor(type, color, element, maxHP) {
        this.type = type;
        this.color = color;
        this.element = element;
        this.maxHP = maxHP;
        this.isScary = true;
    }
    attack() {
        console.log(`The ${this.color} ${this.type} deals some damage!`);
    }
}
attack();

