const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, dock: 4, name: "Antship" },
        { id: 2, dock: 3, name: "Benship" },
        { id: 3, dock: 2, name: "Colship" },
        { id: 4, dock: 1, name: "Daphship" },
        { id: 5, dock: 1, name: "Elship" }
    ]
}

export const getDocks = () => {
    return structuredClone(database.docks)
}

export const getHaulers = () => {
    return structuredClone(database.haulers)
}