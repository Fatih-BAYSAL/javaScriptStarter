function addToCart(productName,quantity) {
    console.log("Sepete eklendi : " + productName + " adet : " + quantity)
}

addToCart("Yumurta",10)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Urun : " +product.productName)
    console.log("Adet : " +product.quantity)
    console.log("Fiyat : " +product.unitPrice)
}

addToCart3(product1)


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

//REST
function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i] 
    }
    console.log(total)
}

add(20,30,40)

//SPREAD
let numbers = [10,20,100,300,500,430]
//console.log(...numbers)

console.log(Math.max(...numbers))

//DESTRUCTURE

/* let regions = [
    {name:"Ic Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"}
]

let [icAnadolu,marmara,karadeniz] = regions

console.log(icAnadolu.name)
console.log(icAnadolu.population) */

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)