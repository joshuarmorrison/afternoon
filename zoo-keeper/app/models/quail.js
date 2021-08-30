class quail{
    constructor(
        name = '',
        weight = ' ',
        gender = ' ',
        color = ' ',
    ){
        this.id=16;
        this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.color = color;
    }
    fly(fast){
        console.log(`I love to fly as ${fast} as possible`)
    }
}
export default quail;