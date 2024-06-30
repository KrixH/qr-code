function generateQR() {
    var urlInput = document.getElementById('urlInput').value.trim();
    if (urlInput === '') {
        alert('Kérem, adjon meg egy linket vagy szöveget');
        return;
    }

    var qrCodeSection = document.getElementById('qrCodeSection');
    qrCodeSection.innerHTML = '';

    var qr = new QRCode(qrCodeSection, {
        text: urlInput,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H // hibajavítási szint beállítása
    });

    // QR kód canvas elem létrehozása
    var canvas = qr._el.firstChild;

    // Letöltési gomb megjelenítése és beállítása
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.style.display = 'inline-block'; // inline-block-ra állítjuk, hogy megjelenjen
    downloadLink.href = canvas.toDataURL("image/png");
    
    // Letöltendő fájl neve legyen a bemeneti link neve
    var fileName = urlInput.split('/').pop(); // utolsó részlet a '/' után
    downloadLink.setAttribute("download", fileName + "-qrcode" + ".png"); // Letöltendő fájl neve
    
    // QR kód középre igazítása
    qrCodeSection.style.display = 'flex';
    qrCodeSection.style.justifyContent = 'center';
    qrCodeSection.style.alignItems = 'center';
}


// Ellenőrizzük a felhasználó nyelvét
var userLang = navigator.language || navigator.userLanguage;

// Ha a nyelv magyar, és nem vagyunk már magyar oldalon, irányítsunk át magyarra
if (userLang.startsWith('hu') && !window.location.href.includes('index.html')) {
    console.log("Felhasználó nyelve: magyar");
    window.location.href = 'index.html'; // Magyar oldal URL-je
} else if (!userLang.startsWith('hu') && !window.location.href.includes('index_en.html')) {
    console.log("Felhasználó nyelve: " + userLang);
    window.location.href = 'index_en.html'; // Angol oldal URL-je
}



