interface Observer{
    notifyEvent(): void
}

class ConcreteObserver1 implements Observer {
    notifyEvent(): void {
        console.log("Take notes in notepad")
    }
}

class ConcreteObserver2 implements Observer {
    notifyEvent(): void {
        console.log("Take notes in notebook")
    }
}

class Observable {
    observers: Observer[] = []
    addObserver(obs: Observer){
        this.observers.push(obs)
    }

    emitEvent(){
        this.observers.forEach(element => {
            element.notifyEvent()
        })
    }
}

let observer = () => {
    let teacher = new Observable();
    let marcelo: Observer = new ConcreteObserver1;
    let aron: Observer = new ConcreteObserver2;

    teacher.addObserver(marcelo)
    teacher.addObserver(aron)

    teacher.emitEvent()
}

observer()