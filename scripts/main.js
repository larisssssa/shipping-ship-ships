import { DockList } from "./docks.js"
import { HaulerList } from "./shipHaulers.js"
import { ShippingShipsList } from "./shippingShips.js"

const mainContainer = document.querySelector("#container")

const appHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="dept">
    <section class="dept--docks list">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="dept--hauling list">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="dept--shippingship list">
        <h2>Shipping Ships</h2>
        ${ShippingShipsList()}
    </section>
</article>
`

mainContainer.innerHTML = appHTML