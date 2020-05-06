import {Database} from "sqlite3";
import * as pouchdb from "pouchdb"

interface Alumno
{
    codigo : string
    nombre : string
    carrera : string
}

// Fachada
// Singleton
export class DBManager
{
    private static instance : DBManager | null

    static getInstance() : DBManager
    {
        if (DBManager.instance == null)
        {
            DBManager.instance = new DBManager()
        }
        return DBManager.instance
    }

    private constructor(){}

    inicializarTablaAlumno(tipo : string)
    {
        let factory : DBFactory = DBFactory.getInstance()
        let adapter : DBAdapter = factory.obtenerAdapter(tipo)
        adapter.conectar()
        adapter.crearEstructura()
        adapter.cerrar()
    }
    insertarAlumno(alumno : Alumno, tipo : string)
    {
        let factory : DBFactory = DBFactory.getInstance()
        let adapter : DBAdapter = factory.obtenerAdapter(tipo)
        adapter.conectar()
        adapter.insertarAlumno(alumno)
        adapter.cerrar()
    }
}

class DBFactory
{
    private static instance : DBFactory | null = null

    static getInstance() : DBFactory
    {
        if (DBFactory.instance == null)
        {
            DBFactory.instance = new DBFactory()
        }
        return DBFactory.instance
    }

    private constructor(){}

    obtenerAdapter(tipo : string) : DBAdapter | null
    {
        if (tipo == "sqlite3")
        {
            return new SQLiteAdapter()
        }else if (tipo == "pouchdb")
        {
            return new PouchdbAdapter()
        }else
        {
            return null
        }
    }
}

interface DBAdapter
{
    conectar() : void
    crearEstructura() : void
    insertarAlumno(alumno : Alumno) : void
    cerrar() : void
}

class SQLiteAdapter implements DBAdapter
{
    db : Database | null = null

    cerrar() : void {
        if (this.db != null)
        {
            this.db.close()
            this.db = null
        }
    }

    insertarAlumno(alumno : Alumno) : void {
        if (this.db != null)
        {
            this.db.run(`INSERT INTO alumno VALUES ('${alumno.codigo}', 
                            '${alumno.nombre}', '${alumno.carrera}')`)
        }
    }
    crearEstructura(): void {
        if (this.db != null)
        {
            console.log("crear")
            this.db.run(`CREATE TABLE alumno
                            (codigo TEXT,
                             nombre TEXT,
                             carrera TEXT)`)
        }
    }
    conectar(): void {
        this.db = new Database("alumnos.sqlite")
    }

}
class PouchdbAdapter implements DBAdapter
{
    db : PouchDB.Database | null = null

    cerrar() : void {
        if (this.db != null)
        {
            this.db.close()
            this.db = null
        }
    }
    insertarAlumno(alumno : Alumno) : void {
        if (this.db != null)
        {
            let doc = {
                codigo : alumno.codigo,
                nombre : alumno.nombre,
                carrera : alumno.carrera
            }
            this.db.put(doc)
        }
    }
    crearEstructura(): void {}
    conectar(): void {
        this.db = new pouchdb("./alumnos.db")
    }

}
