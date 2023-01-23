class Game {
    constructor(name){
        this.name = name
        this.hunger = 5
        this.sleepiness = 5
        this.boredom = 5
        this.age = 0
    }
    eatWell () {
        if(Sim.hunger <= 3){
            alert("Thanks for having your sim eat healthy food! Their hunger is now zero.")
            Sim.hunger = 0
            console .log(Sim)
        } else {
            alert("Thanks for having your sim eat healthy food! Their hunger has decreased by 3.")
            Sim.hunger = Sim.hunger - 3
            console.log(Sim)
        }
        updateStats(Sim)
        checkDead(Sim) 
    }
    eatJunk () {
        if(Sim.hunger <= 5){
            alert("Junk food is filling but now your sim feels quite tired! Their hunger is now zero, but thier sleepiness increased by 2.")
            Sim.hunger = 0
            Sim.sleepiness = Sim.sleepiness + 2
        } else {
            alert("Junk food is filling but now your sim feels a little tired! Thier hunger is now zero, but their sleepiness increased by 2.")
            Sim.hunger = Sim.hunger - 3
            Sim.sleepiness = Sim.sleepiness + 2

        }updateStats(Sim)
        checkDead(Sim) 
    }
    deepSleep () {
        if(Sim.sleepiness <= 5){
            alert("Nothing better than a good night of sleep! Their sleepiness is now zero, but their boredom increased by 2.")
            Sim.sleepiness = 0
            Sim.boredom = Sim.boredom + 2
        } else {
            alert("Nothing better than a good night of sleep! Their sleepiness decreased by 5, but your their increased by 2.")
            Sim.sleepiness = Sim.sleepiness - 5
            Sim.boredom = Sim.boredom + 2
        }updateStats(Sim)
        checkDead(Sim) 
    }
    catNap() {
        if(Sim.hunger <= 2){
            alert("Thanks for giving your sim a quick nap! Their sleepiness is now zero.")
            Sim.hunger = 0
        } else {
            alert("Thanks for giving your sim a quick nap! Their hunger decreased by 2")
            Sim.sleepiness = Sim.sleepiness - 2
        }updateStats(Sim)
        checkDead(Sim)  
    }
    hike(){
        if (Sim.boredom <= 4){
            alert("Fun in the great outdoors! Their boredom is now zero, but their hunger and sleepiness increased by 1.")
            Sim.boredom = 0
            Sim.hunger = Sim.hunger + 1
            Sim.sleepiness = Sim.sleepiness + 1
        } else {
            alert("Fun in the great outdoors! Their boredom decreased by 4, their hunger and sleepiness increased by 1.")
            Sim.boredom = Sim.boredom - 4
            Sim.sleepiness = Sim.sleepiness + 1
        }updateStats(Sim)
        checkDead(Sim) 
        
    }
    tvTime (){
        if (Sim.boredom <= 3){
            alert("Got to watch your favorite show! Your boredom is now zero, but your sleepiness increased by 1.")
            Sim.boredom = 0
            Sim.sleepiness = Sim.sleepiness + 1
        } else {
            alert("Got to watch your favorite show! Your boredom decreased by 3, but your sleepiness increased by 1.")
            Sim.boredom = Sim.boredom - 3
            Sim.sleepiness = Sim.sleepiness + 1
        }updateStats()
        checkDead() 
    }
}

const checkDead = () =>{
    if (Sim.sleepiness >= 10){
        alert("Sorry, but your sim died of exhaustion.")
        return
    } else if(Sim.hunger >= 10){
        alert("Sorry, but your sim died from hunger!")
        return 
    } else if (Sim.boredom >= 10){
        alert("Sorry, but your sim died of boredom!")
        return
    }else{
        alert("Thanks for taking care of your sim!")
    }
}

const simName = document.querySelector(".simName")
const simHungry = document.querySelector(".simHunger")
const simSleepy = document.querySelector(".simSleepy")
const simBored = document.querySelector(".simBoared")
const simAge = document.querySelector(".simAge")
const updateStats = () => {
    document.querySelector(".simName").innerHTML = "Name: " + Sim.name
    document.querySelector(".simHunger").innerHTML = "Hunger: " + Sim.hunger
    document.querySelector(".simSleepy").innerHTML = "Sleepiness: "+Sim.sleepiness
    document.querySelector(".simBored").innerHTML = "Boredom "+Sim.boredom
    document.querySelector(".simAge").innerHTML = "Age: "+Sim.age
}
  


//Need an age formula that increases the age in a set of time thinking 30 seconds? 1 min?
//should age changed the attributes? 
//need something at the end of each method to check for 10 - Done!
//need something for win - should this live in the age?

//event listeners that: create the class, trigger the method, change the image
this.name = prompt("Name your sim!", this.name)
const newName = document.querySelector(".simName")
const Sim = new Game (this.name)
console.log(Sim)
let startGame = document.querySelector(".initiate")
console.log(startGame)
// startGame.addEventListener("click", Sim.name)
updateStats(Sim)

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
hikeButton.addEventListener("click", Sim.hike)

let tvButton = document.querySelector(".tvTime")
tvButton.addEventListener("click", Sim.tvTime)


//in html/css need the image to change based on age progression, and movement for the sim
