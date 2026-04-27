// Inisialisasi Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",      // Lebar slide menyesuaikan CSS
  centeredSlides: true,       // Membuat slide aktif selalu di tengah
  spaceBetween: 30,           // Jarak antar gambar
  loop: true,                 // Berputar terus tanpa ujung (infinite)
  
  // Konfigurasi otomatis geser setiap 10 detik (10.000 milidetik)
  autoplay: {
    delay: 10000,
    disableOnInteraction: false, // Tetap auto-play meski user sempat menggeser manual
  },

  // Event saat slide berganti
  on: {
    init: function () {
      updateText(this);
    },
    slideChangeTransitionStart: function () {
      // Bikin teks agak memudar sebentar sebelum ganti (opsional untuk animasi)
      document.getElementById("deskripsi-berita").style.opacity = 0;
    },
    slideChangeTransitionEnd: function () {
      updateText(this);
      document.getElementById("deskripsi-berita").style.opacity = 1;
    }
  }
});

// Fungsi untuk mengambil teks dari atribut data-text gambar yang sedang aktif
function updateText(swiperInstance) {
  // Ambil elemen slide yang sedang aktif
  const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
  
  // Ambil teks dari atribut data-text
  const newText = activeSlide.getAttribute("data-text");
  
  // Masukkan teks ke dalam paragraf
  if (newText) {
    document.getElementById("deskripsi-berita").innerText = newText;
  }
}