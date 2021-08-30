class elephant {
    constructor(
      name = '',
      color = '',
      gender = '',
      weight = '',
      trunkLength = 0,
  ) {
      this.id = 4
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.trunkLength = trunkLength;
  } 
  eat(grass){
      console.log(`YUM! I love all the ${grass}es`)
  }
  }
  export default elephant;