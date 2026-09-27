/* -----------------------------
   POLISHED NAIL SALON DEMO
   SquiresWebDesign
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     MOBILE NAVIGATION
  ----------------------------- */

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });

    navigation.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* -----------------------------
     CURRENT YEAR
  ----------------------------- */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* -----------------------------
     GALLERY MODAL
  ----------------------------- */

  const galleryItems = document.querySelectorAll(".gallery-item");
  const galleryModal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");
  const modalLabel = document.getElementById("modalLabel");
  const modalClose = document.getElementById("modalClose");

  galleryItems.forEach(item => {

    item.addEventListener("click", () => {

      const backgroundImage =
        window.getComputedStyle(item).backgroundImage;

      const title =
        item.dataset.title || "Nail Design";

      modalImage.style.backgroundImage = backgroundImage;
      modalLabel.textContent = title;

      galleryModal.classList.add("active");

      document.body.style.overflow = "hidden";

    });

  });


  function closeGallery() {

    galleryModal.classList.remove("active");

    document.body.style.overflow = "";

  }


  if (modalClose) {
    modalClose.addEventListener("click", closeGallery);
  }


  if (galleryModal) {

    galleryModal.addEventListener("click", event => {

      if (event.target === galleryModal) {
        closeGallery();
      }

    });

  }


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeGallery();
    }

  });


  /* -----------------------------
     SCROLL REVEAL
  ----------------------------- */

  const revealElements = document.querySelectorAll(
    ".service-card, .experience-item, .gallery-item, .section-content, .section-heading"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {

      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

      observer.observe(element);

    });

  }


  /* -----------------------------
     SMOOTH ANCHOR FALLBACK
  ----------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});

.reveal-visible,
.service-card.visible,
.experience-item.visible,
.gallery-item.visible,
.section-content.visible,
.section-heading.visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
