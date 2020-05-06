import {Database} from "sqlite3";
import * as Pouchdb from "pouchdb"
import { strict } from "assert";

interface Student {
    id: string
    name: string
    career: string
}

class DBFactory{
    getAdapter(type: string): DBAdapter | null {
        if(type == "sqlite3"){
            return new SQLiteAdapter()
        } else if (type == "pouchdb"){
            return new PouchDBAdapter()
        } else {
            return null
        }
    }
}

interface DBAdapter{
    createStructure(): void
    connect(): void
    insertStudent(student: Student): void
    closeConnection(): void
}

class SQLiteAdapter implements DBAdapter{
    db: Database | null = null
    closeConnection(): void {
        if(this.db != null){
            this.db.close()
            this.db = null
        }
    }
    insertStudent(student: Student): void {
        if(this.db != null){
            this.db.run(`insert into student values ('${student.id}','${student.name}','${student.career}')`)
        }
        console.log("inserted")
    }
    createStructure(): void {
        if(this.db != null){
            this.db.run(`create table if not exists student
                            (id TEXT,
                            name TEXT,
                            career TEXT)`)
        }
    }
    connect(): void {
        this.db = new Database("student.sqlite")
    }
}
class PouchDBAdapter implements DBAdapter{
    db: PouchDB.Database | null = null
    closeConnection(): void {
        if(this.db != null){
            this.db.close()
            this.db = null
        }
    }
    insertStudent(student: Student): void {
        if(this.db != null){
            let doc = {
                id: student.id,
                name: student.name,
                career: student.career
            }
            this.db.put(doc)
        }
    }
    createStructure(): void {}
    connect(): void {
        this.db = new Pouchdb("./student.db")
    }

}

let adapter = () => {
    let type: string = process.argv[2]
    let factory: DBFactory = new DBFactory()
    let adapter: DBAdapter = factory.getAdapter(type)
    adapter.connect()
    adapter.createStructure()
    adapter.insertStudent({
        id: "20161885",
        name: "Bruno",
        career: "Systems Eng."
    })
    adapter.closeConnection()
}

adapter()