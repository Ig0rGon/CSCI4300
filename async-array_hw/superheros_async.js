function getSuperHeroes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("The world is currently unsafe. No superheroes!!");
            } else {
                resolve([
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
                ]);
            }
        }, 2500);
    });
}

getSuperHeroes()
    .then(superheroes => {
        // Add team property
        superheroes.forEach(hero => {
            hero.team = hero.universe === 'DC' ? 'Justice League' : 'Avengers';
        });
        console.log("Superheroes with team property:", superheroes);

        // Create rankedSuperheroes array
        const rankedSuperheroes = superheroes.map(hero => ({
            ...hero,
            rank: hero.power > 90 ? 'Top Tier' : 'Second Tier'
        }));
        console.log("Ranked Superheroes:", rankedSuperheroes);

        // Filter Marvel heroes
        const marvelHeroes = rankedSuperheroes.filter(hero => hero.universe === 'Marvel');
        console.log("Marvel Heroes:", marvelHeroes);

        // Sort by power
        const sortedHeroes = [...rankedSuperheroes].sort((a, b) => b.power - a.power);
        console.log("Sorted Heroes by Power:", sortedHeroes);
    })
    .catch(error => {
        console.error("Error:", error);
    });
