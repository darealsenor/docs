---
title: Client Exports
description: Client-side exports API for the Senor Airdrops script.
---

# Client Exports

All client exports can be called from other client-side resources using the `exports` function.

## GetDrops

Get all active airdrops on the client.

```lua
local drops = exports['senor-airdrops']:GetDrops()
```

**Returns:**
- `table` - Array of active airdrop data

**Example:**
```lua
local drops = exports['senor-airdrops']:GetDrops()
if drops then
    for _, drop in ipairs(drops) do
        print("Drop at: " .. drop.coords.x .. ", " .. drop.coords.y)
    end
end
```

---

## GetDropAtCoords

Get an airdrop at specific coordinates.

```lua
local drop = exports['senor-airdrops']:GetDropAtCoords(coords)
```

**Parameters:**
- `coords` (vector3) - The coordinates to check

**Returns:**
- `table | nil` - Airdrop data table if found at coordinates, or `nil` otherwise

**Example:**
```lua
local coords = GetEntityCoords(PlayerPedId())
local drop = exports['senor-airdrops']:GetDropAtCoords(coords)
if drop then
    print("Drop found at current position: " .. drop.id)
end
```

---

