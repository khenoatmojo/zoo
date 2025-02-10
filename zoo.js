// Harga token dalam BNB
const TOKEN_PRICE = 0.0001;

// Fungsi untuk menangani pembelian token
function buyTokens() {
    let amountInput = document.getElementById("amount");
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("❌ Masukkan jumlah token yang valid!");
        return;
    }

    let totalCost = amount * TOKEN_PRICE;

    // Simulasi transaksi
    let confirmation = confirm(`🦁 Anda akan membeli ${amount} ZOO Token seharga ${totalCost.toFixed(6)} BNB. Lanjutkan?`);
    
    if (confirmation) {
        alert("✅ Pembelian berhasil! Token akan segera dikirim ke wallet Anda.");
        amountInput.value = ""; // Reset input setelah pembelian
    }
}

