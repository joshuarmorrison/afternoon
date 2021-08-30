class hare {
    constructor(
      name = '',
      color = '',
      gender = '',
      weight = '',
      legs = 0,
  ) {
      this.id = 7
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.legs = legs;
  } 
  run(fast){
      console.log(`I am the ${fast}est`)
  }
  }
  export default hare;