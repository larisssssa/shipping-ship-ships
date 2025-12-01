import { getHaulingShips, getShippingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "ship") {
            const haulers = getHaulingShips()
            let hauler = (haulers.find(hauler => (hauler.id) === parseInt(itemClicked.dataset.haulerid)))
            window.alert(`${itemClicked.dataset.shipname} is being hauled by ${hauler.name}`)
        }
    }
)

export const ShippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li data-type="ship"
                                data-shipid="${ship.id}"
                                data-haulerid="${ship.haulerId}"
                                data-shipname="${ship.name}">${ship.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}