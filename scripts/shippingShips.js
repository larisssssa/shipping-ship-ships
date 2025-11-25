import { getShippingShips } from "./database.js"



export const ShippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li data-type="ship"
                                data-shipid="${ship.id}"
                                data-haulerid="${ship.haulerId}">${ship.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}