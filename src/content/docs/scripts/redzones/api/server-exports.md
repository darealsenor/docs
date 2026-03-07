---
title: Server Exports
description: Server-side exports API for the Senor Redzones script.
---

# Server Exports

All server exports can be called from other server-side resources using the `exports` function.

## getZones

Get all active redzones

```lua
local zones = exports['senor_redzones']:getZones(raw, forClients)
```

**Parameters:**
- `raw` (boolean | nil) - If true, returns raw zone instances instead of serialized data
- `forClients` (boolean | nil) - If true, formats data for client consumption

**Returns:**
- `table` - Array of zone data tables

**Example:**
```lua
local zones = exports['senor_redzones']:getZones()
for _, zone in ipairs(zones) do
    print("Zone: " .. zone.name .. " at radius " .. zone.radius)
end
```

---

## getZoneById

Get a specific redzone by its ID

```lua
local zone = exports['senor_redzones']:getZoneById(id)
```

**Parameters:**
- `id` (string | number) - The zone ID

**Returns:**
- `table | false` - Zone instance or `false` if not found

**Example:**
```lua
local zone = exports['senor_redzones']:getZoneById('my-zone-id')
if zone then
    print("Found zone: " .. zone.name)
end
```

---

## getZoneByPlayer

Get the redzone a player is currently in

```lua
local zone = exports['senor_redzones']:getZoneByPlayer(source)
```

**Parameters:**
- `source` (number) - The player's server ID

**Returns:**
- `table | false` - Zone instance or `false` if the player is not in any zone

**Example:**
```lua
local zone = exports['senor_redzones']:getZoneByPlayer(source)
if zone then
    print(GetPlayerName(source) .. " is in zone: " .. zone.name)
end
```

---

## createTemporaryZone

Create a temporary redzone that exists only until it expires or is removed

```lua
local zone = exports['senor_redzones']:createTemporaryZone(data)
```

**Parameters:**
- `data` (table) - Zone configuration

**Zone Data Structure:**
```lua
{
    name        = string,       -- Display name
    coords      = vector3,      -- Center coordinates
    radius      = number,       -- Radius in meters
    durationType = string,      -- 'time' or 'kills'
    duration    = number,       -- Seconds (time) or kill count (kills)
    loadout     = table | nil,  -- Items/weapons given on entry
    killstreaks = table | nil,  -- Killstreak rewards
    blipName    = string | nil,
    blipColour  = number | nil,
    markerColour = table | nil, -- { r, g, b, alpha }
    spawnPoints = table | nil,  -- Array of vector3 spawn positions
    autoRevive  = boolean | nil -- Default: true
}
```

**Returns:**
- `table` - The created zone instance

**Example:**
```lua
local zone = exports['senor_redzones']:createTemporaryZone({
    name = 'Quick Fight',
    coords = vector3(100.0, 200.0, 30.0),
    radius = 150,
    durationType = 'kills',
    duration = 20,
})
```

---

## createPermanentZone

Create a permanent redzone that persists to the database

```lua
local zone = exports['senor_redzones']:createPermanentZone(data)
```

**Parameters:**
- `data` (table) - Zone configuration (same structure as `createTemporaryZone`)

**Returns:**
- `table` - The created zone instance

**Example:**
```lua
local zone = exports['senor_redzones']:createPermanentZone({
    name = 'Downtown PvP',
    coords = vector3(279.54, -1937.58, 25.21),
    radius = 300,
    durationType = 'time',
    duration = 600,
})
```

---

## removeZone

Remove an active redzone

```lua
local success = exports['senor_redzones']:removeZone(zoneInstance)
```

**Parameters:**
- `zoneInstance` (table) - A zone instance returned by `getZoneById`, `createTemporaryZone`, etc.

**Returns:**
- `boolean` - `true` if removed, `false` if zone was not found

**Example:**
```lua
local zone = exports['senor_redzones']:getZoneById('my-zone-id')
if zone then
    local removed = exports['senor_redzones']:removeZone(zone)
    print("Removed: " .. tostring(removed))
end
```

---

## updateZone

Update properties of an existing redzone

```lua
local success = exports['senor_redzones']:updateZone(zoneInstance, data)
```

**Parameters:**
- `zoneInstance` (table) - A zone instance to update
- `data` (table) - Partial zone data with the fields to update

**Returns:**
- `boolean` - `true` on success, `false` on failure

**Example:**
```lua
local zone = exports['senor_redzones']:getZoneById('my-zone-id')
if zone then
    exports['senor_redzones']:updateZone(zone, { radius = 200, blipColour = 3 })
end
```

---
