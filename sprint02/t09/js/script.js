'use strict'

function displayHeroes(hero) {
  if ((hero.team == "Avengers" || hero.team == "S.H.I.E.L.D.")
      && hero.universe == "Marvel"
      && hero.race == "human"
      && hero.eyeColor == "green"
      && hero.hairColor == "lightBrown/green") {
    alert('This is Black Widow!');
  }
  else if ((hero.team == "Justice League Of America"
    || hero.team == "Teen Titans")
    && hero.universe == "DC Comics"
    && (hero.race == "human" || hero.race == "kryptonian")
    && hero.eyeColor == "blue"
    && hero.hairColor == "black") {
    alert('This is a Superman or Robin!');
  } else {
    alert('Didn\'t recognize!')
  }
}

let hero1 = {
  team: "Avengers",
  universe: "Marvel",
  race: "human",
  eyeColor: "green",
  hairColor: "lightBrown/green"
}
displayHeroes(hero1);
let hero2 = {
  team: "Teen Titans",
  universe: "DC Comics",
  race: "human",
  eyeColor: "blue",
  hairColor: "black"
}
displayHeroes(hero2);
let hero3 = {
  team: "Avengers",
  universe: "Marvel",
  race: "human",
  eyeColor: "green",
  hairColor: "trololo"
}
displayHeroes(hero3);
