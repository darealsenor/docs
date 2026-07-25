---
title: Server Exports
description: Server-side exports API for the Senor Battlepass script.
---

# Server Exports

All server exports can be called from other server-side resources using the `exports` function.

## AddProgress

Advance a player's active missions that match a track/event key. Only missions currently rolled for that player and not yet done are affected — awards the mission's XP automatically once its goal is reached.

```lua
exports['senor_battlepass']:AddProgress(src, key, count, payload)
```

**Parameters:**
- `src` (number) - The player's server ID
- `key` (string) - Track or event key to match against active mission templates (e.g. `'kill'`, `'driving'`, `'consume'`, `'consume:water'`, or a custom key from `config/missions.lua`)
- `count` (number?) - Amount of progress to add, defaults to `1`
- `payload` (any?) - Reserved for custom mission sources, not used by built-in tracks

**Example:**
```lua
-- Credit a 'consume' mission yourself (useful when ServerConfig.ForceConsumeMissions is true
-- and your inventory can't report item use)
exports['senor_battlepass']:AddProgress(source, 'consume', 1)
```

---

## AddXP

Grant XP directly to an online player and recompute their level, independent of any mission.

```lua
local newLevel = exports['senor_battlepass']:AddXP(src, amount, reason)
```

**Parameters:**
- `src` (number) - The player's server ID
- `amount` (number) - XP to add (no-ops if `<= 0` or the player isn't loaded)
- `reason` (string?) - Short reason string, shown in Discord/console logs on level-up

**Returns:**
- `number` - The player's level after the XP is applied

**Example:**
```lua
-- Reward battlepass XP for finishing a heist in another resource
local newLevel = exports['senor_battlepass']:AddXP(source, 500, 'heist:completed')
print('Player is now battlepass level ' .. newLevel)
```
