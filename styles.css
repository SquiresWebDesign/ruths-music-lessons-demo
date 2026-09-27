:root {
  --cream: #f4eee4;
  --cream-light: #fbf8f2;
  --brown: #4b3930;
  --brown-dark: #211915;
  --gold: #b58b4c;
  --gold-light: #d4b47c;

  --white: #ffffff;
  --muted: #756c64;
  --line: rgba(75, 57, 48, .16);

  --serif: "Playfair Display", Georgia, serif;
  --sans: "DM Sans", Arial, sans-serif;

  --max-width: 1180px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--cream-light);
  color: var(--brown-dark);
  font-family: var(--sans);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.container {
  width: min(calc(100% - 48px), var(--max-width));
  margin-inline: auto;
}


/* DEMO BAR */

.demo-bar {
  position: relative;
  z-index: 100;
  background: #16110e;
  color: #e8dfd3;
  text-align: center;
  padding: 9px 18px;
  font-size: 11px;
  letter-spacing: .04em;
}


/* HEADER */

.site-header {
  position: absolute;
  z-index: 50;
  top: 34px;
  left: 0;
  right: 0;
  color: white;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 11px;
}

.logo-mark {
  width: 41px;
  height: 41px;
  border: 1px solid rgba(255,255,255,.65);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: var(--serif);
  font-size: 20px;
}

.logo-text strong {
  display: block;
  font-size: 14px;
  letter-spacing: .17em;
  line-height: 1;
}

.logo-text small {
  display: block;
  font-size: 8px;
  letter-spacing: .22em;
  margin-top: 5px;
  opacity: .75;
}

.main-nav {
  display: flex;
  gap: 30px;
  align-items: center;
  font-size: 12px;
}

.main-nav a {
  opacity: .8;
  transition: opacity .25s ease;
}

.main-nav a:hover {
  opacity: 1;
}

.nav-button {
  border: 1px solid rgba(255,255,255,.7);
  padding: 11px 19px;
  font-size: 10px;
  letter-spacing: .12em;
  text-transform: uppercase;
  transition: background .25s ease, color .25s ease;
}

.nav-button:hover {
  background: white;
  color: var(--brown-dark);
}

.menu-toggle {
  display: none;
  background: transparent;
  width: 42px;
}

.menu-toggle span {
  display: block;
  height: 1px;
  background: white;
  margin: 7px 0;
}


/* HERO */

.hero {
  position: relative;
  min-height: 760px;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #201814;
}

.hero-image {
  position: absolute;
  inset: 0;

  background:
    url("https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=2200&q=90")
    center / cover no-repeat;

  transform: scale(1.03);
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(27,18,14,.86),
      rgba(27,18,14,.57),
      rgba(27,18,14,.18)
    );
}

.music-lines {
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  opacity: .14;
  background:
    repeating-linear-gradient(
      to bottom,
      white 0,
      white 1px,
      transparent 1px,
      transparent 20px
    );
}

.music-lines-one {
  top: 30%;
  transform: rotate(-4deg) scale(1.2);
}

.music-lines-two {
  bottom: 10%;
  transform: rotate(3deg) scale(1.2);
  opacity: .08;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding-top: 70px;
}

.hero-copy {
  max-width: 760px;
}

.eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .22em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero h1 {
  font-family: var(--serif);
  font-size: clamp(70px, 10vw, 126px);
  line-height: .88;
  font-weight: 500;
  letter-spacing: -.045em;
}

.hero h1 em {
  color: var(--gold-light);
  font-style: italic;
}

.hero-description {
  max-width: 490px;
  margin: 32px 0;
  font-size: 17px;
  color: rgba(255,255,255,.83);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.button {
  min-height: 52px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  transition:
    transform .25s ease,
    background .25s ease,
    color .25s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-light {
  background: white;
  color: var(--brown-dark);
}

.button-outline {
  border: 1px solid rgba(255,255,255,.6);
  color: white;
}

.button-outline:hover {
  background: white;
  color: var(--brown-dark);
}

.hero-bottom {
  position: absolute;
  z-index: 4;
  bottom: 27px;
  left: 50%;
  transform: translateX(-50%);
  width: min(calc(100% - 48px), var(--max-width));

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 8px;
  letter-spacing: .2em;
  color: rgba(255,255,255,.6);
}

.hero-line {
  height: 1px;
  background: rgba(255,255,255,.3);
  flex: 1;
  margin: 0 20px;
}


/* SECTIONS */

.section {
  padding: 125px 0;
}

.eyebrow.dark {
  color: var(--gold);
}

.reveal {
  opacity: 0;
  transform: translateY(25px);
  transition:
    opacity .7s ease,
    transform .7s ease;
}

.reveal-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}


/* INTRO */

.intro-section {
  background: var(--cream-light);
}

.intro-grid {
  display: grid;
  grid-template-columns: .42fr 1fr;
  gap: 80px;
}

.section-number {
  display: flex;
  gap: 18px;
  color: #8d8379;
  font-size: 9px;
  letter-spacing: .2em;
}

.section-number span:first-child {
  color: var(--gold);
}

.intro-content h2 {
  font-family: var(--serif);
  font-size: clamp(53px, 6.5vw, 82px);
  line-height: .98;
  letter-spacing: -.04em;
  font-weight: 500;
}

.intro-content h2 em {
  color: var(--gold);
  font-style: italic;
}

.intro-content > p:not(.eyebrow) {
  max-width: 650px;
  color: var(--muted);
  margin-top: 25px;
}

.intro-content .large-text {
  color: var(--brown) !important;
  font-family: var(--serif);
  font-size: 22px;
  line-height: 1.55;
}

.text-link {
  display: inline-flex;
  gap: 11px;
  margin-top: 30px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--brown);
  padding-bottom: 6px;
}


/* LESSONS */

.lessons-section {
  background: var(--cream);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 60px;
  margin-bottom: 60px;
}

.section-heading h2 {
  font-family: var(--serif);
  font-size: clamp(53px, 6.5vw, 82px);
  line-height: .95;
  font-weight: 500;
  letter-spacing: -.045em;
}

.section-heading h2 em {
  color: var(--gold);
  font-style: italic;
}

.section-heading > p {
  max-width: 400px;
  color: var(--muted);
  font-size: 13px;
}

.lesson-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
}

.lesson-card {
  position: relative;
  min-height: 360px;
  padding: 40px 33px;
  background: var(--cream);
  transition:
    background .3s ease,
    transform .3s ease;
}

.lesson-card:hover {
  background: var(--cream-light);
  transform: translateY(-5px);
}

.lesson-number {
  position: absolute;
  right: 25px;
  top: 24px;
  color: #9a8d81;
  font-size: 9px;
  letter-spacing: .16em;
}

.lesson-icon {
  color: var(--gold);
  font-family: var(--serif);
  font-size: 38px;
  margin-bottom: 50px;
}

.lesson-card h3 {
  font-family: var(--serif);
  font-size: 33px;
  font-weight: 500;
  margin-bottom: 14px;
}

.lesson-card p {
  max-width: 285px;
  color: var(--muted);
  font-size: 13px;
}

.lesson-arrow {
  position: absolute;
  bottom: 28px;
  right: 27px;
  font-size: 19px;
}

.lesson-note {
  margin-top: 25px;
  border: 1px solid var(--line);
  padding: 20px 23px;
  display: flex;
  gap: 14px;
  align-items: center;
}

.note-mark {
  width: 25px;
  height: 25px;
  border: 1px solid #9b8b7d;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 11px;
  color: var(--gold);
}

.lesson-note p {
  color: var(--muted);
  font-size: 11px;
}

.lesson-note strong {
  color: var(--brown);
  margin-right: 5px;
}


/* FEATURE */

.feature-section {
  display: grid;
  grid-template-columns: 1.12fr .88fr;
  min-height: 660px;
}

.feature-image {
  overflow: hidden;
}

.feature-image img {
  height: 100%;
  object-fit: cover;
}

.feature-content {
  background: var(--brown-dark);
  color: white;
  padding: 100px 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-content h2 {
  font-family: var(--serif);
  font-size: clamp(52px, 6vw, 78px);
  line-height: .94;
  font-weight: 500;
}

.feature-content h2 em {
  color: var(--gold-light);
  font-style: italic;
}

.feature-content > p:not(.eyebrow) {
  max-width: 430px;
  color: rgba(255,255,255,.65);
  margin: 30px 0;
}


/* APPROACH */

.approach-section {
  background: var(--cream-light);
}

.approach-grid {
  display: grid;
  grid-template-columns: .85fr 1fr;
  gap: 100px;
  align-items: center;
}

.approach-visual {
  position: relative;
  aspect-ratio: 1 / 1;
  max-width: 500px;
  margin-inline: auto;
  background:
    radial-gradient(
      circle,
      rgba(181,139,76,.15),
      transparent 48%
    );
}

.music-circle {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(181,139,76,.24);
  border-radius: 50%;
}

.circle-two {
  inset: 12%;
}

.circle-three {
  inset: 25%;
}

.approach-center {
  position: absolute;
  width: 110px;
  height: 110px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: var(--brown-dark);
  color: white;
  display: grid;
  place-items: center;
  font-family: var(--serif);
  font-size: 44px;
  box-shadow: 0 20px 60px rgba(75,57,48,.18);
}

.note {
  position: absolute;
  color: var(--gold);
  font-family: var(--serif);
  font-size: 34px;
}

.note-one {
  top: 8%;
  left: 45%;
}

.note-two {
  right: 8%;
  top: 48%;
}

.note-three {
  bottom: 10%;
  left: 20%;
}

.approach-content h2 {
  font-family: var(--serif);
  font-size: clamp(53px, 6vw, 80px);
  line-height: .95;
  font-weight: 500;
}

.approach-content h2 em {
  font-style: italic;
}

.approach-content > p:not(.eyebrow) {
  max-width: 480px;
  color: var(--muted);
  margin: 28px 0;
}

.approach-list {
  max-width: 500px;
  border-top: 1px solid var(--line);
}

.approach-list > div {
  display: grid;
  grid-template-columns: 40px 1fr;
  column-gap: 15px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.approach-list span {
  color: var(--gold);
  font-size: 9px;
}

.approach-list strong {
  font-size: 13px;
}

.approach-list p {
  grid-column: 2;
  color: #8a8178;
  font-size: 11px;
  margin-top: 3px;
}


/* GALLERY */

.gallery-section {
  background: var(--cream);
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  grid-template-rows: 300px 300px;
  gap: 15px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  padding: 0;
  border: 0;
  background: #ddd;
  cursor: pointer;
}

.gallery-large {
  grid-row: span 2;
}

.gallery-item img {
  height: 100%;
  object-fit: cover;
  transition: transform .6s ease;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

.gallery-item::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    transparent 45%,
    rgba(20,13,10,.68)
  );
}

.gallery-item span {
  position: absolute;
  z-index: 2;
  bottom: 19px;
  left: 21px;
  color: white;
  font-size: 9px;
  letter-spacing: .17em;
}


/* CONTACT */

.contact-section {
  background:
    linear-gradient(
      100deg,
      rgba(31,22,18,.96),
      rgba(31,22,18,.79)
    ),
    url("https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=85")
    center / cover no-repeat;
  color: white;
  padding: 125px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr .7fr;
  gap: 100px;
  align-items: center;
}

.contact-content h2 {
  font-family: var(--serif);
  font-size: clamp(65px, 8vw, 105px);
  line-height: .9;
  font-weight: 500;
}

.contact-content h2 em {
  color: var(--gold-light);
  font-style: italic;
}

.contact-content > p:not(.eyebrow) {
  max-width: 500px;
  color: rgba(255,255,255,.68);
  margin: 30px 0;
}

.contact-card {
  min-height: 410px;
  border: 1px solid rgba(255,255,255,.18);
  padding: 29px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(35,25,20,.55);
  backdrop-filter: blur(5px);
}

.contact-card-top,
.contact-card-bottom {
  display: flex;
  justify-content: space-between;
  color: rgba(255,255,255,.45);
  font-size: 8px;
  letter-spacing: .2em;
}

.contact-card-center {
  text-align: center;
}

.contact-symbol {
  font-family: var(--serif);
  color: var(--gold-light);
  font-size: 48px;
  margin-bottom: 18px;
}

.contact-card-center > span {
  display: block;
  font-size: 8px;
  letter-spacing: .2em;
  margin-bottom: 10px;
}

.contact-card-center > a {
  display: block;
  font-family: var(--serif);
  font-size: 25px;
}

.contact-card-center p {
  color: rgba(255,255,255,.52);
  font-size: 12px;
  margin-top: 10px;
}


/* FOOTER */

.site-footer {
  background: #17110e;
  color: white;
  padding: 65px 0 25px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr .8fr 1fr;
  gap: 60px;
}

.footer-brand p {
  color: rgba(255,255,255,.4);
  max-width: 250px;
  font-size: 11px;
  margin-top: 18px;
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.footer-links > span,
.footer-contact > span {
  color: rgba(255,255,255,.38);
  font-size: 8px;
  letter-spacing: .2em;
  margin-bottom: 6px;
}

.footer-links a {
  color: rgba(255,255,255,.65);
  font-size: 11px;
}

.footer-contact a {
  font-family: var(--serif);
  font-size: 19px;
}

.footer-contact p {
  color: rgba(255,255,255,.42);
  font-size: 11px;
}

.footer-bottom {
  margin-top: 55px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.1);
  display: flex;
  justify-content: space-between;
  color: rgba(255,255,255,.3);
  font-size: 9px;
}


/* MODAL */

.gallery-modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(15,9,7,.94);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.gallery-modal.open {
  display: flex;
}

.gallery-modal img {
  max-width: 1100px;
  max-height: 85vh;
  width: auto;
  object-fit: contain;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 27px;
  background: transparent;
  border: 0;
  color: white;
  font-size: 38px;
}


/* RESPONSIVE */

@media (max-width: 950px) {

  .main-nav,
  .nav-button {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .site-header.menu-open .main-nav {
    display: flex;
    position: absolute;
    top: 55px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    background: rgba(32,24,20,.98);
    padding: 15px 20px;
  }

  .site-header.menu-open .main-nav a {
    padding: 14px 5px;
    border-bottom: 1px solid rgba(255,255,255,.12);
  }

  .intro-grid,
  .approach-grid {
    grid-template-columns: 1fr;
    gap: 55px;
  }

  .section-number {
    display: none;
  }

  .lesson-grid {
    grid-template-columns: 1fr;
  }

  .lesson-card {
    min-height: 290px;
  }

  .feature-section {
    grid-template-columns: 1fr;
  }

  .feature-image {
    min-height: 470px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: span 2;
  }

}


@media (max-width: 600px) {

  .container {
    width: min(calc(100% - 32px), var(--max-width));
  }

  .demo-bar {
    font-size: 9px;
  }

  .site-header {
    top: 43px;
  }

  .hero {
    min-height: 700px;
  }

  .hero-content {
    padding-top: 90px;
  }

  .hero h1 {
    font-size: 68px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-bottom {
    width: calc(100% - 32px);
  }

  .hero-bottom span {
    font-size: 7px;
  }

  .section {
    padding: 85px 0;
  }

  .intro-content h2,
  .section-heading h2,
  .approach-content h2 {
    font-size: 53px;
  }

  .intro-content .large-text {
    font-size: 19px;
  }

  .section-heading {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }

  .feature-image {
    min-height: 350px;
  }

  .feature-content {
    padding: 75px 28px;
  }

  .feature-content h2 {
    font-size: 55px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 280px);
  }

  .gallery-large {
    grid-row: auto;
  }

  .approach-visual {
    width: 100%;
  }

  .contact-section {
    padding: 90px 0;
  }

  .contact-content h2 {
    font-size: 67px;
  }

  .contact-card-center > a {
    font-size: 21px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .footer-brand {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
  }

}
