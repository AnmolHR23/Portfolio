"use client";
import { useEffect } from 'react';
import Loader from './Loader.jsx';
import CommandMenu from './CommandMenu.jsx';

function initApp() {
  const loaderEl = document.getElementById('loader');
  const progressEl = document.getElementById('scroll-progress');
  const nav = document.getElementById('main-nav');
  const backTop = document.getElementById('back-top');
  const wm = document.getElementById('hero-wm');
  const hamburger = document.getElementById('hamburger');
  const cmdOverlay = document.getElementById('cmd-overlay');
  const cmdInput = document.getElementById('cmd-input');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const form = document.getElementById('contact-form');

  function hideLoader() {
    loaderEl?.classList.add('hidden');
  }

  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 200);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, 1400));
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          document.querySelectorAll('.nav-links a').forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px' }
  );

  document.querySelectorAll('section[id]').forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  function updateScrollState() {
    const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (progressEl) progressEl.style.width = `${percent}%`;
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
    if (wm) wm.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.15}px))`;
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  hamburger?.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const open = mobileMenu?.classList.toggle('open');
    if (hamburger && typeof open === 'boolean') {
      hamburger.setAttribute('aria-expanded', open.toString());
    }
  });

  document.querySelectorAll('#mobile-menu a').forEach((link) =>
    link.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu?.classList.remove('open');
      const hamburgerButton = document.getElementById('hamburger');
      hamburgerButton?.setAttribute('aria-expanded', 'false');
    })
  );

  function copyEmail() {
    const email = 'anmolpoojari23@gmail.com';
    navigator.clipboard?.writeText(email).then(() => {
      const btn = document.getElementById('copy-email-btn');
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        btn.style.color = 'var(--sage)';
        setTimeout(() => {
          btn.innerHTML = orig;
          btn.style.color = '';
        }, 2000);
      }
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('form-submit-btn');
    const status = document.getElementById('form-status');
    if (btn) {
      btn.textContent = 'Sending…';
      btn.disabled = true;
    }
    setTimeout(() => {
      if (btn) {
        btn.innerHTML = 'Send message <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
        btn.disabled = false;
      }
      if (status) {
        status.textContent = '✓ Message sent — I\'ll get back to you within 24 hours.';
        status.style.display = 'block';
      }
      if (e.target && typeof e.target.reset === 'function') {
        e.target.reset();
      }
    }, 1200);
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      cmdOverlay?.classList.toggle('open');
      if (cmdOverlay?.classList.contains('open')) cmdInput?.focus();
    }
    if (e.key === 'Escape') cmdOverlay?.classList.remove('open');
  });

  cmdOverlay?.addEventListener('click', (e) => {
    if (e.target === cmdOverlay) cmdOverlay.classList.remove('open');
  });

  document.querySelectorAll('.cmd-item').forEach((item) => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      if (!action) return;

      cmdOverlay?.classList.remove('open');
      if (action === 'resume') {
        alert('Add your resume PDF link here.');
        return;
      }
      if (action === 'email') {
        copyEmail();
        return;
      }
      if (action === 'linkedin') {
        window.open('https://www.linkedin.com/in/anmolhr23/', '_blank');
        return;
      }
      if (action === 'github') {
        window.open('https://github.com/', '_blank');
        return;
      }
      const el = document.getElementById(action);
      el?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  copyEmailBtn?.addEventListener('click', copyEmail);
  form?.addEventListener('submit', handleFormSubmit);
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const hint = document.createElement('div');
  hint.style.cssText = 'position:fixed;bottom:32px;left:32px;z-index:49;font-family:var(--font-mono);font-size:0.7rem;color:var(--slate);display:flex;align-items:center;gap:6px;opacity:0.7;';
  hint.innerHTML = '<kbd style="background:var(--parchment);border:1px solid var(--mist);border-radius:3px;padding:2px 6px;">⌘K</kbd> command menu';
  document.body.appendChild(hint);
}

export default function AppInit() {
  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      <Loader />
      <CommandMenu />
      <button id="back-top" aria-label="Back to top" className="back-top-btn">
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
    </>
  );
}
