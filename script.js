document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     CURRENT YEAR
  ----------------------------- */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* -----------------------------
     MOBILE MENU
  ----------------------------- */

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (menuToggle && header) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        header.classList.toggle("menu-open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });

  }


  navLinks.forEach(link => {

    link.addEventListener("click", () => {

      if (!header) return;

      header.classList.remove("menu-open");

      if (menuToggle) {
        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });

  });


  /* -----------------------------
     SCROLL REVEAL
  ----------------------------- */

  const revealElements =
    document.querySelectorAll(".reveal");

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "reveal-visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(element => {
    observer.observe(element);
  });


  /* -----------------------------
     GALLERY MODAL
  ----------------------------- */

  const modal =
    document.querySelector(".gallery-modal");

  const modalImage =
    modal
      ? modal.querySelector("img")
      : null;

  const closeButton =
    modal
      ? modal.querySelector(".modal-close")
      : null;

  const galleryItems =
    document.querySelectorAll(".gallery-item");


  function closeModal() {

    if (!modal) return;

    modal.classList.remove("open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (modalImage) {
      modalImage.src = "";
    }

    document.body.style.overflow = "";

  }


  galleryItems.forEach(item => {

    item.addEventListener("click", () => {

      if (!modal || !modalImage) {
        return;
      }

      const image =
        item.dataset.image;

      if (!image) return;

      modalImage.src = image;

      modalImage.alt =
        item.querySelector("img")?.alt || "";

      modal.classList.add("open");

      modal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow =
        "hidden";

    });

  });


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeModal
    );

  }


  if (modal) {

    modal.addEventListener(
      "click",
      event => {

        if (event.target === modal) {
          closeModal();
        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {
        closeModal();
      }

    }
  );


  /* -----------------------------
     SMOOTH ANCHOR LINKS
  ----------------------------- */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }

          const target =
            document.querySelector(targetId);

          if (!target) {
            return;
          }

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });

});
