let currentCategory = '';

// База даних готових комплектів техніки
const bundlesData = {
    office: { 
        title: "Комплект 'Офіс Стандарт'", 
        desc: "Оптимальне рішення для базової офісної роботи.", 
        items: [
            "Ноутбук Lenovo V15: 15.6' / Intel Celeron / RAM: 4 ГБ / SSD: 128 ГБ", 
            "Canon i-SENSYS MF3010: лазерний монохромний БФП", 
            "Мишка в подарунок"
        ], 
        price: 24200, 
        img: "img/bundle1.png",
        gallery: ["img/Lenovo V15 G2 IJL.jpg", "img/Canon i-SENSYS MF3010.jpg"] 
    },
    business: { 
        title: "Комплект 'Бізнес Про'", 
        desc: "Потужний набір для продуктивної роботи команди.", 
        items: [
            "Ноутбук Acer Aspire Lite: 15.6' / Ryzen 7 / RAM: 16 ГБ / SSD: 512 ГБ", 
            "БФП Струменевий Epson L1250 з вбудованою СНПЧ та Wi-Fi", 
            "Маршрутизатор інтернет WiFi6 TP-Link Archer AX17"
        ], 
        price: 37000, 
        img: "img/bundle2.png",
        gallery: ["img/Aspire Lite AL15.jpg", "img/Epson L1250.jpg", "img/TP-Link Archer.jpg"]
    },
    max: { 
        title: "Комплект 'Максимум'", 
        desc: "Повний набір техніки для керівника або IT-спеціаліста.", 
        items: ["MacBook Pro M3", "Сервер Dell", "Мережеве сховище"], 
        price: 239000, 
        img: "img/bundle3.png",
        gallery: ["img/bundle3.png", "img/graphics.png", "img/server.png", "img/office_net.png"]
    }
};

function openForm() {
    if (!currentCategory) setCategory('pc');
    showForm();
}

function showForm() {
    document.getElementById('main-action').style.display = 'none';
    document.getElementById('config-form').style.display = 'block';
    const recommended = document.querySelector('.recommended-section');
    if (recommended) recommended.style.display = 'none';
}

function changeMainImg(imgSrc, event) {
    const cardImage = event.target.closest('.result-image').querySelector('img');
    if (cardImage) cardImage.src = imgSrc;
}
function setCategory(category, element = null) {
    currentCategory = category;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    // Ховаємо всі блоки опцій фільтрації
    document.getElementById('printer-options').style.display = 'none';
    document.getElementById('pc-options').style.display = 'none';
    document.getElementById('network-options').style.display = 'none';

    // Показуємо потрібний блок опцій відповідно до категорії
    if (category === 'printers') {
        document.getElementById('printer-options').style.display = 'block';
        document.getElementById('config-card-title').innerText = 'Принтери';
    }
    if (category === 'pc') {
        document.getElementById('pc-options').style.display = 'block';
        document.getElementById('config-card-title').innerText = 'Комп’ютери';
    }
    if (category === 'network') {
        document.getElementById('network-options').style.display = 'block';
        document.getElementById('config-card-title').innerText = 'Мережа';
    }
    showForm();
    getResult();
}

// Початок головної функції виведення результатів
function getResult() {
    const resDisplay = document.getElementById('result-display');
    
    // Локальна база даних індивідуальних товарів
    const db = {
        printers: {
            laser: [
                { 
                    title: "БФП лазерний XEROX WorkCentre 3025BI (3025V_BI)",
                    desc: "Лазерний принтер",
                    items: ["Технологія друку: лазерна", "Тип друку: монохромна", "Максимальний формат носія: A4 (297 х 210 мм)", "Швидкість ч/б друку А4: 20 стор/хв", "Час виходу першої ч/б сторінки: 8.5 сек", "Максимальна якість друку: 1200 x 1200 dpi", "Комунікації: USB 2.0 тип B", "Максимальне місячне навантаження: 15000 сторінок"],
                    price: 6600,
                    img: "img/XEROX.jpg"
                },
                { 
                    title: "МФУ лазерний XEROX WorkCentre 3025NI",
                    desc: "Лазерний принтер",
                    items: ["Технологія друку: лазерна", "Тип друку: монохромна", "Максимальний формат носія: A4 (297 х 210 мм)", "Швидкість ч/б друку А4: 20 стор/хв", "Час виходу першої ч/б сторінки: 8.5 сек", "Максимальна якість друку: 1200 x 1200 dpi", "Комунікації: USB 2.0 тип B; RJ-11", "Факс: монохромний", "Можливості: друк з мобільних пристроїв", "Максимальне місячне навантаження: 15000 сторінок"],
                    price: 10200,
                    img: "img/XEROX WorkCentre.jpg"
                },
                { 
                    title: "БФП лазерний Xerox C235 Wi-Fi ",
                    desc: "Лазерний принтер",
                    items: ["Технологія друку: лазерна", "Тип друку: кольоровий", "Максимальний формат носія: A4 (297 х 210 мм)", "Швидкість ч/б друку А4: 22 стор/хв", "Час виходу першої ч/б сторінки: 11 сек", "Швидкість кольорового друку А4: 22 стор/хв", "Максимальна якість друку: 600 x 600 dpi", "Кількість картриджів: 4 шт.", "Моделі сумісних картриджів: 006R04395, 006R04396, 006R04397, 006R04398", "Комунікації: Ethernet 10/100/1000baseTX; Wi-Fi USB 2.0 тип B", "Факс: кольоровий", "Можливості: двосторонній друк (дуплекс)", "Максимальне місячне навантаження: 30000 сторінок"],
                    price: 22600,
                    img: "img/Xerox C235.jpg",
                    gallery: ["img/Xerox C235.jpg", "img/Xerox C235_1.jpg", "img/Xerox C235_2.jpg"]
                }
            ],
            inkjet: [
                { 
                    title: "Canon PIXMA G3410 з Wi-Fi",
                    desc: "Струменевий принтер",
                    items: ["Технологія друку: Струменева", "Друк: Кольоровий", "Функції: Друк, Копіювання, Сканування", "Особливості: 3 в 1, Зі сканером, Друк без полів, Друк з мобільних пристроїв", "Вбудована СНПЧ: Так", "Сумісні витратні матеріали: GI-490", "Місткість лотка паперу: 100 стор.", "Інтерфейси підключення: USB, Wi-Fi", "Сумісність з ОС: Android, iOS, Windows"],
                    price: 7500,
                    img: "img/Canon G3410.jpg",
                    gallery: ["img/Canon G3410.jpg", "img/Canon G3410_1.jpg", "img/Canon G3410_2.jpg"]
                },
                { 
                    title: "HP Smart Tank 580 з Wi-Fi",
                    desc: "Струменевий принтер",
                    items: ["Технологія друку: Струменева", "Друк: Кольоровий", "Функції: Друк, Копіювання, Сканування", "Особливості: 3 в 1, Зі сканером, Друк без полів, Друк з мобільних пристроїв, Друк з USB-накопичувачів", "Вбудована СНПЧ: Так", "Сумісні витратні матеріали: HP GT53XL 135-ml Black Original Ink Bottle 1VV21AE, HP GT52 Cyan Original Ink Bottle M0H54AE, HP GT52 Magenta Original Ink Bottle M0H55AE, HP GT52 Yellow Original Ink Bottle M0H56AE", "Місткість лотка паперу: 100 стор.", "Інтерфейси підключення: Bluetooth, USB, Wi-Fi", "Сумісність з ОС: Mac OS, Windows"],
                    price: 8999,
                    img: "img/HP Smart.jpg",
                    gallery: ["img/HP Smart.jpg", "img/HP Smart_1.jpg", "img/HP Smart_2.jpg"]
                },
                { 
                    title: "БФП Epson L3251",
                    desc: "Струменевий принтер",
                    items: ["Технологія друку: Струменева", "Друк: Кольоровий", "Функції: Друк, Копіювання, Сканування", "Особливості: 3 в 1, Зі сканером, Друк без полів (до 10х15 см), Друк з мобільних пристроїв", "Вбудована СНПЧ: Так", "Сумісні витратні матеріали: C13T00S34A, C13T00S24A, C13T00S44A, C13T00S14A, C13T00S64A", "Місткість лотка паперу: 100 стор.", "Інтерфейси підключення: USB, Wi-Fi", "Сумісність з ОС: Mac OS, Windows"],
                    price: 10200,
                    img: "img/Epson L3251.jpg",
                    gallery: ["img/Epson L3251.jpg", "img/Epson L3251_1.jpg", "img/Epson L3251_2.jpg"]
                }
            ],
            dotmatrix: [
                {
                    title: "Принтер EPSON LX-350",
                    desc: "Матричний",
                    items: ["Тип: лінійно-матричний", "Кількість голок: 9", "Кількість копій (+оригінал): 5", "Швидкість друку (High speed draft, 10 cpi): 347 зн/сек.", "Товщина паперу (мм): 0.52", "Інтерфейс (вбудований): USB"],
                    price: 10500,
                    img: "img/EPSON LX-350.jpg",
                    gallery: ["img/EPSON LX-350.jpg", "img/EPSON LX-350_1.jpg"]
                },
                {
                    title: "Принтер EPSON LQ-630",
                    desc: "Матричний",
                    items: ["Тип: точково-матричний", "Кількість голок: 24", "Максимальний формат друку: A4", "Кількість копій (+оригінал): 5", "Швидкість друку (High speed draft, 10 cpi): 300 зн/сек.", "Tовщина паперу (мм): 0.07 - 0.39", "Пам'ять: 32", "Ресурс картриджа (млн. символів): 4"],
                    price: 18300,
                    img: "img/EPSON LQ-630.jpg",
                    gallery: ["img/EPSON LQ-630.jpg"]
                },
                {
                    title: "Принтер EPSON LQ-690II",
                    desc: "Матричний",
                    items: ["Тип: точково-матричний", "Кількість голок: 24", "Максимальний формат друку: A4+", "Роздільна здатність друку: 360 x 180", "Кількість копій (+оригінал): 6", "Швидкість друку (High speed draft, 10 cpi): 487 зн/сек.", "Товщина паперу (мм): У рулоні: 0,065 мм - 0,49 мм"],
                    price: 25200,
                    img: "img/EPSON LQ-690II.jpg",
                    gallery: ["img/EPSON LQ-690II.jpg", "img/EPSON LQ-690II_1.jpg"]
                }
            ]
        },
        pc: {
            simple: [
                { 
                    title: "Ноутбук Pixus Bit Lite",
                    desc: "Для простих задач",
                    items: ["Діагональ екрану: 14,1\'", "Роздільна здатність екрану: 1920x1080 Full HD", "Тип матриці: IPS", "Виробник процесора: Intel", "Модель центрального процесора: Celeron N5095", "Об'єм ОЗП: 8 ГБ", "Об'єм накопичувача: 256 ГБ", "Тип накопичувача: SSD", "Операційна система: Windows 11 Home"],
                    price: 13800,
                    img: "img/Pixus Bit.jpg",
                    gallery: ["img/Pixus Bit.jpg", "img/Pixus Bit1.jpg", "img/Pixus Bit2.jpg", "img/Pixus Bit3.jpg"]
                },
                { 
                    title: "Ноутбук HP Laptop 15-fd0160ua",
                    desc: "Для простих задач",
                    items: ["Діагональ екрану: 15,6\'", "Роздільна здатність екрану: 1920x1080 Full HD", "Тип матриці: IPS", "Виробник процесора: Intel", "Модель центрального процесора: Processor N100", "Кількість ядер: 4 ядра", "Об'єм ОЗП: 8 ГБ", "Тип оперативної пам'яті: DDR4", "Об'єм накопичувача: 256 ГБ", "Тип накопичувача: SSD"],
                    price: 16899,
                    img: "img/HP Laptop 15.jpg",
                    gallery: ["img/HP Laptop 15.jpg", "img/HP Laptop 151.jpg", "img/HP Laptop 152.jpg", "img/HP Laptop 153.jpg"]
                },
                { 
                    title: "Ноутбук Asus Vivobook Go 15 E1504FA-BQ052 Mixed Black",
                    desc: "Для простих задач",
                    items: ["Діагональ екрану: 15,6\'", "Роздільна здатність екрану: 1920x1080 Full HD", "Частота оновлення екрану: 60 Гц", "Тип матриці: IPS-level", "Виробник процесора: AMD", "Модель центрального процесора: Ryzen 3 7320U", "Об'єм ОЗП: 8 ГБ", "Об'єм накопичувача: 512 ГБ", "Тип накопичувача: SSD"],
                    price: 19899,
                    img: "img/Asus Vivobook Go 15.jpg",
                    gallery: ["img/Asus Vivobook Go 15.jpg", "img/Asus Vivobook Go 151.jpg", "img/Asus Vivobook Go 152.jpg"]
                }
            ],
            business: [
                { 
                    title: "Ноутбук Acer Aspire Lite AL15-72P",
                    desc: "Для роботи та бізнесу",
                    items: ["Діагональ екрану: 15,6\'", "Роздільна здатність екрану: 1920x1080 Full HD", "Тип матриці: TFT", "Покриття екрану: Матове", "Виробник процесора: Intel", "Модель центрального процесора: Core i5-13420H", "Кількість ядер: 8 ядер", "Об'єм ОЗП: 16 ГБ", "Об'єм накопичувача: 512 ГБ", "Тип накопичувача: SSD"],
                    price: 25999,
                    img: "img/Acer Aspire Lite.jpg",
                    gallery: ["img/Acer Aspire Lite.jpg", "img/Acer Aspire Lite1.jpg", "img/Acer Aspire Lite2.jpg", "img/Acer Aspire Lite3.jpg"]
                },
                { 
                    title: "Ноутбук Lenovo IdeaPad Slim 3 15IRH10",
                    desc: "Для роботи та бізнесу",
                    items: ["Діагональ екрану: 15,3\'", "Роздільна здатність екрану: 1920x1200 Full HD", "Тип матриці: IPS", "Яcкравість (nit): 300 nit", "Виробник процесора: Intel", "Модель центрального процесора: Core i5-13420H", "Кількість ядер: 8 ядер", "Об'єм ОЗП: 16 ГБ", "Об'єм накопичувача: 512 ГБ", "Тип накопичувача: SSD"],
                    price: 30900,
                    img: "img/Lenovo IdeaPad Slim.jpg",
                    gallery: ["img/Lenovo IdeaPad Slim.jpg", "img/Lenovo IdeaPad Slim1.jpg", "img/Lenovo IdeaPad Slim2.jpg"]
                },
                { 
                    title: "Ноутбук Apple MacBook Air 13.6 M5",
                    desc: "Для роботи та бізнесу",
                    items: ["Діагональ екрану: 13,6\'", "Роздільна здатність екрану: 2560x1664", "Тип матриці: IPS", "Виробник процесора: Apple", "Модель центрального процесора: M5", "Кількість ядер: 10 ядер", "Об'єм ОЗП: 16 ГБ", "Об'єм накопичувача: 512 ГБ", "Операційна система: macOS Tahoe"],
                    price: 65900,
                    img: "img/Apple MacBook Air.jpg",
                    gallery: ["img/Apple MacBook Air.jpg", "img/Apple MacBook Air1.jpg", "img/Apple MacBook Air2.jpg", "img/Apple MacBook Air3.jpg"]
                }
            ],
            gaming: [
                {
                    title: "ASUS TUF Gaming F16",
                    desc: "Ігровий ноутбук",
                    items: ["Діагональ екрану: 16\"", "Роздільна здатність екрану: 1920x1200 Full HD", "Частота оновлення екрану: 144 Гц", "Тип матриці: IPS-level", "Модель центрального процесора: Core 5-210H", "Об'єм ОЗП: 16 ГБ", "Об'єм накопичувача: 512 ГБ", "Модель відеокарти: GeForce RTX 3050"],
                    price: 41500,
                    img: "img/asus1.jpg",
                    gallery: ["img/asus1.jpg", "img/asus2.jpg", "img/asus3.jpg"]
                },
                {
                    title: "Lenovo LOQ 15IRX9",
                    desc: "Ігровий ноутбук",
                    items: ["Діагональ екрану: 15,6\"", "Модель процесора: Ryzen 5 7235HS", "Об'єм ОЗП: 16 ГБ", "Об'єм накопичувача: 512 ГБ", "Модель відеокарти: GeForce RTX 3050"],
                    price: 48500,
                    img: "img/lenovo1.jpg",
                    gallery: ["img/lenovo1.jpg", "img/lenovo2.jpg", "img/lenovo3.jpg"]
                },
                {
                    title: "Lenovo Legion 5 15AHP10 Eclipse Black",
                    desc: "Ігровий ноутбук",
                    items: ["Діагональ екрану: 15,1\"", "Роздільна здатність екрану: 2560x1600", "Частота оновлення екрану: 165 Гц", "Тип матриці: OLED", "Об'єм ОЗП: 32 ГБ", "Об'єм накопичувача: 1 ТБ", "Модель відеокарти: GeForce RTX 5060"],
                    price: 77999,
                    img: "img/Lenovo Legion 5.jpg",
                    gallery: ["img/Lenovo Legion 5.jpg", "img/Lenovo Legion 5-1.jpg", "img/Lenovo Legion 5-2.jpg"]
                }
            ],
            graphics: [ 
                { 
                    title: "MacBook Pro M3", 
                    desc: "Для графіки та дизайну", 
                    items: ["Процесор: M3 Apple Silicon", "Екран: Liquid Retina XDR", "ОЗП: 16 ГБ", "Накопичувач: 512 ГБ SSD"], 
                    price: 92000, 
                    img: "graphics.png",
                    gallery:[]
                }
            ]
        },
        network: {
            home: [
                { 
                    title: "Wi-Fi роутер TP-LINK TL-WR845N", 
                    desc: "Бюджетний бездротовий маршрутизатор стандарту N300 (Wi-Fi 4)", 
                    items: ["Швидкість Wi-Fi: до 300 Мбіт/с на частоті 2.4 ГГц (стандарт 802.11b/g/n)",
                            "Провідні порти: 1 порт WAN (10/100 Мбіт/с) та 4 локальні порти LAN (10/100 Мбіт/с)",
                            "Антени: 3 зовнішні всеспрямовані антени для покращення сигналу",
                            "Режими роботи: стандартний роутер, точка доступу, підсилювач сигналу (репітер) та WISP",
                            "Живлення: адаптер 9 В / 0.6 А."], 
                    price: 859, 
                    img: "img/TP-LINK TL-WR845N.jpg",
                    gallery:["img/TP-LINK TL-WR845N.jpg", "img/TP-LINK TL-WR845N2.jpg", "img/TP-LINK TL-WR845N3.jpg",]
                },
                { 
                    title: "Wi-Fi роутер TENDA AC8", 
                    desc: "Доступний двохдіапазонний гігабітний Wi-Fi роутер стандарту AC1200 (Wi-Fi 5)", 
                    items: ["Швидкість Wi-Fi: до 1167 Мбіт/с сумарно до 867 Мбіт/с на 5 ГГц та до 300 Мбіт/с на 2.4 ГГц)",
                            "Гігабітні порти: 1 порт WAN (10/100/1000 Мбіт/с) та 3 порти LAN (10/100/1000 Мбіт/с))",
                            "Антени: 4 зовнішні антени з підсиленням 6 dBi",
                            "Процесор: Realtek 1 ГГц (техпроцес 28 нм) для стабільної обробки трафіку",
                            "Функція Beamforming: концентрує бездротовий сигнал напряму в бік ваших пристроїв"], 
                    price: 1100, 
                    img: "img/TENDA AC8.jpg",
                    gallery:["img/TENDA AC8.jpg", "img/TENDA AC82.jpg", "img/TENDA AC83.jpg",]
                }
            ],
            office: [
                { 
                    title: "Маршрутизатор GRANDSTREAM GWN7062E Wi-Fi Dual-Band Router", 
                    desc: "Дводіапазонний VPN-маршрутизатор класу AX3000 з підтримкою Wi-Fi 6 (802.11ax), розроблений для малих та середніх офісів", 
                    items: ["Стандарт Wi-Fi: Wi-Fi 6 (802.11ax) із сумарною швидкістю до 3 Гбіт/с (до 2402 Мбіт/с на 5 ГГц та до 573.5 Мбіт/с на 2.4 ГГц)", 
                            "Конфігурація антен: 3 внутрішні антени, підтримка MU-MIMO 2×2 на 2.4 ГГц та покращена схема 3×3 на 5 ГГц для стабільного покриття", 
                            "Процесор: Двоядерний процесор із частотою 1.3 ГГц, що дозволяє легко обробляти зашифрований VPN-трафік",
                            "Інтерфейси: 1 гігабітний порт WAN та 3 гігабітні порти LAN, а також 1 високошвидкісний порт USB 3.0.",
                            "Ємність мережі: Одночасна підтримка до 128 активних бездротових пристроїв"],
                    price: 2250,
                    img: "img/GRANDSTREAM GWN7062E.jpg",
                    gallery:["img/GRANDSTREAM GWN7062E.jpg", "img/GRANDSTREAM GWN7062E2.jpg"]
                },
                { 
                    title: "Комутатор мережевий TP-Link TL-SG108", 
                    desc: "Компактний та надійний некерований гігабітний комутатор (світч) у міцному металевому корпусі, призначений для розширення дротової мережі офісних приміщень", 
                    items: ["Порти: 8 гігабітних портів RJ45 (10/100/1000 Мбіт/с) з автоматичним визначенням швидкості", 
                            "Тип керування: Некерований (Plug and Play) — працює одразу «з коробки» без жодних налаштувань.", 
                            "Корпус: Міцний метал, безвентиляторна конструкція (абсолютно безшумний)",
                            "Монтаж: Настільний або настінний (є спеціальні пази для кріплення)",
                            "Енергоефективність: Підтримка технології Green Tech, яка знижує споживання енергії залежно від статусу порту та довжини кабелю."],
                    price: 1300,
                    img: "img/TP-Link TL-SG108.jpg",
                    gallery:["img/TP-Link TL-SG108.jpg", "img/TP-Link TL-SG1082.jpg"]
                }
            ],
            server: [
                { 
                    title: "Сервер DELL R620 10SFF", 
                    desc: "Компактний та високощільний двопроцесорний сервер стійкового типу (1U) 12-го покоління (12G), призначений для віртуалізації, баз даних та високонавантажених обчислень", 
                    items: ["Процесори: Підтримка до 2-х процесорів серій Intel Xeon E5-2600 або E5-2600 v2 (до 12 ядер / 24 потоків на один сокет).", 
                            "Оперативна пам'ять: 24 слоти для DDR3 ECC Reg (максимально до 768 ГБ), що забезпечує високу щільність пам’яті для віртуальних машин.", 
                            "Дискова підсистема (10SFF): 10 гарячих слотів під 2.5-дюймові SAS/SATA HDD або SSD.",
                            "RAID-контролер: Апаратні плати PERC (H310, H710 або H710p з кеш-пам'яттю та батарейкою захисту).",
                            "Блоки живлення: Два блоки живлення з підтримкою гарячої заміни (Hot-Plug) та резервуванням (потужність 495W, 750W або 1100W).",
                            "Керування: Фірмовий модуль віддаленого адміністрування iDRAC7 (Enterprise або Express) для моніторингу через браузер та KVM-over-IP."], 
                    price: 35000, 
                    img: "img/DELL R620 10SFF.jpg",
                    gallery:["img/DELL R620 10SFF.jpg", "img/DELL R620 10SFF2.jpg"]
                }
            ]
        },
        bundles: bundlesData
    };

    if (currentCategory === 'printers') {
        const el = document.getElementById('printerTech');
        if (el) result = db.printers[el.value];
    } 
    else if (currentCategory === 'pc') {
        const el = document.getElementById('pcType');
        if (el) {
            const val = el.value;
            result = (val === 'gaming') ? db.pc.gaming : db.pc[val];
        }
    } 
    else if (currentCategory === 'network') {
        const el = document.getElementById('netType');
        if (el) result = db.network[el.value];
    }

    if (!result) return;
    resDisplay.innerHTML = '';

    const createCardHTML = (item) => {
        const galleryJSON = item.gallery ? JSON.stringify(item.gallery).replace(/"/g, '&quot;') : 'null';
        const features = item.items ? item.items.map(i => `<li>${i}</li>`).join('') : '';
        return `
        <div class="result-flex">
            <div class="result-text">
                <h4 class="res-title">${item.title}</h4>
                <p class="res-desc">${item.desc}</p>
                <ul class="res-list">${features}</ul>
                <div class="res-price">${item.price.toLocaleString()} грн</div>
                <br>
                <div class="btn-group">
                    <button class="btn-print" onclick="window.print()">📄 Зберегти у PDF</button>
                    <button class="btn-buy" onclick="openOrderForm('${item.title.replace(/'/g, "\\'")}')">🛒 Замовити</button>
                </div>
            </div>
            <div class="result-image">
                <img src="${item.img}" style="max-width:250px; cursor:zoom-in;" onclick="openModal('${item.img}', ${galleryJSON})">
                <div class="thumb-list">
                    ${item.gallery ? item.gallery.map(t => `<img src="${t}" class="thumb-img" onclick="openModal('${t}', ${galleryJSON})">`).join('') : ''}
                </div>
            </div>
        </div>`;
    };

    if (Array.isArray(result)) {
        resDisplay.innerHTML = `<h3 style="margin-left:20px;">Доступні варіанти</h3>`;
        result.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-box fade-in';
            card.innerHTML = createCardHTML(item);
            resDisplay.appendChild(card);
        });
    } else {
        const card = document.createElement('div');
        card.className = 'result-box fade-in';
        card.innerHTML = createCardHTML(result);
        resDisplay.appendChild(card);
    }
    resDisplay.style.display = 'block';
}

// 🔹 ФУНКЦІЇ МОДАЛЬНОГО ВІКНА ГАЛЕРЕЇ
let currentImages = []; 
let currentIndex = 0; 

function openModal(src, gallery = null) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');
    currentImages = gallery ? gallery : [src];
    currentIndex = currentImages.indexOf(src);
    if (currentIndex === -1) currentIndex = 0;
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = currentImages[currentIndex];
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) modal.style.display = "none";
}

// 🔹 НАВІГАЦІЯ САЙТУ
function showAbout() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('about-section').style.display = 'block';
    const recommended = document.querySelector('.recommended-section');
    if (recommended) recommended.style.display = 'none';
    window.scrollTo(0, 0);
}

function showHero() {
    document.querySelector('.hero').style.display = 'flex';
    document.getElementById('about-section').style.display = 'none';
    const recommended = document.querySelector('.recommended-section');
    if (recommended) recommended.style.display = 'block';
    window.scrollTo(0, 0);
}
function changeModalImg(direction) {
    if (currentImages.length <= 1) return;
    currentIndex += direction;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    const fullImg = document.getElementById('fullImage');
    if (fullImg) fullImg.src = currentImages[currentIndex];
}

// Керування кнопками клавіатури в галереї
window.onkeydown = function(event) {
    const modal = document.getElementById('imageModal');
    if (modal && modal.style.display === "flex") {
        if (event.key === "ArrowLeft") changeModalImg(-1);
        if (event.key === "ArrowRight") changeModalImg(1);
        if (event.key === "Escape") closeModal();
    }
};

// Відображення деталей обраного готового комплекту
function setBundle(bundleType) {
    const resDisplay = document.getElementById('result-display');
    const configForm = document.getElementById('config-form');
    const mainAction = document.getElementById('main-action');
    const recommended = document.querySelector('.recommended-section');
    
    document.querySelector('.main-title').style.display = 'none';
    document.querySelector('.sub-title').style.display = 'none';
    document.querySelector('.category-list').style.display = 'none';
    document.getElementById('config-card-title').innerText = "Деталі обраного комплекту";
    if (recommended) recommended.style.display = 'none';
    
    const selected = bundlesData[bundleType];
    if (!selected) return;
    
    mainAction.style.display = 'none';
    configForm.style.display = 'block';
    resDisplay.style.display = 'block';
    resDisplay.innerHTML = ''; 

    const backBtn = document.createElement('button');
    backBtn.innerHTML = "← Назад до вибору";
    backBtn.style.cssText = "background:none; border:none; color:#0066cc; cursor:pointer; font-weight:600; margin-bottom:20px; padding:0;";
    backBtn.onclick = function() {
        document.querySelector('.main-title').style.display = 'block';
        document.querySelector('.sub-title').style.display = 'block';
        document.querySelector('.category-list').style.display = 'flex';
        document.getElementById('config-card-title').innerText = "Параметри підбору";
        if (recommended) recommended.style.display = 'block';
        configForm.style.display = 'none';
        mainAction.style.display = 'block';
        window.scrollTo(0, 0);
    };
    resDisplay.appendChild(backBtn);

    const galleryJSON = JSON.stringify(selected.gallery).replace(/"/g, '&quot;');
    const card = document.createElement('div');
    card.className = 'result-box fade-in';
    card.innerHTML = `
    <div class="result-flex">
        <div class="result-text">
            <h4 class="res-title">${selected.title}</h4>
            <p class="res-desc">${selected.desc}</p>
            <ul class="res-list">${selected.items.map(i => `<li>${i}</li>`).join('')}</ul>
            <div class="res-price">${selected.price.toLocaleString()} грн</div>
            <br>
            <div class="btn-group">
                <button class="btn-print" onclick="window.print()">🖨️ Зберегти PDF</button>
                <button class="btn-buy" onclick="openOrderForm('${selected.title.replace(/'/g, "\\'")}')">🛒 Замовити</button>
            </div>
        </div>
        <div class="result-image">
            <img src="${selected.img}" style="max-width:280px; cursor:zoom-in;" onclick="openModal('${selected.img}', ${galleryJSON})">
            <div class="thumb-list" style="margin-top:10px; display:flex; gap:5px;">
                ${selected.gallery.map(t => `<img src="${t}" class="thumb-img" style="width:50px; cursor:pointer;" onclick="openModal('${t}', ${galleryJSON})">`).join('')}
            </div>
        </div>
    </div>`;
    resDisplay.appendChild(card);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// 🔹 ФУНКЦІЇ ЗАМОВЛЕННЯ ТА КОНСУЛЬТАЦІЙ
function openOrderForm(productTitle) {
    const modal = document.getElementById('orderModal');
    const titleElem = document.getElementById('orderProductTitle');
    const submitBtn = document.querySelector('#orderModal .btn-main');
    if (modal && titleElem) {
        modal.style.display = 'flex';
        titleElem.innerText = productTitle;
        if (productTitle.includes('Консультація')) {
            submitBtn.innerText = 'Відправити запит';
        } else {
            submitBtn.innerText = 'Підтвердити замовлення';
        }
    }
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) modal.style.display = 'none';
}

function sendOrder(event) {
    event.preventDefault();
    const title = document.getElementById('orderProductTitle').innerText;
    alert("Дякуємо! Замовлення на " + title + " прийнято. Ми зателефонуємо вам!");
    closeOrderModal();
}

function addOrderButtonsToBundles() {
    const bundles = document.querySelectorAll('.bundle-card');
    bundles.forEach(card => {
        const titleElem = card.querySelector('h3');
        if (!titleElem) return;
        const title = titleElem.innerText;
        if (!card.querySelector('.btn-buy')) {
            const buyBtn = document.createElement('button');
            buyBtn.className = 'btn-buy';
            buyBtn.innerHTML = '🛒 Замовити';
            buyBtn.style.marginLeft = '10px';
            buyBtn.onclick = () => openOrderForm(title);
            const detailBtn = card.querySelector('.btn-detail');
            if (detailBtn && detailBtn.parentNode) {
                detailBtn.parentNode.insertBefore(buyBtn, detailBtn.nextSibling);
            } else {
                card.appendChild(buyBtn);
            }
        }
    });
}
window.addEventListener('load', addOrderButtonsToBundles);

// 🔹 ВІДЖЕТ ОНЛАЙН-ЧАТУ
function toggleChat() {
    const chat = document.getElementById('chatWindow');
    if (chat) {
        chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
    }
}

function sendChat(event) {
    event.preventDefault();
    const msg = document.getElementById('chatMsg').value;
    alert(`Ваше повідомлення: "${msg}" надіслано консультанту!`);
    document.getElementById('chatMsg').value = '';
    toggleChat();
}

setTimeout(() => {
    const chat = document.getElementById('chatWindow');
    if (chat) chat.style.display = 'block';
}, 5000);
// 🔹 ФІНАЛЬНІ ФУНКЦІЇ ОНЛАЙН-ТЕСТУ (QUIZ) С ПОДВІЙНИМ ПОВЗУНКОМ
let quizData = {
    category: '',
    budget: '',
    comment: ''
};

function openQuiz() {
    const modal = document.getElementById('quizModal');
    const step1 = document.getElementById('quiz-step-1');
    const step2 = document.getElementById('quiz-step-2');
    if (!modal || !step1 || !step2) return;

    modal.style.display = 'flex';
    step1.style.display = 'block';
    step2.style.display = 'none';
    
    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');
    if (sliderMin) sliderMin.value = 10000;
    if (sliderMax) sliderMax.value = 60000;
    
    controlSliders();

    const quizComment = document.getElementById('quizComment');
    if (quizComment) quizComment.value = ''; 
}

function closeQuiz() {
    const modal = document.getElementById('quizModal');
    if (modal) modal.style.display = 'none';
}

const brandsDb = {
    pc: ['Asus', 'Lenovo', 'HP', 'Apple'],
    printers: ['Xerox', 'Canon', 'HP', 'Epson'],
    network: ['TP-Link', 'MikroTik', 'Dell']
};

function selectDeviceType(categoryChoice) {
    quizData.category = categoryChoice; 
    const step1 = document.getElementById('quiz-step-1');
    const step2 = document.getElementById('quiz-step-2');
    if (step1 && step2) {
        step1.style.display = 'none';
        step2.style.display = 'block';
    }

    const container = document.getElementById('brandsContainer');
    if (container) {
        container.innerHTML = ''; 
        const currentBrands = brandsDb[categoryChoice] || [];
        
        currentBrands.forEach(brand => {
            container.innerHTML += `
                <label style="display: flex; align-items: center; gap: 8px; font-size: 1rem; color: #333; cursor: pointer;">
                    <input type="checkbox" name="quizBrands" value="${brand}" style="width: 18px; height: 18px; cursor: pointer;">
                    ${brand}
                </label>
            `;
        });
    }
}

function prevStep() {
    const step1 = document.getElementById('quiz-step-1');
    const step2 = document.getElementById('quiz-step-2');
    if (step1 && step2) {
        step2.style.display = 'none';
        step1.style.display = 'block';
    }
}

function controlSliders() {
    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');
    const priceMinTxt = document.getElementById('priceMinTxt');
    const priceMaxTxt = document.getElementById('priceMaxTxt');

    if (!sliderMin || !sliderMax) return;

    let minVal = parseInt(sliderMin.value);
    let maxVal = parseInt(sliderMax.value);

    if (minVal >= maxVal) {
        sliderMin.value = maxVal - 1000;
        minVal = maxVal - 1000;
    }

    if (priceMinTxt) priceMinTxt.innerText = minVal.toLocaleString();
    if (priceMaxTxt) priceMaxTxt.innerText = maxVal.toLocaleString();
}

function submitQuizWithDoubleSlider() {
    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');
    const minPrice = sliderMin ? parseInt(sliderMin.value) : 2000;
    const maxPrice = sliderMax ? parseInt(sliderMax.value) : 100000;
    
    const checkedBoxes = document.querySelectorAll('input[name="quizBrands"]:checked');
    const selectedBrands = Array.from(checkedBoxes).map(cb => cb.value);
    
    const quizComment = document.getElementById('quizComment');
    quizData.comment = quizComment ? quizComment.value : '';
    
    closeQuiz();

    let alertMessage = `Прийнято! Шукаємо варіанти від ${minPrice.toLocaleString()} до ${maxPrice.toLocaleString()} грн.`;
    if (selectedBrands.length > 0) alertMessage += `\nБажані бренди: ${selectedBrands.join(', ')}`;
    if (quizData.comment) alertMessage += `\nКоментар: "${quizData.comment}"`;
    alert(alertMessage);

    setCategory(quizData.category); 

    if (quizData.category === 'pc') {
        const pcSelect = document.getElementById('pcType');
        if (pcSelect) {
            if (maxPrice < 25000) pcSelect.value = 'simple';
            else if (maxPrice >= 25000 && maxPrice <= 45000) pcSelect.value = 'business';
            else pcSelect.value = 'gaming';
        }
    } 
    else if (quizData.category === 'printers') {
        const printerSelect = document.getElementById('printerTech');
        if (printerSelect) printerSelect.value = (maxPrice < 9000) ? 'inkjet' : 'laser';
    } 
    else if (quizData.category === 'network') {
        const netSelect = document.getElementById('netType');
        if (netSelect) netSelect.value = (maxPrice < 5000) ? 'home' : 'office';
    }

    getResult(); 
}