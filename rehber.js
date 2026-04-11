// 81 İl Listesi
const iller = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

const envanter = {
    "Eskişehir": [
        {
            ad: "Odunpazarı Zanaat Rotası",
            kat: "El Sanatları & Terapi",
            skor: 9.8,
            desc: "Lületaşı ve cam atölyeleriyle motor beceri rehabilitasyonu. Tarihi atmosferde zihinsel sakinlik sağlar.",
            mesafe: "Şehir Merkezi",
            sakinlik: "Yüksek",
            img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500"
        }
    ],
    "Antalya": [
        {
            ad: "Kaleiçi Butik Rotalar",
            kat: "Kültürel Gastronomi",
            skor: 9.6,
            desc: "Tedavi sonrası kontrollü yürüyüşler ve yerel turunç bahçelerinde dinlenme alanları sunan tarihi doku.",
            mesafe: "Kaleiçi Bölgesi", // HATA DÜZELTİLDİ
            sakinlik: "Orta",
            img: "https://images.unsplash.com/photo-15420518418c7-5949a7023cc3?w=500"
        }
    ]
};

// Sayfa yüklendiğinde 81 ili doldur
const selector = document.getElementById('citySelector');
iller.sort((a,b) => a.localeCompare('tr')).forEach(il => {
    let opt = document.createElement('option');
    opt.value = il;
    opt.textContent = il;
    selector.appendChild(opt);
});

const searchBtn = document.getElementById('searchBtn');
const grid = document.getElementById('mainGrid');
const empty = document.getElementById('emptyView');

searchBtn.addEventListener('click', () => {
    const city = selector.value;
    const data = envanter[city];

    grid.innerHTML = "";
    
    if (data) {
        empty.classList.add('hidden');
        grid.classList.remove('hidden');

        data.forEach((yer, i) => {
            const card = `
                <div class="rota-card animate-in" style="animation-delay: ${i * 0.1}s">
                    <div class="card-img-container">
                        <img src="${yer.img}" alt="${yer.ad}">
                        <div class="healing-badge">${yer.skor} Puan</div>
                    </div>
                    <div class="card-body">
                        <span class="category">${yer.kat}</span>
                        <h3>${yer.ad}</h3>
                        <p>${yer.desc}</p>
                        <div class="metrics">
                            <div class="metric-item">
                                <small>Konum</small>
                                <span>${yer.mesafe}</span>
                            </div>
                            <div class="metric-item">
                                <small>Sessizlik</small>
                                <span>${yer.sakinlik}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            grid.insertAdjacentHTML('beforeend', card);
        });
    } else {
        grid.classList.add('hidden');
        empty.classList.remove('hidden');
        empty.querySelector('h3').textContent = city + " Envanteri Hazırlanıyor";
        empty.querySelector('p').textContent = "Bu ilimiz için kültürel şifa rotaları ve yerel kalkınma analizleri devam etmektedir.";
    }
});
