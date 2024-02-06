const convertButton = document.querySelector(".botao")
const currencySelect = document.querySelector(".currency-select")
const currencySelect1 = document.querySelector(".currency-select-1")

function convertValues() {
    const botaoinput = document.querySelector(".input-botao").value
    const valor1 = document.querySelector(".currency-value")//BR
    const valor2 = document.querySelector(".currency-value-2")//outras moedas
    console.log(currencySelect.value)


    const dolardia = 5.2
    const euroDodia = 6.2
    const Ieneadia = 7.2
    const bitcoindia = 213.911

    if (currencySelect.value == 'dolar') {

        valor2.innerHTML = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: 'USD'

        }).format(botaoinput / dolardia)

    }

    if (currencySelect.value == 'euro') {

        valor2.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: 'EUR'


        }).format(botaoinput / euroDodia)
    }

    if (currencySelect.value == 'iene') {

        valor2.innerHTML = new Intl.NumberFormat('ja-JP', {

            style: 'currency',
            currency: 'JPY'


        }).format(botaoinput / bitcoindia)
    }

    if (currencySelect.value == 'bitcoin') {

        valor2.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: 'BTC'


        }).format(botaoinput / Ieneadia)
    }
    if (currencySelect1.value == 'dolar1') {

        valor1.innerHTML = new Intl.NumberFormat('en-US', {
    
            style: 'currency',
            currency: 'USD'
    
        }).format(botaoinput / dolardia)
    
    }
    
    if (currencySelect1.value == 'euro1') {
    
        valor1.innerHTML = new Intl.NumberFormat('de-DE', {
    
            style: 'currency',
            currency: 'EUR'
    
    
        }).format(botaoinput / euroDodia)
    }
    
    if (currencySelect1.value == 'iene1') {
    
        valor1.innerHTML = new Intl.NumberFormat('ja-JP', {
    
            style: 'currency',
            currency: 'JPY'
    
    
        }).format(botaoinput / bitcoindia)
    }
    
    if (currencySelect1.value == 'bitcoin1') {
    
        valor1.innerHTML = new Intl.NumberFormat('de-DE', {
    
            style: 'currency',
            currency: 'BTC'
    
    
        }).format(botaoinput / Ieneadia)
         
    
        if (currencySelect1.value == 'real1')
        valor1.innerHTML = new Intl.NumberFormat("pt-BR", {
    
            style: "currency",
            currency: "BRL"
    
    
        }).format(botaoinput)
        
    
    }

}

function changecurrency() {

    const convertname = document.getElementById("currencyname")
    if (currencySelect.value == "dolar") {
        convertname.innerHTML = "Dolar americano"
        imgdolar.src = './assets/Dolar.png'
    }


    if (currencySelect.value == "euro") {
        convertname.innerHTML = "Euro"
        imgdolar.src = "./assets/euro.png"
    }

    if (currencySelect.value == "iene") {
        convertname.innerHTML = "Ienes"
        imgdolar.src = "./assets/Iene.png"

    }

    if (currencySelect.value == "bitcoin") {
        convertname.innerHTML = "Bit-Coin"
        imgdolar.src = "./assets/bitcoin.png"

    }


}
    function changecurrencyto () {

        const convertname1 = document.getElementById("currencyreal")
        if (currencySelect1.value == "dolar1") {
            convertname1.innerHTML = "Dolar americano"
            imgreal.src = './assets/Dolar.png'
        }
    
    
        if (currencySelect1.value == "euro1") {
            convertname1.innerHTML = "Euro"
            imgreal.src = "./assets/euro.png"
        }
    
        if (currencySelect1.value == "iene1") {
            convertname1.innerHTML = "Ienes"
            imgreal.src = "./assets/Iene.png"
    
        }
    
        if (currencySelect1.value == "bitcoin1") {
            convertname1.innerHTML = "Bit-Coin"
            imgreal.src = "./assets/bitcoin.png"
    
        }


}


currencySelect1.addEventListener("change", changecurrencyto)
currencySelect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertValues)




//const selcbotton = document.querySelector (".option")

//function alternbandeira () {
//const botaooption = document.querySelector (".brasil")
//console.log(selcbotton)
//}

//selcbotton.addEventListener ("click", selcbotton)
