
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg","images/6.jpeg",
        "images/7.jpeg","images/8.jpeg","images/9.jpeg","images/10.jpeg","images/11.jpeg","images/12.jpeg",
        "images/13.jpeg","images/14.jpeg","images/15.jpeg","images/16.jpeg","images/17.jpeg","images/18.jpeg",
		"images/19.jpeg","images/20.jpeg","images/21.jpeg","images/22.jpeg","images/23.jpeg","images/24.jpeg",
		"images/25.jpeg","images/26.jpeg","images/27.jpeg","images/28.jpeg","images/29.jpeg","images/30.jpeg",
		"images/31.jpeg","images/32.jpeg","images/33.jpeg","images/34.jpeg","images/35.jpeg","images/36.jpeg",
		"images/37.jpeg","images/38.jpeg","images/39.jpeg", "images/40.jpeg","images/41.jpeg","images/42.jpeg"
    ];
    let start = 0;
    const perPage = 6;

    // Overlay logic
    const overlay = document.getElementById('imgOverlay');
    const overlayImg = document.getElementById('overlayImg');
    if (overlay && overlayImg) {
        overlay.onclick = function() {
            overlay.style.display = 'none';
            overlayImg.src = '';
        };
    }

    function renderImages() {
        const imgContainer = document.getElementById('imgContainer');
        imgContainer.innerHTML = '';
        for(let i = start; i < Math.min(start + perPage, images.length); i++) {
            const div = document.createElement('div');
            div.className = 'img-square';
            div.innerHTML = `<img src="${images[i]}" alt="Truck ${i+1}" width="200">`;
            imgContainer.appendChild(div);
        }
        imgContainer.querySelectorAll('img').forEach(img => {
            img.onclick = function() {
                if (overlay && overlayImg) {
                    overlayImg.src = this.src;
                    overlay.style.display = 'flex';
                }
            };
        });
    }

    document.getElementById('prevBtn').onclick = function() {
        start = Math.max(0, start - perPage);
        renderImages();
    };
    document.getElementById('nextBtn').onclick = function() {
        if(start + perPage < images.length) start += perPage;
        renderImages();
    };
    renderImages();
});
