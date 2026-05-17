document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', () => {
            const panel = accordion.nextElementSibling;
            const isActive = accordion.classList.contains('active');

            accordions.forEach((item) => {
                item.classList.remove('active');
                const itemPanel = item.nextElementSibling;
                if (itemPanel) {
                    itemPanel.style.maxHeight = null;
                }
            });

            if (!isActive && panel) {
                accordion.classList.add('active');
                panel.style.maxHeight = `${panel.scrollHeight}px`;
            }
        });
    });
});
