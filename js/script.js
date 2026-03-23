// reNvision Studios - Main JavaScript

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');

      // Animate hamburger icon
      const icon = this.querySelector('i') || this;
      if (navMenu.classList.contains('active')) {
        icon.textContent = '✕';
      } else {
        icon.textContent = '☰';
      }
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        if (navToggle) {
          const icon = navToggle.querySelector('i') || navToggle;
          icon.textContent = '☰';
        }
      }
    });
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// ACTIVE PAGE HIGHLIGHTING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Check if this link matches the current page
    if (href === currentPage ||
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// ANIMATE ON SCROLL (.anim → .in-view)
// ============================================
const animObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.anim').forEach(el => animObserver.observe(el));
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ============================================
// FORM VALIDATION (for contact page)
// ============================================
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // If validation passes, you can submit the form
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// ============================================
// PORTFOLIO TAB ACTIVE STATE ON SCROLL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (!tabBtns.length) return;

  const sections = ['social-media', 'videography', 'branding', 'marketing', 'photography']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) {
        current = sec.id;
      }
    });

    tabBtns.forEach(btn => {
      const href = btn.getAttribute('href').replace('#', '');
      btn.classList.toggle('active', href === current);
    });
  });
});

// ============================================
// CONSOLE BRANDING
// ============================================
console.log('%c reNvision Studios ', 'background: #EB6D52; color: white; font-size: 20px; padding: 10px; font-weight: bold;');
console.log('%c Empowering Brands ', 'background: #2C2C2C; color: white; font-size: 14px; padding: 5px;');
