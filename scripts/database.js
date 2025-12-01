const database = {
    docks: [
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 4, dockId: 1, name: "Daphship" },
        { id: 2, dockId: 3, name: "Benship" },
        { id: 1, dockId: 4, name: "Antship" },
        { id: 5, dockId: 1, name: "Elship" },
        { id: 3, dockId: 2, name: "Colship" }
    ],
    shippingShips: [
        {id: 11, haulerId: 1, name: "Kcargo"},
        {id: 3, haulerId: 3, name: "Ccargo"},
        {id: 6, haulerId: 1, name: "Fcargo"},
        {id: 7, haulerId: 2, name: "Gcargo"},
        {id: 1, haulerId: 1, name: "Acargo"},
        {id: 5, haulerId: 5, name: "Ecargo"},
        {id: 4, haulerId: 4, name: "Dcargo"},
        {id: 2, haulerId: 2, name: "Bcargo"},
        {id: 9, haulerId: 4, name: "Icargo"},
        {id: 10, haulerId: 5, name: "Jcargo"},
        {id: 12, haulerId: 2, name: "Lcargo"},
        {id: 8, haulerId: 3, name: "Hcargo"}
    ]
}

const sortByName = (array) => {
    array.sort((a,b) => {
        const aName = a.name.toUpperCase()
        const bName = b.name.toUpperCase()
        if (aName < bName) { return -1; }
        if (aName < bName) { return 1; }
        return 0;
    })
    return array
}
const sortByLocation = (array) => {
    array.sort((a,b) => {
        const aLocation = a.location.toUpperCase()
        const bLocation = b.location.toUpperCase()
        if (aLocation < bLocation) { return -1; }
        if (aLocation < bLocation) { return 1; }
        return 0;
    })
    return array
}

export const getDocks = () => {
    return sortByLocation(structuredClone(database.docks))
}

export const getHaulingShips = () => {
    return sortByName(structuredClone(database.haulers))
}

export const getShippingShips = () => {
    return sortByName(structuredClone(database.shippingShips))
}