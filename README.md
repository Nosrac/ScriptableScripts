# ScriptableScripts

Put any script you want to use in your Scriptable scripts folder.

## [KeyValueDB](https://github.com/Nosrac/ScriptableScripts/blob/master/KeyValueDB.js)

### Notes:
- Local storage only currently
- Uses JSON internally to store data

### Usage:

Import the file
```
var KeyValueDB = importModule('KeyValueDB');
var db = new KeyValueDB('YourProjectName');
```

Get a value by key
```
var val = db.getValue(key)
```

Set a value by key
```
db.setValue(key, value)
```

Append a value to an array with the specified key
```
db.append(key, pushedValue)
```

Get everything
```
var object = db.getAll()
```
