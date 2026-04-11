const sehirData = {
    "ESKİŞEHİR": [
        {
            ad: "Odunpazarı Butik Atölyeler",
            tip: "Kültür & Terapi",
            puan: "9.8/10",
            desc: "Tedavi sonrası zihni boşaltmak için cam ve lületaşı atölyelerinde vakit geçirebilir, yerel ustaların el emeği ürünlerini inceleyebilirsiniz.",
            eco: "Doğrudan Yerel Zanaatkar Desteği (Cam ve Lületaşı Sanatı)",
            link: "https://www.google.com/maps/search/Odunpazarı+Atölyeler"
        },
        {
            ad: "Porsuk Çayı Gondol Turu",
            tip: "Huzur Rotası",
            puan: "9.5/10",
            desc: "Adalar bölgesinde suyun sakinleştirici gücüyle kafa dağıtabilir, Venedik havasında dinlendirici bir tur yapabilirsiniz.",
            eco: "Belediye ve Yerel İşletme Entegrasyonu",
            link: "https://www.google.com/maps/search/Porsuk+Gondol"
        }
    ],
    "ANTALYA": [
        {
            ad: "Kaleiçi Tarihi Çarşı",
            tip: "Gastronomi & Alışveriş",
            puan: "9.7/10",
            desc: "Dar sokaklarda butik kafeler ve antika dükkanları arasında kaybolabilir, turunç reçeli gibi yöresel lezzetlerle moral depolayabilirsiniz.",
            eco: "KOBİ ve Butik Otel Ekonomisine Katkı",
            link: "https://.google.com/maps/search/Kaleiçi+Antalya"
        }
    ],
    "İSTANBUL": [
        {
            ad: "Kuzguncuk Bostanı ve Kafeler",
            tip: "Nostalji & Huzur",
            puan: "9.4/10",
            desc: "Mahalle kültürünün yaşadığı, asırlık çınarlar altında çay içip iyileşme sürecinde sosyal hayata karışabileceğiniz en sakin nokta.",
            eco: "Mahalle Esnafı ve Yerel Tarım Desteği",
            link: "https://www.google.com/maps/search/Kuzguncuk"
        }
    ]
    // Diğer şehirler için varsayılan bir "Faz 2" mesajı JS ile basılacak
};

const citySelect = document.getElementById('citySelect');
const output = document.getElementById('output');

citySelect.addEventListener('change', (e) => {
    const cityName = e.target.value;
    const places = sehirData[cityName];

    output.innerHTML = "";
    output.classList.remove('hidden');

    if (places) {
        places.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-header">
                    <span class="score-badge">İyileşme: ${p.puan}</span>
                    <span style="font-size:0.7rem; font-weight:bold; color:#64748b">📍 ${p.tip}</span>
                </div>
                <h3>${p.ad}</h3>
                <p>${p.desc}</p>
                <div class="eco-box">
                    <small>💎 EKONOMİK KATKI</small>
                    <span>${p.eco}</span>
                </div>
                <div class="card-footer">
                    <span style="font-size:0.8rem; color:#94a3b8">♿ Engelsiz Rota</span>
                    <button class="btn-go" onclick="window.open('${p.link}')">Haritada Gör</button>
                </div>
            `;
            output.appendChild(card);
            setTimeout(() => card.classList.add('show'), index * 100);
        });
    } else {
        // VERİSİ OLMAYAN ŞEHİRLER İÇİN ŞIK BİR "YOLDA" MESAJI
        output.innerHTML = `
            <div class="card show" style="grid-column: 1 / -1; text-align:center; padding:60px;">
                <h1 style="font-size:4rem; margin:0">🏔️</h1>
                <h2>${cityName} Şifa Haritası Hazırlanıyor</h2>
                <p>Bu şehrimiz için "Yerel Kalkınma ve Medikal Turizm" envanter çalışmaları saha ekiplerimizce yürütülmektedir. Sosyalfest 2026 Vizyonu kapsamında tüm iller dahil edilecektir.</p>
                <div class="eco-box" style="display:inline-block; margin-top:20px;">
                    <small>DURUM: FAZ 2 ANALİZ AŞAMASI</small>
                </div>
            </div>
        `;
    }
});
