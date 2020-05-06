import * as request from "request";

let peticionGet = (urlInput: string, tokenInput: string) => {
    var options = {
        url: urlInput,
        headers: {
            'TOKEN': tokenInput
        }
    };

    request(options, (error : any, response : any, body : any) => {
        console.log(`BODY: ${body}`)
    })
}

let funcDecoradora = (f: Function) => {
    let funcDecorada = (url: string, token: string) => {
        let resp = f(url, token)
    }
    return funcDecorada
}


let funcDecorada = funcDecoradora(peticionGet)
let url = 'https://script.google.com/macros/s/AKfycbyTK-iJqcW6KLVdx7v-PPuBivJ2wR3NicJK5CV9BhVVWx0Qv0GF/exec'
let token = "QWE12312QWEQ1dqw"
console.log(funcDecorada(url, token))