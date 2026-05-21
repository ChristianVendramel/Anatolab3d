/* ============================================
   ANATOLAB3D - Datos del Catálogo
   Productos organizados por sección anatómica
   ============================================ */

/**
 * INSTRUCCIONES PARA ACTUALIZAR IMÁGENES:
 * Cada producto tiene un array "images" con 5 rutas.
 * Reemplazá las rutas placeholder por las fotos reales de cada pieza.
 * Ejemplo: 'assets/images/catalogo/humero_1.jpg'
 */

// Miembro Superior: Húmero, Radio, Ulna, Escápula, Clavícula, Mano (Huesos del Carpo), Articulación del Codo, Articulación del Hombro. Cada producto tiene 5 imágenes detalladas mostrando diferentes ángulos y características anatómicas. Material PLA+ resistente, ideal para estudio anatómico avanzado. Reemplazá las rutas placeholder por las fotos reales de cada pieza.
// Húmero
const CATALOGO_DATA = {
  'miembro-superior': [
    {
      id: 'humero', name: 'Húmero', badge: 'Popular', category: 'Miembro Superior',
      description: 'Modelo del húmero con detalles de trocánter, cabeza humeral y epicóndilos. Escala 1:1.',
      price: 12000, stock: 5,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Húmero 3D.'
    },

    //  Radio
    {
      id: 'radio', name: 'Radio', badge: 'Nuevo', category: 'Miembro Superior',
      description: 'Réplica del radio con cabeza radial y apófisis estiloides. Material PLA+ de alta durabilidad.',
      price: 9000, stock: 4,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Radio 3D.'
    },

    //  Ulna (Cúbito)
    {
      id: 'ulna', name: 'Ulna (Cúbito)', badge: '', category: 'Miembro Superior',
      description: 'Ulna detallada con olécranon, apófisis coronoides y escotadura troclear.',
      price: 9000, stock: 6,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Ulna 3D.'
    },

    // Escápula
    {
      id: 'escapula', name: 'Escápula', badge: 'Popular', category: 'Miembro Superior',
      description: 'Escápula con fosa subescapular, espina y acromion claramente definidos.',
      price: 10000, stock: 3,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Escápula 3D.'
    },

    //  Clavícula
    {
      id: 'clavicula', name: 'Clavícula', badge: 'Nuevo', category: 'Miembro Superior',
      description: 'Réplica precisa de la clavícula humana con detalles de inserción muscular.',
      price: 8500, stock: 8,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Clavícula 3D.'
    },

    //  Mano (Huesos del Carpo)
    {
      id: 'mano-carpo', name: 'Mano (Huesos del Carpo)', badge: 'Premium', category: 'Miembro Superior',
      description: 'Conjunto de huesos del carpo, metacarpianos y falanges con detalle individual.',
      price: 18000, stock: 2,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Mano 3D.'
    },

    // Articulación del Codo
    {
      id: 'art-codo', name: 'Articulación del Codo', badge: '', category: 'Miembro Superior',
      description: 'Modelo articulado del codo con húmero distal, radio y ulna proximal.',
      price: 15000, stock: 4,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Articulación del Codo 3D.'
    },

    //  Articulación del Hombro
    {
      id: 'art-hombro', name: 'Articulación del Hombro', badge: 'Top Venta', category: 'Miembro Superior',
      description: 'Articulación glenohumeral con clavícula, escápula y húmero proximal.',
      price: 20000, stock: 3,
      images: ['assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png', 'assets/images/clavicle.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Articulación del Hombro 3D.'
    }
  ],

  // Miembro Inferior , Tibia, Peroné (Fíbula), Rótula (Patela), Pie (Huesos del Tarso), Articulación de la Rodilla, Articulación de la Cadera. Cada producto tiene 5 imágenes detalladas mostrando diferentes ángulos y características anatómicas. Material PLA+ resistente, ideal para estudio anatómico avanzado. Reemplazá las rutas placeholder por las fotos reales de cada pieza. 

  // Fémur
  'miembro-inferior': [
    {
      id: 'femur', name: 'Fémur', badge: 'Top Venta', category: 'Miembro Inferior',
      description: 'Fémur humano escala real con trocánteres y cabeza femoral detallada.',
      price: 12000, stock: 3,
      images: ['assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Fémur 3D.'
    },

    // Tibia
    {
      id: 'tibia', name: 'Tibia', badge: 'Popular', category: 'Miembro Inferior',
      description: 'Tibia con meseta tibial, maléolo medial y tuberosidad tibial detallados.',
      price: 10000, stock: 5,
      images: ['assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Tibia 3D.'
    },

    // Peroné (Fíbula)
    {
      id: 'perone', name: 'Peroné (Fíbula)', badge: '', category: 'Miembro Inferior',
      description: 'Peroné con cabeza, cuello y maléolo lateral. Material PLA+ resistente.',
      price: 8500, stock: 6,
      images: ['assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Peroné 3D.'
    },

    // Rótula (Patela)
    {
      id: 'rotula', name: 'Rótula (Patela)', badge: 'Nuevo', category: 'Miembro Inferior',
      description: 'Rótula con superficie articular posterior y bordes detallados.',
      price: 5000, stock: 10,
      images: ['assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Rótula 3D.'
    },

    // Pie (Huesos del Tarso)
    {
      id: 'pie-tarso', name: 'Pie (Huesos del Tarso)', badge: 'Premium', category: 'Miembro Inferior',
      description: 'Conjunto completo de huesos del tarso, metatarsianos y falanges.',
      price: 18000, stock: 2,
      images: ['assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Pie 3D.'
    },

    // Articulación de la Rodilla
    {
      id: 'art-rodilla', name: 'Articulación de la Rodilla', badge: 'Top Venta', category: 'Miembro Inferior',
      description: 'Articulación completa con fémur distal, tibia proximal, rótula y meniscos.',
      price: 20000, stock: 3,
      images: ['assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Articulación de la Rodilla 3D.'
    },

    // Articulación de la Cadera
    {
      id: 'art-cadera', name: 'Articulación de la Cadera', badge: 'Popular', category: 'Miembro Inferior',
      description: 'Articulación coxofemoral con pelvis parcial y cabeza del fémur.',
      price: 22000, stock: 2,
      images: ['assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png', 'assets/images/femur.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Articulación de la Cadera 3D.'
    }
  ],
  
// RAQUIS: Cada segmento del raquis (cervical, torácico, lumbar, sacro-cóccix) con detalles anatómicos específicos. Material PLA+ resistente, ideal para estudio anatómico avanzado. Reemplazá las rutas placeholder por las fotos reales de cada pieza.

//  Columna Cervical
  'raquis': [
    {
      id: 'col-cervical', name: 'Columna Cervical', badge: 'Popular', category: 'Raquis',
      description: 'Segmento cervical C1-C7 con atlas, axis y forámenes transversos detallados.',
      price: 15000, stock: 4,
      images: ['assets/images/columna-cevical/cervical1.png', 'assets/images/columna-cevical/cervical2.png', 'assets/images/columna-cevical/cervical3.png', 'assets/images/columna-cevical/cervical4.png', 'assets/images/columna-cevical/cervical5.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Columna Cervical 3D.'
    },

    //  Columna Torácica
    {
      id: 'col-toracica', name: 'Columna Torácica', badge: '', category: 'Raquis',
      description: 'Segmento torácico T1-T12 con carillas costales y procesos espinosos.',
      price: 18000, stock: 3,
      images: ['assets/images/columna-toracica/toracica1.png', 'assets/images/columna-toracica/toracica2.png', 'assets/images/columna-toracica/toracica3.png', 'assets/images/columna-toracica/toracica4.png', 'assets/images/columna-toracica/toracica5.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Columna Torácica 3D.'
    },

    //  Columna Lumbar
    {
      id: 'col-lumbar', name: 'Columna Lumbar', badge: 'Top Venta', category: 'Raquis',
      description: 'Segmento lumbar L1-L5 con cuerpos vertebrales robustos y discos visibles.',
      price: 16000, stock: 5,
      images: ['assets/images/columna-lumbar/lumbar1.png', 'assets/images/columna-lumbar/lumbar2.png', 'assets/images/columna-lumbar/lumbar3.png', 'assets/images/columna-lumbar/lumbar4.png', 'assets/images/columna-lumbar/lumbar5.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Columna Lumbar 3D.'
    },

    //  Sacro y Cóccix
    {
      id: 'sacro-coccix', name: 'Sacro y Cóccix', badge: 'Nuevo', category: 'Raquis',
      description: 'Sacro con forámenes sacros anteriores y posteriores. Incluye cóccix articulado.',
      price: 10000, stock: 6,
      images: ['assets/images/columna-sacro-coccix/lumbar1.png', 'assets/images/columna-sacro-coccix/lumbar2.png', 'assets/images/columna-sacro-coccix/lumbar3.png', 'assets/images/columna-sacro-coccix/lumbar4.png', 'assets/images/columna-sacro-coccix/lumbar5.png', 'assets/images/columna-sacro-coccix/lumbar6.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Sacro y Cóccix 3D.'
    }
  ],

  // Dorso Escápula con Músculos: Escápula con inserciones musculares pintadas del manguito rotador. Detalles de la fosa subescapular, espina y acromion. Material PLA+ resistente, ideal para estudio anatómico avanzado.
  'dorso': [
    {
      id: 'escapula-musculos', name: 'Escápula con Músculos', badge: 'Premium', category: 'Dorso',
      description: 'Escápula con inserciones musculares pintadas del manguito rotador.',
      price: 16000, stock: 3,
      images: ['assets/images/escapula/escapula1.png', 'assets/images/escapula/escapula2.png', 'assets/images/escapula/escapula3.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Escápula con Músculos 3D.'
    },
    // Dorso Costillas
    {
      id: 'costillas', name: 'Costillas', badge: 'Popular', category: 'Dorso',
      description: 'Set de costillas verdaderas, falsas y flotantes con cartílago costal.',
      price: 20000, stock: 2,
      images: ['assets/images/costillas/costillas1.png', 'assets/images/costillas/costillas2.png', 'assets/images/costillas/costillas3.png', 'assets/images/costillas/costillas4.png', 'assets/images/costillas/costillas5.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa las Costillas 3D.'
    },
    // Dorso Esternón
    {
      id: 'esternon', name: 'Esternón', badge: '', category: 'Dorso',
      description: 'Esternón con manubrio, cuerpo y apófisis xifoides. Detalle de escotaduras costales.',
      price: 8000, stock: 7,
      images: ['assets/images/esternon/esternon1.png', 'assets/images/esternon/esternon2.png', 'assets/images/esternon/esternon3.png', 'assets/images/esternon/esternon4.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Esternón 3D.'
    },
    // Dorso Caja Torácica Completa.
    {
      id: 'caja-toracica', name: 'Caja Torácica Completa', badge: 'Top Venta', category: 'Dorso',
      description: 'Caja torácica completa con esternón, costillas y columna torácica ensamblados.',
      price: 35000, stock: 1,
      images: ['assets/images/costillas/costillas1.png', 'assets/images/costillas/costillas2.png', 'assets/images/costillas/costillas3.png', 'assets/images/costillas/costillas4.png', 'assets/images/costillas/costillas5.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Caja Torácica Completa 3D.'
    }
  ],

  // CRANEO: Cada producto tiene 5 imágenes detalladas del cráneo desde diferentes ángulos, mostrando suturas, forámenes y detalles óseos. Las imágenes deben resaltar la calidad de impresión y el nivel de detalle anatómico. Reemplazá las rutas placeholder por las fotos reales de cada pieza.
  'craneo': [
    {
      id: 'craneo-completo', name: 'Cráneo Completo', badge: 'Popular', category: 'Cráneo',
      description: 'Modelo detallado del cráneo humano adulto con suturas visibles. Calota removible.',
      price: 15000, stock: 5,
      images: ['assets/images/cranio/cranio1.png', 'assets/images/cranio/cranio2.png', 'assets/images/cranio/cranio3.png', 'assets/images/cranio/cranio4.png', 'assets/images/cranio/cranio5.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Cráneo Completo 3D.'
    },
    // MANDIBULA
    {
      id: 'mandibula', name: 'Mandíbula', badge: 'Nuevo', category: 'Cráneo',
      description: 'Mandíbula con cóndilos, apófisis coronoides, foramen mentoniano y alvéolos dentarios.',
      price: 10000, stock: 6,
      images: ['assets/images/mandibula/mandibula1.png', 'assets/images/mandibula/mandibula2.png', 'assets/images/mandibula/mandibula3.png', 'assets/images/mandibula/mandibula4.png', 'assets/images/mandibula/mandibula5.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Mandíbula 3D.'
    },
    // BASE DO CRANEO
    {
      id: 'base-craneo', name: 'Base del Cráneo', badge: 'Premium', category: 'Cráneo',
      description: 'Base craneal con fosa anterior, media y posterior. Forámenes claramente marcados.',
      price: 18000, stock: 3,
      images: ['assets/images/base-craneo/base1.png', 'assets/images/base-craneo/base2.png', 'assets/images/base-craneo/base3.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa la Base del Cráneo 3D.'
    },
    // HUESO TEMPORAL
    {
      id: 'hueso-temporal', name: 'Hueso Temporal', badge: '', category: 'Cráneo',
      description: 'Hueso temporal con peñasco, mastoides y cavidad timpánica detallada.',
      price: 12000, stock: 4,
      images: ['assets/images/hueso-temporal/hueso-temporal1.png', 'assets/images/hueso-temporal/hueso-temporal2.png', 'assets/images/hueso-temporal/hueso-temporal3.png', 'assets/images/hueso-temporal/hueso-temporal4.png'],
      mpLink: '#', wpMsg: 'Hola! Me interesa el Hueso Temporal 3D.'
    }
  ]
};

// WhatsApp number — defined in main.js (loaded after this file)

/**
 * Genera el HTML de un card con carousel de imágenes.
 */
function createProductCard(product) {
  const badgeHTML = product.badge
    ? `<span class="product-badge">${product.badge}</span>`
    : '';

  const slidesHTML = product.images.map((img, i) =>
    `<div class="card-carousel-slide" data-img-src="${img}">
       <img src="${img}" alt="${product.name} - Vista ${i + 1}">
     </div>`
  ).join('');

  const dotsHTML = product.images.map((_, i) =>
    `<button class="card-carousel-dot${i === 0 ? ' active' : ''}" data-slide="${i}"></button>`
  ).join('');

  const stockHTML = product.stock <= 0
    ? '<div class="stock-info out-of-stock">✕ AGOTADO</div>'
    : `<div class="stock-info"><i class="bi bi-check-circle-fill"></i> ${product.stock} disponible(s)</div>`;

  const priceFormatted = '$' + product.price.toLocaleString('es-AR');

  const buyDisabled = product.stock <= 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : '';
  const buyText = product.stock <= 0 ? 'AGOTADO' : '<i class="bi bi-shield-lock-fill"></i> Comprar';

  return `
    <div class="col-md-6 col-lg-3 reveal">
      <div class="product-card" data-product-id="${product.id}">
        <div class="card-carousel">
          ${badgeHTML}
          <div class="card-carousel-track">${slidesHTML}</div>
          <button class="card-carousel-arrow prev"><i class="bi bi-chevron-left"></i></button>
          <button class="card-carousel-arrow next"><i class="bi bi-chevron-right"></i></button>
          <div class="card-carousel-dots">${dotsHTML}</div>
        </div>
        <div class="product-body">
          <span class="product-category">${product.category}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          ${stockHTML}
          <p class="product-price">${priceFormatted}</p>
          <div class="product-actions">
            <button class="btn btn-mercadopago btn-buy" ${buyDisabled} data-mp-link="${product.mpLink}">
              ${buyText}
            </button>
            <button class="btn btn-whatsapp btn-wp" ${buyDisabled} data-wp-msg="${encodeURIComponent(product.wpMsg)}">
              <i class="bi bi-whatsapp"></i> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

/**
 * Renderiza todas las secciones del catálogo.
 */
function renderCatalogo() {
  Object.keys(CATALOGO_DATA).forEach(sectionKey => {
    const grid = document.getElementById(`grid-${sectionKey}`);
    if (!grid) return;
    const cards = CATALOGO_DATA[sectionKey].map(p => createProductCard(p)).join('');
    grid.innerHTML = cards;
  });
}

/**
 * Inicializa los carousels de cada card.
 */
function initCardCarousels() {
  document.querySelectorAll('.card-carousel').forEach(carousel => {
    const track = carousel.querySelector('.card-carousel-track');
    const slides = carousel.querySelectorAll('.card-carousel-slide');
    const dots = carousel.querySelectorAll('.card-carousel-dot');
    const prevBtn = carousel.querySelector('.card-carousel-arrow.prev');
    const nextBtn = carousel.querySelector('.card-carousel-arrow.next');
    let current = 0;

    function goTo(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    prevBtn?.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
    nextBtn?.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
    dots.forEach(dot => {
      dot.addEventListener('click', e => {
        e.stopPropagation();
        goTo(parseInt(dot.dataset.slide));
      });
    });
  });
}

/**
 * Inicializa el lightbox para imágenes del catálogo.
 */
function initLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  const img = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  if (!overlay || !img) return;

  let currentImages = [];
  let currentIndex = 0;

  function openLightbox(images, index) {
    currentImages = images;
    currentIndex = index;
    img.src = currentImages[currentIndex];
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
    img.src = currentImages[currentIndex];
  }

  // Click on slide images → open lightbox
  document.addEventListener('click', e => {
    const slide = e.target.closest('.card-carousel-slide');
    if (slide) {
      const carousel = slide.closest('.card-carousel');
      const allSlides = carousel.querySelectorAll('.card-carousel-slide');
      const images = Array.from(allSlides).map(s => s.dataset.imgSrc);
      const index = Array.from(allSlides).indexOf(slide);
      openLightbox(images, index);
    }
  });

  // Close
  closeBtn?.addEventListener('click', e => { e.stopPropagation(); closeLightbox(); });
  overlay?.addEventListener('mousedown', e => {
    // Close if clicking on overlay background or lightbox-content area (not on img/arrows/close)
    const clickedOnImg = e.target === img;
    const clickedOnArrow = e.target.closest('.lightbox-arrow');
    const clickedOnClose = e.target.closest('.lightbox-close');
    if (!clickedOnImg && !clickedOnArrow && !clickedOnClose) {
      closeLightbox();
    }
  });

  // Navigate
  prevBtn?.addEventListener('click', e => { e.stopPropagation(); navigate(-1); });
  nextBtn?.addEventListener('click', e => { e.stopPropagation(); navigate(1); });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

/**
 * Inicializa botones de compra y WhatsApp.
 */
function initBuyButtons() {
  document.addEventListener('click', e => {
    const buyBtn = e.target.closest('.btn-buy');
    if (buyBtn && !buyBtn.disabled) {
      const link = buyBtn.dataset.mpLink;
      if (link && link !== '#') window.open(link, '_blank');
    }

    const wpBtn = e.target.closest('.btn-wp');
    if (wpBtn && !wpBtn.disabled) {
      const msg = wpBtn.dataset.wpMsg;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    }
  });
}

// ==========================================
// INICIALIZACIÓN DEL CATÁLOGO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderCatalogo();
  initCardCarousels();
  initLightbox();
  initBuyButtons();
  console.log('✅ Catálogo renderizado correctamente.');
});
