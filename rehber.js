const cityData = {
    "eskisehir": [
        {
            name: "Sazova Bilim Kültür Parkı",
            type: "Doğa & Rehabilitasyon",
            access: "♿ Engelsiz Rota",
            desc: "Tedavi sonrası düşük tempolu yürüyüşler için tasarlanmış, hava kalitesi yüksek ve tamamen düz ayak bir lokasyon.",
            dist: "Merkezden 10 dk",
            premium: "Özel VIP Golf Aracı ile Refakatli Tur ve Oksijen Terapisi Desteği"
        },
        {
            name: "Odunpazarı Modern Müze (OMM)",
            type: "Sanat Terapisi",
            access: "♿ Tam Erişilebilir",
            desc: "Zihinsel yorgunluğu azaltan ödüllü mimari. Ameliyat sonrası sessiz ve huzurlu bir kültürel derinlik sunar.",
            dist: "Tarihi Bölge",
            premium: "Kişiye Özel Sanat Danışmanı ve Sessiz VIP Dinlenme Odası Kullanımı"
        }
    ],
    "adana": [
        {
            name: "Merkez Park & Seyhan Kıyısı",
            type: "Huzur Yolu",
            access: "♿ Engelsiz Rota",
            desc: "Nehir havasının iyileştirici gücü. Narenciye ağaçları arasında, tekerlekli sandalye dostu geniş peyzaj alanları.",
            dist: "Şehir Merkezi",
            premium: "Yabancı Dil Bilen Sağlık Asistanı ve Nehir Üzerinde Özel İyileşme Turu"
        }
    ]
};

const selector = document.getElementById('citySelector');
const grid = document.getElementById('resultContainer');

selector.addEventListener('change', (e) => {
    const city = e.target.value;
    const places = cityData[city];

    grid.innerHTML = "";
    grid.classList.remove('hidden');

    if (places) {
        places.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = `
                <div class="tag-row">
                    <span class="tag tag-blue">📍 ${p.type}</span>
                    <span class="tag tag-green">${p.access}</span>
                </div>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                
                <div class="premium-offer">
                    <span style="font-size:1.5rem">💎</span>
                    <div>
                        <b>PREMIUM SAĞLIK HİZMETİ</b>
                        <p>${p.premium}</p>
                    </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; border-top:1px solid #f1f5f9; pt:15px">
                    <span style="font-size:0.8rem; color:#94a3b8; font-weight:700">📍 ${p.dist}</span>
                    <button style="background:var(--dark); color:white; border:none; padding:8px 15px; border-radius:10px; cursor:pointer; font-weight:600">Keşfet</button>
                </div>
            `;
            grid.appendChild(card);
            setTimeout(() => card.classList.add('show'), index * 150);
        });
    } else {
        // FAZ 2 / VİZYON KARTI (81 il için hayat kurtarır)
        grid.innerHTML = `
            <div class="place-card show" style="grid-column: 1 / -1; text-align:center; padding:50px;">
                <h1 style="font-size:3rem">🚀</h1>
                <h3>Analiz Devam Ediyor (Faz 2)</h3>
                <p style="max-width:500px; margin: 0 auto">Bu şehrimiz için medikal turizm ve kültürel entegrasyon analizleri uluslararası standartlarda yürütülmektedir. Çok yakında erişime açılacaktır.</p>
            </div>
        `;
    }
});
