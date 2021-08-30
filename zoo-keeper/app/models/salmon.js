class salmon{
    constructor(
        name = ' ',
        length = ' ',
        gender = ' ',
        stage = ' ',
    ){
        this.id=18;
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.stage = stage;
    }
    spawn(river){
        console.log(`I swim up the ${river} when it is spawning season`)
    }
}
export default salmon;