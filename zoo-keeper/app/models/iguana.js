class iguana{
    constructor(
       name = ' ',
       length = ' ',
       gender = ' ',
       weight = ' ',
       legs = 0,
) {
    this.id = 8
    this.name = name;
    this.length = length;
    this.gender = gender;
    this.weight = weight;
    this.legs = legs;
}
hide(camo){
    console.log(`I am the hide n seek champ my ${camo} is the best`)
}
}
export default iguana;