import { getDocks, getHaulingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "dock") {
            const haulers = getHaulingShips()
            const haulersAtDock = (haulers.filter(hauler => (hauler.dockId) === parseInt(itemClicked.dataset.dockid)))
            let haulerNames = []
            if (haulersAtDock.length >= 1) {
                for (const h of haulersAtDock) {
                    haulerNames.push(h.name)
                }
                window.alert(`${itemClicked.dataset.docklocation} dock is currently unloading ${haulerNames.join(`, `)}.`)
            } else {
                window.alert(`${itemClicked.dataset.docklocation} dock is currently unloading nothing.`)
            }
            
        }
    }
)

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-type="dock" data-dockid="${dock.id}" data-docklocation="${dock.location}">${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}