String.prototype.truelength = function(){
    console.log(`true length is :${this.trim().length}`);
}

let name = "Piyush   "
name.truelength();
"flsgjigf  ".truelength(); 


let array = ["Spiderman","Wonder_Woman","Ant_man"]

Object.prototype.fromMarvel = function(){
    console.log(`This are the super heros`)
}

array.fromMarvel();


let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower  : function(){
        console.log(`spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.piyush = function(){
    console.log("Piyush is the best");
}

heroPower.piyush();
