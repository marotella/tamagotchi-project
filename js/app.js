
//Create a class with default attributes and all methods. If time allows consider removing alerts and changing text with inner html to display a message 

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
            alert("Thanks for giving your sim a quick nap! Their sleepiness decreased by 2")
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
//need something at the end of each method to check for 10 - Done!

const checkDead = () =>{
    if (Sim.sleepiness >= 10){
        document.querySelector(".simPic").src = "images/grimreaper.jpeg"
        alert("Sorry, but your sim died of exhaustion.")
        return
    } else if(Sim.hunger >= 10){
        document.querySelector(".simPic").src = "images/grimreaper.jpeg"
        alert("Sorry, but your sim died from hunger!")
        return 
    } else if (Sim.boredom >= 10){
        document.querySelector(".simPic").src = "images/grimreaper.jpeg"
        alert("Sorry, but your sim died of boredom!")

        return
    }else{
        alert("Thanks for taking care of your sim!")
    }
}
//Not sure why I made these 
// const simName = document.querySelector(".simName")
// const simHungry = document.querySelector(".simHunger")
// const simSleepy = document.querySelector(".simSleepy")
// const simBored = document.querySelector(".simBored")
// const simAge = document.querySelector(".simAge")
const updateStats = () => {
    document.querySelector(".simName").innerHTML = "Name: " + Sim.name
    document.querySelector(".simHunger").innerHTML = "Hunger: " + Sim.hunger
    document.querySelector(".simSleepy").innerHTML = "Sleepiness: "+Sim.sleepiness
    document.querySelector(".simBored").innerHTML = "Boredom: "+Sim.boredom
    document.querySelector(".simAge").innerHTML = "Age: " + Sim.age

}



//need something at the end of each method to check for 10 - Done!
//need something for win - should this live in the age?

//event listeners that: create the class, trigger the method, change the image



this.name = prompt("Name your sim!", this.name)
const Sim = new Game (this.name)
console.log(Sim)
updateStats(Sim)



// startGame.addEventListener("click", Sim.name)


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

let simPic = document.querySelector(".simPic")

//Need an age formula that increases the age in a set of time thinking 30 seconds? 1 min?
//should age changed the attributes? 
//need something for win - should this live in the age?


const ageUp= () => {
    document.querySelector(".simAge").innerHTML = "Age: " + Sim.age
    console.log(Sim)
    console.log(Sim.age)
    if(Sim.age <= 6) {
        document.querySelector(".simPic").src = "images/Toddler.jpg" 
    } else if(Sim.age > 6 && Sim.age < 13) {
        document.querySelector(".simPic").src = "images/Child.jpg"
    } else if(Sim.age > 12 && Sim.age < 21) {
        document.querySelector(".simPic").src = "images/Teen.jpg"
    } else if(Sim.age > 20 && Sim.age < 30) {
        document.querySelector(".simPic").src = "images/Adult.jpg"
    } else if(Sim.age > 30 && Sim.age < 40) {
        document.querySelector(".simPic").src = "images/Elder.png"
    } else if(Sim.age > 40) {
        alert("Congratulations your sim has made it to old age! You win")
    }else{
        console.log("Something is not working")
    }
    Sim.age = Sim.age + 3
    console.log(Sim.age)
    console.log(Sim)
}

setInterval(ageUp, 15000)//give the name of the function and not call it using parenthesis

//Move the image;

setInterval(() => {
    const x = Math.floor(Math.random()* 10)
    const y = Math.floor(Math.random() * -4)
    simPic.style.transform = `translate(${x}px,${y}px)`;
},1000)