// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: database;

class KeyValueDB {
	
	constructor(filename) {
		if (filename.length == 0) {
			console.error("No filename found");
		}
		
		this.fileManager = FileManager.local();
		
		var directory = this.fileManager.libraryDirectory() + '/KeyValueDB/';
		this.fileManager.createDirectory( directory, true );
		this.filename = directory + filename + '.json';
		
		if (!this.fileManager.fileExists( this.filename )) {
			this.fileManager.writeString( this.filename, "{}" );
		}
	}
	
	/*
	 * Get's the whole Key-Value Pairs
	*/
	getAll() {
		return JSON.parse(
			this.fileManager.readString(this.filename)
		);
	}
	
	/*
	 * Get's a value by key
	*/
	getValue(key) {
		return this.getAll()[ key ];
	}
	
	/*
	 * Set's the value of the specified key
	*/
	setValue(key, value) {
		var db = this.getAll();
		db[ key ] = value;
		
		this.fileManager.writeString( this.filename, JSON.stringify(db) );
	}
	
	/*
	 * Append's a value to an array with the specified key
	*/
	append(key, value) {
		var db = this.getAll();
		if (db[key] == null) {
			db[key] = [];
		}
		db[ key ].push( value );
		
		this.fileManager.writeString( this.filename, JSON.stringify(db) );
	}
}

module.exports = KeyValueDB;
