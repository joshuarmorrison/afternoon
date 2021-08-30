import Alligator from "../models/Alligator.js"
import bear from "../models/bear.js"
import cat from "../models/cat.js"
import dog from "../models/dog.js"
import elephant from "../models/elephant.js"
import fox from "../models/fox.js"
import goose from "../models/goose.js"
import hare from "../models/hare.js"
import iguana from "../models/iguana.js"
import jaguar from "../models/jaguar.js"
import kangaroo from "../models/kangaroo.js"
import lion from "../models/lion.js"
import monkey from "../models/monkey.js"
import narwhal from "../models/narwhal.js"
import opposum from "../models/opposum.js"
import peacock from "../models/peacock.js"
import quail from "../models/quail.js"
import raccoon from "../models/raccoon.js"
import salmon from "../models/salmon.js"
import turkey from "../models/turkey.js"

let alpha = new Alligator("Alpha", "green", "male", 300, 48, "large")
let bravo = new bear("Bravo","brown","male",500,"long")
let charlie = new cat("Charlie", "orange", "female", "light", 20)
let delta = new dog("Delta", "black", 'male',"chunky", 10)
let echo = new elephant("Echo", "grey","female", "thick")
let foxtrot = new fox("Foxy","orange","female","airy",3)
let golf = new goose("Gary", "white", "male", "plump", 28)
let hotel = new hare("Henry", "grey", "male", "petite", 4)
let india = new iguana("Iggy","stubs","male","plump", 4)
let juliet = new jaguar("Jared","juicy",4,"male", "spotted")
let kilo = new kangaroo("Karen","shaq", "female", "trex","tyson")
let lima = new lion("Larry","devito","male",4, "freaky")
let mike = new monkey("Manny","tiny", "female","black","petite")
let november = new narwhal("Nimrod","ancient", "fat","white","slow","female")
let oscar = new opposum("Opal", "stubby", "male", "No","yes") 
let papa = new peacock("Pete","thick","male","many","annoying")
let quebec = new quail("Quinn","dainty","male","brown")
let romeo = new raccoon("Randy","baby", "thick","soft","male")
let sierra = new salmon("Sally","short","female","spawn")
let tengo = new turkey("Terrence","leftovers","male","juicy")


let zoo = [alpha, bravo, charlie, delta, echo, foxtrot, golf, hotel, india, juliet, kilo, lima, mike, november, oscar, papa, quebec, romeo, sierra, tengo]

function drawZoo(){
let template = ' '


}







export class ZooController{
    constructor(){
        console.log("hello from zoo controller")
        drawZoo()
    }
}