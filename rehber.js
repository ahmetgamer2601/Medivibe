const featuredCities = ["Eskişehir", "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

const cityDetails = {
    "Eskişehir": "Sazova Parkı'nda oksijen terapisi ve Odunpazarı zanaat rotaları ile rehabilitasyon odaklı bir iyileşme süreci.",
    "İstanbul": "Boğaz hattı boyunca iyot terapisi ve tarihi yarımadada zihinsel dinginlik rotaları.",
    "Ankara": "Mogan Gölü çevresinde doğa rehabilitasyonu ve termal tesis destekli iyileşme merkezleri.",
    "İzmir": "Kordon boyu yürüyüş yolları ve Ege mutfağına dayalı özel beslenme programlı iyileşme rotaları.",
    "Bursa": "Uludağ eteklerinde temiz hava terapisi ve asırlık termal su kaynakları ile fiziksel yenilenme.",
    "Antalya": "Akdeniz ikliminde D vitamini odaklı deniz terapisi ve antik kentlerde yavaşlatılmış yaşam rotaları."
};

const allCities = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
].sort((a, b) => a.localeCompare('tr'));

const featuredGrid = document.getElementById('featuredGrid');
const otherCitiesList = document.getElementById('otherCitiesList');
const overlay = document.getElementById('detailOverlay');
const overlayData = document.getElementById('overlayData');

// Şehirleri Render Et
function init() {
    // Altın Şehirler
    featuredCities.forEach(city => {
        const card = document.createElement('div');
        card.className = 'gold-card';
        card.innerHTML = `<h3>${city}</h3><p>Şifa Analizi Hazır</p>`;
        card.onclick = () => showDetail(city);
        featuredGrid.appendChild(card);
    });

    // Diğer Şehirler
    allCities.forEach(city => {
        if (!featuredCities.includes(city)) {
            const item = document.createElement('div');
            item.className = 'city-item';
            item.innerText = city;
            item.onclick = () => showDetail(city);
            otherCitiesList.appendChild(item);
        }
    });
}

function showDetail(city) {
    overlay.classList.remove('hidden');
    if (featuredCities.includes(city)) {
        overlayData.innerHTML = `
            <h1 style="font-size: 2.5rem; margin-bottom: 15px;">${city}</h1>
            <p style="font-size: 1.2rem; color: #555; line-height: 1.6;">${cityDetails[city]}</p>
            <div style="margin-top: 30px; background: #fef3c7; padding: 15px; border-radius: 12px; border: 1px solid #d4af37;">
                <b style="color: #b38728;">DURUM:</b> Sosyalfest Envanterine Dahil Edildi.
            </div>
        `;
    } else {
        overlayData.innerHTML = `
            <h1>${city}</h1>
            <p style="margin-top: 20px; color: #86868b;">Bu ilimiz için kültürel şifa envanteri çalışmaları devam etmektedir. Faz 2 kapsamında yayına alınacaktır.</p>
        `;
    }
}

document.querySelector('.close-overlay').onclick = () => overlay.classList.add('hidden');
window.onclick = (e) => { if(e.target == overlay) overlay.classList.add('hidden'); }

init();
