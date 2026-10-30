(() => {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.hidden = isOpen;
      toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      mobileNav.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }));
  }

  // Transição automática do plano de fundo, sem controles visíveis.
  const slides = [...document.querySelectorAll('.hero-slide')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let timer = null;

  function showNextSlide() {
    if (slides.length < 2) return;
    activeIndex = (activeIndex + 1) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle('is-active', index === activeIndex));
  }

  function scheduleSlides() {
    if (timer !== null) { clearInterval(timer); timer = null; }
    if (slides.length > 1 && !document.hidden && !reduceMotion.matches) {
      timer = setInterval(showNextSlide, 6500);
    }
  }

  document.addEventListener('visibilitychange', scheduleSlides);
  reduceMotion.addEventListener?.('change', scheduleSlides);
  scheduleSlides();

  const search = document.getElementById('support-search');
  const searchField = document.getElementById('support-query');
  const feedback = document.getElementById('search-feedback');
  const terms = [
    { regex: /senha|acesso|login|conta|credencia|autentica|bloquead/i, target:'dica-senha', label:'acesso e senhas' },
    { regex: /internet|rede|conex|wifi|wi-fi|lentid|vpn|sem sinal/i, target:'dica-rede', label:'redes e conectividade' },
    { regex: /notebook|computador|monitor|equipamento|hardware|perif/i, target:'dica-equipamento', label:'equipamentos' },
    { regex: /chamado|suporte|ajuda|atendimento|contato/i, target:'dica-chamado', label:'abertura de chamado' }
  ];
  search?.addEventListener('submit', event => {
    event.preventDefault();
    const query = searchField.value.trim();
    if (!query) return;
    const match = terms.find(item => item.regex.test(query));
    if (match) {
      const details = document.getElementById(match.target);
      details.open = true;
      feedback.textContent = `Orientação encontrada: ${match.label}.`;
      details.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block:'center' });
    } else {
      feedback.textContent = 'Não encontramos uma orientação específica. Consulte nossa central de atendimento.';
      document.getElementById('atendimento')?.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    }
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
