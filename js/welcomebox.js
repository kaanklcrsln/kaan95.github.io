// Hoşgeldiniz Mesaj Kutusu Fonksiyonları
document.addEventListener('DOMContentLoaded', function() {
    // Hoşgeldiniz kutusu elementleri
    const welcomeBox = document.getElementById('welcomebox');
    const welcomeCloseBtn = document.getElementById('welcome_closebtn');
    const welcomeOkBtn = document.getElementById('welcome_okbtn');
    
    // Debug için konsola yazdır
    console.log('welcomeBox element:', welcomeBox);
    
    // Her seferinde hoşgeldiniz mesajını göster (localStorage kontrolünü kaldırdık)
    if (welcomeBox) {
        // Daha iyi kullanıcı deneyimi için hoşgeldiniz kutusunu küçük bir gecikme ile göster
        setTimeout(() => {
            welcomeBox.style.display = 'block';
            console.log('Welcome box displayed');
        }, 1000);
    } else {
        console.error('Welcome box element not found!');
    }
    
    // Hoşgeldiniz kutusunu kapatma fonksiyonu
    function closeWelcomeBox() {
        if (welcomeBox) {
            welcomeBox.style.display = 'none';
            console.log('Welcome box closed');
        }
    }
    
    // Kapat ve Tamam düğmeleri için olay dinleyicileri ekle
    if (welcomeCloseBtn) {
        welcomeCloseBtn.addEventListener('click', closeWelcomeBox);
    }
    
    if (welcomeOkBtn) {
        welcomeOkBtn.addEventListener('click', closeWelcomeBox);
    }
});
