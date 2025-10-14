// alert("More butter please")

// I got help debugging this code from Mau Zitoni

/*
Goal: Create a Wu-Tang Clan name generator. 
Present the user with 5 survey questions and based on those answers randomly generate their name. 
The name doesn't have to be exact names, but Wu-Tang sounding-ish names.
// Method Man, The RZA, The GZA, U-God, Cappadonna, Raekwon, Ghostface Killah, ODB, Inspectah Deck, Masta Killa
*/

// Pseudo-Code
// Put in 5 inputs 
// Input 1: What name style do you prefer? 
// Options: Classical (Grand, Emcee, Eazy) Neo-Classical (Big, MC) Aughts (Lil)  Modern (The Rapper, The Artist, Etc.) Post-Modern (Choose a string of 3 random numbers from 1-9)

document.getElementById(('classic')).addEventListener('click', checkClassic)
document.getElementById(('neoclassic')).addEventListener('click', checkNeoClassic)
document.getElementById(('aughts')).addEventListener('click', checkAughts)
document.getElementById(('modern')).addEventListener('click', checkModern)
document.getElementById(('postmodern')).addEventListener('click',checkPostModern)



document.getElementById

// How could I check if something was both checking the value I need and also the submit button?
let nameType = document.getElementById(('fieldset').checked)


function checkClassic() {
    if (nameType === "classic"); {
        console.log("cowabunga");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
    }
}

function checkNeoClassic() {
    if (nameType == "neoclassic"); {
        console.log("pizzaaaa");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
    }
}


function checkAughts() {
    if (nameType == "aughts"); {
        console.log("yerrrrrr");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
    }
}

function checkModern() {
    if (nameType == "modern"); {
        console.log("clobberintime");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
    }
}

function checkPostModern() {
    if (nameType == "postmodern"); {
        console.log("ratdaddy");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
    }
}



// Input 2: If you ruled the world (imagine that), what would your title be?
// Input 3: What's one word that your friends would use to describe you?
// Input 4: Your enemies favorite word for you?
// Input 5: Yo RZA or Yo Razor?
// Have a function that takes in different parts of the inputs to create the name
// There could be part of the input that you check to lengthen the name
// Then there could be One where you choose the prefix
// Maybe you could ask people the adjective that they described them with when they were a kid and have that be the first word
// Then have people select if they are big or little
// Maybe include part of a clip where it says all their names
// Maybe have a question that controls which of 5-10 responses you get back
// Ask Abdirahman how he did the sound in there

