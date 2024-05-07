
function convertToDecimal(amount: number) {
    // return amount
    return Math.floor(amount)
}

export function usePricing(amount: number | undefined | null, currency = 'USD') {
    const nu_price = new Intl.NumberFormat("en-us", {
        style: "currency",
        minimumFractionDigits: 0,
        currency: currency //? currency : userStore.getUserCurrency
    }).format(amount ?? 0)
    return nu_price
}