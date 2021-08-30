class dog {
    constructor(
      name = '',
      color = '',
      gender = '',
      weight = '',
      walksDay = 0,
  ) {
      this.id = 3
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.walksDay = walksDay;
  } 
  eat(treats){
      console.log(`me love all the ${treats}ies`)
  }
  }
  export default dog;