class jaguar{
    constructor(
        name =' ',
        weight =' ',
        legs = 0,
        gender =' ',
        color = ' ',

    ){
        this.id = 9;
        this.name = name;
        this.weight = weight;
        this.legs = legs;
        this.gender = gender;
        this.color = color;
    }
    eat(food){
        console.log(`I can eat my body weight in ${food}`)
    }
}
export default jaguar;