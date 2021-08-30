
import { ZooController } from "./controllers/ZooController.js"


// ENTRY POINT
console.log('hello is it working?????')


var zooController = new ZooController()

window['app'] = {
  controllers:{
    
    zooController
  }
}