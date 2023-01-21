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
        }
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

        }
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
        }
    }
    catNap() {
        if(this.hunger <= 2){
            alert("Thanks for eating good food! Your hunger is now zero.")
            this.hunger = 0
        } else {
            alert("Thanks for eating good food! Your hunger decreased by 2")
            this.sleepiness = this.sleepiness - 2
        }
    }
}

const Sim = new Game ("Lou")
console.log(Sim)