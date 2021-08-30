class bear {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0,
    clawLength = ' ',
) {
    this.id = 1
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.clawLength = clawLength;
} 
eat(food){
    console.log(`nom nom all the ${food}ies`)
}
}
export default bear;