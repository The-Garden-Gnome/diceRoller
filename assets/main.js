let dieRolls = []
let index = 0
let totalroll = 0
let userinput = document.querySelector('#userinput')
let rollbutton = document.querySelector('#rollbutton')
let showallrolls = document.querySelector('#show-all-rolls')
let allrolls = document.querySelector('#all-rolls')
let total = document.querySelector('#total')
let totalList = document.querySelector('#totalrolls')
let display = document.querySelector('#display')

rollbutton.addEventListener("click", function () {
    let max_rolls = userinput.value;
for (let index = 0; index < max_rolls; index++) {
    let roll = Math.floor((Math.random() * 6) + 1);
    dieRolls.push(roll);
    display.innerHTML = "You rolled " + roll + "!";
}

    // let maxRolls = userinput.value;
    // let index = 0;
    // while (index < maxRolls) {
    //     let roll = Math.floor((Math.random() *6)+1)
    //     dieRolls.push(roll);

    //     display.innerHTML = "You rolled " + roll + "!";
    //     index += 1

// }
})

showallrolls.addEventListener("click", function(){
 while (dieRolls.length > 0){
     console.log ("this is working")
     const rollList = document.createElement("li");
     rollList.innerHTML = +dieRolls.pop([0]);
     totalList.appendChild(rollList)
        index += 1
    }
})
