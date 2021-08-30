class goose {
    constructor(
      name = '',
      color = '',
      gender = '',
      weight = '',
      wingSpan = 0,
  ) {
      this.id = 6
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.wingSpan = wingSpan;
  } 
  drink(water){
      console.log(`slurp slurp all the ${water}`)
  }
  }
  export default goose;