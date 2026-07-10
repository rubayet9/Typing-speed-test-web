// Typetest Landing Page UI Helper Script
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    
    // Changing header style on page scroll for sticky effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(8, 9, 10, 0.9)";
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.background = "rgba(12, 13, 14, 0.7)";
            header.style.boxShadow = "none";
        }
    });

    console.log("Typetest Landing Page scripts loaded successfully.");

    // Coming Soon Modal Handlers
    const macBtn = document.getElementById("btn-download-macos");
    const linuxBtn = document.getElementById("btn-download-linux");
    const comingSoonModal = document.getElementById("coming-soon-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const okModalBtn = document.getElementById("ok-modal-btn");

    function showModal(e) {
        e.preventDefault();
        comingSoonModal.classList.remove("hidden");
        // Trigger reflow for transition
        void comingSoonModal.offsetWidth;
        comingSoonModal.classList.add("active");
    }

    function hideModal() {
        comingSoonModal.classList.remove("active");
        setTimeout(() => {
            comingSoonModal.classList.add("hidden");
        }, 300);
    }

    if (macBtn) macBtn.addEventListener("click", showModal);
    if (linuxBtn) linuxBtn.addEventListener("click", showModal);
    if (closeModalBtn) closeModalBtn.addEventListener("click", hideModal);
    if (okModalBtn) okModalBtn.addEventListener("click", hideModal);
    
    if (comingSoonModal) {
        comingSoonModal.addEventListener("click", (e) => {
            if (e.target === comingSoonModal) {
                hideModal();
            }
        });
    }

    // Showcase tab switcher
    window.switchShowcaseTab = function(element, tabName) {
        // Get the parent container
        const container = element.closest('.showcase-image-container');
        // Deactivate all labels
        container.querySelectorAll('.tab-label').forEach(label => label.classList.remove('active'));
        // Activate clicked label
        element.classList.add('active');
        
        // Hide all images
        container.querySelectorAll('.showcase-img').forEach(img => img.classList.remove('active'));
        // Show selected image
        container.querySelector(`#img-${tabName}`).classList.add('active');
    };

});
