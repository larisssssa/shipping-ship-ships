import { getDocks } from "./database.js"

const mainContainer = document.querySelector("#container")

const appHTML = `
<h1>Shipping Ship Ships</h1>
<article class="dept">
    <section class="dept--docks list">
        <h2>Docks</h2>
        ${getDocks}
    </section>
    <section class="dept--cargo list">
        <h2>Cargo Ships</h2>
        CARGO SHIPS LIST
    </section>
    <section class="dept--hauler list">
        <h2>Ship Haulers</h2>
        SHIP HAULERS LIST
    </section>
</article>
`

mainContainer.innerHTML = appHTML