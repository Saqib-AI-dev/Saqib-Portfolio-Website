/* ═══════════════════════════════════════════
   MUHAMMAD SAQIB ALI — PORTFOLIO SCRIPT
═══════════════════════════════════════════ */

/* ─── 1. CUSTOM CURSOR ──────────────────── */
var dot     = document.getElementById('cursor-dot');
var outline = document.getElementById('cursor-outline');
var mouseX  = 0, mouseY = 0, outX = 0, outY = 0;

window.addEventListener('mousemove', function(e) {
  mouseX = e.clientX; mouseY = e.clientY;
  if (dot) { dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px'; }
});

function animateCursor() {
  outX += (mouseX - outX) * 0.12;
  outY += (mouseY - outY) * 0.12;
  if (outline) { outline.style.left = outX + 'px'; outline.style.top = outY + 'px'; }
  requestAnimationFrame(animateCursor);
}
animateCursor();

function attachCursorHover() {
  document.querySelectorAll('a, button, .skill-card, .project-card, .tab-btn, .exp-card, .cert-card').forEach(function(el) {
    el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
    el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
  });
}

/* ─── 2. NAVBAR ─────────────────────────── */
var navbar     = document.getElementById('navbar');
var hamburger  = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', function() {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveNav();
  toggleBackToTop();
});

if (hamburger) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

document.querySelectorAll('.mob-link').forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

function updateActiveNav() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  var current  = '';
  sections.forEach(function(sec) {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(function(link) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* ─── 3. HERO ANIMATIONS ────────────────── */
function initHeroAnimations() {
  var items = [
    '.hero-eyebrow', '.hero-name', '.hero-role',
    '.hero-desc', '.hero-cta', '.hero-stats',
    '.hero-visual', '.scroll-indicator'
  ];
  items.forEach(function(selector, i) {
    var el = document.querySelector(selector);
    if (!el) return;
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(28px)';
    el.style.transition = 'opacity 0.65s ease ' + (i * 0.1) + 's, transform 0.65s ease ' + (i * 0.1) + 's';
    setTimeout(function() { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 80);
  });
}

/* ─── 4. TYPING EFFECT ──────────────────── */
var roleIndex  = 0, charIndex = 0, isDeleting = false;
var roleEl     = document.getElementById('roleText');
var roleIconEl = document.getElementById('roleIcon');
var rolesData  = (typeof ROLES !== 'undefined') ? ROLES : [
  { icon: 'fab fa-java',   text: 'Java Applications' },
  { icon: 'fas fa-globe',  text: 'Web Experiences'   },
  { icon: 'fas fa-robot',  text: 'AI Solutions'      },
  { icon: 'fas fa-brain',  text: 'Smart Systems'     },
  { icon: 'fas fa-rocket', text: 'Intelligent Apps'  },
];

function typeRole() {
  if (!roleEl) return;
  var current     = rolesData[roleIndex];
  var currentText = current.text || current;
  var currentIcon = current.icon || '';

  if (roleIconEl) {
    roleIconEl.className = currentIcon + ' fa-fw';
    roleIconEl.style.opacity   = '1';
    roleIconEl.style.transform = 'scale(1.08)';
    if (currentIcon.includes('java'))                               roleIconEl.style.color = '#f8981d';
    else if (currentIcon.includes('python'))                        roleIconEl.style.color = '#4B8BBE';
    else if (currentIcon.includes('brain') || currentIcon.includes('robot')) roleIconEl.style.color = '#b44fff';
    else                                                            roleIconEl.style.color = '#b44fff';
  }

  roleEl.textContent = isDeleting
    ? currentText.substring(0, charIndex - 1)
    : currentText.substring(0, charIndex + 1);

  isDeleting ? charIndex-- : charIndex++;
  var speed = isDeleting ? 50 : 90;
  if (!isDeleting && charIndex === currentText.length) {
    speed = 1800; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % rolesData.length;
    if (roleIconEl) roleIconEl.style.opacity = '0';
    speed = 350;
  }
  setTimeout(typeRole, speed);
}

/* ─── 5. COUNTERS ───────────────────────── */
function startCounters() {
  var statEls   = document.querySelectorAll('.stat-num');
  var statsData = (typeof STATS !== 'undefined') ? STATS : null;

  statEls.forEach(function(counter, idx) {
    var target = (statsData && statsData[idx])
      ? statsData[idx].number
      : parseInt(counter.getAttribute('data-target') || '0');

    if (statsData && statsData[idx]) {
      var labelEl = counter.closest('.stat') && counter.closest('.stat').querySelector('p');
      if (labelEl) labelEl.textContent = statsData[idx].label;
    }

    var current   = 0;
    var duration  = 800;
    var increment = target / (duration / 16);

    function update() {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }
    update();
  });
}

/* ─── 6. AOS ────────────────────────────── */
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 70 });
}

/* ─── 7. SKILLS TABS ────────────────────── */
document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
    btn.classList.add('active');
    var pane = document.getElementById('tab-' + btn.getAttribute('data-tab'));
    if (pane) { pane.classList.add('active'); setTimeout(function() { animateSkillBars(pane); }, 80); }
  });
});

function animateSkillBars(container) {
  if (!container) container = document;
  container.querySelectorAll('.skill-fill').forEach(function(bar) {
    var width = bar.getAttribute('data-width');
    bar.style.width = '0%';
    setTimeout(function() { bar.style.width = width + '%'; }, 150);
  });
}

function forceDefaultSkillTab() {
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
  var defaultBtn  = document.querySelector('.tab-btn[data-tab="programming"]');
  var defaultPane = document.getElementById('tab-programming');
  if (defaultBtn)  defaultBtn.classList.add('active');
  if (defaultPane) defaultPane.classList.add('active');
}

function initSkillBars() {
  var skillsSection = document.getElementById('skills');
  if (!skillsSection) return;
  var fired = false;
  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !fired) {
      fired = true;
      var activePane = document.querySelector('.tab-pane.active');
      if (activePane) animateSkillBars(activePane);
      observer.disconnect();
    }
  }, { threshold: 0.2 });
  observer.observe(skillsSection);
}

/* ─── 8. PROJECT CARD TILT ──────────────── */
function attachTiltEffect() {
  document.querySelectorAll('.project-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var rotX = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * -4;
      var rotY = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) *  4;
      card.style.transition = 'transform 0.1s ease';
      card.style.transform  = 'perspective(900px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-8px)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform  = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    });
    card.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
    card.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
  });
}

/* ─── 9. BACK TO TOP ────────────────────── */
var backToTop = document.getElementById('backToTop');
function toggleBackToTop() {
  if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
}
if (backToTop) {
  backToTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}

/* ─── 10. SMOOTH SCROLL ─────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ─── 11. SCROLL REVEAL ─────────────────── */
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.exp-card, .contact-item').forEach(function(el) {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

/* ─── 12. PARALLAX ──────────────────────── */
window.addEventListener('mousemove', function(e) {
  var x = (e.clientX / window.innerWidth  - 0.5) * 18;
  var y = (e.clientY / window.innerHeight - 0.5) * 18;
  document.querySelectorAll('.float-tag').forEach(function(tag, i) {
    tag.style.transform = 'translate(' + (x * (i + 1) * 0.35) + 'px, ' + (y * (i + 1) * 0.35) + 'px)';
  });
  document.querySelectorAll('.orb').forEach(function(orb, i) {
    orb.style.transform = 'translate(' + (x * (i + 1) * 0.15) + 'px, ' + (y * (i + 1) * 0.15) + 'px)';
  });
});

/* ─── 13. MAGNETIC NAV ──────────────────── */
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('mousemove', function(e) {
    var rect = link.getBoundingClientRect();
    var x = e.clientX - rect.left - rect.width  / 2;
    var y = e.clientY - rect.top  - rect.height / 2;
    link.style.transform = 'translate(' + (x * 0.22) + 'px, ' + (y * 0.22) + 'px)';
  });
  link.addEventListener('mouseleave', function() {
    link.style.transition = 'transform 0.4s ease';
    link.style.transform  = 'translate(0,0)';
    link.style.textShadow = '';
  });
  link.addEventListener('mouseenter', function() {
    link.style.textShadow = '0 0 20px rgba(180,79,255,0.6)';
  });
});

/* ─── 14. TERMINAL ANIMATION ────────────── */
function runTerminal() {
  var codeEl = document.getElementById('terminalCode');
  var bodyEl = document.getElementById('terminalBody');
  if (!codeEl || !bodyEl) return;

  var lines = [
    [{ text: '# Muhammad Saqib Ali — Developer', cls: 't-comment' }],
    [{ text: '', cls: '' }],
    [{ text: 'class ', cls: 't-keyword' }, { text: 'SaqibAli', cls: 't-func' }, { text: ':', cls: '' }],
    [{ text: '    name     = ', cls: 't-var' }, { text: '"Muhammad Saqib Ali"', cls: 't-string' }],
    [{ text: '    location = ', cls: 't-var' }, { text: '"Sukkur, Pakistan"', cls: 't-string' }],
    [{ text: '    degree   = ', cls: 't-var' }, { text: '"BS Artificial Intelligence"', cls: 't-string' }],
    [{ text: '    skills   = ', cls: 't-var' }, { text: '["Java", "Python", "Web", "AI"]', cls: 't-cyan' }],
    [{ text: '', cls: '' }],
    [{ text: '    def ', cls: 't-keyword' }, { text: 'introduce', cls: 't-func' }, { text: '(self):', cls: '' }],
    [{ text: '        return ', cls: 't-keyword' }, { text: '"Building software that matters"', cls: 't-string' }],
    [{ text: '', cls: '' }],
    [{ text: '# Output:', cls: 't-comment' }],
    [{ text: 'saqib = ', cls: '' }, { text: 'SaqibAli', cls: 't-func' }, { text: '()', cls: '' }],
    [{ text: 'print', cls: 't-func' }, { text: '(saqib.', cls: '' }, { text: 'introduce', cls: 't-func' }, { text: '())', cls: '' }],
    [{ text: '>>> ', cls: 't-comment' }, { text: '"Building software that matters"', cls: 't-string' }]
  ];

  function buildLine(parts) {
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      html += '<span class="' + parts[i].cls + '">' + parts[i].text + '</span>';
    }
    return html;
  }

  var idx = 0, rendered = '';

  function typeLine() {
    if (idx >= lines.length) {
      codeEl.innerHTML = rendered + '<span class="t-cursor"></span>';
      setTimeout(function() { rendered = ''; idx = 0; codeEl.innerHTML = ''; setTimeout(typeLine, 500); }, 4500);
      return;
    }
    rendered += buildLine(lines[idx]) + '\n';
    codeEl.innerHTML = rendered + '<span class="t-cursor"></span>';
    bodyEl.scrollTop = bodyEl.scrollHeight;
    idx++;
    setTimeout(typeLine, 85);
  }

  var about   = document.getElementById('about');
  if (!about) return;
  var started = false;
  var obs = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !started) {
      started = true;
      setTimeout(typeLine, 700);
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(about);
}

/* ─── 15. RENDER PROJECTS ───────────────── */
function renderProjects() {
  var grid = document.querySelector('.projects-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  var html = '';
  for (var i = 0; i < PROJECTS.length; i++) {
    var p = PROJECTS[i];

    var stackHTML = '';
    for (var j = 0; j < p.stack.length; j++) {
      stackHTML += '<span>' + p.stack[j] + '</span>';
    }

    var liveBtn = p.live
      ? '<a href="' + p.live + '" class="proj-btn proj-live" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>'
      : '';

    var glowClass = 'glow-java';
    if (p.category === 'web') glowClass = 'glow-web';
    if (p.category === 'ai')  glowClass = 'glow-ai';
    if (p.category === 'cpp') glowClass = 'glow-cpp';

    html += '<div class="project-card ' + glowClass + '" data-category="' + p.category + '" data-aos="fade-up" data-aos-delay="' + (i * 80) + '">';
    html += '<div class="proj-card-top">';
    html += '  <p class="proj-field">' + p.field + '</p>';
    html += '  <div class="project-icon-wrap"><i class="' + p.icon + '"></i></div>';
    html += '</div>';
    html += '<h3 class="proj-title">' + p.title + '</h3>';
    html += '<p class="proj-desc">' + p.desc + '</p>';
    html += '<div class="proj-stack">' + stackHTML + '</div>';
    html += '<div class="project-links">';
    html += '  <a href="' + p.github + '" class="proj-btn" target="_blank"><i class="fab fa-github"></i> Code</a>';
    html += liveBtn;
    html += '</div>';
    html += '<div class="proj-card-glow"></div>';
    html += '</div>';
  }
  grid.innerHTML = html;

  attachTiltEffect();
  attachCursorHover();
  if (typeof AOS !== 'undefined') AOS.refresh();
}

/* ─── 16. RENDER SKILLS ─────────────────── */
function renderSkills() {
  if (typeof SKILLS === 'undefined') return;
  var tabs = ['programming', 'web', 'tools', 'ai'];
  for (var t = 0; t < tabs.length; t++) {
    var pane = document.getElementById('tab-' + tabs[t]);
    if (!pane) continue;
    var gridEl = pane.querySelector('.skills-grid');
    if (!gridEl) continue;
    var filtered = SKILLS.filter(function(s) { return s.tab === tabs[t]; });
    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      var s = filtered[i];
      html += '<div class="skill-card" data-aos="zoom-in" data-aos-delay="' + (i * 100) + '">';
      html += '<div class="skill-icon"><i class="' + s.icon + '"></i></div>';
      html += '<h4>' + s.name + '</h4>';
      html += '<div class="skill-bar"><div class="skill-fill" data-width="' + s.percent + '" style="width:0%"></div></div>';
      html += '<span class="skill-pct">' + s.percent + '%</span>';
      html += '</div>';
    }
    gridEl.innerHTML = html;
  }
  if (typeof AOS !== 'undefined') AOS.refresh();
}

/* ─── 17. RENDER EXPERIENCE ─────────────── */
function renderExperience() {
  var grid = document.querySelector('.exp-grid');
  if (!grid || typeof EXPERIENCE === 'undefined') return;
  var html = '';
  for (var i = 0; i < EXPERIENCE.length; i++) {
    var e = EXPERIENCE[i];
    var tagsHTML = '';
    for (var j = 0; j < e.tags.length; j++) {
      tagsHTML += '<span>' + e.tags[j] + '</span>';
    }
    var badgeHTML = e.badge ? '<span class="exp-badge">' + e.badge + '</span>' : '';
    html += '<div class="exp-card" data-aos="fade-up" data-aos-delay="' + (i * 100) + '">';
    html += '<div class="exp-icon"><i class="' + e.icon + '"></i></div>';
    html += '<div class="exp-body">';
    html += '<div class="exp-top-row"><span class="exp-year">' + e.year + '</span>' + badgeHTML + '</div>';
    html += '<h3>' + e.title + '</h3>';
    html += '<p class="exp-place"><i class="fas fa-map-marker-alt"></i> ' + e.place + '</p>';
    html += '<p class="exp-desc">' + e.desc + '</p>';
    html += '<div class="exp-tags">' + tagsHTML + '</div>';
    html += '</div></div>';
  }
  grid.innerHTML = html;
  if (typeof AOS !== 'undefined') AOS.refresh();
}

/* ─── 18. RENDER CERTIFICATIONS ─────────── */
function renderCertifications() {
  var grid = document.querySelector('.certs-grid');
  if (!grid || typeof CERTIFICATIONS === 'undefined') return;
  var html = '';
  for (var i = 0; i < CERTIFICATIONS.length; i++) {
    var c = CERTIFICATIONS[i];
    html += '<div class="cert-card" data-aos="fade-up" data-aos-delay="' + (i * 100) + '" style="--cert-color:' + c.color + '">';
    html += '<div class="cert-icon-wrap"><i class="' + c.icon + '"></i></div>';
    html += '<div class="cert-badge">' + c.badge + '</div>';
    html += '<h4 class="cert-title">' + c.title + '</h4>';
    html += '<p class="cert-issuer">' + c.issuer + ' · ' + c.year + '</p>';
    html += '<p class="cert-desc">' + c.desc + '</p>';
    html += '<div class="cert-glow"></div>';
    html += '</div>';
  }
  grid.innerHTML = html;
  if (typeof AOS !== 'undefined') AOS.refresh();
}

/* ─── 19. PROJECT FILTER ────────────────── */
function initProjectFilter() {
  var grid = document.querySelector('.projects-grid');
  if (!grid) return;

  var old = document.querySelector('.project-filters');
  if (old) old.remove();

  var filterDiv = document.createElement('div');
  filterDiv.className = 'project-filters';
  filterDiv.innerHTML =
    '<button class="filter-btn active" data-filter="all">All</button>' +
    '<button class="filter-btn" data-filter="java">Java</button>' +
    '<button class="filter-btn" data-filter="web">Web</button>' +
    '<button class="filter-btn" data-filter="cpp">C++</button>' +
    '<button class="filter-btn" data-filter="ai">AI/ML</button>';
  grid.parentNode.insertBefore(filterDiv, grid);

  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project-card').forEach(function(card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.transition    = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity       = show ? '1' : '0.18';
        card.style.transform     = show ? '' : 'scale(0.96)';
        card.style.pointerEvents = show ? 'all' : 'none';
      });
    });
  });
}

/* ─── 20. CONTACT FORM ──────────────────── */
function initContactForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  var emailInput = document.getElementById('email');
  var replyTo    = document.getElementById('replyTo');
  if (emailInput && replyTo) {
    emailInput.addEventListener('input', function() { replyTo.value = emailInput.value; });
  }
  var action = form.getAttribute('action');
  if (!action || action === 'YOUR_FORMSPREE_URL') {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var name    = document.getElementById('name')    ? document.getElementById('name').value    : '';
      var email   = emailInput ? emailInput.value : '';
      var subject = document.getElementById('subject') ? document.getElementById('subject').value : 'Portfolio Contact';
      var message = document.getElementById('message') ? document.getElementById('message').value : '';
      window.location.href = 'mailto:saqibsoomro384@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);
    });
    return;
  }
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var btn     = form.querySelector('button[type="submit"]');
    var span    = btn.querySelector('span');
    var icon    = btn.querySelector('i');
    var success = document.getElementById('form-success');
    var error   = document.getElementById('form-error');
    if (success) success.style.display = 'none';
    if (error)   error.style.display   = 'none';
    span.textContent = 'Sending...';
    icon.className   = 'fas fa-spinner fa-spin';
    btn.disabled     = true;
    fetch(action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
      .then(function(res) {
        if (res.ok) {
          span.textContent = 'Sent! ✓'; icon.className = 'fas fa-check';
          btn.style.background = 'linear-gradient(135deg,#00c851,#007E33)';
          if (success) success.style.display = 'block';
          form.reset();
          setTimeout(function() { span.textContent = 'Send Message'; icon.className = 'fas fa-paper-plane'; btn.disabled = false; btn.style.background = ''; }, 4000);
        } else { throw new Error('error'); }
      })
      .catch(function() {
        span.textContent = 'Failed. Try Again'; icon.className = 'fas fa-times';
        btn.style.background = 'linear-gradient(135deg,#ff4444,#cc0000)'; btn.disabled = false;
        if (error) error.style.display = 'block';
        setTimeout(function() { span.textContent = 'Send Message'; icon.className = 'fas fa-paper-plane'; btn.style.background = ''; }, 3500);
      });
  });
}

/* ─── 21. PARTICLES ─────────────────────── */
function initParticles() {
  var canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  canvas.style.opacity = '0.45';
  document.body.prepend(canvas);
  var ctx = canvas.getContext('2d');
  var W = canvas.width  = window.innerWidth;
  var H = canvas.height = window.innerHeight;
  window.addEventListener('resize', function() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
  var mouse = { x: W / 2, y: H / 2 };
  window.addEventListener('mousemove', function(e) { mouse.x = e.clientX; mouse.y = e.clientY; });

  function Particle() { this.reset(); }
  Particle.prototype.reset = function() {
    this.x = Math.random() * W; this.y = Math.random() * H;
    this.size = Math.random() * 1.8 + 0.4;
    this.speedX = (Math.random() - 0.5) * 0.4; this.speedY = (Math.random() - 0.5) * 0.4;
    this.life = Math.random(); this.maxLife = Math.random() * 0.6 + 0.2;
    this.color = Math.random() > 0.5 ? 'rgba(180,79,255,' : 'rgba(255,45,155,';
  };
  Particle.prototype.update = function() {
    this.x += this.speedX; this.y += this.speedY;
    var dx = mouse.x - this.x, dy = mouse.y - this.y;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 180) { this.x += dx * 0.0015; this.y += dy * 0.0015; }
    if (this.x < 0) this.x = W; if (this.x > W) this.x = 0;
    if (this.y < 0) this.y = H; if (this.y > H) this.y = 0;
    this.life += 0.003; if (this.life > this.maxLife) this.life = 0;
  };
  Particle.prototype.draw = function() {
    var alpha = Math.sin((this.life / this.maxLife) * Math.PI) * 0.7;
    ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color + alpha + ')'; ctx.fill();
  };

  var particles = [];
  var COUNT = window.innerWidth < 600 ? 40 : 80;
  for (var i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawConnections() {
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(180,79,255,' + ((1 - dist / 120) * 0.15) + ')'; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
  }
  function animate() { ctx.clearRect(0, 0, W, H); drawConnections(); particles.forEach(function(p) { p.update(); p.draw(); }); requestAnimationFrame(animate); }
  animate();
}

/* ─── 22. CURSOR TRAIL ──────────────────── */
function initCursorTrail() {
  if (window.innerWidth < 900) return;
  var sizes = [6, 4.5, 3, 1.8], opacities = [0.5, 0.35, 0.2, 0.1], trails = [];
  for (var i = 0; i < sizes.length; i++) {
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;width:' + sizes[i] + 'px;height:' + sizes[i] + 'px;border-radius:50%;background:#b44fff;pointer-events:none;z-index:9994;transform:translate(-50%,-50%);box-shadow:0 0 ' + (sizes[i] * 3) + 'px #b44fff;opacity:' + opacities[i] + ';mix-blend-mode:screen;';
    document.body.appendChild(d);
    trails.push({ el: d, x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }
  var mx = window.innerWidth / 2, my = window.innerHeight / 2;
  window.addEventListener('mousemove', function(e) { mx = e.clientX; my = e.clientY; });
  function animateTrail() {
    for (var i = 0; i < trails.length; i++) {
      if (i === 0) { trails[i].x += (mx - trails[i].x) * 0.25; trails[i].y += (my - trails[i].y) * 0.25; }
      else { trails[i].x += (trails[i-1].x - trails[i].x) * 0.5; trails[i].y += (trails[i-1].y - trails[i].y) * 0.5; }
      trails[i].el.style.left = trails[i].x + 'px'; trails[i].el.style.top = trails[i].y + 'px';
    }
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
}

/* ─── 23. SKILL CARD HOVER ──────────────── */
function upgradeSkillCards() {
  document.querySelectorAll('.skill-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      var icon = card.querySelector('.skill-icon');
      if (icon) { icon.style.boxShadow = '0 0 24px rgba(180,79,255,0.35)'; icon.style.background = 'rgba(180,79,255,0.18)'; icon.style.transform = 'scale(1.12)'; icon.style.transition = 'all 0.3s ease'; }
    });
    card.addEventListener('mouseleave', function() {
      var icon = card.querySelector('.skill-icon');
      if (icon) { icon.style.boxShadow = ''; icon.style.background = ''; icon.style.transform = ''; }
    });
  });
}

/* ─── 24. HERO STATS HOVER ──────────────── */
function upgradeHeroStats() {
  document.querySelectorAll('.stat-num').forEach(function(num) {
    num.style.transition = 'filter 0.3s ease';
    num.addEventListener('mouseenter', function() { num.style.filter = 'drop-shadow(0 0 12px rgba(180,79,255,0.8))'; });
    num.addEventListener('mouseleave', function() { num.style.filter = ''; });
  });
}

/* ─── 25. PAGE TRANSITION ───────────────── */
function initPageTransition() {
  var overlay = document.createElement('div');
  overlay.className = 'page-transition';
  document.body.appendChild(overlay);
  window.addEventListener('load', function() {
    overlay.classList.add('active');
    setTimeout(function() { overlay.style.transition = 'opacity 0.6s ease'; overlay.classList.remove('active'); }, 100);
  });
}

/* ─── 26. SECTION GLOW ──────────────────── */
function initSectionGlow() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { entry.target.style.transition = 'opacity 0.6s ease'; entry.target.style.opacity = '1'; }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('section').forEach(function(sec) { obs.observe(sec); });
}

/* ─── CONSOLE SIGNATURE ─────────────────── */
console.log('%c Muhammad Saqib Ali ', 'background:linear-gradient(135deg,#b44fff,#ff2d9b);color:#fff;font-size:18px;font-weight:bold;padding:10px 20px;border-radius:8px;');
console.log('%c BS-AI @ Aror University | AI Developer', 'color:#b44fff;font-size:12px;');

/* ─── MAIN INIT ─────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  forceDefaultSkillTab();
  initHeroAnimations();
  startCounters();
  typeRole();
  initSkillBars();
  renderSkills();
  renderProjects();
  renderExperience();
  renderCertifications();
  initProjectFilter();
  initContactForm();
  initParticles();
  initPageTransition();
  initCursorTrail();
  upgradeHeroStats();
  attachCursorHover();
  runTerminal();
  setTimeout(function() {
    upgradeSkillCards();
    initSectionGlow();
    if (typeof AOS !== 'undefined') AOS.refresh();
  }, 500);
});
/* ─── VISITOR COUNTER ───────────────────── */
function initVisitorCounter() {
  var countEl = document.getElementById('visitorCount');
  if (!countEl) return;
fetch('https://hits.sh/saqib-portfolio-kappa.vercel.app.json')
  .then(function(res) { return res.json(); })
  .then(function(data) {
    if (data && data.count) {
      countEl.textContent = data.count.toLocaleString();
    } else {
      countEl.textContent = '1';
    }
  })
  .catch(function() {
    countEl.textContent = '1';
  });
}
initVisitorCounter();
