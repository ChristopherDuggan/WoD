import Character from './character.js'

let bob = new Character(
    'bob',
    { 
        physical: {
            strength: 2,
            dexterity: 3,
            stamina: 2,
        },
        social: {
            charisma: 1,
            manipulation: 3,
            appearance: 4,
        },
        mental: {
            perception: 4,
            intelligence: 2,
            wits: 5, 
        }
    },
    { 
        talents: {
            aletrness: 3,
        },
        skills: {
            crafts: 1,
            martialArts: 5,
        },
        knowledges: {
            computer: 1,
            politics: 3,
            science: 1,
        }
    },
    {
        current: 4,
        max: 8,
    },
    {
        allies: 4,
    },
    ['acute senses', 'cursed'],

)
console.log(bob)
