// const HEADER_CONTAINER = document.getElementById('header-container');
// const HEADER_SHOPPING = document.getElementById('shopping');
// const HEADER_INPUT = document.getElementById('header-search__form-input');
// const HEADER_SEARCH_BTN = document.getElementById('header-search__btn');
// const MAIN_CONTAINER = document.getElementById('main');
// const FOOTER_CONTAINER = document.getElementById('footer-container');

// const MAIN_PRODUCTS = document.getElementById('main-container__products');


const ROOT_HEADER = document.getElementById('header');
const HEADER_RIGHT_SIDE = document.getElementById('header-right-side');
const INPUT_SEARCH = document.getElementById('header-search__form-input');
const ROOT_PRODUCTS = document.getElementById('products');
const ROOT_SHOPPING = document.getElementById('shopping');
const ROOT_SPINNER = document.getElementById('spinner');
const ROOT_ERROR = document.getElementById('error');


// const CATALOG = [
//     {
//         "id": "el1",
//         "name": "FENDER SQUIER BULLET STRAT HT HSS BLK",
//         "img": "https://i.ibb.co/QJfqs4K/1.jpg",
//         "price": 13600
//     },
//     {
//         "id": "el2",
//         "name": "FENDER SQUIER AFFINITY",
//         "img": "https://i.ibb.co/pKrG5ZJ/2.jpg",
//         "price": 23900
//     },
//     {
//         "id": "el3",
//         "name": "IBANEZ GIO GRG121DX-BKF BLACK FLAT",
//         "img": "https://i.ibb.co/NnvcYhR/3.jpg",
//         "price": 21600
//     },
//     {
//         "id": "el4",
//         "name": "EPIPHONE LES PAUL STUDIO LT EBONY",
//         "img": "https://i.ibb.co/4Tg91WL/4.jpg",
//         "price": 19900
//     },
//     {
//         "id": "el5",
//         "name": "FENDER SQUIER BULLET TREM HSS AWT",
//         "img": "https://i.ibb.co/MC7sy1F/5.jpg",
//         "price": 14500
//     },
//     {
//         "id": "el6",
//         "name": "FENDER SQUIER BULLET MUSTANG HH BLK",
//         "img": "https://i.ibb.co/qNBWPb0/6.jpg",
//         "price": 14600
//     },
//     {
//         "id": "el7",
//         "name": "FENDER SQUIER BULLET STRAT HT AWT",
//         "img": "https://i.ibb.co/WH1h2wV/7.jpg",
//         "price": 13600
//     },
//     {
//         "id": "el8",
//         "name": "JACKSON JS22-7 DINKY SATIN BLACK",
//         "img": "https://i.ibb.co/2cBg9g9/8.jpg",
//         "price": 28700
//     },
//     {
//         "id": "el9",
//         "name": "JACKSON JS11 DINKY OLYMPIC WHITE",
//         "img": "https://i.ibb.co/wKxFRM8/9.jpg",
//         "price": 18100
//     },
//     {
//         "id": "el10",
//         "name": "YAMAHA PACIFICA 012 WH",
//         "img": "https://i.ibb.co/30qJcZX/10.jpg",
//         "price": 15990
//     }
// ];

const CATALOG = [{"title":" Ноутбук Acer Aspire 5 A515-45G-R9ML (NX.A8CEU.00N) Pure Silver","price":"25999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/248481392.jpg","id":"id1"},{"title":" Ноутбук ASUS TUF Gaming F15 FX506LH-HN236 (90NR03U2-M006F0) Bonfire Black / Intel Core i5-10300H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650","price":"36999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/285886586.jpg","id":"id2"},{"title":" Ноутбук Lenovo IdeaPad 3 15ALC6 (82KU01C4RA) Arctic Grey","price":"27999","srcImg":"https://content.rozetka.com.ua/goods/images/big/280562759.jpg","id":"id3"},{"title":" Ноутбук Apple MacBook Air 13\" M1 256GB 2020 (MGN63) Space Gray","price":"42999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/144249716.jpg","id":"id4"},{"title":" Ноутбук Acer Aspire 7 A715-42G-R7BK (NH.QE5EU.00L) Charcoal Black","price":"39999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/288173292.jpg","id":"id5"},{"title":" Ноутбук ASUS Laptop X515EA-BQ2066 (90NB0TY1-M00VF0) Slate Grey / Intel Core i3-1115G4 / RAM 12 ГБ / SSD 512 ГБ","price":"22999","srcImg":"https://content.rozetka.com.ua/goods/images/big/275056537.jpg","id":"id6"},{"title":" Ноутбук Lenovo IdeaPad L3 15ITL6 (82HL00HCRA) Platinum Grey","price":"21999","srcImg":"https://content.rozetka.com.ua/goods/images/big/284542810.jpg","id":"id7"},{"title":" Ноутбук ASUS TUF Gaming F15 FX506HE-HN012 (90NR0704-M00CW0) Graphite Black / Intel Core i5-11400H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 Ti","price":"43999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/283529272.jpg","id":"id8"},{"title":" Ноутбук Lenovo V14 G2 ITL (Intel i3-1115G4/8/128F/int/W10Pro) Black","price":"17777","srcImg":"https://content.rozetka.com.ua/goods/images/big/274406559.jpg","id":"id9"},{"title":" Ноутбук Acer Aspire 7 A715-75G-72ZX (NH.Q87EU.008) Charcoal Black","price":"34999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/290933826.jpg","id":"id10"},{"title":" Ноутбук ASUS Laptop X515JA-EJ1814 (90NB0SR3-M34690) Peacock Blue / Intel Pentium Gold 6805 / RAM 8 ГБ / SSD 256 ГБ","price":"17999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/275080610.jpg","id":"id11"},{"title":" Ноутбук Lenovo IdeaPad 3 15ALC6 (82KU00NERA) Arctic Grey","price":"19999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/280547595.jpg","id":"id12"},{"title":" Ноутбук Acer Aspire 7 A715-42G-R5B1 (NH.QE5EU.00M) Charcoal Black","price":"36999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/261445556.jpg","id":"id13"},{"title":" Ноутбук ASUS TUF Gaming F15 FX506HC-HN004 (90NR0724-M00NU0) Graphite Black / Intel Core i5-11400H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050","price":"42999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/281560784.jpg","id":"id14"},{"title":" Ноутбук Apple MacBook Pro 13\" M2 256Gb 2022 (MNEH3UA/A) Space Gray","price":"54999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/269272125.jpg","id":"id15"},{"title":" Ноутбук Apple MacBook Pro 16\" M1 Pro 512GB 2021 (MK183UA/A) Space Gray","price":"114999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/229714100.jpg","id":"id16"},{"title":" Ноутбук ASUS Vivobook 15 M1502IA-EJ205 (90NB0Y51-M00DF0) Quiet Blue / AMD Ryzen 7 4800H / RAM 8 ГБ / SSD 512 ГБ","price":"26999","srcImg":"https://content.rozetka.com.ua/goods/images/big/276258363.jpg","id":"id17"},{"title":" Ноутбук Lenovo IdeaPad 3 15ITL6 (82H802TPRA) Arctic Grey","price":"23333","srcImg":"https://content.rozetka.com.ua/goods/images/big/279748158.jpg","id":"id18"},{"title":" Ноутбук Acer Aspire 7 A715-42G-R0VS (NH.QBFEU.00A) Charcoal Black","price":"32999","srcImg":"https://content.rozetka.com.ua/goods/images/big/163386254.jpg","id":"id19"},{"title":" Ноутбук ASUS Laptop E410MA-BV1969 (90NB0Q11-M014M0) Peacock Blue / Intel Celeron N4020 / RAM 4 ГБ / SSD 256 ГБ","price":"12999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/295452624.jpg","id":"id20"},{"title":" Ноутбук Lenovo IdeaPad Gaming 3 15IHU6 (82K101FJRA) Shadow Black","price":"32499","srcImg":"https://content2.rozetka.com.ua/goods/images/big/280598520.jpg","id":"id21"},{"title":" Ноутбук ASUS ROG Strix G17 G713IC-HX010 (90NR05M2-M002K0) Eclipse Gray / AMD Ryzen 7 4800H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050","price":"44999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/282185973.jpg","id":"id22"},{"title":" Ноутбук Acer Aspire 5 A515-45G-R7C8 (NX.A8CEU.00K) Pure Silver","price":"23999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/289930043.jpg","id":"id23"},{"title":" Ноутбук MSI Modern 14 B11MOU-874XUA Carbon Gray / металевий корпус","price":"18999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/234489777.jpg","id":"id24"},{"title":" Ноутбук ASUS Laptop X515JA-BQ4074 (90NB0SR2-M02RE0) Transparent Silver / Intel Core i5-1035G1 / RAM 8 ГБ / SSD 256 ГБ","price":"23999","srcImg":"https://content.rozetka.com.ua/goods/images/big/276234355.jpg","id":"id25"},{"title":" Ноутбук Acer Aspire 7 A715-42G-R8BL (NH.QDLEU.008) Charcoal Black","price":"40999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/254116608.jpg","id":"id26"},{"title":" Ноутбук Lenovo IdeaPad 3 15IAU7 (82RK00FHRA) Arctic Grey","price":"30999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/284451097.jpg","id":"id27"},{"title":" Ноутбук ASUS ROG Strix G17 G713IE-HX014 (90NR05B2-M001Y0) Eclipse Gray / AMD Ryzen 7 4800H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 Ti","price":"46999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/247191594.jpg","id":"id28"},{"title":" Ноутбук Apple MacBook Air 13.6\" M2 256GB 2022 (MLY13UA/A) Starlight","price":"54999","srcImg":"https://content.rozetka.com.ua/goods/images/big/269257669.jpg","id":"id29"},{"title":" Ноутбук Lenovo IdeaPad Gaming 3 15ACH6 (82K201NXRA) Shadow Black","price":"46999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/280612876.jpg","id":"id30"},{"title":" Ноутбук Lenovo IdeaPad Gaming 3 15IAH7 (82S900UHRA) Onyx Grey","price":"44990","srcImg":"https://content2.rozetka.com.ua/goods/images/big/282796832.jpg","id":"id31"},{"title":" Ноутбук ASUS Laptop X515EP-BQ327 (90NB0TZ1-M04660) Slate Grey / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce MX330","price":"23999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/288164079.jpg","id":"id32"},{"title":" Ноутбук Asus ROG Strix G15 G513IC-HN004 (90NR0502-M003L0) Eclipse Gray / AMD Ryzen 7 4800H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050","price":"43999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/283528165.jpg","id":"id34"},{"title":" Ноутбук Lenovo IdeaPad Gaming 3 16IAH7 (82SA00EDRA) Onyx Grey","price":"53333","srcImg":"https://content1.rozetka.com.ua/goods/images/big/280630226.jpg","id":"id35"},{"title":" Ноутбук Acer Aspire 3 A315-23-R684 (NX.HVTEU.03A) Charcoal Black","price":"13999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/272730325.jpg","id":"id36"},{"title":" Ноутбук ASUS Laptop X415JA-EK2418W (90NB0ST2-M010Y0) Slate Grey / Intel Core i5-1035G1 / RAM 12 ГБ / SSD 256 ГБ / Windows 11 Home","price":"24599","srcImg":"https://content1.rozetka.com.ua/goods/images/big/282386411.jpg","id":"id37"},{"title":" Ноутбук ASUS Vivobook S 15 OLED K3502ZA-L1202W (90NB0WK1-M00P50) Neutral Grey / Intel Core i5-12500H / RAM 8 ГБ / SSD 512 ГБ / Windows 11 Home","price":"39999","srcImg":"https://content.rozetka.com.ua/goods/images/big/290056862.jpg","id":"id38"},{"title":" Ноутбук Acer Aspire 5 A515-56G-50WE (NX.AT5EU.00J) Charcoal Black","price":"29999","srcImg":"https://content.rozetka.com.ua/goods/images/big/285466259.jpg","id":"id39"},{"title":" Ноутбук Lenovo IdeaPad 5 Pro 16ACH6 (82L500XNRA) Cloud Grey","price":"49999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/280626933.jpg","id":"id40"},{"title":" Ноутбук Prestigio SmartBook 141 С7 (PSB141C07CHH_MG_CIS) Silver","price":"9999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/253826353.jpg","id":"id41"},{"title":" Ноутбук ASUS Laptop M515DA-BQ1255 (90NB0T41-M00C20) Slate Grey / AMD Ryzen3 3250U / RAM 8 ГБ / SSD 256 ГБ","price":"20999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/293894060.jpg","id":"id42"},{"title":" Ноутбук MSI Modern 14 B11MOU-885XUA Carbon Gray / металевий корпус","price":"24999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/248403839.jpg","id":"id43"},{"title":" Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700KPRA) Arctic Grey","price":"13333","srcImg":"https://content.rozetka.com.ua/goods/images/big/258420085.jpg","id":"id44"},{"title":" Ноутбук ASUS Vivobook 15 X1502ZA-EJ887 (90NB0VX1-M018X0) Quiet Blue / Intel Core i5-1235U / RAM 16 ГБ / SSD 512 ГБ","price":"31999","srcImg":"https://content2.rozetka.com.ua/goods/images/big/286240084.jpg","id":"id45"},{"title":" Ноутбук Acer Nitro 5 AN515-57 (NH.QESEU.00Z) Shale Black","price":"43999","srcImg":"https://content.rozetka.com.ua/goods/images/big/286643519.jpg","id":"id46"},{"title":" Ноутбук Lenovo IdeaPad 1 15IAU7 (82QD004ARA) Cloud Grey","price":"24999","srcImg":"https://content.rozetka.com.ua/goods/images/big/280538466.jpg","id":"id47"},{"title":" Ноутбук ASUS VivoBook 17 X712EA-BX819 (90NB0TW1-M00J10) Transparent Silver / Intel Pentium Gold 7505 / RAM 8 ГБ / SSD 256 ГБ","price":"19499","srcImg":"https://content2.rozetka.com.ua/goods/images/big/278090757.jpg","id":"id48"},{"title":" Ноутбук ASUS VivoBook 17 X712EA-BX817 (90NB0TW1-M00HZ0) Transparent Silver / Intel Pentium Gold 7505 / RAM 8 ГБ / SSD 512 ГБ","price":"20499","srcImg":"https://content2.rozetka.com.ua/goods/images/big/278089722.jpg","id":"id50"},{"title":" Ноутбук Acer Aspire 3 A315-58G-548E (NX.ADUEU.01N) Pure Silver","price":"26999","srcImg":"https://content1.rozetka.com.ua/goods/images/big/286638013.jpg","id":"id51"},{"title":" Ноутбук Acer Enduro Urban N3 EUN314-51W-37DT (NR.R1CEU.00F) Hunter Green / Протиударний корпус","price":"29999","srcImg":"https://content.rozetka.com.ua/goods/images/big/261444987.jpg","id":"id52"},{"title":" Ноутбук HP 255 G8 (2W1E7EA) Asteroid Silver","price":"","srcImg":"https://content.rozetka.com.ua/goods/images/big/233090553.jpg","id":"id53"},{"title":" Ноутбук ASUS Vivobook S 16X M5602QA-MB094 (90NB0XW2-M003T0) Sandy Grey / AMD Ryzen 5 5600H / RAM 16 ГБ / SSD 512 ГБ","price":"36999","srcImg":"https://content.rozetka.com.ua/goods/images/big/291166763.jpg","id":"id54"},{"title":" Ноутбук ASUS Vivobook 15 X1500EA-EJ2286 (90NB0TY5-M02X70) Indie Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ","price":"20999","srcImg":"https://content.rozetka.com.ua/goods/images/big/288528964.jpg","id":"id55"}];

// let newCatalog = [];
// CATALOG.forEach(el => {
//     if(el.title !=='' && el.srcImg !=='')
//     newCatalog.push(el)
// })
// FOOTER_CONTAINER.innerHTML = JSON.stringify(newCatalog)
// 

// console.log(newCatalog.length)
console.log(CATALOG.length)