class peacock{
    constructor(
        name = ' ',
        weight = ' ',
        gender=' ',
        color=' ',
        vocal='',
    ){
        this.id=15;
        this.name=name
        this.weight=weight;
        this.gender=gender;
        this.color=color;
        this.vocal=vocal;
    }
    show(feathers){
        console.log(`During mating season I love to show off my ${feathers} `)
    }
}
export default peacock;