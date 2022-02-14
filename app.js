
class Ship {
    constructor(hull, firepower, accuracy){ 
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = true;
    }
}

    class USS extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
    }
    attack(ar) {
        if(this.accuracy >=Math.random()) 
        {
            ar.hull -=this.firepower;
            alert("USS has been hit")
            if(ar.hull <=0)
        {
                ar.alive = false;
                alert("Alien ship destroyed")
            }
        }
        else {
            alert("USS missed target");
             }
            }
    }


class Alien1 extends Ship{
    constructor(hull, firepower, accuracy){
        super(hull, firepower, accuracy)
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2; 
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack(player) {
        if(this.accuracy >= Math.random()) {
            player.hull -= this.firepower;
            alert('The enemy hit your ship! You have $(player.hull) hit points remaining.')
            if(player.hull <= 0) {
                player.alive = false
                alert("Your ship has been destroyed! That's it, Game Over!")
            }
        }
    }
}


let ar= [];
for(let i=0; i < 6; i++)
{
    ar[i]= new Alien1;
}

let hero= new USS(20,5,0.7);

function continueBattle(){
    let cont = prompt("Would like to continue battling?", "Yes or no")
    if(cont.toLowerCase()==='yes' && hero.hull > 0){
        alert("You have")
        return true
    }else{
        (con.toLowerCase()==="no")
        alert("retreat results")
        return false
    } 
}

function spaceBattle(hero, ar)
    {
        for(i=0; i<ar.length; i++){
            document.querySelector('#battle1').innerHTML =`Hull : ${hero.hull} <br> FirePower : ${hero.firepower} <br> Accuracy : ${hero.accuracy}`;
            document.querySelector('#battle2').innerHTML =`Hull : ${ar[i].hull} <br> FirePower : ${ar[i].firepower} <br> Accuracy : ${ar[i].accuracy}`;
            if(hero.alive){
                alert("battle "+(i+1));
            }
            if(continueBattle()===true)
            {
                while(hero.alive && ar[i].alive)
                {
                    hero.attack(ar[i]);
                    document.querySelector('#battle2').innerHTML = `Hull : ${ar[i].hull} <br> Firepower : ${ar[i].firepower} <br> Accuracy : ${ar[i].accuracy}`
                if(ar[i].alive==true)
                {
                    ar[i].attach(hero)
                    document.querySelector('#battle1').innerHTML = `Hull : $(hero.hull) <br> Firepower : ${hero.firepower} <br> Accuracy : $(hero.accuracy)`;
                }
                }
            }
            else {
                break;
            }
        }
    }
    spaceBattle(hero,ar);





// function theOffense(player, eF)

// player.attack(eF[i]);
// if(eF[i].alive == true){
//     eF[i].attack(player)
// }

// function battle(player, eF){
//     for(i=0; i < eF.length; i++){
        
//         if(letsFinishWhatWeStarted()=== true){
//             if(player.alive == true){alert('Battle #' + (i + 1))}
//             while(player.alive && eF[i].alive){

//                 player.attack(eF[i]);
//                 if (eF[i].alive ==true)
//              {
//                  eF[i].attack(player)
//              }
//             }
//         }
//     }
  
// }


// function fight(){
//     let start = prompt("Would like to battle some aliens?", "Yes or No")
//         if(start.toLowerCase()===('yes')){
//             battle(hero,enemyFleet)
//         } else {alert("You suck! Earth will be terminated")
            
//         }
// }

// fight();

// fight();
// function continueBattle(){
//     let cont = prompt("Would like to continue battling?", "Yes or no")
//     if(cont.toLocaleLowerCase()==='no'){
//         alert('You have ')
//         return this.false
//     }
// }


//fight ()

    //let heroShip = document.querySelector('playerStatus')
    //heroShip.innerHTML = Hull ; ${hero.hull} <br> Firepower : ${hero.firepower} <br> Accuracy : ${hero.accuracy} 

    // var alienShipArr = [];

// for(i = 1; i <= 7; i++) {
//     let hull = Math.floor(Math.random() * (6 - 3) + 3);
//         let firepower = Math.floor(Math.random() * (4 - 2) + 2);
//         let accuracy = Math.floor(Math.random() * (.8 - .6) + .6);
// var alienShip = new Ship ("spaceAliens", hull, firepower, accuracy);

// alienShipArr.push(alienShip)        
// };
// console.log(alienShipArr)

// startBattle = () => {
//     while(alienShipArr.length !== 0){
//         var remainingShips = alienShipArr.pop()
//         if(Math.random() <= remainingShips.accuracy){
//             console.log("Got hit " + alienShip.hull)

//             earthShip.hull = earthShip - alienShip.firepower
//             console.log("USS was hit " + earthShip.hull)

//         } else if(Math.random() >= remainingShips.accuracy) {
//             console.log(earthShip.firepower + " You gottem")
//         }
//         else if(alienShip.hull <= 0) {
//             console.log("Game over")
        
//         }

//     }
    
// }