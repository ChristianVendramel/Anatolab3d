/* ============================================
   ANATOLAB3D - JavaScript Principal
   Controle de estoque, animações e interações
   ============================================ */

// ==========================================
// 1. CONFIGURAÇÃO DE PRODUTOS E ESTOQUE
// ==========================================

/**
 * Banco de dados de produtos com controle de estoque.
 * Cada produto possui: id, nome, preço, estoque e link do Mercado Pago.
 * Para alterar estoque, basta modificar o valor "stock" abaixo.
 */
const products = [
  {
    id: 'skull',
    name: 'Cráneo Humano',
    price: 15000,
    stock: 5,
    mercadoPagoLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=EXAMPLE_SKULL',
    whatsappMsg: 'Hola! Me interesa el Cráneo Humano 3D. ¿Podrías darme más información?'
  },
  {
    id: 'clavicle',
    name: 'Clavícula',
    price: 8500,
    stock: 8,
    mercadoPagoLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=EXAMPLE_CLAVICULA',
    whatsappMsg: 'Hola! Me interesa la Clavícula 3D. ¿Podrías darme más información?'
  },
  {
    id: 'femur',
    name: 'Fémur',
    price: 12000,
    stock: 3,
    mercadoPagoLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=EXAMPLE_FEMUR',
    whatsappMsg: 'Hola! Me interesa el Fémur 3D. ¿Podrías darme más información?'
  },
  {
    id: 'spine',
    name: 'Columna Vertebral',
    price: 25000,
    stock: 0, // Ejemplo: sin stock
    mercadoPagoLink: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=EXAMPLE_COLUMNA',
    whatsappMsg: 'Hola! Me interesa la Columna Vertebral 3D. ¿Podrías darme más información?'
  }
];

// Número de WhatsApp (formato internacional sin + ni espacios)
const WHATSAPP_NUMBER = '5491125498647';

// ==========================================
// 2. CONTROL DE ESTOQUE
// ==========================================

/**
 * Actualiza la interfaz de cada producto según su stock.
 * Si stock == 0: muestra "AGOTADO", desactiva botones.
 * Si stock > 0: muestra cantidad disponible y habilita botones.
 */
function updateStockUI() {
  products.forEach(product => {
    const card = document.querySelector(`[data-product-id="${product.id}"]`);
    if (!card) return;

    const stockInfo = card.querySelector('.stock-info');
    const btnBuy = card.querySelector('.btn-buy');
    const btnWhatsapp = card.querySelector('.btn-wp');
    const badge = card.querySelector('.product-badge');

    if (product.stock <= 0) {
      // --- Producto agotado ---
      if (stockInfo) {
        stockInfo.textContent = '✕ AGOTADO';
        stockInfo.classList.add('out-of-stock');
      }
      if (btnBuy) {
        btnBuy.disabled = true;
        btnBuy.classList.add('disabled');
        btnBuy.textContent = 'AGOTADO';
        btnBuy.style.opacity = '0.5';
        btnBuy.style.cursor = 'not-allowed';
      }
      if (btnWhatsapp) {
        btnWhatsapp.disabled = true;
        btnWhatsapp.classList.add('disabled');
        btnWhatsapp.style.opacity = '0.5';
        btnWhatsapp.style.cursor = 'not-allowed';
      }
      if (badge) {
        badge.textContent = 'SOLD OUT';
        badge.classList.add('sold-out');
      }
    } else {
      // --- Producto disponible ---
      if (stockInfo) {
        stockInfo.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${product.stock} disponible(s)`;
      }
      if (btnBuy) {
        btnBuy.addEventListener('click', () => {
          window.open(product.mercadoPagoLink, '_blank');
        });
      }
      if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', () => {
          const msg = encodeURIComponent(product.whatsappMsg);
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
        });
      }
    }
  });
}

// ==========================================
// 3. NAVBAR - Efecto scroll
// ==========================================

/**
 * Agrega clase "scrolled" al navbar cuando el usuario
 * baja más de 50px para cambiar el estilo visual.
 */
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar-osteo');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==========================================
// 4. BOTÓN BACK TO TOP
// ==========================================

/**
 * Muestra/oculta el botón "Volver arriba" según la posición de scroll.
 * Se vuelve visible al bajar más de 400px.
 */
function handleBackToTop() {
  const btnTop = document.getElementById('btnBackTop');
  if (!btnTop) return;

  // Mostrar/ocultar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btnTop.classList.add('visible');
    } else {
      btnTop.classList.remove('visible');
    }
  });

  // Click para subir
  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// 5. ANIMACIONES AL SCROLL (Reveal)
// ==========================================

/**
 * Implementa animaciones de aparición suave al hacer scroll.
 * Los elementos con la clase "reveal" se animan cuando
 * entran al viewport.
 */
function handleScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ==========================================
// 6. WHATSAPP FLOTANTE
// ==========================================

/**
 * Configura el botón flotante de WhatsApp con
 * un mensaje genérico de consulta.
 */
function handleFloatingWhatsApp() {
  const btnWA = document.getElementById('btnFloatWhatsApp');
  if (!btnWA) return;

  btnWA.addEventListener('click', () => {
    const msg = encodeURIComponent('Hola! Estoy interesado en las piezas anatómicas 3D. ¿Podrían darme más información?');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  });
}

// ==========================================
// 7. CERRAR MENÚ MOBILE AL HACER CLICK
// ==========================================

/**
 * En dispositivos móviles, cierra el menú navbar
 * automáticamente al seleccionar un enlace.
 */
function handleMobileMenuClose() {
  const navLinks = document.querySelectorAll('.navbar-osteo .nav-link');
  const navCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

// ==========================================
// 8. FORMATO DE PRECIO
// ==========================================

/**
 * Formatea precios en pesos argentinos (ARS).
 * Ej: 15000 → $15.000
 */
function formatPrice(price) {
  return '$' + price.toLocaleString('es-AR');
}

/**
 * Inserta los precios formateados en el DOM.
 * Busca elementos con data-price-id y los actualiza.
 */
function renderPrices() {
  products.forEach(product => {
    const priceEl = document.querySelector(`[data-price-id="${product.id}"]`);
    if (priceEl) {
      priceEl.textContent = formatPrice(product.price);
    }
  });
}

// ==========================================
// 9. AÑO DINÁMICO EN FOOTER
// ==========================================

/**
 * Actualiza el año actual en el footer automáticamente.
 */
function updateYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ==========================================
// 10. SMOOTH SCROLL PARA LINKS INTERNOS
// ==========================================

/**
 * Agrega smooth scroll a todos los enlaces ancla (#).
 */
function handleSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ==========================================
// 11. HERO CAROUSEL - Rotación de imágenes
// ==========================================

/**
 * Carousel automático del hero section.
 * Rota entre 4 imágenes de productos cada 3.5 segundos.
 * Incluye navegación por dots (puntos).
 */
function handleHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  const dotsContainer = document.getElementById('heroCarouselDots');
  if (!carousel || !dotsContainer) return;

  const slides = carousel.querySelectorAll('.hero-carousel-slide');
  const dots = dotsContainer.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let autoPlayTimer;

  // Función para ir a un slide específico
  function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  // Avanzar al siguiente slide
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }

  // Auto-play cada 3.5 segundos
  function startAutoPlay() {
    autoPlayTimer = setInterval(nextSlide, 3500);
  }

  // Click en dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(autoPlayTimer);
      goToSlide(parseInt(dot.getAttribute('data-slide')));
      startAutoPlay();
    });
  });

  // Iniciar auto-play
  startAutoPlay();
}

// ==========================================
// 12. CONTADOR ANIMADO (Stats)
// ==========================================

/**
 * Anima contadores numéricos cuando entran al viewport.
 */
function handleCounterAnimation() {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, 16);

        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

/**
 * Inicializa todas las funcionalidades cuando
 * el DOM está completamente cargado.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidades core
  handleNavbarScroll();
  handleBackToTop();
  handleScrollAnimations();
  handleFloatingWhatsApp();
  handleMobileMenuClose();
  handleSmoothScroll();
  handleCounterAnimation();
  handleHeroCarousel();

  // Productos y precios
  renderPrices();
  updateStockUI();

  // Footer
  updateYear();

  console.log('✅ Anatolab3D — Sitio inicializado correctamente.');
});
