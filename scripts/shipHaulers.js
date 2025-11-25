import { getHaulingShips, getShippingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "hauler") {
            let shipsInHauler = getShippingShips().filter(ship => (itemClicked.dataset.haulerid) ==(ship.haulerId))
            window.alert(`This hauler is carrying ${shipsInHauler.length} shipping ships`)
        }
    }
)



export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = `<ul data-type="haulers">`

    for (const hauler of haulers) {
        haulersHTML += `<li data-type="hauler" 
                            data-haulerid="${hauler.id}"
                            data-dockid="${hauler.dockId}">${hauler.name}</li>`
    }

    haulersHTML += `</ul>`

    return haulersHTML
}