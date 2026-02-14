(function () {
    const policyLinksHTML = `
        <div style="display: flex; flex-wrap: wrap; gap: 24px; margin-top: 24px; flex-direction: row; width: 100%; justify-content: flex-start; align-items: center; padding-left: 0;">
            <a href="./privacy-policy.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">Privacy Policy</a>
            <a href="./terms-of-service.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">Terms of Service</a>
            <a href="./data-deletion.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">Data Delete</a>
            <a href="./about-us.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">About Us</a>
            <a href="./refund-policy.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">Refund Policy</a>
            <a href="./shipping-policy.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">Shipping Policy</a>
            <a href="./products-services.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">Products Services</a>
            <a href="./contact-us.html" class="framer-text" style="text-decoration: none; color: rgb(80, 80, 80); font-size: 14px; font-weight: 500; white-space: nowrap;">Contact Us</a>
        </div>
    `;

    function injectLinks() {
        // Target the "More Links" container
        const containers = document.querySelectorAll('.framer-1y8nzw2[data-framer-name="More Links"]');
        containers.forEach(container => {
            if (!container.innerHTML.includes('privacy-policy.html')) {
                container.innerHTML = policyLinksHTML;
            }
            // Force styles on container
            // Use block display and zero margins
            container.style.cssText = "width: 100% !important; display: block !important; margin: 0 !important; padding: 0 !important; max-width: none !important;";

            // Force alignment on the parent container (framer-lx78wp)
            const parent = container.parentElement;
            if (parent) {
                // Force block layout to ensure stacking
                parent.style.cssText += "display: block !important; width: 100% !important;";
                // Also ensure parent doesn't have weird padding/gap interfering
                // We keep parent margin but ensure internal alignment
            }
        });
    }

    // Initial injection
    injectLinks();

    // Re-inject on load
    window.addEventListener('load', injectLinks);

    // Periodic check to handle hydration overwrites
    setInterval(() => {
        injectLinks();

        // Fix unwanted LinkedIn links
        document.querySelectorAll('a[href*="jarvinentoni"]').forEach(link => {
            link.href = 'javascript:void(0)';
            link.removeAttribute('target');
            link.removeAttribute('rel');
            link.style.pointerEvents = 'none'; // Optional: disable clicking entirely
        });

        // Fix mislabeled social links (Youtube/Twitter pointing to tsk1999)
        document.querySelectorAll('a[href*="tsk1999"]').forEach(link => {
            const text = link.innerText || link.textContent;
            if (text.includes('Youtube') || text.includes('Twitter')) {
                link.href = 'javascript:void(0)';
                link.removeAttribute('target');
                link.removeAttribute('rel');
            }
        });

    }, 100);
})();
