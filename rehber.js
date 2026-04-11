/**
 * ŞEHİR ŞİFA BANKASI - ANA VERİ SETİ
 * Sosyalfest 2026 Proje Altyapısı
 */

const sehirEnvanteri = {
    "eskisehir": [
        {
            ad: "Odunpazarı Cam Sanatları Merkezi",
            kat: "Motor Beceri & Terapi",
            skor: 9.8,
            desc: "Sıcak cam üfleme ve lületaşı işleme atölyeleri. Ameliyat sonrası odaklanma ve ince motor beceri rehabilitasyonu için birebir.",
            etki: 94,
            mesafe: "Tarihi Bölge",
            erisim: "Tam Erişilebilir ♿",
            sakinlik: "Orta",
            resim: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=500"
        },
        {
            ad: "Sazova Bilim ve Kültür Parkı",
            kat: "Hafif Yürüyüş & Oksijen",
            skor: 9.5,
            desc: "Düşük tempolu yürüyüş rotaları, gölet çevresi negatif iyon yoğunluğu. Solunum ve fizik tedavi süreci için ideal açık hava alanı.",
            etki: 88,
            mesafe: "Merkezden 15 dk",
            erisim: "Düz Ayak Rota ♿",
            sakinlik: "Yüksek",
            resim: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=500"
        }
    ],
    "istanbul": [
        {
            ad: "Kuzguncuk Bostanı ve Sanat Evleri",
            kat: "Psikolojik Dinlenme",
            skor: 9.2,
            desc: "Mahalle kültürünün merkezinde dijital detoks ve doğa terapisi. Sosyal hayata kontrollü dönüş için en huzurlu liman.",
            etki: 96,
            mesafe: "Üsküdar Sahil",
            erisim: "Kısmen Erişilebilir",
            sakinlik: "Ultra Yüksek",
            resim: "https://images.unsplash.com/photo-1543833078-682126fb9683?auto=format&fit=crop&w=500"
        }
    ],
    "antalya": [
        {
            ad: "Kaleiçi Butik Dokuma Atölyeleri",
            kat: "Geleneksel Terapi",
            skor: 9.6,
            desc: "Tarihi doku içinde el dokuması ve yerel el sanatları. Yerel ekonomiyi destekleyen, hasta odaklı yavaşlatılmış yaşam rotası.",
            etki: 91,
            mesafe: "Eski Şehir",
            erisim: "Tam Erişilebilir ♿",
            sakinlik: "Orta",
            resim: "https://images.unsplash.com/photo-15420518418c7-5949a7023cc3?auto=format&fit=crop&w=500"
        }
    ]
    // 81 ilin diğerleri otomatik olarak "Faz 2" fonksiyonuna düşecek.
};

// --- DOM ELEMENTLERİ ---
const citySelector = document.getElementById('citySelector');
const mainGrid = document.getElementById('mainGrid');
const emptyState = document.getElementById('emptyState');

// --- ANA FONKSİYON: ANALİZİ BAŞLAT ---
function analiziBaslat() {
    const secilenSehir = citySelector.value;
    const yerler = sehirEnvanteri[secilenSehir];

    // Önce gridi temizle ve görünür yap
    mainGrid.innerHTML = "";
    
    if (yerler && yerler.length > 0) {
        // Veri varsa
        emptyState.classList.add('hidden');
        mainGrid.classList.remove('hidden');

        yerler.forEach((yer, index) => {
            const cardHTML = `
                <div class="rota-card" style="animation-delay: ${index * 0.2}s">
                    <div class="card-status">
                        <span class="status-badge accessibility-high">${yer.erisim}</span>
                        <span class="status-badge impact-high">💎 Yerel Kalkınma: %${yer.etki}</span>
                    </div>
                    
                    <div class="card-image-area">
                        <img src="${yer.resim}" alt="${yer.ad}">
                        <div class="healing-score">
                            <span class="score-val">${yer.skor}</span>
                            <span class="score-label">Şifa Skoru</span>
                        </div>
                    </div>

                    <div class="card-content">
                        <div class="cat-tag">${yer.kat.toUpperCase()}</div>
                        <h3>${yer.ad}</h3>
                        <p>${yer.desc}</p>
                        
                        <div class="card-metrics">
                            <div class="metric">
                                <small>Mesafe</small>
                                <span>${yer.mesafe}</span>
                            </div>
                            <div class="metric">
                                <small>Sakinlik</small>
                                <span>${yer.sakinlik}</span>
                            </div>
                        </div>

                        <div class="card-actions">
                            <button class="btn-details" onclick="alert('Detaylı Rota Analizi Hazırlanıyor...')">Detaylı Analiz</button>
                            <button class="btn-route">Yol Tarifi</button>
                        </div>
                    </div>
                </div>
            `;
            mainGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

        // Kartlara "show" class'ı ekleyerek animasyonu tetikle
        setTimeout(() => {
            document.querySelectorAll('.rota-card').forEach(c => c.classList.add('show'));
        }, 50);

    } else {
        // Veri yoksa Faz 2 Vizyonunu göster
        mainGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.innerHTML = `
            <div class="empty-icon">🌍</div>
            <h3>${secilenSehir.toUpperCase()} İçin Saha Analizi Sürüyor</h3>
            <p>Bu şehrimizin yöresel şifa envanteri ve yerel zanaat rotaları Sosyalfest 2026 Faz 2 kapsamında dijitalleştirilmektedir.</p>
            <div style="margin-top:20px; color:var(--primary); font-weight:700; font-size:0.8rem; letter-spacing:1px;">DURUM: %45 TAMAMLANDI</div>
        `;
    }
}

// --- EVENT LISTENERS ---
citySelector.addEventListener('change', analiziBaslat);

// Arama butonuna tıklandığında da çalışsın
document.querySelector('.btn-search').addEventListener('click', analiziBaslat);
