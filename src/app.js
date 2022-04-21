console.log("Merhaba Kodlama.io")

//JS type safe degildir!
// Request= istek - Response= yanit

let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun ="9.20"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2 // const‘a degisken tanimladigimizda degistirilemez,sabittir. (read-only)
//euroDun = 11

console.log(euroDun)

//Array
let konutKredileri = [
    "Konut Kredisi",
    "Emlak Konut Kredisi",
    "Kamu Konut Kredisi"
]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++) {
    console.log(konutKredileri[i])
}
console.log("</ul>")


console.log(konutKredileri)

