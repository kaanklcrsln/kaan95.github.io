// elementler
const calendar = document.getElementById('calendar');
const startbtn = document.getElementById('startbtn');

const startmenu = document.getElementById('startmenu');
const shutdownbtn = document.getElementById('shutdownbtn');

// mesaj kutusu 
var closebtn_exitmsg = document.getElementById('closebtn');
var exitbtn_exitmsg = document.getElementById('exitbtn');
var nobtn_exitmsg = document.getElementById('nobtn');

// Sayfa yüklendiğinde yapılacaklar
document.addEventListener('DOMContentLoaded', () => {
  // Pencere başlıklarını ayarla
  document.getElementById('aboutmetitle').textContent = 'About Me - Notepad';
  document.getElementById('experiencetitle').textContent = 'Experience - Notepad';
  
  // Varsayılan arkaplanı ayarla
  const defaultBackground = './images/backgrounds/uzpukzqbv8c4v6hpuedc.avif';
  document.body.style.backgroundImage = `url('${defaultBackground}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";
});


// Sadece images/backgrounds klasöründeki dosya adlarını kullan
var backgrounds = [
  'bwxglhdsc8imp70rkytz.avif',
  'cfvuba2blbzdxanygm09.avif',
  'cqddfxugkom7xtj4w8uf.avif',
  'ebbkblurxp67hdb8vzyc.avif',
  'ocmeyt9jlsirtc1yvocy.avif',
  'qrtsdbjqsdkhzdmwh4y8.avif',
  'ryofo6j7v7pggzixkzeq.avif',
  'tgsrbppdy2y0vycstr8s.avif',
  'tq1utedtralfhbhh0gqf.avif',
  'wfaamw8krlcexrpzjuyk.avif',
  'uzpukzqbv8c4v6hpuedc.avif' // Yeni eklenen arkaplan
];


// belirli bir uzunlukta rastgele bir dize oluştur
function RandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomChar = characters.charAt(randomIndex);
      randomString += randomChar;
  }
  return randomString;
}

// x milisaniye bekle
function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}


// takvim elemanı
function updateTime() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();

  // Zamanı "ss:dd" formatında biçimlendir
  const currentTime = `${formatTimeNumber(currentHour)}:${formatTimeNumber(currentMinutes)}`;
  calendar.textContent = currentTime;
}
function formatTimeNumber(number) {
  return number.toString().padStart(2, '0');
}
updateTime();
setInterval(updateTime, 60000);

// Başlat menüsü göster/gizle olayı
// Düğmeye bir tıklama olay dinleyicisi ekle
startbtn.addEventListener('click', () => {
    // Gizli öğenin görüntüleme özelliğini değiştir
    if (startmenu.style.display === 'none') {
        startmenu.style.display = 'block';
    } else {
        startmenu.style.display = 'none';
    }
});


// bir düğmeye veya dışındaki bir şeye tıklandığında başlat menüsünü kapat
function closeStartmenu() {
  startmenu.style.display = 'none';
}
// Belgedeki tıklamaları dinle
document.addEventListener('click', function(event) {
  const targetElement = event.target;
  // Tıklama hedefi startmenu öğesi değilse div'i kapat
  if (targetElement !== startmenu && targetElement !== startbtn) {
    closeStartmenu();
  }
});


// open error box and define title and message
function exitmsg_open(title, message) {
  // hide the start menu
  startmenu.style.display = 'none';

  // get values
  var divTitle = document.getElementById("errortitle");
  var divContent = document.getElementById("errortxt");
   
  // show msg box
  errorbox.style.display = 'block';
}
function exitmsg_close() {
  // hide msg box
  errorbox.style.display = 'none';
};

closebtn_exitmsg.addEventListener('click', () => {
  exitmsg_close();
});
nobtn_exitmsg.addEventListener('click', () => {
  exitmsg_close();});
exitbtn_exitmsg.addEventListener('click', () => {
  exitmsg_close();
});

async function changetext() {
  // change text color to red
  exitbtn_exitmsg.style.color = "red";
  // Set 4 times a random string with a delay of 300 milliseconds
  for (let i = 0; i < 4; i++) {
    exitbtn_exitmsg.textContent = RandomString(4);
    await sleep(25);
  }
}

// detect if the yes button is hovered an change it
exitbtn_exitmsg.addEventListener('mouseenter', () => {changetext();});

// not hovered anymore
exitbtn_exitmsg.addEventListener('mouseleave', () => {
  exitbtn_exitmsg.style.color = "black";
  exitbtn_exitmsg.textContent = "Exit";
});

shutdownbtn.addEventListener('click', () => {
  exitmsg_open();
});



// Background seçimi için merkezi event delegation
function background_window_selection() {
  const imageGrid = document.getElementById('image-grid');
  if (!imageGrid) {
    console.warn('background_window_selection: #image-grid bulunamadı');
    return;
  }

  // Helper: temizle tüm seçili state'leri
  function clearSelections() {
    document.querySelectorAll('.image-box.selected, .bg-image-container').forEach(el => {
      el.classList.remove('selected');
      // eski inline border stilini de sıfırla
      if (el.style) el.style.border = '2px solid transparent';
    });
  }

  // Helper: set selection by filename
  function markSelectedByFilename(filename) {
    // normalize
    const name = filename.split('/').pop();
    // try .bg-image-container img alt
    const imgs = document.querySelectorAll('.bg-image-container img');
    let found = false;
    imgs.forEach(imgEl => {
      const imgFile = imgEl.getAttribute('alt') || imgEl.src.split('/').pop();
      if (imgFile === name) {
        clearSelections();
        if (imgEl.parentElement) imgEl.parentElement.style.border = '2px solid #00aaff';
        found = true;
      }
    });
    if (found) return;

    // try .image-box background-image
    document.querySelectorAll('.image-box').forEach(box => {
      const bg = box.style.backgroundImage || '';
      if (bg.includes(name)) {
        clearSelections();
        box.classList.add('selected');
        found = true;
      }
    });
  }

  // Click delegation on grid
  imageGrid.addEventListener('click', function(e) {
    console.log('imageGrid click', e.target);
    const target = e.target;
    let filename = null;

    // If clicked an img inside bg-image-container
    if (target.tagName === 'IMG' && target.parentElement && target.parentElement.classList.contains('bg-image-container')) {
      filename = target.getAttribute('alt') || target.src.split('/').pop();
      clearSelections();
      target.parentElement.style.border = '2px solid #00aaff';
    }

    // If clicked a .image-box
    if (target.classList && target.classList.contains('image-box')) {
      // parse filename from background-image style: url("./images/backgrounds/xxx.avif")
      const bg = target.style.backgroundImage || '';
      const match = bg.match(/url\(["']?(.*?)["']?\)/);
      if (match && match[1]) filename = match[1].split('/').pop();
      clearSelections();
      target.classList.add('selected');
    }

    if (filename) {
      console.log('thumbnail clicked, filename=', filename);
      // save filename
      localStorage.setItem('selectedBackgroundFile', filename);
      // apply immediately
      const url = './images/backgrounds/' + filename;
      document.body.style.backgroundImage = `url('${url}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed';
    }
  });

  // Apply butonu (aynı şekilde çalışsın)
  const applyBtn = document.getElementById('background_applybtn');
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      let f = localStorage.getItem('selectedBackgroundFile');
      // Eğer localStorage'da yoksa DOM'dan seçili öğeyi tespit etmeye çalış
      if (!f) {
        // .image-box.selected
        const selBox = document.querySelector('.image-box.selected');
        if (selBox) {
          const bg = selBox.style.backgroundImage || '';
          const match = bg.match(/url\(["']?(.*?)?["']?\)/);
          if (match && match[1]) f = match[1].split('/').pop();
        }
      }
      if (!f) {
        // .bg-image-container img with border
        document.querySelectorAll('.bg-image-container img').forEach(imgEl => {
          try {
            const parent = imgEl.parentElement;
            const border = parent && parent.style && parent.style.border;
            if (border && !border.includes('transparent')) {
              f = imgEl.getAttribute('alt') || imgEl.src.split('/').pop();
            }
          } catch (e) {}
        });
      }

      if (f) {
        // persist
        localStorage.setItem('selectedBackgroundFile', f);
        const url = './images/backgrounds/' + f;
        document.body.style.backgroundImage = `url('${url}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
      } else {
        console.log('No image selected');
      }
    });
  }

  // If there is already a saved file, mark it
  const saved = localStorage.getItem('selectedBackgroundFile');
  if (saved) markSelectedByFilename(saved);
}
// Initialize once
background_window_selection();

// loadRandom fonksiyonunu kaldırdık ve varsayılan arkaplanı ayarladık
// Artık sadece kullanıcı seçim yaparsa arkaplan değişecek

document.addEventListener('DOMContentLoaded', () => {
  const defaultBackground = './images/uzpukzqbv8c4v6hpuedc.avif';
  document.body.style.backgroundImage = `url('${defaultBackground}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  document.body.style.backgroundAttachment = "fixed";
});
