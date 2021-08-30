class fox {
    constructor(
      name = '',
      color = '',
      gender = '',
      weight = '',
      toothLength = 0,
  ) {
      this.id = 5
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.toothLength = toothLength;
  } 
  eat(mice){
      console.log(`nom nom all the ${mice}es`)
  }
  }
  export default fox;