// CSCI4300
// JavaScript Array Methods Homework

// Given Super Hero Data
let superHeroes = 
[
    { name: 'Superman', power: 100, universe: 'DC' },
    { name: 'CaptainAmerica', power: 93, universe: 'Marvel' },
    { name: 'Batman', power: 75, universe: 'DC' },
    { name: 'BlackWidow', power: 78 , universe: 'Marvel' },
    { name: 'DrStrange', power: 91 , universe: 'Marvel' },
    { name: 'Spiderman', power: 90, universe: 'Marvel' },
    { name: 'Ironman', power: 88, universe: 'Marvel' },
    { name: 'WonderWoman', power: 92, universe: 'DC' },
    { name: 'BlackPanther', power: 87 , universe: 'Marvel' },
    { name: 'Flash', power: 80, universe: 'DC' },
    { name: 'Hulk', power: 83, universe: 'Marvel' },
    { name: 'Thor', power: 95, universe: 'Marvel' }
]


// Question 1
superHeroes.forEach(hero => {
    if (hero.universe == "DC") {
        hero.team = "Justice League"
    } else {
        hero.team = "Avengers"
    }
});
superHeroes.forEach(hero => console.log(hero));



// Question 2
let rankedSuperheroes = superHeroes.map(hero => {
    hero.rank = (hero.power > 90) ? "Top Tier" : "Second Tier";
    return hero;
});
rankedSuperheroes.forEach(hero => console.log(hero));



// Question 3
let sortedHeroes = rankedSuperheroes.map(hero => (hero.ppower > 90) ? "Top Tier" : "Second Tier");
rankedSuperheroes.forEach(hero => console.log(hero));



// Question 4
let marvelHeros = superHeroes.filter(hero => hero.universe == "Marvel");
marvelHeros.forEach(hero => console.log(hero));



// Question 5
let sortedHeros = rankedSuperheroes.sort( (a, b) => b.power - a.power);
sortedHeros.forEach(hero => console.log(hero));
