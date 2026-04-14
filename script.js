const preloader = document.getElementById('preloader');
const hidePreloader = () => setTimeout(() => preloader?.classList.add('hidden'), 400);

if (document.readyState === 'complete') {
  setTimeout(hidePreloader, 1800);
} else {
  window.addEventListener('load', () => setTimeout(hidePreloader, 1800));
  setTimeout(hidePreloader, 3200);
}

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const whatsappBtn = document.getElementById('whatsappBtn');
window.addEventListener('scroll', () => {
  const shouldShow = window.scrollY > 380;
  whatsappBtn?.classList.toggle('show', shouldShow);
}, { passive: true });

const deckCards = document.querySelectorAll('.deck-card');
deckCards.forEach((card) => {
  card.addEventListener('click', () => {
    const page = card.getAttribute('data-page');
    if (page) window.location.href = page;
  });

  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 24;
    const y = (e.clientY - r.top - r.height / 2) / 24;
    card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.01)`;
    card.classList.add('magnet');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('magnet');
    card.style.transform = '';
  });
});

const celebrationCards = document.querySelectorAll('.celebration-v-card');
const celebrationType = document.getElementById('celebrationType');
const celebrationForm = document.getElementById('celebrationForm');

celebrationCards.forEach((card) => {
  card.addEventListener('click', () => {
    celebrationCards.forEach((c) => c.classList.remove('active'));
    card.classList.add('active');
    const type = card.getAttribute('data-celebration');
    if (celebrationType && type) celebrationType.value = type;
    celebrationForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / 28;
    const y = (e.clientY - r.top - r.height / 2) / 28;
    if (card.classList.contains('active')) {
      card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-8px) scale(1.01)`;
    } else {
      card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(0.99)`;
    }
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

celebrationForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const type = celebrationType?.value.trim();
  const date = document.getElementById('celebrationDate')?.value;
  const guests = document.getElementById('celebrationGuests')?.value.trim();
  const phone = document.getElementById('celebrationContact')?.value.trim();

  if (!type || !date || !guests || !phone) {
    alert('Please fill all required enquiry fields.');
    return;
  }

  if (phone.length < 10) {
    alert('Please enter a valid contact number.');
    return;
  }

  alert(`Thank you! Your ${type} enquiry has been submitted.`);
  celebrationForm.reset();
});

const aboutCards = document.querySelectorAll('[data-about-card]');
const aboutStack = document.querySelector('.about-image-stack');

aboutCards.forEach((card) => {
  card.addEventListener('click', () => {
    const isActive = card.classList.contains('active');
    aboutCards.forEach((c) => c.classList.remove('active'));

    if (isActive) {
      aboutStack?.classList.remove('has-active');
      return;
    }

    card.classList.add('active');
    aboutStack?.classList.add('has-active');
  });
});

const reserveKeyedForm = document.getElementById('fef5c950-4715-48e3-a93c-7b4d534cb4a0');

reserveKeyedForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formKey = reserveKeyedForm.getAttribute('data-form-key') || 'fef5c950-4715-48e3-a93c-7b4d534cb4a0';
  const formData = {
    keyId: formKey,
    formId: reserveKeyedForm.id,
    formKeyInput: document.getElementById('reserveFormKey')?.value || formKey,
    checkIn: document.getElementById('reserveCheckIn')?.value || '',
    checkOut: document.getElementById('reserveCheckOut')?.value || '',
    guests: document.getElementById('reserveGuests')?.value || '',
    phone: document.getElementById('reservePhone')?.value || ''
  };

  if (!formData.checkIn || !formData.checkOut || !formData.guests || !formData.phone) {
    alert('Please fill all required reservation fields.');
    return;
  }

  if (formData.phone.trim().length < 10) {
    alert('Please enter a valid contact number.');
    return;
  }

  try {
    const response = await fetch('https://example.com/api/reserve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) throw new Error('Submission failed');
    alert('Thank you! Your reservation request has been submitted.');
    reserveKeyedForm.reset();
  } catch (error) {
    alert('Reservation captured locally. Please verify API endpoint integration.');
    console.error('Reserve form submit error:', error, formData);
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
