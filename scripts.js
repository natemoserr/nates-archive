// footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Travel lightbox ---
(function () {
  const gallery = document.querySelector('.travel-gallery');
  const lb = document.getElementById('lightbox');
  if (!gallery || !lb) return; // only run on travel page

  const imgEl = document.getElementById('lightbox-img');
  const capEl = document.getElementById('lightbox-cap');
  const closeBtn = lb.querySelector('.lightbox-close');

  // open when any travel image is clicked
  gallery.addEventListener('click', (e) => {
    const img = e.target.closest('.travel-photo img');
    if (!img) return;

    const fullSrc = img.dataset.full || img.src;
    imgEl.src = fullSrc;
    imgEl.alt = img.alt || '';

    const tile = img.closest('.travel-photo');
    const caption = tile?.querySelector('.caption')?.textContent || '';
    capEl.textContent = caption;

    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
  });

  // close helpers
  function closeLB() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    imgEl.src = '';
    capEl.textContent = '';
  }
  closeBtn.addEventListener('click', closeLB);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLB(); });
})();
