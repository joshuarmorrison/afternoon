class turkey{
    constructor(
        name = ' ',
        age = ' ',
        gender = ' ',
        weight = ' ',
    ){
        this.id=19;
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.weight=weight;
    }
    show(feathers){
        console.log(`I like to show my ${feathers} off to the ladies.`)
    }
}
export default turkey;