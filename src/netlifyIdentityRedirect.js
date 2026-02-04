// Handle Netlify Identity redirects after email confirmation
if (typeof window !== 'undefined') {
    // Check if we have a confirmation token in the URL
    if (window.location.hash && window.location.hash.includes('confirmation_token')) {
        // Wait for Netlify Identity widget to load
        const checkIdentity = setInterval(() => {
            if (window.netlifyIdentity) {
                clearInterval(checkIdentity);
                window.netlifyIdentity.on('init', (user) => {
                    if (!user) {
                        // If not logged in after confirmation, redirect to admin
                        window.netlifyIdentity.on('login', () => {
                            window.location.href = '/admin/';
                        });
                    }
                });
            }
        }, 100);
    }

    // Also handle invite tokens
    if (window.location.hash && window.location.hash.includes('invite_token')) {
        const checkIdentity = setInterval(() => {
            if (window.netlifyIdentity) {
                clearInterval(checkIdentity);
                window.netlifyIdentity.on('init', () => {
                    window.netlifyIdentity.open('invite');
                });
                window.netlifyIdentity.on('login', () => {
                    window.location.href = '/admin/';
                });
            }
        }, 100);
    }

    // General login redirect to admin
    if (typeof window.netlifyIdentity !== 'undefined') {
        window.netlifyIdentity.on('login', () => {
            window.location.href = '/admin/';
        });
    }
}

export default function netlifyIdentityModule() {
    // This export is required for Docusaurus client modules
}
