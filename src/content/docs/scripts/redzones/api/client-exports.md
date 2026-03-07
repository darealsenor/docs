---
title: Client Exports
description: Client-side exports API for the Senor Redzones script.
---

# Client Exports

All client exports can be called from other client-side resources using the `exports` function.

## isInRedzone

Check whether the local player is currently inside a redzone

```lua
local inZone = exports['senor_redzones']:isInRedzone()
```

**Returns:**
- `boolean` - `true` if the player is inside an active redzone, `false` otherwise

**Example:**
```lua
if exports['senor_redzones']:isInRedzone() then
    print("You are in a redzone!")
end
```

---
