---
title: Server Exports
description: Server-side exports API for the Senor Top Players script.
---

# Server Exports

All server exports can be called from other server-side resources using the `exports` function.

## GetPlayerStats

Get the current cached stats for a player

```lua
local stats = exports['senor-topplayers']:GetPlayerStats(playerId)
```

**Parameters:**
- `playerId` (number) - The player's server ID

**Returns:**
- `table | nil` - Stats table, or `nil` if the player is not loaded

**Stats Structure:**
```lua
{
    kills      = number,
    deaths     = number,
    damage     = number,
    headshots  = number,
    playtime   = number,  -- seconds
    money      = number,
    vehicles   = number,
    properties = number,
}
```

**Example:**
```lua
local stats = exports['senor-topplayers']:GetPlayerStats(source)
if stats then
    print("Kills: " .. stats.kills)
end
```

---

## AddPlayerStat

Add a numeric value to a player's stat field. Updates in-memory cache only — persisted to DB when the player drops

```lua
local success = exports['senor-topplayers']:AddPlayerStat(playerId, field, value)
```

**Parameters:**
- `playerId` (number) - The player's server ID
- `field` (string) - Stat field to increment: `'kills'`, `'deaths'`, `'damage'`, `'headshots'`, `'playtime'`, `'vehicles'`, `'properties'`
- `value` (number) - Amount to add

**Returns:**
- `boolean` - `true` on success, `false` if the player is not loaded or the field is invalid

**Example:**
```lua
exports['senor-topplayers']:AddPlayerStat(source, 'kills', 1)
```

---

## SetPlayerStat

Set a player's stat field to a specific value. Updates in-memory cache only — persisted to DB when the player drops

```lua
local success = exports['senor-topplayers']:SetPlayerStat(playerId, field, value)
```

**Parameters:**
- `playerId` (number) - The player's server ID
- `field` (string) - Stat field to set: `'kills'`, `'deaths'`, `'damage'`, `'headshots'`, `'playtime'`, `'vehicles'`, `'properties'`
- `value` (number | nil) - Value to set, or `nil` to clear

**Returns:**
- `boolean` - `true` on success, `false` if the player is not loaded or the field is invalid

**Example:**
```lua
exports['senor-topplayers']:SetPlayerStat(source, 'deaths', 0)
```

---

## SaveAllPlayerStats

Force-persist all cached player stats to the database immediately

```lua
exports['senor-topplayers']:SaveAllPlayerStats()
```

**Example:**
```lua
exports['senor-topplayers']:SaveAllPlayerStats()
print("All stats saved.")
```

---
