interface Student {
    id: string
    name: string
}

interface OnGottenStudentList{
    onGottenStudentList(students: Student[]): void
}

class ShowStudents implements OnGottenStudentList{
    onGottenStudentList(students: Student[]):void {
        students.forEach(element => {
            console.log(`{id: ${element.id}, name: ${element.name}}`)
        })
    }
}

class StudentsManager{
    observer: OnGottenStudentList
    setObserver(observer: OnGottenStudentList){
        this.observer = observer
    }
    getStudentList(): void {
        let students: Student[] = []
        setTimeout(() => {
            students = [
                {id:"20161885", name:"Bruno"},
                {id:"20160400", name:"Mauge"}
            ]
            this.observer.onGottenStudentList(students)
        }, 3000)
    }
}

let observer2 = () => {
    let manager = new StudentsManager()
    manager.setObserver(new ShowStudents())
    manager.getStudentList()
} 
observer2()