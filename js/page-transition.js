(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const transitionDuration = prefersReducedMotion ? 0 : 280;
    let isLeaving = false;

    root.classList.add('page-transition-enter');

    window.navigateWithPageFade = (href) => {
        const destination = new URL(href, window.location.href);

        if (destination.origin !== window.location.origin || prefersReducedMotion) {
            window.location.href = destination.href;
            return;
        }

        if (isLeaving) return;
        isLeaving = true;
        root.classList.add('page-transition-leaving');
        window.setTimeout(() => {
            window.location.href = destination.href;
        }, transitionDuration);
    };

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href]');
        if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (link.target && link.target !== '_self' || link.hasAttribute('download')) return;

        const destination = new URL(link.href, window.location.href);
        const isSamePageHash = destination.pathname === window.location.pathname && destination.hash;
        if (destination.origin !== window.location.origin || isSamePageHash || !/^https?:$/.test(destination.protocol)) return;

        event.preventDefault();
        window.navigateWithPageFade(destination.href);
    });
})();
