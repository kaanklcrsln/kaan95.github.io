// Elementler
const errorbox = document.getElementById("errorbox");

// Pencere yapılandırmaları
const windowConfigs = [
  {
    id: 'recycle-bin',
    titlebar: 'recycle_bin_titlebar',
    ico: 'recycle_bin_ico',
    txt: 'recycle_bin_txt',
    closebtn: 'recycle_bin_closebtn',
    resize: [593, 200, false, false, 593],
    extra: function(win) {},
    iframe: null
  },
  {
    id: 'about-me',
    titlebar: 'about_me_titlebar',
    ico: 'about_me_ico',
    txt: 'about_me_txt',
    closebtn: 'about_me_closebtn',
    resize: [200, 200, false, false, null, null],
    extra: function(win) {
      var aboutText = `Hi!<br><br>
I am a senior Geomatics Engineering student at Hacettepe University and currently working as a software development scholar at TUBITAK Space on a GIS project.<br>
My goal is to build a career in the space industry by combining engineering and software development.<br><br>
Since 2018, I have established a professional presence in Turkeys video and photo editing industry.<br>
Throughout my student years, I supported myself financially by teaching Adobe software to hundreds of people, helping them develop creative skills through training sessions.<br>
Toward the end of 2020, I founded Sphere Unit, a collective of professional editors. I later entrusted its management to an Azerbaijani editor, while I continued pursuing my career in engineering.<br><br>
Since 2024 I have been working as a travel photographer, capturing urban and cultural stories.<br><br>
Previously, I worked as a Web Designer at ITU Blockchain and contributed to msy departments community, KOBIT, as a Design Creator.<br><br>
You can check my work on <a href="https://instagram.com/jagerhub" target="_blank" rel="noopener">instagram.com/jagerhub</a> and <a href="https://instagram.com/kaanklcrsln" target="_blank" rel="noopener">instagram.com/kaanklcrsln</a>.`;
      var textEl = document.getElementById('text');
      if (textEl) textEl.innerHTML = aboutText;
    },
    iframe: null
  },

  {
    id: 'experience',
    titlebar: 'experience_titlebar',
    ico: 'experience_ico',
    txt: 'experience_txt',
    closebtn: 'experience_closebtn',
    resize: [600, 400, false, false, null, null],
    extra: function(win) {
      var experienceText = `<strong>TÜBİTAK UZAY (Space Technologies Research Institute)</strong><br>
Project Scholar – Remote Sensing Group<br>
April 2025 – Present<br>
Research activities focused on satellite data, remote sensing, and image processing.<br><br>

<strong>İTÜ Blockchain</strong><br>
Member<br>
May 2025 – Present<br>
Active involvement in web design, UX/UI development, and community projects.<br><br>

<strong>Hacettepe University Sailing, Maritime and Yachting Society</strong><br>
Deputy Board Member<br>
September 2025 – Present<br>
Responsible for community management, event organization, and promotional activities.<br><br>

<strong>Sphere Unit</strong><br>
Founder & Creative Director<br>
August 2018 – Present<br>
Providing comprehensive media and design solutions: animation, video editing, visual effects, and brand identity design.<br><br>

<strong>Hacettepe University Geospatial Information Community</strong><br>
Community Creative Designer<br>
November 2024 – Present<br>
Designing promotional materials, social media content, and visual communication assets for the community.<br><br>

<strong>Mescioğlu Engineering and Consultancy Inc.</strong><br>
Intern<br>
July 2024<br>
Worked on photogrammetric data processing, basic GNSS analysis, and digital elevation model production.<br><br>

<strong>Ministry of Culture and Tourism of the Republic of Turkey</strong><br>
Youth Choir Member – Turkish Folk Music<br>
September 2008 – September 2013<br>
Performed as a Turkish folk music vocalist in the Youth Choir.`;
      var textEl = document.getElementById('experience-text');
      if (textEl) textEl.innerHTML = experienceText;
    },
    iframe: null
  },

  {
    id: 'socials',
    titlebar: 'socials_titlebar',
    ico: 'socials_ico',
    txt: 'socials_txt',
    closebtn: 'socials_closebtn',
    resize: [330, 135, false, false, null, null],
    extra: function(win) {},
    iframe: null
  },

  {
    id: 'music',
    titlebar: 'music_titlebar',
    ico: 'music_ico',
    txt: 'music_txt',
    closebtn: 'music_closebtn',
    resize: [330, 160, true, false, null, 400],
    extra: function(win) {
      const iframe = document.getElementById("spotify_embed_iframe");
      if (iframe) {
        iframe.src = "https://open.spotify.com/embed/playlist/4CtNcRHNAV6LTkUjMkagqX?utm_source=generator";
      }
    },
    iframe: "spotify_embed_iframe"
  },
  {
    id: 'background',
    titlebar: 'background_titlebar',
    ico: 'background_ico',
    txt: 'background_txt',
    closebtn: 'background_closebtn',
    resize: [465, 465, false, true, null, null],
    extra: function(win) {
      // Background penceresi açıldığında resimleri yükle
      loadBackgroundImages();
    },
    iframe: null
  }
];

// Background resimlerini yükleme fonksiyonu
function loadBackgroundImages() {
  const imageGrid = document.getElementById('image-grid');
  if (!imageGrid) return;

  // Önce mevcut içeriği temizle
  imageGrid.innerHTML = '';
  
  const bgFiles = [
    'bwxglhdsc8imp70rkytz.avif',
    'cfvuba2blbzdxanygm09.avif',
    'cqddfxugkom7xtj4w8uf.avif',
    'ebbkblurxp67hdb8vzyc.avif',
    'ocmeyt9jlsirtc1yvocy.avif',
    'qrtsdbjqsdkhzdmwh4y8.avif',
    'ryofo6j7v7pggzixkzeq.avif',
    'tgsrbppdy2y0vycstr8s.avif',
    'tq1utedtralfhbhh0gqf.avif',
    'wfaamw8krlcexrpzjuyk.avif'
  ];
  
  bgFiles.forEach(function(file) {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'bg-image-container';
    imgContainer.style.display = 'inline-block';
    imgContainer.style.margin = '6px';
    imgContainer.style.cursor = 'pointer';
    imgContainer.style.border = '2px solid transparent';
    imgContainer.style.borderRadius = '4px';
    imgContainer.style.padding = '2px';
    imgContainer.style.verticalAlign = 'top';
    
    const img = document.createElement('img');
    img.src = './images/backgrounds/' + file;
    img.alt = file;
    img.style.width = '120px';
    img.style.height = '80px';
    img.style.objectFit = 'cover';
    img.style.display = 'block';
    
    // Resme tıklanınca arkaplanı değiştir
    imgContainer.addEventListener('click', function() {
      // Tüm resimlerin border'ını sıfırla
      document.querySelectorAll('.bg-image-container').forEach(container => {
        container.style.border = '2px solid transparent';
      });
      
      // Seçili resmin border'ını değiştir
      imgContainer.style.border = '2px solid #00aaff';
      
      // Arkaplanı değiştir (göreli dosya yolunu kullan)
      const backgroundUrl = './images/backgrounds/' + file;
      document.body.style.backgroundImage = `url('${backgroundUrl}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed';

      // Seçili arkaplan dosya adını localStorage'a kaydet (daha güvenli eşleme için)
      localStorage.setItem('selectedBackgroundFile', file);
    });
    
    imgContainer.appendChild(img);
    imageGrid.appendChild(imgContainer);
  });
  
  // Sayfa yüklendiğinde önceden seçilmiş arkaplan varsa yükle (dosya adı ile eşleştir)
  const savedFile = localStorage.getItem('selectedBackgroundFile');
  if (savedFile) {
    const backgroundUrl = './images/backgrounds/' + savedFile;
    document.body.style.backgroundImage = `url('${backgroundUrl}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';

    // Kayıtlı arkaplanı seçili olarak işaretle
    setTimeout(() => {
      document.querySelectorAll('.bg-image-container img').forEach(imgEl => {
        // imgEl.src may be absolute, compare by filename
        const imgFile = imgEl.getAttribute('alt') || imgEl.src.split('/').pop();
        if (imgFile === savedFile) {
          if (imgEl.parentElement) imgEl.parentElement.style.border = '2px solid #00aaff';
        }
      });
    }, 100);
  }

  // Apply butonuna basıldığında kayıtlı seçimi uygula (isteğe bağlı)
  const applyBtn = document.getElementById('background_applybtn');
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      const f = localStorage.getItem('selectedBackgroundFile');
      if (f) {
        const url = './images/backgrounds/' + f;
        document.body.style.backgroundImage = `url('${url}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundAttachment = 'fixed';
      }
    });
  }
}

// Sayfa yüklendiğinde kayıtlı arkaplanı uygula
document.addEventListener('DOMContentLoaded', function() {
  // Grid'i hazırla, böylece Background penceresi açıldığında görseller yüklü olur
  loadBackgroundImages();

  const savedFile = localStorage.getItem('selectedBackgroundFile');
  if (savedFile) {
    const url = './images/backgrounds/' + savedFile;
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }
});

// Define titlebar IDs from windowConfigs
const titlebarIds = windowConfigs.map(cfg => cfg.titlebar);

// Change z-index of clicked windows
const zindexInactive = 991;
const zindexActive = 992;
titlebarIds.forEach(id => {
  const titlebar = document.getElementById(id);
  if (titlebar) {
    titlebar.addEventListener('click', () => {
      titlebarIds.forEach(tbId => {
        if (tbId !== id) {
          const otherTitlebar = document.getElementById(tbId);
          if (otherTitlebar) {
            otherTitlebar.parentElement.style.zIndex = zindexInactive.toString();
          }
        }
      });
      titlebar.parentElement.style.zIndex = zindexActive.toString();
    });
  }
});

let lastClickTimes = {};
let isWaitings = {};

function window_close(window) {
  if (window) {
    window.style.display = 'none';
  }
}

function initializeResize(window, minW = 20, minH = 20, music = false, background = false, maxW = null, maxH = null) {
  return function (e) {
    e.preventDefault();
    function startResize(e) {
      if (!window) return;
      const newWidth = e.clientX - window.getBoundingClientRect().left;
      const newHeight = e.clientY - window.getBoundingClientRect().top;
      const limitedWidth = maxW ? Math.max(minW, Math.min(maxW, newWidth)) : Math.max(minW, newWidth);
      const limitedHeight = maxH ? Math.max(minH, Math.min(maxH, newHeight)) : Math.max(minH, newHeight);
      window.style.width = `${limitedWidth}px`;
      window.style.height = `${limitedHeight}px`;
      const titlebar = window.querySelector('.titlebar');
      if (titlebar) {
        titlebar.style.width = `${limitedWidth}px`;
      }
      if (music && document.getElementById("spotify_embed_iframe")) {
        document.getElementById("spotify_embed_iframe").style.height = `${limitedHeight - 63}px`;
      }
      if (background && document.getElementById("scrolling_container")) {
        document.getElementById("scrolling_container").style.height = `${limitedHeight - 100}px`;
      }
    }
    function stopResize() {
      document.removeEventListener('mousemove', startResize);
      document.removeEventListener('mouseup', stopResize);
    }
    document.addEventListener('mousemove', startResize);
    document.addEventListener('mouseup', stopResize);
  };
}

// Pencere olay dinleyicilerini başlat
windowConfigs.forEach(cfg => {
  const win = document.getElementById(cfg.id);
  const ico = document.getElementById(cfg.ico);
  const txt = document.getElementById(cfg.txt);
  const closebtn = document.getElementById(cfg.closebtn);
  const resizeHandle = win && win.querySelector('.resizehandle');
  const unique = cfg.id;

  if (!win || !ico || !txt || !closebtn) {
    console.warn(`Pencere yapılandırması için eksik elementler: ${cfg.id}`);
    return;
  }

  lastClickTimes[unique] = 0;
  isWaitings[unique] = false;

  // İkon tıklama (tek/çift)
  ico.addEventListener("click", function() {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTimes[unique] <= 600 && !isWaitings[unique]) {
      txt.style.border = "none";
      txt.style.background = "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
      if (typeof cfg.extra === 'function') cfg.extra(win);
      win.style.display = 'block';
      isWaitings[unique] = true;
      setTimeout(function() {
        isWaitings[unique] = false;
      }, 700);
    } else {
      txt.style.border = "1px dotted white";
      txt.style.background = "linear-gradient(rgba(0, 0, 170, 0.5), rgba(0, 0, 170, 0.5))";
    }
    lastClickTimes[unique] = currentTime;
  });

  // Kapat düğmesi
  closebtn.addEventListener('click', () => window_close(win));

  // Boyutlandırma tutamaçı
  if (resizeHandle) {
    resizeHandle.addEventListener('mousedown', initializeResize(win, ...cfg.resize));
  }
});

// Seçimi kaldırmak için tek belge tıklama dinleyicisi
document.addEventListener('click', function(event) {
  windowConfigs.forEach(cfg => {
    const ico = document.getElementById(cfg.ico);
    const txt = document.getElementById(cfg.txt);
    if (ico && txt && event.target !== ico) {
      txt.style.border = "none";
      txt.style.background = "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))";
      isWaitings[cfg.id] = false;
    }
  });
});
