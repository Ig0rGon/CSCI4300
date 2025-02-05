// JavaScript Array Methods Homework

// Given Super Hero Data
let superHeroes = 
[
    {name: "Superman", power: 100, universe: "DC"},
    {name: "CaptainAmerica", power: 93, universe: "Marvel"},
    {name: "Batman", power: 75, universe: "DC"},
    {name: "BlackWidow", power: 78, universe: "Marvel"},
    {name: "DrStrange", power: 91, universe: "Marvel"},
    {name: "SpiderMan", power: 90, universe: "Marvel"},
    {name: "IronMan", power: 88, universe: "Marvel"},
    {name: "WonderWoman ", power: 82, universe: "DC"},
    {name: "BlackPanther", power: 87, universe: "Marvel"},
    {name: "Flash", power: 80, universe: "DC"},
    {name: "Hulk", power: 83, universe: "Marvel"},
    {name: "Thor", power: 95, universe: "Marvel"},
]

// Adds "team" property to each hero
superHeroes.forEach(hero => {
    if (hero.universe == "DC") {
        hero.team = "Justice League"
    } else {
        hero.team = "Avengers"
    }
});

// Ranks Super Heros based on power level
let rankedSuperHeroes = superHeroes.map( rank => {
    if (rank.power > 90) {
        hero.rank = "Top Tier"
    } else {
        hero.rank ="Second Tier"
    }
})

superHeroes.filter(hero.universe == "Marvel");

superHeroes.sort(hero.rank);

superHeroes.forEach(hero => {
    if (hero.universe == "DC") {
        hero.team = "Justice League"
    } else {
        hero.team = "Avengers"
    }
});

superHeroes.forEach(hero => console.log(hero));

rankedSuperHeroes.forEach(hero => console.log(hero));

let marvelHeroes = rankedSuperHeroes.filter(hero => hero.universe == "Marvel");
marvelHeroes.forEach(hero => console.log(hero));

let sortedHeroes = superHeroes.sort((a, b) => b.power - a.power);
sortedHeroes.forEach(hero => console.log(hero));