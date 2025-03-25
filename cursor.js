if (window.innerWidth > 768) {
    // Add cursor elements to body
    document.body.insertAdjacentHTML('beforeend', `
        <div class="cursor-dot"></div>
        <div class="cursor-inner"></div>
        <div class="cursor-outer"></div>
    `);

    const cursorDot = document.querySelector('.cursor-dot');
    const cursorInner = document.querySelector('.cursor-inner');
    const cursorOuter = document.querySelector('.cursor-outer');

    let mouseX = 0;
    let mouseY = 0;
    let innerX = 0;
    let innerY = 0;
    let outerX = 0;
    let outerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';

        requestAnimationFrame(updateCursors);
    });

    function updateCursors() {
        innerX += (mouseX - innerX) * 0.2;
        innerY += (mouseY - innerY) * 0.2;
        cursorInner.style.left = innerX + 'px';
        cursorInner.style.top = innerY + 'px';

        outerX += (mouseX - outerX) * 0.1;
        outerY += (mouseY - outerY) * 0.1;
        cursorOuter.style.left = outerX + 'px';
        cursorOuter.style.top = outerY + 'px';

        requestAnimationFrame(updateCursors);
    }

    document.addEventListener('click', () => {
        cursorDot.classList.add('cursor-click');
        cursorInner.classList.add('cursor-click');
        cursorOuter.classList.add('cursor-click');

        setTimeout(() => {
            cursorDot.classList.remove('cursor-click');
            cursorInner.classList.remove('cursor-click');
            cursorOuter.classList.remove('cursor-click');
        }, 500);
    });
}
