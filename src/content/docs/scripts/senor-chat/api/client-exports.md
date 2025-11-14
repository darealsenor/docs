---
title: Client Exports
description: Client-side exports API for the Senor Chat script.
---

# Client Exports

All client exports can be called from other client-side resources using the `exports` function.

## addSuggestion

Add a command suggestion on the client.

```lua
exports['senor-chat']:addSuggestion(name, help, params)
```

**Parameters:**
- `name` (string) - Command name
- `help` (string | nil) - Help text
- `params` (table | nil) - Command parameters

**Example:**
```lua
exports['senor-chat']:addSuggestion('/test', 'Test command', {
    { name = 'param1', help = 'First parameter' }
})
```

---

