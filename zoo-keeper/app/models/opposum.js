class opposum{
    constructor(
        name = ' ',
        length = ' ',
        gender=' ',
        mean=' ',
        fighter='',
    ){
        this.id=14;
        this.name=name
        this.length=length;
        this.gender=gender;
        this.mean=mean;
        this.fighter=fighter;
    }
    eat(garbage){
        console.log(`I enjouy to eat out of the ${garbage}. `)
    }
}
export default opposum;
