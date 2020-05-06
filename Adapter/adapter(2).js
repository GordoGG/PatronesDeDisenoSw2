"use strict";
exports.__esModule = true;
var sqlite3_1 = require("sqlite3");
var pouchdb = require("pouchdb");
// Fachada
// Singleton
var DBManager = /** @class */ (function () {
    function DBManager() {
    }
    DBManager.getInstance = function () {
        if (DBManager.instance == null) {
            DBManager.instance = new DBManager();
        }
        return DBManager.instance;
    };
    DBManager.prototype.inicializarTablaAlumno = function (tipo) {
        var factory = DBFactory.getInstance();
        var adapter = factory.obtenerAdapter(tipo);
        adapter.conectar();
        adapter.crearEstructura();
        adapter.cerrar();
    };
    DBManager.prototype.insertarAlumno = function (alumno, tipo) {
        var factory = DBFactory.getInstance();
        var adapter = factory.obtenerAdapter(tipo);
        adapter.conectar();
        adapter.insertarAlumno(alumno);
        adapter.cerrar();
    };
    return DBManager;
}());
exports.DBManager = DBManager;
var DBFactory = /** @class */ (function () {
    function DBFactory() {
    }
    DBFactory.getInstance = function () {
        if (DBFactory.instance == null) {
            DBFactory.instance = new DBFactory();
        }
        return DBFactory.instance;
    };
    DBFactory.prototype.obtenerAdapter = function (tipo) {
        if (tipo == "sqlite3") {
            return new SQLiteAdapter();
        }
        else if (tipo == "pouchdb") {
            return new PouchdbAdapter();
        }
        else {
            return null;
        }
    };
    DBFactory.instance = null;
    return DBFactory;
}());
var SQLiteAdapter = /** @class */ (function () {
    function SQLiteAdapter() {
        this.db = null;
    }
    SQLiteAdapter.prototype.cerrar = function () {
        if (this.db != null) {
            this.db.close();
            this.db = null;
        }
    };
    SQLiteAdapter.prototype.insertarAlumno = function (alumno) {
        if (this.db != null) {
            this.db.run("INSERT INTO alumno VALUES ('" + alumno.codigo + "', \n                            '" + alumno.nombre + "', '" + alumno.carrera + "')");
        }
    };
    SQLiteAdapter.prototype.crearEstructura = function () {
        if (this.db != null) {
            console.log("crear");
            this.db.run("CREATE TABLE alumno\n                            (codigo TEXT,\n                             nombre TEXT,\n                             carrera TEXT)");
        }
    };
    SQLiteAdapter.prototype.conectar = function () {
        this.db = new sqlite3_1.Database("alumnos.sqlite");
    };
    return SQLiteAdapter;
}());
var PouchdbAdapter = /** @class */ (function () {
    function PouchdbAdapter() {
        this.db = null;
    }
    PouchdbAdapter.prototype.cerrar = function () {
        if (this.db != null) {
            this.db.close();
            this.db = null;
        }
    };
    PouchdbAdapter.prototype.insertarAlumno = function (alumno) {
        if (this.db != null) {
            var doc = {
                codigo: alumno.codigo,
                nombre: alumno.nombre,
                carrera: alumno.carrera
            };
            this.db.put(doc);
        }
    };
    PouchdbAdapter.prototype.crearEstructura = function () { };
    PouchdbAdapter.prototype.conectar = function () {
        this.db = new pouchdb("./alumnos.db");
    };
    return PouchdbAdapter;
}());
