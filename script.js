/* =========================================================
   LANGUAGE TOGGLE (default: English, switchable to Spanish)
   ========================================================= */

const translations = {
  'doc-title':        { en: 'Tony Sanchez — Director of Photography', es: 'Tony Sanchez — Director de Fotografía' },
  'nav-cine':          { en: 'Cinematography', es: 'Cinematografía' },
  'nav-foto':          { en: 'Photography', es: 'Fotografía' },
  'nav-about':         { en: 'About', es: 'Sobre mí' },
  'nav-contact':       { en: 'Contact', es: 'Contacto' },

  'hero-eyebrow':      { en: 'Available for projects · 2026', es: 'Disponible para proyectos · 2026' },
  'hero-title':        { en: 'Director of<br><em>Photography.</em>', es: 'Dirección de<br><em>Fotografía.</em>' },
  'hero-sub':          { en: 'Tony Sanchez — director of photography and camera operator based in Madrid. Film, advertising and still photography treated as one visual language.',
                          es: 'Tony Sanchez — director de fotografía y operador de cámara con base en Madrid. Cine, publicidad y fotografía fija tratados como un mismo lenguaje visual.' },
  'hero-scroll':       { en: 'Scroll — 001/004', es: 'Desplázate — 001/004' },

  'cine-eyebrow':      { en: 'Work in motion', es: 'Trabajo en movimiento' },
  'cine-title':        { en: 'Cinemato<em>graphy</em>', es: 'Cinemato<em>grafía</em>' },

  'film-1-title':      { en: 'Linkedin Ad', es: 'Anuncio LinkedIn' },
  'film-1-type':       { en: 'Commercial', es: 'Publicidad' },
  'film-1-camera':     { en: 'Sony A7C II', es: 'Sony A7C II' },
  'film-1-lens':       { en: 'Sony FE GM 35mm 1.4', es: 'Sony FE GM 35mm 1.4' },
  'film-1-format':     { en: '2.35:1 S-log', es: '2.35:1 S-log' },

  'film-2-title':      { en: 'Aquellarre Blackwood', es: 'Aquellarre Blackwood' },
  'film-2-type':       { en: 'Short film', es: 'Cortometraje' },
  'film-2-camera':     { en: 'Sony A7C II', es: 'Sony A7C II' },
  'film-2-lens':       { en: 'Sony FE GM 35mm & 80mm 1.4', es: 'Sony FE GM 35mm y 80mm 1.4' },
  'film-2-format':     { en: '16:9 Rec709', es: '16:9 Rec709' },

  'film-3-title':      { en: 'Perro', es: 'Perro' },
  'film-3-type':       { en: 'Short film', es: 'Cortometraje' },
  'film-3-camera':     { en: 'Sony A7C II', es: 'Sony A7C II' },
  'film-3-lens':       { en: 'Sony FE GM 35mm & 80mm 1.4', es: 'Sony FE GM 35mm y 80mm 1.4' },
  'film-3-format':     { en: '2.35:1 Rec709', es: '2.35:1 Rec709' },

  'statement':         { en: 'Light tells the story <strong>before</strong> the script does.',
                          es: 'La luz cuenta la historia <strong>antes</strong> que el guion.' },

  'foto-eyebrow':      { en: 'Still camera · Hasselblad 500C', es: 'Cámara fija · Hasselblad 500C' },
  'foto-title':        { en: 'Photo<em>graphy</em>', es: 'Foto<em>grafía</em>' },
  'photo-caption':     { en: 'Digital. Madrid, 2026', es: 'Digital. Madrid, 2026' },

  'portrait-label':    { en: 'PORTRAIT', es: 'RETRATO' },
  'about-eyebrow':     { en: 'About', es: 'Sobre mí' },
  'about-p1':          { en: '<strong>Trained in lighting, image capture and image processing</strong>, my work connects the technical rigor of set life with an editorial sensibility built through still photography.',
                          es: '<strong>Formado en iluminación, captación y procesado de imagen</strong>, mi trabajo conecta el rigor técnico del set con una sensibilidad editorial construida a través de la fotografía fija.' },
  'about-p2':          { en: "I've worked on projects including photo accreditation for Santiago Bernabéu, and I move between set and Hasselblad with the same standard. I'm looking for opportunities in camera and lighting departments across Europe, with a focus on Berlin, Budapest, Prague and Amsterdam.",
                          es: 'He trabajado en proyectos como la acreditación fotográfica del Santiago Bernabéu, y me muevo entre el plató y la cámara Hasselblad con la misma exigencia. Busco oportunidades en departamentos de cámara e iluminación en Europa, con foco en Berlín, Budapest, Praga y Ámsterdam.' },

  'kit-training-label':{ en: 'Training', es: 'Formación' },
  'kit-training-value':{ en: 'Higher Vocational Degree — Lighting, Image Capture and Processing', es: 'Grado Superior — Iluminación, Captación y Tratamiento de Imagen' },
  'kit-base-label':    { en: 'Based in', es: 'Base' },
  'kit-base-value':    { en: 'Madrid, Spain', es: 'Madrid, España' },
  'kit-camera-label':  { en: 'Still camera', es: 'Cámara fija' },
  'kit-lang-label':    { en: 'Languages', es: 'Idiomas' },
  'kit-lang-value':    { en: 'Spanish · English · Italian · Portuguese', es: 'Español · Inglés · Italiano · Portugués' },

  'footer-eyebrow':    { en: 'Available for projects', es: 'Disponible para proyectos' },
  'footer-title':      { en: "Let's talk about your <em>next shoot.</em>", es: 'Hablemos de tu <em>próximo rodaje.</em>' },
  'contact-email':     { en: 'Email', es: 'Correo' },
  'footer-rights':     { en: '© 2026 Tony Sanchez. All rights reserved.', es: '© 2026 Tony Sanchez. Todos los derechos reservados.' },
  'footer-location':   { en: 'Madrid, Spain', es: 'Madrid, España' },
};

const metaDescription = {
  en: 'Portfolio of Tony Sanchez — Director of Photography, camera work and still photography.',
  es: 'Portfolio de Tony Sanchez — Director de Fotografía, trabajo de cámara y fotografía fija.'
};

function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (entry && entry[lang] !== undefined) {
      el.innerHTML = entry[lang];
    }
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', metaDescription[lang]);

  document.querySelectorAll('.lang-toggle [data-lang-opt]').forEach((el) => {
    el.classList.toggle('is-active', el.getAttribute('data-lang-opt') === lang);
  });

  try { localStorage.setItem('site-lang', lang); } catch (e) { /* storage unavailable, ignore */ }
}

function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('site-lang'); } catch (e) { /* ignore */ }
  const lang = saved === 'es' ? 'es' : 'en'; // default: English
  applyLanguage(lang);

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('lang') === 'es' ? 'es' : 'en';
      applyLanguage(current === 'en' ? 'es' : 'en');
    });
  }
}

initLanguage();

/* =========================================================
   CINEMATOGRAPHY ROWS — click to expand Vimeo embed
   ========================================================= */
document.querySelectorAll('.film-row').forEach((row) => {
  row.style.cursor = 'pointer';
  row.addEventListener('click', () => {
    const isActive = row.classList.contains('active');

    document.querySelectorAll('.film-row.active').forEach((r) => {
      if (r !== row) {
        r.classList.remove('active');
        r.querySelector('iframe').src = '';
      }
    });

    if (isActive) {
      row.classList.remove('active');
      row.querySelector('iframe').src = '';
    } else {
      row.classList.add('active');
      const videoUrl = row.getAttribute('data-video');
      const iframe = row.querySelector('iframe');
      if (videoUrl && iframe) {
        iframe.src = videoUrl;
      }
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
