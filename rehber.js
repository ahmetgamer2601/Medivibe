// --- VERİ TABANI (KOD İÇİNDE) ---
const rotalar = {
    "eskisehir": [
        {
            ad: "Sazova Parkı ve Göleti",
            tip: "Doğa & Yürüyüş",
            erisilebilir: true,
            aciklama: "Tedavi sonrası düşük tempolu yürüyüşler için ideal. Tamamen düz ayak ve tekerlekli sandalye kullanımına uygun geniş yollar.",
            mesafe: "Şehir Merkezine 5 km"
        },
        {
            ad: "OMM (Odunpazarı Modern Müze)",
            tip: "Sanat Terapisi",
            erisilebilir: true,
            aciklama: "Sessiz, huzurlu ve zihni dinlendiren ahşap mimari. Asansör altyapısı ile fiziksel engelli hastalar için tam uyumlu.",
            mesafe: "Şehir Merkezinde"
        }
    ],
    "adana": [
        {
            ad: "Seyhan Nehri Kıyısı",
            tip: "Huzur Rotaları",
            erisilebilir: true,
            aciklama: "Narenciye kokuları eşliğinde, şehir gürültüsünden uzak, tekerlekli sandalye dostu sahil bandı.",
            mesafe: "Merkez"
        }
    ]
    // Buraya istediğin kadar şehir ekleyebilirsin.
};

// --- İŞLEVLER ---
const citySelector = document.getElementById('citySelector');
const placesGrid = document.getElementById('placesGrid');

citySelector.addEventListener('change', (e) => {
    const secilenSehir = e.target.value;
    const yerler = rotalar[secilenSehir];

    // Grid'i temizle ve görünür yap
    placesGrid.innerHTML = '';
    placesGrid.classList.remove('hidden');

    if (yerler) {
        yerler.forEach((yer, index) => {
            // Erişilebilirlik tag'i belirleme
            const erisimTag = yer.erisilebilir ? '<span class="tag-access">♿ Engelsiz Rota</span>' : '';

            // Kart HTML'ini oluştur
            const cardHTML = `
                <div class="place-card">
                    <div class="card-tags">
                        ${erisimTag}
                        <span class="tag-type">📍 ${yer.tip}</span>
                    </div>
                    <h3>${yer.ad}</h3>
                    <p>${yer.aciklama}</p>
                    <div class="card-action">
                        <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600;">🚗 ${yer.mesafe}</span>
                        <button class="btn-route">Yol Tarifi Al</button>
                    </div>
                </div>
            `;
            
            // Kartı ekrana bas
            placesGrid.innerHTML += cardHTML;
        });

        // Kartlara sırayla animasyon ekle (Jüri bu efekte bayılır)
        const cards = document.querySelectorAll('.place-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 150); // Her kart 150ms arayla çıkar
        });
    }
});
