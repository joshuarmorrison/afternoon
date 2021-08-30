class narwhal{
    constructor(
        name=' ',
        age=' ',
        weight=' ',
        color=' ',
        speed=' ',
        gender = '',
    ){
        this.id=13;
        this.name=name;
        this.age=age;
        this.weight=weight;
        this.color=color;
        this.speed=speed;
        this.gender=gender;
    }
    swim(lazy){
        console.log(`I enjoy to be ${lazy} and friendly`)
    }
}
export default narwhal;