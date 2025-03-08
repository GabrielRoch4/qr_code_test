function onScanSuccess(decodedText, decodedResult) {
    document.getElementById("result").innerText = `QR Code: ${decodedText}`;
}

function onScanFailure(error) {
    console.warn(`Erro ao ler o QR Code: ${error}`);
}

let scanner = new Html5Qrcode("reader");

scanner.start(
    { facingMode: "environment" }, // Usa a câmera traseira
    { fps: 10, qrbox: 250 }, 
    onScanSuccess,
    onScanFailure
);