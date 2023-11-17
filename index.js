const input_amount = document.querySelector("#original-currency-amount")
const usd_btn = document.querySelector("#usd-btn")
const naira_btn = document.querySelector("#naira-btn")
const output_amount = document.querySelector(".exchange")

const currencyUsdApi = async () => {
    const fetchApi = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_uaXdDC3aZvNuD4TPBIaSn8Y0oyzV7PryRxsfYuru")
    const parseApi =  await fetchApi.json()
    return (parseApi.data.USD.value)
}

const currencyNairaApi = async () => {
    const fetchApi = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_uaXdDC3aZvNuD4TPBIaSn8Y0oyzV7PryRxsfYuru")
    const parseApi =  await fetchApi.json()
    return (parseApi.data.NGN.value)
}

usd_btn.addEventListener("click", async () =>{
    const usd_naira = await currencyNairaApi()
    output_amount.textContent += input_amount.value * usd_naira
 })

naira_btn.addEventListener("click", async () =>{
    const naira_usd = await currencyUsdApi()
    output_amount.textContent += `$${input_amount.value * naira_usd}` 
})


