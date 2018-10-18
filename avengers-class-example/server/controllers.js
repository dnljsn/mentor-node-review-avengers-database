let avengersDatabase = [
    {
        name: "Steve Rogers",
        heroName: "Captain America",
        power: "Strength, Speed, Healing",
        species: "Human"
    },
    {
        name: "Valkyrie",
        heroName: "Valkyrie",
        power: "Strength, Speed, Long Life",
        species: "Asgardian"
    },
    {
        name: "Rocket",
        heroName: "Rocket Raccoon",
        power: "Super Intelligent",
        species: "Raccoon",
    },
    {
        name: "Peter Quill",
        heroName: "Star Lord",
        power: "Awesomeness",
        species: "Human"
    },
    {
        name: "Natasha Rominov",
        heroName: "Black Widow",
        power: "Strength, Speed, Fighting",
        species: "Human"
    }
]

module.exports = {
    avengersAssemble: (req, res, next) => {
        res.status(200).send(avengersDatabase)
    }
}