class kangaroo{
    constructor(
        name = ' ',
        height = ' ',
        gender=' ',
        armLength=' ',
        punchStrength='',
    ){
        this.id=10;
        this.name=name
        this.height=height;
        this.gender=gender;
        this.armLength=armLength;
        this.punchStrength=punchStrength;
    }
    punch(enemy){
        console.log(`I can punch my ${enemy} 1 time and knock them out.`)
    }
}
export default kangaroo;