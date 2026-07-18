function convertCurrency() {
    const exchangeRate = 0.74;

    const usd = parseFloat(document.getElementById("usd").value);

    if (isNaN(usd) || usd < 0) {
        document.getElementById("result").textContent =
            "Please enter a valid USD amount.";
        return;
    }

    const gbp = usd * exchangeRate;

    document.getElementById("result").textContent =
        `$${usd.toFixed(2)} = £${gbp.toFixed(2)}`;
}