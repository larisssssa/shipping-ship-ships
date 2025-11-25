const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, dockId: 4, name: "Antship" },
        { id: 2, dockId: 3, name: "Benship" },
        { id: 3, dockId: 2, name: "Colship" },
        { id: 4, dockId: 1, name: "Daphship" },
        { id: 5, dockId: 1, name: "Elship" }
    ],
    shippingShips: [
        {id: 1, haulerId: 1, name: "Acargo"},
        {id: 2, haulerId: 2, name: "Bcargo"},
        {id: 3, haulerId: 3, name: "Ccargo"},
        {id: 4, haulerId: 4, name: "Dcargo"},
        {id: 5, haulerId: 5, name: "Ecargo"},
        {id: 6, haulerId: 1, name: "Fcargo"},
        {id: 7, haulerId: 2, name: "Gcargo"},
        {id: 8, haulerId: 3, name: "Hcargo"},
        {id: 9, haulerId: 4, name: "Icargo"},
        {id: 10, haulerId: 5, name: "Jcargo"},
        {id: 11, haulerId: 1, name: "Kcargo"},
        {id: 12, haulerId: 2, name: "Lcargo"}
    ]
}

export const getDocks = () => {
    return structuredClone(database.docks)
}

export const getHaulingShips = () => {
    return structuredClone(database.haulers)
}

export const getShippingShips = () => {
    return structuredClone(database.shippingShips)
}