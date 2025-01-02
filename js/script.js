// Seleção de elementos
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-inputs button");
const qrCodeInput = document.querySelector("#qr-inputs input")
const qrCodeImg = document.querySelector("#img-qr img");

// Funções
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!"
    })
}


// Eventos
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    }
})

// Limpar área do input
qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})