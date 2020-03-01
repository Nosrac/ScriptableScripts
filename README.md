# ScriptableScripts

Put any script you want to use in your Scriptable scripts folder.

## KeyValueDB

### Notes:
- Local storage only currently
- Uses JSON internally to store data

### Usage:

Import the file
```
var KeyValueDB = importModule('KeyValueDB');
var db = new KeyValueDB('YourProjectName');
``

Get a value by key
```
db.getValue(key) 
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
db.getAll()
```
