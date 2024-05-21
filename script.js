document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
      accordion.addEventListener('click', function () {
          // Check if the current accordion is already active
          const isActive = this.classList.contains('active');

          // Close all accordions
          accordions.forEach(acc => {
              acc.classList.remove('active');
              acc.nextElementSibling.style.maxHeight = null;
          });

          // Toggle the current accordion
          if (!isActive) {
              this.classList.add('active');
              const panel = this.nextElementSibling;
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  });
});