"use strict";
exports.__esModule = true;
var sqlite3_1 = require("sqlite3");
var Pouchdb = require("pouchdb");
var DBFactory = /** @class */ (function () {
    function DBFactory() {
    }
    DBFactory.prototype.getAdapter = function (type) {
        if (type == "sqlite3") {
            return new SQLiteAdapter();
        }
        else if (type == "pouchdb") {
            return new PouchDBAdapter();
        }
        else {
            return null;
        }
    };
    return DBFactory;
}());
var SQLiteAdapter = /** @class */ (function () {
    function SQLiteAdapter() {
        this.db = null;
    }
    SQLiteAdapter.prototype.closeConnection = function () {
        if (this.db != null) {
            this.db.close();
            this.db = null;
        }
    };
    SQLiteAdapter.prototype.insertStudent = function (student) {
        if (this.db != null) {
            this.db.run("insert into student values ('" + student.id + "','" + student.name + "','" + student.career + "')");
        }
        console.log("inserted");
    };
    SQLiteAdapter.prototype.createStructure = function () {
        if (this.db != null) {
            this.db.run("create table if not exists student\n                            (id TEXT,\n                            name TEXT,\n                            career TEXT)");
        }
    };
    SQLiteAdapter.prototype.connect = function () {
        this.db = new sqlite3_1.Database("student.sqlite");
    };
    return SQLiteAdapter;
}());
var PouchDBAdapter = /** @class */ (function () {
    function PouchDBAdapter() {
        this.db = null;
    }
    PouchDBAdapter.prototype.closeConnection = function () {
        if (this.db != null) {
            this.db.close();
            this.db = null;
        }
    };
    PouchDBAdapter.prototype.insertStudent = function (student) {
        if (this.db != null) {
            var doc = {
                id: student.id,
                name: student.name,
                career: student.career
            };
            this.db.put(doc);
        }
    };
    PouchDBAdapter.prototype.createStructure = function () { };
    PouchDBAdapter.prototype.connect = function () {
        this.db = new Pouchdb("./student.db");
    };
    return PouchDBAdapter;
}());
var adapter = function () {
    var type = process.argv[2];
    var factory = new DBFactory();
    var adapter = factory.getAdapter(type);
    adapter.connect();
    adapter.createStructure();
    adapter.insertStudent({
        id: "20161885",
        name: "Bruno",
        career: "Systems Eng."
    });
    adapter.closeConnection();
};
adapter();
