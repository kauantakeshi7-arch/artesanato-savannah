document.addEventListener('DOMContentLoaded', () => {
    
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // when to trigger

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // Trigger once on load
    revealOnScroll();
    
    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);

    // --- Image Modal (Lightbox) Logic ---
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("expanded-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close-modal")[0];

    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('.gallery-img');
            const title = item.querySelector('h3').innerText;
            
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = title;
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
        });
    });

    // Close Modal
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    closeBtn.addEventListener('click', closeModal);

    // Close on click outside image
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
});
