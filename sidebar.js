document.addEventListener('DOMContentLoaded', function () {
    const page = window.location.pathname.split('/').pop() || 'index.html';

    const links = [
        { href: 'leitseat.html',   img: 'images/munchies.png',    label: 'leitseat',    desc: 'food stuff! documenting food and friends' },
        { href: 'spaceout.html',   img: 'images/thoughts.png',    label: 'space out',   desc: 'me when i space out' },
        { href: 'starboard.html',  img: 'images/starboard.png',   label: 'star board',  desc: 'life in numbers' },
        { href: 'bucketlist.html', img: 'images/bucketlist.png',  label: 'bucketlist',  desc: 'things i want to do before the year ends' },
        { href: 'desiderata.html', img: 'images/desiderata.png',  label: 'desiderata',  desc: 'my favourite poem' },
        { href: 'art.html',         img: 'images/art.png',         label: 'art',         desc: 'things i made with my hands' },
    ];

    const navHtml = links.map((l, i) =>
        `<div class="snav-item${i < links.length - 1 ? ' snav-item-divider' : ''}">
            <a href="${l.href}" class="snav-link${page === l.href ? ' active' : ''}">
                <img src="${l.img}" alt="${l.label}" class="snav-img"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">
                <span class="snav-fallback" style="display:none">${l.label}</span>
            </a>
            <p class="snav-desc">${l.desc}</p>
        </div>`
    ).join('');

    const sidebar = document.createElement('aside');
    sidebar.className = 'site-sidebar';
    sidebar.innerHTML = `
        <a href="index.html" class="sidebar-logo-link">
            <img src="images/lj_presaldo.png" alt="lj presaldo" class="sidebar-logo"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
            <span class="sidebar-logo-text" style="display:none">lj presaldo</span>
        </a>
        <hr class="sidebar-rule">
        <nav class="site-sidebar-nav">
            ${navHtml}
        </nav>
        <p class="sidebar-updated">last updated: aug 24, 2026</p>
    `;

    // wrap all current body children in .main-content
    const main = document.createElement('div');
    main.className = 'main-content';
    while (document.body.firstChild) {
        main.appendChild(document.body.firstChild);
    }

    // scatter decorative hand-drawn stars
    const allStars = ['star1.png','star2.png','star3.png','star4.png','star5.png','star6.png','star7.png'];
    const picks = allStars.sort(() => 0.5 - Math.random()).slice(0, 5);
    const positions = [
        { top: '28%',  left: '5%',  rot: -12 },
        { top: '38%',  left: '60%', rot: 8 },
        { top: '52%',  left: '15%', rot: -5 },
        { top: '65%',  left: '55%', rot: 14 },
        { top: '78%',  left: '8%',  rot: -9 },
    ];
    picks.forEach((name, i) => {
        const s = document.createElement('img');
        s.src = `images/${name}`;
        s.alt = '';
        s.className = 'sidebar-star';
        s.style.top = positions[i].top;
        s.style.left = positions[i].left;
        s.style.transform = `rotate(${positions[i].rot}deg)`;
        sidebar.appendChild(s);
    });

    document.body.appendChild(sidebar);
    document.body.appendChild(main);
});
