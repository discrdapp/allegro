//section1
import legoCar from "../Img/Products/LEGO-City-Elektryczny-samochod-sportowy.webp";
import legoDinosaur from "../Img/Products/LEGO-Creator-3-w-1-Potezne-dinozaury.webp";
import hourseToy from "../Img/Products/SCHLEICH-Boks-Stajenny-Zagroda-Tori-i-Princess.webp";
import fisherToy from "../Img/Products/FISHER-PRICE-PRZYTULANKA-WYDRA-SZUMIACY-USPOKAJACZ.webp";
import chessBoard from "../Img/Products/Szachy-DREWNIANE-TURNIEJOWE-PRODUCENT-DUZE-senator.webp";

//section2
import keyboard from "../Img/Products/Section2/Klawiatura-Sharkoon-PureWriter-TKL-RGB-Kailh-Blue.webp";
import mouse from '../Img/Products/Section2/Mysz-GENESIS-Krypton-220.jpg'
import lamp from '../Img/Products/Section2/Lampa-solarna-POCHODNIA-efekt-plomien-12-LED-P-200.webp'
import owl from '../Img/Products/Section2/LAMPA-SOLARNA-OGRODOWA-SOWA-WBIJANA-WODOODPORNA.jpg'
import brush from '../Img/Products/Section2/SZCZOTKA-GUMOWA-DO-CZYSZCZENIA-ZAMSZU-I-NUBUKU.jpg'
import blender from '../Img/Products/Section2/BLENDER-KIELICHOWY-KUCHENNY-MIKSER-KOKTAJLE-1-5L.jpg'

//inspiration section
import bikes from '../Img/InspirationSection/bikes.png'
import running from '../Img/InspirationSection/running.png'
import skating from '../Img/InspirationSection/skating.png'
import sports from '../Img/InspirationSection/sports.png'
import teamSports from '../Img/InspirationSection/team-sports.png'
import travels from '../Img/InspirationSection/travels.png'
import waterSports from '../Img/InspirationSection/water-sports.png'

//section3
import coffee from '../Img/Products/Section3/Kawa-Brazil-MONTE-CARMELO-1kg-100-ARABICA-SWIEZA.jpg'
import joggers from '../Img/Products/Section3/MESKIE-SPODNIE-DRESOWE-JOGGERY-KOLORY-ox170-XL.jpg'
import carMat from '../Img/Products/Section3/MATA-DO-SAMOCHODU-NA-SIEDZENIE-DLA-PSA-do-przewozu.jpg'
import belt from '../Img/Products/Section3/PETERSON-pasek-meski-parciany-parciak-do-spodni.jpg'
import tea from '../Img/Products/Section3/TWININGS-ZESTAW-HERBATA-CZARNA-LISCIASTA-400G.jpg'
import juicer from '../Img/Products/Section3/Wyciskarka-Do-Cytrusow-Sokow-Owocow-Elektryczna.jpg'
import coffee2 from '../Img/Products/Section3/Kawa-smakowa-Orzech-Laskowy-250g.jpg'

const PRODUCTS_SECTION1 = [
	{
		id: "s1_1",
		img: legoCar,
		price: "39,99",
		title: "LEGO City Elektryczny samochód sportowy 60383",
		description: "Dzieci, które lubią bawić się samochodami, pokochają zestaw LEGO City Elektryczny samochód sportowy (60383), który ma futurystyczne neonowożółte elementy, fajne felgi i duży spojler.",
		parameters: [
			{
				typy: ["Stan", "Faktura", "Materiał", "Kolor", "Wzór", "Typ", "Rodzaj", "Marka"]
			},
			{
				parametry: ["Nowy", "Wystawiam fakturę VAT", "plastik", "biały", "normalny", "klasyczny", "LEGO", "LEGO"],
			}
		],
		rating: [10, 8, 6, 5, 2],
		shopName: "LEGO",
		shopImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/800px-LEGO_logo.svg.png",
		moreImg: ["https://a.allegroimg.com/s512/11682e/de244e9a469691f21677e20de88c/Zestaw-Prezent-Klocki-LEGO-CITY-60383-Elektryczne-Auto-Sportowe-5-Torba", "https://a.allegroimg.com/s512/1116d9/2d2da923415c85c1078d6ea04080/Zestaw-Prezent-Klocki-LEGO-CITY-60383-Elektryczne-Auto-Sportowe-5-Torba-EAN-GTIN-5702017399829", "https://a.allegroimg.com/s512/11b2c2/89d9291e49139e13e64f75ddc3bc/Zestaw-Prezent-Klocki-LEGO-CITY-60383-Elektryczne-Auto-Sportowe-5-Torba-Numer-produktu-60383", "https://a.allegroimg.com/s512/11ee64/453fee81434fb79abfcfd620020a/Zestaw-Prezent-Klocki-LEGO-CITY-60383-Elektryczne-Auto-Sportowe-5-Torba-Marka-LEGO", "https://a.allegroimg.com/s512/11306e/f8a358974c3e9070f76052fe1986/Zestaw-Prezent-Klocki-LEGO-CITY-60383-Elektryczne-Auto-Sportowe-5-Torba-Seria-Miasto"],
	},
	{
		id: "s1_2",
		img: legoDinosaur,
		price: "68,99",
		title: "LEGO Creator 3 w 1 - Potężne dinozaury (31058)",
		bought: "161",
	},
	{
		id: "s1_3",
		img: hourseToy,
		price: "134,90",
		title: "SCHLEICH Boks Stajenny Zagroda Tori i Princess",
		bought: "5",
	},
	{
		id: "s1_4",
		img: fisherToy,
		price: "98,99",
		title: "FISHER PRICE PRZYTULANKA WYDRA SZUMIĄCY USPOKAJACZ",
		bought: "96",
	},
	{
		id: "s1_5",
		img: chessBoard,
		price: "237,07",
		title: "Szachy DREWNIANE TURNIEJOWE PRODUCENT DUŻE",
		bought: "80",
	},
	{
		id: "s1_6",
		img: fisherToy,
		price: "98,99",
		title: "FISHER PRICE PRZYTULANKA WYDRA SZUMIĄCY USPOKAJACZ",
		bought: "96",
	},
	{
		id: "s1_7",
		img: chessBoard,
		price: "237,07",
		title: "Szachy DREWNIANE TURNIEJOWE PRODUCENT DUŻE",
		bought: "80",
	},
];

const PRODUCTS_SECTION2 = [
	{
		id: "s2_1",
		img: keyboard,
		price: "339,00",
		title: "Klawiatura Sharkoon PureWriter TKL RGB Kailh Blue",
		bought: "21",
	},
	{
		id: "s2_2",
		img: mouse,
		price: "59,99",
		title: "Mysz GENESIS Krypton 220",
		bought: "8",
	},
	{
		id: "s2_3",
		img: lamp,
		price: "12,90",
		title: "Lampa solarna POCHODNIA efekt płomień 12 LED P-200",
		bought: "132",
	},
	{
		id: "s2_4",
		img: owl,
		price: "34,99",
		title: "LAMPA SOLARNA OGRODOWA SOWA WBIJANA WODOODPORNA",
		bought: "68",
	},
	{
		id: "s2_5",
		img: brush,
		price: "14,99",
		title: "SZCZOTKA GUMOWA DO CZYSZCZENIA ZAMSZU I NUBUKU",
		bought: "20",
	},
	{
		id: "s2_6",
		img: blender,
		price: "71,99",
		title: "BLENDER KIELICHOWY KUCHENNY MIKSER KOKTAJLE 1,5L",
		bought: "219",
	},
	{
		id: "s2_7",
		img: keyboard,
		price: "339,00",
		title: "Klawiatura Sharkoon PureWriter TKL RGB Kailh Blue",
		bought: "21",
	},
	{
		id: "s2_8",
		img: mouse,
		price: "59,99",
		title: "Mysz GENESIS Krypton 220",
		bought: "8",
	},
];

const PRODUCTS_SECTION3 = [
	{
		id: "s3_1",
		img: tea,
		price: "85,99",
		title: "TWININGS ZESTAW HERBATA CZARNA LIŚCIASTA 400G",
		bought: "7",
	},
	{
		id: "s3_2",
		img: belt,
		price: "17,99",
		title: "PETERSON pasek męski parciany parciak do spodni",
		bought: "169",
	},
	{
		id: "s3_3",
		img: carMat,
		price: "119,00",
		title: "MATA DO SAMOCHODU NA SIEDZENIE DLA PSA do przewozu",
		bought: "4",
	},
	{
		id: "s3_4",
		img: coffee,
		price: "47,49",
		title: "Kawa Brazil MONTE CARMELO 1kg 100% ARABICA ŚWIEŻA",
		bought: "50",
	},
	{
		id: "s3_5",
		img: joggers,
		price: "32,00",
		title: "MĘSKIE SPODNIE DRESOWE JOGGERY KOLORY ox170 - XL",
		bought: "18",
	},
	{
		id: "s3_6",
		img: juicer,
		price: "160,99",
		title: "Wyciskarka Do Cytrusów Soków Owoców Elektryczna",
		bought: "26",
	},
	{
		id: "s3_7",
		img: coffee2,
		price: "25,31",
		title: "Kawa smakowa Orzech Laskowy 250g",
		bought: "98",
	},

]

const INSPIRATION_SECTION = [
	{
		id: "s4_1",
		img:travels,
		title:"Turystyka",
	},
	{
		id: "s4_2",
		img:sports,
		title:"Sporty towarzyskie",
	},
	{
		id: "s4_3",
		img: running,
		title:"Bieganie",
	},
	{
		id: "s4_4",
		img:waterSports,
		title:"Sporty wodne",
	},
	{
		id: "s4_5",
		img: bikes,
		title:"Rowery",
	},
	{
		id: "s4_6",
		img:teamSports,
		title:"Sporty drużynowe",
	},
	{
		id: "s4_7",
		img:skating,
		title:"Skating i slackline",
	},
]

export { PRODUCTS_SECTION1, PRODUCTS_SECTION2,PRODUCTS_SECTION3, INSPIRATION_SECTION };
