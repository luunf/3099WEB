const artistsData = [
    {
        id: 1,
        name: "Valuto",
        role: "Valentin Ibarburu",
        image: "assets/images/valuto.jpg",
        bio: "",
        lastReleases: [
            { title: "Sin Título – Single", date: "2026", spotifyId: "0UKQEI2oLvO6sVxKuAKHI3", 
                link: "https://open.spotify.com/intl-es/track/0UKQEI2oLvO6sVxKuAKHI3",
                embedUrl: "https://open.spotify.com/embed/track/0UKQEI2oLvO6sVxKuAKHI3" 
             },
            { title: "No te Daria la cara", date: "2025", spotifyId: "1rY5x5s0wjqukf8rM2O0XW", 
                link: "https://open.spotify.com/track/1rY5x5s0wjqukf8rM2O0XW",
                embedUrl: "https://open.spotify.com/embed/track/1rY5x5s0wjqukf8rM2O0XW" 
            },
            { title: "5 cintas", date: "2025", spotifyId: "1rY5x5s0wjqukf8rM2O0XW",
                link: "https://open.spotify.com/track/1rY5x5s0wjqukf8rM2O0XW",
                embedUrl: "https://open.spotify.com/embed/track/1rY5x5s0wjqukf8rM2O0XW" 
             },
        ],
        playlistEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0hHdSa?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        social: {
            instagram: "https://www.instagram.com/v4luto/",
            youtube: "https://www.youtube.com/@valuto3099",
            spotify: "https://open.spotify.com/intl-es/artist/0AQym39jmsVTiggRZdyiSW?si=ReRPoKyLRVWQP5fGLM-ovg"
        }
    },
    {
        id: 2,
        name: "Saenzzz",
        role: "Juan Manuel Sáenz",
        image: "assets/images/saenzzz.jpg",
        bio: "",
        lastReleases: [
            { title: "Real Lover", date: "2025", link: "#" },
            { title: "Hora de Aventura ft Luk-s", date: "2025", link: "#" },
            { title: "Posca ft RicoIDB", date: "2025", link: "#" }
        ],
        playlistEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2q3fmL?si=2c13bd88bcf74343?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        social: {
            instagram: "https://www.instagram.com/saenzzz3099/",
            youtube: "https://www.youtube.com/@Saenzzz3099",
            spotify: "https://open.spotify.com/intl-es/artist/48OFmsN6f211bBpJ2YeRez?si=x_CU_iCDSvmu-d7HsKfyIw"
        }
    },
    {
        id: 3,
        name: "Galo",
        role: "Guille Galó",
        image: "assets/images/galo.jpg",
        bio: "",
        lastReleases: [
            { title: "Avisame cuando te separes", date: "2026", link: "#" },
            { title: "Piso 10", date: "2025", link: "#" },
            { title: "01 Gata ft Elias Glz, sArah y Wave", date: "2025", link: "#" }
        ],

        playlistEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7pTwuTtRjdA2KlXVcnRIfF?si=87dfa7fb56d049d3?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        social: {
            instagram: "https://www.instagram.com/galo.3099_/",
            youtube: "https://www.youtube.com/@GALO3099",
            spotify: "https://open.spotify.com/intl-es/artist/0YHhUpG2GeFuKbKEtVWG3E?si=vD9WURNhQDif52Ofwkj_yw"
        }
    },
    {
        id: 4,
        name: "Fefo",
        role: "Federico Chanes",
        image: "assets/images/fefo.jpg",
        bio: "",
        lastReleases: [
            { title: "hagamos skate.", date: "2025", link: "#" },
            { title: "RIGHT NOW", date: "2025", link: "#" },
            { title: "¡No Toques! - EP", date: "2025", link: "#" }
        ],
        playlistEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4hqgl1SniScx3p1YwPOhA0?si=O-zw1eB7R5-3iSGfQO2j1w?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        social: {
            instagram: "https://www.instagram.com/fefo.3099/",
            youtube: "https://www.youtube.com/@Fefo3099",
            spotify: "https://open.spotify.com/intl-es/artist/1MFlLuBtGRF0OTdrSXojj1?si=UOQrVAfpTSmb0kdRDS0mdg"
        }
        
    },
    {
        id: 5,
        name: "Rico IDB",
        role: "Santiago Rico",
        image: "assets/images/ricoidb.jpg",
        bio: "",
        lastReleases: [
            { title: "lo que siento x vos ft PanchiLey", date: "2025", link: "#" },
            { title: "Posca ft Saenzzz", date: "2025", link: "#" },
            { title: "Ilusiones", date: "2025", link: "#" }
        ],
        playlistEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3eMuLE?si=56bc1675f5f24bd3?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        social: {
            instagram: "https://www.instagram.com/ricoidb/",
            youtube: "https://www.youtube.com/@Fefo3099",
            spotify: "https://open.spotify.com/intl-es/artist/5v809UzgirhWsGvVltFGc3?si=b_zaW4KkRNmjNb7YErHhuw"
        }
    },
    {
        id: 6,
        name: "Luk-s",
        role: "Lucas Acosta",
        image: "assets/images/luks.jpg",
        bio: "",
        lastReleases: [
            { title: "UN DIA SI, UN DIA NO", date: "2026", link: "#" },
            { title: "Una Vez Más", date: "2025", link: "#" },
            { title: "Hora de Aventura ft saenzzz", date: "2025", link: "#" }
        ],
        playlistEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E4vji9e4n0BAh?si=d9384749f33a4fa9?utm_source=generator" width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        social: {
            instagram: "https://www.instagram.com/luks.nw/",
            youtube: "https://www.youtube.com/@Luks3099",
            spotify: "https://open.spotify.com/intl-es/artist/3GF2ehPl3uat80CuK2m2QJ?si=-oAW4vHATLymuAuUlOezMQ"
        }
    }
];

const artistsGrid = document.getElementById('artistsGrid');
const artistDetail = document.getElementById('artistDetail');
const releasesContainer = document.getElementById('releasesContainer');
const navItems = document.querySelectorAll('.nav-item');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

document.addEventListener('DOMContentLoaded', () => {
    renderArtistCards();
    renderReleases();
    setupNavigation();
    setupMenuToggle();
    setupCountdown();
});

function renderArtistCards() {
    artistsGrid.innerHTML = '';
    
    artistsData.forEach(artist => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="artist-image" onerror="this.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
            <div class="artist-info">
                <h3 class="artist-name">${artist.name}</h3>
                <p class="artist-role">${artist.role}</p>
            </div>
        `;
        
        card.addEventListener('click', () => showArtistDetail(artist));
        artistsGrid.appendChild(card);
    });
}

function renderReleases() {
    releasesContainer.innerHTML = '';
    
    const allReleases = [];
    
    artistsData.forEach(artist => {
        artist.lastReleases.forEach(release => {
            allReleases.push({
                ...release,
                artist: artist.name,
                artistImage: artist.image,
                artistRole: artist.role
            });
        });
    });
    
    allReleases.sort((a, b) => {
        const yearA = parseInt(a.date);
        const yearB = parseInt(b.date);
        return yearB - yearA;
    });
    
    const recentReleases = allReleases.slice(0, 4);
    
    recentReleases.forEach(release => {
        const releaseCard = document.createElement('div');
        releaseCard.className = 'artist-card release-card';
        
        const hasSpotify = release.spotifyId && release.spotifyId !== '#' && release.spotifyId.length > 5;
        
        releaseCard.innerHTML = `
            <img src="${release.artistImage}" alt="${release.artist}" class="artist-image" onerror="this.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
            <div class="artist-info">
                <h3 class="artist-name">${release.title}</h3>
                <p class="artist-role">${release.artist} · ${release.date}</p>
                ${hasSpotify ? '<div class="play-button"><i class="fas fa-play"></i></div>' : ''}
            </div>
        `;
        
        if (hasSpotify) {
            releaseCard.addEventListener('click', (e) => {
                e.stopPropagation();
                
                if (release.link && release.link !== '#') {
                    window.open(release.link, '_blank');
                    
                    if (release.embedUrl && release.embedUrl !== '#') {
                        showMusicPlayer(release.embedUrl, release.title, release.artist);
                    }
                }
            });
            
            releaseCard.style.cursor = 'pointer';
        }
        
        releasesContainer.appendChild(releaseCard);
    });
}


function showArtistDetail(artist) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    artistDetail.style.display = 'block';
    
    artistDetail.innerHTML = `
        <button class="close-detail" id="closeDetail">
            <i class="fas fa-times"></i>
        </button>
        
        <div class="artist-detail-content">
            <div class="artist-detail-header">
                <img src="${artist.image}" alt="${artist.name}" class="artist-detail-image" onerror="this.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                
                <div class="artist-detail-info">
                    <h2>${artist.name}</h2>
                    <p class="artist-detail-role">${artist.role}</p>
                    
                    <div class="artist-bio">
                        <p>${artist.bio}</p>//
                    </div>
                    
                    <div class="social-links">
                        ${artist.social.instagram !== '#' ? `<a href="${artist.social.instagram}" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>` : ''}
                        ${artist.social.youtube !== '#' ? `<a href="${artist.social.youtube}" target="_blank" class="social-link"><i class="fab fa-youtube"></i></a>` : ''}
                        ${artist.social.spotify !== '#' ? `<a href="${artist.social.spotify}" target="_blank" class="social-link"><i class="fab fa-spotify"></i></a>` : ''}
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Últimos Lanzamientos</h3>
                ${artist.lastReleases.map(release => `
                    <div class="release-item">
                        <strong style="color: var(--color-beige);">${release.title}</strong>
                        <p style="color: var(--color-text-secondary); margin-top: 5px;">${release.date}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="detail-section">
                <h3>Playlist Personal</h3>
                <div class="spotify-embed">
                    ${artist.playlistEmbed}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('closeDetail').addEventListener('click', () => {
        closeArtistDetail();
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeArtistDetail() {
    artistDetail.style.display = 'none';
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });
}

function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (artistDetail.style.display === 'block') {
                closeArtistDetail();
            }
            
            const targetId = item.getAttribute('href').substring(1);
            
            if (targetId !== 'inicio') {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function setupMenuToggle() {
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && artistDetail.style.display === 'block') {
        closeArtistDetail();
    }
});

document.addEventListener('click', (e) => {
    if (artistDetail.style.display === 'block' && 
        !artistDetail.contains(e.target) && 
        e.target.className !== 'artist-card' && 
        !e.target.closest('.artist-card')) {
        closeArtistDetail();
    }
});
function showMusicPlayer(embedUrl, title, artist) {
    let player = document.getElementById('musicPlayer');
    
    if (!player) {
        player = document.createElement('div');
        player.id = 'musicPlayer';
        player.innerHTML = `
            <div class="player-header">
                <h4>${title} - ${artist}</h4>
                <button class="close-player"><i class="fas fa-times"></i></button>
            </div>
            <div class="player-content">
                <iframe src="${embedUrl}" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        `;
        document.body.appendChild(player);
        
        player.querySelector('.close-player').addEventListener('click', () => {
            player.style.display = 'none';
        });
    } else {
        player.querySelector('iframe').src = embedUrl;
        player.querySelector('h4').textContent = `${title} - ${artist}`;
        player.style.display = 'block';
    }
    
    const style = document.createElement('style');
    style.textContent = `
        #musicPlayer {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            background: var(--color-card);
            border-radius: var(--border-radius);
            border: 2px solid var(--color-accent);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            z-index: 10000;
            display: none;
        }
        .player-header {
            background: var(--color-accent);
            color: white;
            padding: 10px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 10px 10px 0 0;
        }
        .player-header h4 {
            margin: 0;
            font-size: 0.9rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .close-player {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1rem;
        }
        .player-content {
            padding: 15px;
        }
        @media (max-width: 576px) {
            #musicPlayer {
                width: 90%;
                left: 5%;
                right: 5%;
                bottom: 10px;
            }
        }
    `;
    if (!document.querySelector('#playerStyles')) {
        style.id = 'playerStyles';
        document.head.appendChild(style);
    }
}