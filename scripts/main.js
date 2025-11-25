import { DockList } from "./docks.js"
import { HaulerList } from "./shipHaulers.js"

const mainContainer = document.querySelector("#container")

const appHTML = `
<h1>Shipping Ship Ships</h1>
<article class="dept">
    <section class="dept--docks list">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="dept--cargo list">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="dept--hauler list">
        <h2>Cargo Ships</h2>
        CARGO SHIPS
    </section>
</article>
`

mainContainer.innerHTML = appHTML