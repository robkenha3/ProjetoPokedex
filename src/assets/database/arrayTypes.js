export const arrayTypes = [
    {
        id: 1,
        type: "Normal",
        img: "/assets/img/backgrounds/background-normal.jpeg",
        attackProsCons: {
            notVeryEffective: ["Pedra", "Ferro"],
            noEffect: ["Fantasma"], 
        },
        defenseProsCons: {
            noEffect: ["Fantasma"],
            superEffective: ["Lutador"],
        }

    },
    {
        id: 2,
        type: "Fogo",
        img: "/assets/img/backgrounds/background-fire.jpeg",
        attackProsCons: {
            superEffective: ["Grama", "Gelo", "Inseto", "Ferro"],
            notVeryEffective: ["Fogo", "Água", "Pedra", "Dragão"],
        },
        defenseProsCons: {
            notVeryEffective: ["Fogo", "Grama", "Gelo", "Inseto", "Ferro", "Fada"],
            superEffective: ["Água", "Terra", "Pedra"],
        }

    },
    {
        id: 3,
        type: "Água",
        img: "/assets/img/backgrounds/background-water.jpg",
        attackProsCons: {
            superEffective: ["Fogo", "Terra", "Pedra"],
            notVeryEffective: ["Água", "Grama", "Dragão"],
        },
        defenseProsCons: {
            notVeryEffective: ["Fogo", "Água", "Gelo", "Ferro"],
            superEffective: ["Elétrico", "Grama"],
        }
    },
    {
        id: 4,
        type: "Elétrico",
        img: "/assets/img/backgrounds/background-electric.jpg",
        attackProsCons: {
            superEffective: ["Água", "Voador"],
            notVeryEffective: ["Elétrico", "Grama", "Dragão"],
            noEffect: ["Terra"],    
        },
        defenseProsCons: {
            notVeryEffective: ["Elétrico", "Voador", "Ferro"],
            superEffective: ["Terra"],
        }
    },
    {
        id: 5,
        type: "Grama",
        img: "/assets/img/backgrounds/background-grass.jpeg",
        attackProsCons: {
            superEffective: ["Água", "Terra", "Pedra"],
            notVeryEffective: ["Fogo", "Água", "Veneno", "Voador", "Inseto", "Dragão", "Ferro"],
        },
        defenseProsCons: {
            notVeryEffective: ["Água", "Elétrico", "Grama", "Terra"],
            superEffective: ["Fogo", "Gelo", "Veneno", "Voador", "Inseto"],
        }

    },
    {
        id: 6,
        type: "Gelo",
        img: "/assets/img/backgrounds/background-ice.png",
        attackProsCons: {
            superEffective: ["Grama", "Terra", "Voador", "Dragão"],
            notVeryEffective: ["Fogo", "Água", "Gelo", "Ferro"],
        },
        defenseProsCons: {
            notVeryEffective: ["Gelo"],
            superEffective: ["Fogo", "Lutador", "Pedra", "Ferro"],
        }

    },
    {
        id: 7,
        type: "Lutador",
        img: "/assets/img/backgrounds/background-fighting.jpg",
        attackProsCons: {
            superEffective: ["Normal", "Gelo", "Pedra", "Escuridão", "Ferro"],
            notVeryEffective: ["Veneno", "Voador", "Psíquico", "Inseto", "Fada"],
            noEffect: ["Fantasma"],    
        },
        defenseProsCons: {
            notVeryEffective: ["Inseto", "Pedra", "Escuridão"],
            superEffective: ["Voador", "Psíquico", "Fada"],
        }
    },
    {
        id: 8,
        type: "Veneno",
        img: "/assets/img/backgrounds/background-poison.jpg",
        attackProsCons: {
            superEffective: ["Grama", "Fada"],
            notVeryEffective: ["Veneno", "Terra", "Pedra", "Fantasma"],
            noEffect: ["Ferro"],    
        },
        defenseProsCons: {
            notVeryEffective: ["Grama", "Lutador", "Veneno", "Inseto", "Fada"],
            superEffective: ["Terra", "Psíquico"],
        }

    },
    {
        id: 9,
        type: "Terra",
        img: "/assets/img/backgrounds/background-ground.png",
        attackProsCons: {
            superEffective: ["Fogo", "Elétrico", "Veneno", "Pedra", "Ferro"],
            notVeryEffective: ["Grama", "Inseto"],
            noEffect: ["Voador"],    
        },
        defenseProsCons: {
            noEffect: ["Elétrico"],  
            notVeryEffective: ["Veneno", "Pedra"],
            superEffective: ["Água", "Grama", "Gelo"],
        }

    },
    {
        id: 10,
        type: "Voador",
        img: "/assets/img/backgrounds/background-flying.jpg",
        attackProsCons: {
            superEffective: ["Grama", "Lutador", "Inseto"],
            notVeryEffective: ["Elétrico", "Pedra", "Ferro"],    
        },
        defenseProsCons: {
            noEffect: ["Terra"],  
            notVeryEffective: ["Grama", "Lutador", "Inseto"],
            superEffective: ["Elétrico", "Gelo", "Pedra"],
        }

    },
    {
        id: 11,
        type: "Psíquico",
        img: "/assets/img/backgrounds/background-psychic.png",
        attackProsCons: {
            superEffective: ["Lutador", "Veneno"],
            notVeryEffective: ["Psíquico", "Ferro"],
            noEffect: ["Escuridão"]    
        },
        defenseProsCons: {
            notVeryEffective: ["Lutador", "Psíquico"],
            superEffective: ["Inseto", "Fantasma", "Escuridão"],
        }
    },
    {
        id: 12,
        type: "Inseto",
        img: "/assets/img/backgrounds/background-grass.jpeg",
        attackProsCons: {
            superEffective: ["Grama", "Psíquico", "Escuridão"],
            notVeryEffective: ["Fogo", "Lutador", "Veneno", "Voador", "Fantasma", "Ferro", "Fada"],
        },
        defenseProsCons: {
            notVeryEffective: ["Grama", "Lutador", "Terra"],
            superEffective: ["Fogo", "Voador", "Pedra"],
        }

    },
    {
        id: 13,
        type: "Pedra",
        img: "/assets/img/backgrounds/background-rock.jpeg",
        attackProsCons: {
            superEffective: ["Fogo", "Gelo", "Voador", "Inseto"],
            notVeryEffective: ["Lutador", "Terra", "Ferro"],
        },
        defenseProsCons: {
            notVeryEffective: ["Normal", "Fogo", "Veneno", "Voador"],
            superEffective: ["Água", "Grama", "Lutador", "Terra", "Ferro"],
        }

    },
    {
        id: 14,
        type: "Fantasma",
        img: "/assets/img/backgrounds/background-ghost.jpeg",
        attackProsCons: {
            superEffective: ["Psíquico", "Fantasma"],
            notVeryEffective: ["Escuridão"],
            noEffect: ["Normal"]
        },
        defenseProsCons: {
            noEffect: ["Normal", "Lutador"],
            notVeryEffective: ["Veneno", "Inseto"],
            superEffective: ["Fantasma", "Escuridão"],
        }

    },
    {
        id: 15,
        type: "Dragão",
        img: "/assets/img/backgrounds/background-dragon.png",
        attackProsCons: {
            superEffective: ["Dragão"],
            notVeryEffective: ["Ferro"],
            noEffect: ["Fada"]
        },
        defenseProsCons: {
            notVeryEffective: ["Fogo", "Água", "Elétrico", "Grama"],
            superEffective: ["Gelo", "Dragão", "Fada"],
        }

    },
    {
        id: 16,
        type: "Fada",
        img: "/assets/img/backgrounds/background-fairy.jpeg",
        attackProsCons: {
            superEffective: ["Lutador", "Dragão", "Escuridão"],
            notVeryEffective: ["Fogo", "Veneno", "Ferro"],
        },
        defenseProsCons: {
            noEffect: ["Dragão"],
            notVeryEffective: ["Lutador", "Inseto", "Escuridão"],
            superEffective: ["Veneno", "Ferro"],
        }
    },
]