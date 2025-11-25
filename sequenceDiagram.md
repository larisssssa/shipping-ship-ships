``` mermaid
sequenceDiagram

participant Main
participant CargoShip
participant ShipHauler
participant Dock
participant database

Main->>CargoShip: get list of cargo ships
CargoShip->>database: getCargoShipData
database-->>CargoShip: return copy of cargo ship data
CargoShip-->>Main: return copy of cargo ships

Main->>ShipHauler: get list of ship haulers
ShipHauler->>database: getShipHaulerData
database-->>ShipHauler: return copy of ship hauler data
ShipHauler-->>Main: return copy of ship haulers

Main->>Dock: get list of docks
Dock->>database: getDocksData
database-->>Dock: return copy of docks data
Dock-->>Main: return copy of docks
```