class cat{
    constructor(
      name = '',
      color = '',
      gender = '',
      weight = '',
      napsPerDay = 0,
  ) {
      this.id = 2
      this.name = name;
      this.color = color;
      this.gender = gender;
      this.weight = weight;
      this.napsPerDay = napsPerDay;
  } 
  sleep(nap){
      console.log(`I love to have my ${nap}s`)
  }
  }
  export default cat;