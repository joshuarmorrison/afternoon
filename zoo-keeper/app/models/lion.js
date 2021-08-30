class lion{
    constructor(
        name = ' ',
        height = ' ',
        gender=' ',
        legs= 0,
        fangLength='',
    ){
        this.id=11;
        this.name=name
        this.height=height;
        this.gender=gender;
        this.legs=legs;
        this.fangLength=fangLength;
    }
    eat(food){
        console.log(`I love all the ${food}s`)
    }
}
export default lion;