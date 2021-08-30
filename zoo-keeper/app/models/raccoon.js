class raccoon{
    constructor(
        name = ' ',
        age = ' ',
        weight = ' ',
        paws = ' ',
        gender = ' ',
    ){
        this.id=17;
        this.name=name;
        this.age=age;
        this.weight=weight;
        this.paws=paws;
        this.gender=gender;
    }
    eat(food){
        console.log(`I love to eat ${food}.`)
    }
}
export default raccoon;