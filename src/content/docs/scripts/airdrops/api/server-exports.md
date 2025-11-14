---
title: Server Exports
description: Server-side exports API for the Senor Airdrops script.
---

# Server Exports

All server exports can be called from other server-side resources using the `exports` function.

## CreateDrop

Create a new airdrop programmatically.

```lua
local result = exports['senor-airdrops']:CreateDrop(data)
```

**Parameters:**
- `data` (table) - Drop configuration
  - `playerId` (number) - The player's server ID (required)
  - `coords` (vector3 | nil) - Drop coordinates, or nil to use random location (optional)
  - `distance` (number | nil) - Distance from drop location (optional, defaults from config)
  - `lockTime` (number | nil) - Lock time in minutes (optional, defaults from config)
  - `interaction` (string | nil) - Interaction type: "Keystroke" or "Interaction" (optional)
  - `settings` (table | nil) - Drop settings (optional)

**Returns:**
```lua
{
    success = boolean,
    message = string,
    data = {
        -- Drop instance data
    } | nil
}
```

**Example:**
```lua
local result = exports['senor-airdrops']:CreateDrop({
    playerId = 1,
    coords = vector3(279.54, -1937.58, 25.21),
    distance = 300.0,
    lockTime = 10
})

if result.success then
    print("Airdrop created: " .. result.message)
else
    print("Error: " .. result.message)
end
```

---

## GetDrops

Get all active airdrops.

```lua
local drops = exports['senor-airdrops']:GetDrops()
```

**Returns:**
- `table` - Array of active airdrop data

**Example:**
```lua
local drops = exports['senor-airdrops']:GetDrops()
for _, drop in ipairs(drops) do
    print("Drop ID: " .. drop.id)
end
```

---

## GetDropByID

Get a specific airdrop by ID.

```lua
local drop = exports['senor-airdrops']:GetDropByID(id)
```

**Parameters:**
- `id` (number | string) - The airdrop ID

**Returns:**
- `table | nil` - Airdrop data table or `nil` if not found

**Example:**
```lua
local drop = exports['senor-airdrops']:GetDropByID(12345)
if drop then
    print("Drop found: " .. drop.id)
end
```

---

