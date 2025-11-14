---
title: Server Exports
description: Server-side exports API for the Senor Chat script.
---

# Server Exports

All server exports can be called from other server-side resources using the `exports` function.

## addMessage

Send a message to a player or all players.

```lua
local success = exports['senor-chat']:addMessage(target, message)
```

**Parameters:**
- `target` (number | nil) - Player ID, or nil/omit for all players
- `message` (string | table) - Message text or message table

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

**Example:**
```lua
exports['senor-chat']:addMessage(1, "Hello player!")
exports['senor-chat']:addMessage(nil, "Hello everyone!")
```

---

## sendMessage

Send a formatted message to a player.

```lua
local success = exports['senor-chat']:sendMessage(playerId, data)
```

**Parameters:**
- `playerId` (number) - Target player ID
- `data` (table) - Message data table

**Data Structure:**
```lua
{
    message = string,
    channel = { id = number },
    tags = table,
    color = table
}
```

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## sendLocalMessage

Send a message to a specific player.

```lua
exports['senor-chat']:sendLocalMessage(playerId, data)
```

**Parameters:**
- `playerId` (number) - Target player ID
- `data` (table) - Message data table

---

## sendStaffMessage

Send a message to all staff members.

```lua
exports['senor-chat']:sendStaffMessage(data)
```

**Parameters:**
- `data` (table) - Message data table

---

## addChannel

Add a new chat channel.

```lua
local success = exports['senor-chat']:addChannel(channelName, channelId, timeout)
```

**Parameters:**
- `channelName` (string) - Channel name
- `channelId` (number) - Channel ID
- `timeout` (number) - Message timeout in seconds

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## getChannel

Get channel data by name.

```lua
local channel = exports['senor-chat']:getChannel(channelName)
```

**Parameters:**
- `channelName` (string) - Channel name

**Returns:**
- `table | false` - Channel data table or `false` if not found

**Channel Data Structure:**
```lua
{
    id = number,
    name = string,
    timeout = number
}
```

---

## getChannels

Get all available channels.

```lua
local channels = exports['senor-chat']:getChannels()
```

**Returns:**
- `table` - Table of all channels

---

## getChannelById

Get channel data by ID.

```lua
local channel = exports['senor-chat']:getChannelById(channelId)
```

**Parameters:**
- `channelId` (number) - Channel ID

**Returns:**
- `table | false` - Channel data table or `false` if not found

---

## hasChannelAccess

Check if a player has access to a channel.

```lua
local hasAccess = exports['senor-chat']:hasChannelAccess(playerId, channelName)
```

**Parameters:**
- `playerId` (number) - Player ID
- `channelName` (string) - Channel name

**Returns:**
- `boolean` - `true` if player has access, `false` otherwise

---

## isUserMuted

Check if a player is muted.

```lua
local isMuted, timeRemaining = exports['senor-chat']:isUserMuted(playerId)
```

**Parameters:**
- `playerId` (number) - Player ID

**Returns:**
- `boolean` - `true` if muted, `false` otherwise
- `number | nil` - Time remaining in seconds, or `nil` if not muted

---

## muteUser

Mute a player for a specified duration.

```lua
local success = exports['senor-chat']:muteUser(playerId, durationMinutes, adminId, reason, notify, channel)
```

**Parameters:**
- `playerId` (number) - Target player ID
- `durationMinutes` (number) - Mute duration in minutes
- `adminId` (number | nil) - Admin player ID who muted
- `reason` (string | nil) - Mute reason
- `notify` (boolean | nil) - Whether to notify the player
- `channel` (table | nil) - Channel to mute in

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## unmuteUser

Unmute a player.

```lua
local success = exports['senor-chat']:unmuteUser(playerId, adminId)
```

**Parameters:**
- `playerId` (number) - Target player ID
- `adminId` (number | nil) - Admin player ID who unmuted

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## deleteMessage

Delete a message from chat.

```lua
local success = exports['senor-chat']:deleteMessage(messageId, messageChannel, adminId)
```

**Parameters:**
- `messageId` (number) - Message ID
- `messageChannel` (string) - Channel name
- `adminId` (number | nil) - Admin player ID who deleted

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## addCustomSuggestion

Add a custom command suggestion for a player.

```lua
local success = exports['senor-chat']:addCustomSuggestion(playerId, name, help, params)
```

**Parameters:**
- `playerId` (number) - Player ID
- `name` (string) - Command name (with or without `/`)
- `help` (string | nil) - Help text
- `params` (table | nil) - Command parameters

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## getPlayerInfo

Get a player's chat information and attributes.

```lua
local playerInfo = exports['senor-chat']:getPlayerInfo(playerId)
```

**Parameters:**
- `playerId` (number) - Player ID

**Returns:**
- `table | nil` - Player info table or `nil` if player not found

**Player Info Structure:**
```lua
{
    picture = string,
    tags = table,
    color = table | nil,
    sender = string,
    senderId = number,
    gang = string | nil,
    admin = boolean
}
```

---

## getPlayerTags

Get all tags available to a player.

```lua
local tags = exports['senor-chat']:getPlayerTags(playerId)
```

**Parameters:**
- `playerId` (number) - Player ID

**Returns:**
- `table` - Array of tag objects

**Tag Structure:**
```lua
{
    id = string | number,
    text = string,
    color = string,
    bgColor = string
}
```

---

## getPlayerColors

Get all colors available to a player.

```lua
local colors = exports['senor-chat']:getPlayerColors(playerId)
```

**Parameters:**
- `playerId` (number) - Player ID

**Returns:**
- `table` - Array of color objects

**Color Structure:**
```lua
{
    id = string | number,
    name = string,
    color = string,
    bgColor = string
}
```

---

## getPlayerSelectedTag

Get a player's currently selected tag.

```lua
local selectedTag = exports['senor-chat']:getPlayerSelectedTag(playerId)
```

**Parameters:**
- `playerId` (number) - Player ID

**Returns:**
- `table | nil` - Selected tag object or `nil` if none selected

---

## getPlayerSelectedColor

Get a player's currently selected color.

```lua
local selectedColor = exports['senor-chat']:getPlayerSelectedColor(playerId)
```

**Parameters:**
- `playerId` (number) - Player ID

**Returns:**
- `table | nil` - Selected color object or `nil` if none selected

---

## setPlayerSelectedTag

Set a player's selected tag.

```lua
local success = exports['senor-chat']:setPlayerSelectedTag(playerId, tagId)
```

**Parameters:**
- `playerId` (number) - Player ID
- `tagId` (string | number | nil) - Tag ID to select, or `nil` to clear selection

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## setPlayerSelectedColor

Set a player's selected color.

```lua
local success = exports['senor-chat']:setPlayerSelectedColor(playerId, colorId)
```

**Parameters:**
- `playerId` (number) - Player ID
- `colorId` (string | number | nil) - Color ID to select, or `nil` to clear selection

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## addPlayerTag

Add a custom tag to a player.

```lua
local success = exports['senor-chat']:addPlayerTag(playerId, tag)
```

**Parameters:**
- `playerId` (number) - Player ID
- `tag` (table) - Tag object

**Tag Structure:**
```lua
{
    id = string | number, -- Optional, auto-generated if not provided
    text = string,
    color = string,
    bgColor = string
}
```

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## removePlayerTag

Remove a tag from a player.

```lua
local success = exports['senor-chat']:removePlayerTag(playerId, tagId)
```

**Parameters:**
- `playerId` (number) - Player ID
- `tagId` (string | number) - Tag ID to remove

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## addPlayerColor

Add a custom color to a player.

```lua
local success = exports['senor-chat']:addPlayerColor(playerId, color)
```

**Parameters:**
- `playerId` (number) - Player ID
- `color` (table) - Color object

**Color Structure:**
```lua
{
    id = string | number, -- Optional, auto-generated if not provided
    name = string,
    color = string,
    bgColor = string
}
```

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

## removePlayerColor

Remove a color from a player.

```lua
local success = exports['senor-chat']:removePlayerColor(playerId, colorId)
```

**Parameters:**
- `playerId` (number) - Player ID
- `colorId` (string | number) - Color ID to remove

**Returns:**
- `boolean` - `true` if successful, `false` otherwise

---

