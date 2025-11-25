import { getShippingShips } from "./database.js"


export const ShippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li>${ship.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}