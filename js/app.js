class Game {
    constructor(name){
        this.name = name
        this.hunger = 5
        this.sleepiness = 5
        this.boredom = 5
        this.age = 0
    }
    eatWell () {
        if(this.hunger <= 3){
            alert("Thanks for eating good food! Your hunger is now zero.")
            this.hunger = 0
        } else {
            alert("Thanks for eating good food! Your hunger decreased by 3")
            this.hunger = this.hunger - 3
        }checkDead() 
    }
    eatJunk () {
        if(this.hunger <= 5){
            alert("Junk food is filling but now you feel a little tired! Your hunger is now zero, but your sleepiness increased by 2.")
            this.hunger = 0
            this.sleepiness = this.sleepiness + 2
        } else {
            alert("Junk food is filling but now you feel a little tired! Your hunger is now zero, but your sleepiness increased by 2.")
            this.hunger = this.hunger - 3
            this.sleepiness = this.sleepiness + 2

        }checkDead() 
    }
    deepSleep () {
        if(this.sleepiness <= 5){
            alert("Nothing better than a good night of sleep! Your sleepiness is now zero, but your boredom increased by 2.")
            this.sleepiness = 0
            this.boredom = this.boredom + 2
        } else {
            alert("Nothing better than a good night of sleep! Your sleepiness decreased by 5, but your boredom increased by 2.")
            this.sleepiness = this.sleepiness - 5
            this.boredom = this.boredom + 2
        }checkDead() 
    }
    catNap() {
        if(this.hunger <= 2){
            alert("Thanks for eating good food! Your hunger is now zero.")
            this.hunger = 0
        } else {
            alert("Thanks for eating good food! Your hunger decreased by 2")
            this.sleepiness = this.sleepiness - 2
        }checkDead() 
    }
    hike(){
        if (this.boredom <= 4){
            alert("Fun in the great outdoors! Your boredom is now zero, but your hunger and sleepiness increased by 1.")
            this.boredom = 0
            this.hunger = this.hunger + 1
            this.sleepiness = this.sleepiness + 1
        } else {
            alert("Fun in the great outdoors! Your boredom decreased by 4, but your hunger and sleepiness increased by 1.")
            this.boredom = this.boredom - 4
            this.sleepiness = this.sleepiness + 1
        }checkDead() 
        
    }
    tvTime (){
        if (this.boredom <= 3){
            alert("Got to watch your favorite show! Your boredom is now zero, but your sleepiness increased by 1.")
            this.boredom = 0
            this.sleepiness = this.sleepiness + 1
        } else {
            alert("Got to watch your favorite show! Your boredom decreased by 3, but your sleepiness increased by 1.")
            this.boredom = this.boredom - 3
            this.sleepiness = this.sleepiness + 1

        }checkDead() 
    }
}

const checkDead = () =>{
    if (this.sleepiness >= 10){
        alert("Sorry, but your sim died of exhaustion.")
        return
    } else if(this.hunger >= 10){
        alert("Sorry, but your sim died from hunger!")
        return 
    } else if (this.boredom >= 10){
        alert("Sorry, but your sim died of boredom!")
        return
    }else{
        alert("Thanks for taking care of your sim!")
    }
}



//Need an age formula that increases the age in a set of time thinking 30 seconds? 1 min?
//should age changed the attributes?
//need something at the end of each method to check for 10 - Done!
//need something for win - should this live in the age?

//event listeners that: create the class, trigger the method, change the image
let startGame = document.querySelector(".initiate")
startGame.addEventListener("click", 
)

const makeNewSim = (name) => {
    const name = prompt("Name your sim!", )
}

//buttons to trigger a method:
let veggieButton = document.querySelector(".eatWell")
veggieButton.addEventListener("click", Sim.eatWell)
let junkButton = document.querySelector(".eatPoorly")
junkButton.addEventListener("click", Sim.eatJunk)

let napButton = document.querySelector(".nap")
napButton.addEventListener("click", Sim.catNap)

let sleepButton = document.querySelector(".sleep")
sleepButton.addEventListener("click", Sim.deepSleep)

let hikeButton = document.querySelector(".hike")
let tvButton = document.querySelector(".tvTime")


//in html/css need the image to change based on age progression, and movement for the sim


const Sim = new Game ("Lou")
console.log(Sim)

console.log(Sim.eatJunk())
console.log(Sim)