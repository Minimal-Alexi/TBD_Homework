import product2 from "./images/product2.png";
import product3 from "./images/product3.png";
import product4 from "./images/product4.png";
import product5 from "./images/product5.png";
import product6 from "./images/product6.png";
import ps5_main from "./images/ps5.png";
import ps5_1 from "./images/ps5_1.jpg";
import ps5_2 from "./images/ps5_2.jpg";
import ps5_3 from "./images/ps5_controller3.png";
import iphone_1 from "./images/iphone_1.png";
import iphone_2 from "./images/iphone_2.png";
import iphone_3 from "./images/iphone_3.png";
import nitendo from "./images/nitendo_main.png";
import nitendo2 from "./images/nitendo_1.png";
import nitendo3 from "./images/nitendo_2.png";
import nitendo4 from "./images/nitendo_3.png";
import ipad from "./images/ipad-pro-main.png";
import ipad1 from "./images/ipad_1.jpg";
import ipad2 from "./images/ipad_2.jpg";
import ipad3 from "./images/ipad_3.jpg";
import airpods from "./images/airpod.png"
import airpods_1 from "./images/airpod_1.jpg"
import airpods_2 from "./images/airpod_2.jpg"
import airpods_3 from "./images/airpod_3.jpg"
import instax from "./images/instax.png"
import instax_1 from "./images/instax_1.png"
import instax_2 from "./images/instax_2.png"
import instax_3 from "./images/instax_3.png"
import tv from "./images/tv.png"
import tv_1 from "./images/tv_1.png"
import tv_2 from "./images/tv_2.png"
import tv_3 from "./images/tv_3.png"
import xbox from "./images/xbox.png"
import xbox_1 from "./images/xbox_1.png"
import xbox_2 from "./images/xbox_2.png"
import xbox_3 from "./images/xbox_3.png"
import imac from "./images/imac.png"
import imac_1 from "./images/imac_1.png"
import imac_2 from "./images/imac_2.png"
import imac_3 from "./images/imac_3.png"
import monitor from "./images/monitor.png"
import monitor_1 from "./images/monitor_1.png"
import monitor_2 from "./images/monitor_2.png"
import monitor_3 from "./images/monitor_3.png"

export const pageLinks = [
  { id: 1, href: "/", text: "Main" },
  { id: 2, href: "/Settings", text: "Settings" },
  { id: 3, href: "/Productpage/{:id}", text: "Productpage" },
];

export const products = [
  {
    id: 1,
    name: "Sony Playstation 5 Digital Edition",
    price: 399.99,
    reviews: "⭐⭐⭐⭐☆ (120 reviews)",
    description: "The most power full console machine ever built",
    image: [ps5_main, ps5_1, ps5_2, ps5_3],
    sizes: ["S", "M", "L", "XL"],
    isInStock: true,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
      { name: "Blue", hex: "#0000ff" },
      { name: "Yellow", hex: "#ffff00" },
    ],
  },
  {
    id: 2,
    name: "Iphone 15 Pro",
    price: 899.99,
    reviews: "⭐⭐⭐⭐☆ (800 reviews)",
    description: "The BEST iphone ever.",
    image: [product2, iphone_1, iphone_2, iphone_3],
    sizes: ["128", "256", "1T"],
    isInStock: true,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
      { name: "Blue", hex: "#0000ff" },
      { name: "Yellow", hex: "#ffff00" },
    ],
  },
  {
    id: 3,
    name: "Nitendo Switch",
    price: 399.99,
    reviews: "⭐⭐⭐⭐⭐ (1396 reviews)",
    description: "Best selling hand console machine",
    image: [nitendo, nitendo2, nitendo3, nitendo4],
    sizes: ["128", "256"],
    isInStock: true,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
    ],
  },
  {
    id: 4,
    name: "Ipad pro 12.9 inch",
    price: 1090,
    reviews: "⭐⭐⭐☆☆ (907 reviews)",
    description: "Best ipad ever",
    image: [ipad, ipad1, ipad2, ipad3],
    sizes: ["128", "256", "512", "1T"],
    isInStock: false,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
    ],
  },
  {
    id: 5,
    name: "Airpods Pro",
    price: 249.90,
    reviews: "⭐⭐⭐☆☆ (182 reviews)",
    description: "Wireless Earbuds, Bluetooth Headphones, Active Noise Cancellation",
    image: [airpods, airpods_1, airpods_2, airpods_3],
    sizes: [],
    isInStock: false,
    colors: [
      { name: "Red", hex: "#ff0000" },
      { name: "Green", hex: "#00ff00" },
    ],
  },
  {
    id: 6,
    name: "INSTAX Mini 12",
    price: 94.99,
    reviews: "⭐⭐⭐⭐☆ (624 reviews)",
    description: "INSTAX Mini 12 Instant Camera - Automatic exposure adjustment",
    image: [instax, instax_1, instax_2, instax_3],
    sizes: [],
    isInStock: true,
    colors: [
      { name: "Blossom Pink", hex: "#dec7cf" },
      { name: "Clay white", hex: "#d4d2d3" },
      { name: "Lilac-purple", hex: "#cebac3" },
      { name: "Mint green", hex: "#c4cdbc" },
      { name: "Pastel Blue", hex: "#95b2c4" },
    ],
  },
  {
    id: 7,
    name: "Samsung Crystal UHD 4K TV 50 Inch",
    price: 478.21,
    reviews: "⭐⭐⭐⭐☆ (354 reviews)",
    description: "HDR, Q-Symphony, Frameless Design, Smart TV [2021]",
    image: [tv, tv_1, tv_2, tv_3],
    sizes: [],
    isInStock: true,
    colors: [
      { name: "Black", hex: "#0c1417" },
    ],
  },
  {
    id: 8,
    name: "Xbox Series X - 1 TB",
    price: 527.30,
    reviews: "⭐⭐⭐⭐⭐ (352 reviews)",
    description: "Xbox Series X is the fastest, most powerful console ever. Enjoy thousands of games from four console generations that have never played better than on Xbox Series X",
    image: [xbox, xbox_1, xbox_2, xbox_3],
    sizes: [],
    isInStock: true,
    colors: [
      { name: "Black", hex: "#0c1417" },
    ],
  },
  {
    id: 9,
    name: "Apple 2023 iMac",
    price: 1454.32,
    reviews: "⭐⭐⭐⭐⭐ (352 reviews)",
    description: 'All-in-One Desktop Computer with M3 Chip: 8-Core CPU, 8-Core GPU, 24" 4.5K Retina Display, 8GB Shared Memory, 256GB SSD Memory, Matching Accessories.',
    image: [imac, imac_1, imac_2, imac_3],
    sizes: [],
    isInStock: true,
    colors: [
      { name: "Blue", hex: "#0c1417" },
      { name: "Green", hex: "#0c1417" },
      { name: "Rose", hex: "#0c1417" },
      { name: "Silver", hex: "#0c1417" },
    ],
  },
  {
    id: 10,
    name: "LG Full HD Monitor",
    price: 88.28,
    reviews: "⭐⭐⭐⭐⭐ (198 reviews)",
    description: "24MR400-B.AEUQ - 24 Inches, IPS Panel, FreeSync, VESA FDMI, 100Hz, Black",
    image: [monitor, monitor_1, monitor_2, monitor_3],
    sizes: [],
    isInStock: true,
    colors: [
      { name: "Black", hex: "#0c1417" },
    ],
  },
];

export const relatedProducts = [
  {
    id: 1,
    name: "Amazonire Tv ",
    price: 899.99,
    reviews: "⭐⭐⭐☆☆ (600 reviews)",
    image: product3,
  },
  {
    id: 2,
    name: "Air Pod pro",
    price: 259.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product4,
  },
  {
    id: 3,
    name: "Nikon Camera",
    price: 509.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product5,
  },
  {
    id: 4,
    name: "Anker Sound",
    price: 39.9,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product6,
  },
];

export const wishProducts = [
  {
    id: 1,
    name: "Amazonire Tv ",
    price: 899.99,
    reviews: "⭐⭐⭐☆☆ (600 reviews)",
    image: product3,
  },
  {
    id: 2,
    name: "Air Pod pro",
    price: 259.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product4,
  },
  {
    id: 3,
    name: "Nikon Camera",
    price: 509.99,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product5,
  },
  {
    id: 4,
    name: "Anker Sound",
    price: 39.9,
    reviews: "⭐⭐⭐⭐☆ (780 reviews)",
    image: product6,
  },
];

export const countryCodes = [
  { code: 'AF', name: '🇦🇫 Afghanistan' },
  { code: 'AX', name: '🇦🇽 Åland Islands' },
  { code: 'AL', name: '🇦🇱 Albania' },
  { code: 'DZ', name: '🇩🇿 Algeria' },
  { code: 'AS', name: '🇦🇸 American Samoa' },
  { code: 'AD', name: '🇦🇩 Andorra' },
  { code: 'AO', name: '🇦🇴 Angola' },
  { code: 'AI', name: '🇦🇮 Anguilla' },
  { code: 'AQ', name: '🇦🇶 Antarctica' },
  { code: 'AG', name: '🇦🇬 Antigua and Barbuda' },
  { code: 'AR', name: '🇦🇷 Argentina' },
  { code: 'AM', name: '🇦🇲 Armenia' },
  { code: 'AW', name: '🇦🇼 Aruba' },
  { code: 'AU', name: '🇦🇺 Australia' },
  { code: 'AT', name: '🇦🇹 Austria' },
  { code: 'AZ', name: '🇦🇿 Azerbaijan' },
  { code: 'BS', name: '🇧🇸 Bahamas' },
  { code: 'BH', name: '🇧🇭 Bahrain' },
  { code: 'BD', name: '🇧🇩 Bangladesh' },
  { code: 'BB', name: '🇧🇧 Barbados' },
  { code: 'BY', name: '🇧🇾 Belarus' },
  { code: 'BE', name: '🇧🇪 Belgium' },
  { code: 'BZ', name: '🇧🇿 Belize' },
  { code: 'BJ', name: '🇧🇯 Benin' },
  { code: 'BM', name: '🇧🇲 Bermuda' },
  { code: 'BT', name: '🇧🇹 Bhutan' },
  { code: 'BO', name: '🇧🇴 Bolivia' },
  { code: 'BQ', name: '🇧🇶 Bonaire, Sint Eustatius and Saba' },
  { code: 'BA', name: '🇧🇦 Bosnia and Herzegovina' },
  { code: 'BW', name: '🇧🇼 Botswana' },
  { code: 'BR', name: '🇧🇷 Brazil' },
  { code: 'BN', name: '🇧🇳 Brunei' },
  { code: 'BG', name: '🇧🇬 Bulgaria' },
  { code: 'BF', name: '🇧🇫 Burkina Faso' },
  { code: 'BI', name: '🇧🇮 Burundi' },
  { code: 'CV', name: '🇨🇻 Cape Verde' },
  { code: 'KH', name: '🇰🇭 Cambodia' },
  { code: 'CM', name: '🇨🇲 Cameroon' },
  { code: 'CA', name: '🇨🇦 Canada' },
  { code: 'KY', name: '🇰🇾 Cayman Islands' },
  { code: 'CF', name: '🇨🇫 Central African Republic' },
  { code: 'TD', name: '🇹🇩 Chad' },
  { code: 'CL', name: '🇨🇱 Chile' },
  { code: 'CN', name: '🇨🇳 China' },
  { code: 'CO', name: '🇨🇴 Colombia' },
  { code: 'KM', name: '🇰🇲 Comoros' },
  { code: 'CG', name: '🇨🇬 Congo' },
  { code: 'CD', name: '🇨🇩 Democratic Republic of the Congo' },
  { code: 'CR', name: '🇨🇷 Costa Rica' },
  { code: 'HR', name: '🇭🇷 Croatia' },
  { code: 'CU', name: '🇨🇺 Cuba' },
  { code: 'CW', name: '🇨🇼 Curaçao' },
  { code: 'CY', name: '🇨🇾 Cyprus' },
  { code: 'CZ', name: '🇨🇿 Czech Republic' },
  { code: 'DK', name: '🇩🇰 Denmark' },
  { code: 'DJ', name: '🇩🇯 Djibouti' },
  { code: 'DM', name: '🇩🇲 Dominica' },
  { code: 'DO', name: '🇩🇴 Dominican Republic' },
  { code: 'EC', name: '🇪🇨 Ecuador' },
  { code: 'EG', name: '🇪🇬 Egypt' },
  { code: 'SV', name: '🇸🇻 El Salvador' },
  { code: 'GQ', name: '🇬🇶 Equatorial Guinea' },
  { code: 'ER', name: '🇪🇷 Eritrea' },
  { code: 'EE', name: '🇪🇪 Estonia' },
  { code: 'SZ', name: '🇸🇿 Eswatini' },
  { code: 'ET', name: '🇪🇹 Ethiopia' },
  { code: 'FK', name: '🇫🇰 Falkland Islands' },
  { code: 'FO', name: '🇫🇴 Faroe Islands' },
  { code: 'FJ', name: '🇫🇯 Fiji' },
  { code: 'FI', name: '🇫🇮 Finland' },
  { code: 'FR', name: '🇫🇷 France' },
  { code: 'GF', name: '🇬🇫 French Guiana' },
  { code: 'PF', name: '🇵🇬 French Polynesia' },
  { code: 'GA', name: '🇬🇦 Gabon' },
  { code: 'GM', name: '🇬🇲 Gambia' },
  { code: 'GE', name: '🇬🇪 Georgia' },
  { code: 'DE', name: '🇩🇪 Germany' },
  { code: 'GH', name: '🇬🇭 Ghana' },
  { code: 'GI', name: '🇬🇮 Gibraltar' },
  { code: 'GR', name: '🇬🇷 Greece' },
  { code: 'GL', name: '🇬🇱 Greenland' },
  { code: 'GD', name: '🇬🇩 Grenada' },
  { code: 'GP', name: '🇬🇵 Guadeloupe' },
  { code: 'GU', name: '🇬🇺 Guam' },
  { code: 'GT', name: '🇬🇹 Guatemala' },
  { code: 'GG', name: '🇬🇬 Guernsey' },
  { code: 'GN', name: '🇬🇳 Guinea' },
  { code: 'GW', name: '🇬🇼 Guinea-Bissau' },
  { code: 'GY', name: '🇬🇾 Guyana' },
  { code: 'HT', name: '🇭🇹 Haiti' },
  { code: 'HN', name: '🇭🇳 Honduras' },
  { code: 'HK', name: '🇭🇰 Hong Kong' },
  { code: 'HU', name: '🇭🇺 Hungary' },
  { code: 'IS', name: '🇮🇸 Iceland' },
  { code: 'IN', name: '🇮🇳 India' },
  { code: 'ID', name: '🇮🇩 Indonesia' },
  { code: 'IR', name: '🇮🇷 Iran' },
  { code: 'IQ', name: '🇮🇶 Iraq' },
  { code: 'IE', name: '🇮🇪 Ireland' },
  { code: 'IM', name: '🇮🇲 Isle of Man' },
  { code: 'IL', name: '🇮🇱 Israel' },
  { code: 'IT', name: '🇮🇹 Italy' },
  { code: 'CI', name: '🇨🇮 Ivory Coast' },
  { code: 'JM', name: '🇯🇲 Jamaica' },
  { code: 'JP', name: '🇯🇵 Japan' },
  { code: 'JE', name: '🇯🇪 Jersey' },
  { code: 'JO', name: '🇯🇴 Jordan' },
  { code: 'KZ', name: '🇰🇿 Kazakhstan' },
  { code: 'KE', name: '🇰🇪 Kenya' },
  { code: 'KI', name: '🇰🇮 Kiribati' },
  { code: 'KP', name: '🇰🇵 North Korea' },
  { code: 'KR', name: '🇰🇷 South Korea' },
  { code: 'KW', name: '🇰🇼 Kuwait' },
  { code: 'KG', name: '🇰🇬 Kyrgyzstan' },
  { code: 'LA', name: '🇱🇦 Laos' },
  { code: 'LV', name: '🇱🇻 Latvia' },
  { code: 'LB', name: '🇱🇧 Lebanon' },
  { code: 'LS', name: '🇱🇸 Lesotho' },
  { code: 'LR', name: '🇱🇷 Liberia' },
  { code: 'LY', name: '🇱🇾 Libya' },
  { code: 'LI', name: '🇱🇮 Liechtenstein' },
  { code: 'LT', name: '🇱🇹 Lithuania' },
  { code: 'LU', name: '🇱🇺 Luxembourg' },
  { code: 'MO', name: '🇲🇴 Macau' },
  { code: 'MG', name: '🇲🇬 Madagascar' },
  { code: 'MW', name: '🇲🇼 Malawi' },
  { code: 'MY', name: '🇲🇾 Malaysia' },
  { code: 'MV', name: '🇲🇻 Maldives' },
  { code: 'ML', name: '🇲🇱 Mali' },
  { code: 'MT', name: '🇲🇹 Malta' },
  { code: 'MH', name: '🇲🇭 Marshall Islands' },
  { code: 'MQ', name: '🇲🇶 Martinique' },
  { code: 'MR', name: '🇲🇷 Mauritania' },
  { code: 'MU', name: '🇲🇺 Mauritius' },
  { code: 'YT', name: '🇾🇹 Mayotte' },
  { code: 'MX', name: '🇲🇽 Mexico' },
  { code: 'FM', name: '🇫🇲 Micronesia' },
  { code: 'MD', name: '🇲🇩 Moldova' },
  { code: 'MC', name: '🇲🇰 Monaco' },
  { code: 'MN', name: '🇲🇳 Mongolia' },
  { code: 'ME', name: '🇲🇪 Montenegro' },
  { code: 'MS', name: '🇲🇸 Montserrat' },
  { code: 'MA', name: '🇲🇦 Morocco' },
  { code: 'MZ', name: '🇲🇿 Mozambique' },
  { code: 'MM', name: '🇲🇲 Myanmar' },
  { code: 'NA', name: '🇳🇦 Namibia' },
  { code: 'NR', name: '🇳🇷 Nauru' },
  { code: 'NP', name: '🇳🇵 Nepal' },
  { code: 'NL', name: '🇳🇱 Netherlands' },
  { code: 'NC', name: '🇳🇨 New Caledonia' },
  { code: 'NZ', name: '🇳🇿 New Zealand' },
  { code: 'NI', name: '🇳🇮 Nicaragua' },
  { code: 'NE', name: '🇳🇪 Niger' },
  { code: 'NG', name: '🇳🇬 Nigeria' },
  { code: 'NU', name: '🇳🇺 Niue' },
  { code: 'NF', name: '🇳🇫 Norfolk Island' },
  { code: 'MK', name: '🇲🇰 North Macedonia' },
  { code: 'MP', name: '🇲🇵 Northern Mariana Islands' },
  { code: 'NO', name: '🇳🇴 Norway' },
  { code: 'OM', name: '🇴🇲 Oman' },
  { code: 'PK', name: '🇵🇰 Pakistan' },
  { code: 'PW', name: '🇵🇼 Palau' },
  { code: 'PA', name: '🇵🇦 Panama' },
  { code: 'PG', name: '🇵🇬 Papua New Guinea' },
  { code: 'PY', name: '🇵🇾 Paraguay' },
  { code: 'PE', name: '🇵🇪 Peru' },
  { code: 'PH', name: '🇵🇭 Philippines' },
  { code: 'PL', name: '🇵🇱 Poland' },
  { code: 'PT', name: '🇵🇹 Portugal' },
  { code: 'PR', name: '🇵🇷 Puerto Rico' },
  { code: 'QA', name: '🇶🇦 Qatar' },
  { code: 'RO', name: '🇷🇴 Romania' },
  { code: 'RU', name: '🇷🇺 Russia' },
  { code: 'RW', name: '🇷🇼 Rwanda' },
  { code: 'RE', name: '🇷🇪 Réunion' },
  { code: 'BL', name: '🇧🇱 Saint Barthélemy' },
  { code: 'SH', name: '🇸🇭 Saint Helena' },
  { code: 'KN', name: '🇰🇳 Saint Kitts and Nevis' },
  { code: 'LC', name: '🇱🇨 Saint Lucia' },
  { code: 'MF', name: '🇲🇫 Saint Martin' },
  { code: 'PM', name: '🇵🇲 Saint Pierre and Miquelon' },
  { code: 'VC', name: '🇻🇨 Saint Vincent and the Grenadines' },
  { code: 'WS', name: '🇼🇸 Samoa' },
  { code: 'SM', name: '🇸🇲 San Marino' },
  { code: 'ST', name: '🇸🇹 São Tomé and Príncipe' },
  { code: 'SA', name: '🇸🇦 Saudi Arabia' },
  { code: 'SN', name: '🇸🇳 Senegal' },
  { code: 'RS', name: '🇷🇸 Serbia' },
  { code: 'SC', name: '🇸🇨 Seychelles' },
  { code: 'SL', name: '🇸🇱 Sierra Leone' },
  { code: 'SG', name: '🇸🇬 Singapore' },
  { code: 'SX', name: '🇸🇽 Sint Maarten' },
  { code: 'SK', name: '🇸🇰 Slovakia' },
  { code: 'SI', name: '🇸🇮 Slovenia' },
  { code: 'SB', name: '🇸🇧 Solomon Islands' },
  { code: 'SO', name: '🇸🇴 Somalia' },
  { code: 'ZA', name: '🇿🇦 South Africa' },
  { code: 'SS', name: '🇸🇸 South Sudan' },
  { code: 'ES', name: '🇪🇸 Spain' },
  { code: 'LK', name: '🇱🇰 Sri Lanka' },
  { code: 'SD', name: '🇸🇩 Sudan' },
  { code: 'SR', name: '🇸🇷 Suriname' },
  { code: 'SJ', name: '🇸🇯 Svalbard and Jan Mayen' },
  { code: 'SE', name: '🇸🇪 Sweden' },
  { code: 'CH', name: '🇨🇭 Switzerland' },
  { code: 'SY', name: '🇸🇾 Syria' },
  { code: 'TW', name: '🇹🇼 Taiwan' },
  { code: 'TJ', name: '🇹🇯 Tajikistan' },
  { code: 'TZ', name: '🇹🇿 Tanzania' },
  { code: 'TH', name: '🇹🇭 Thailand' },
  { code: 'TL', name: '🇹🇱 Timor-Leste' },
  { code: 'TG', name: '🇹🇬 Togo' },
  { code: 'TK', name: '🇹🇰 Tokelau' },
  { code: 'TO', name: '🇹🇴 Tonga' },
  { code: 'TT', name: '🇹🇹 Trinidad and Tobago' },
  { code: 'TN', name: '🇹🇳 Tunisia' },
  { code: 'TR', name: '🇹🇷 Turkey' },
  { code: 'TM', name: '🇹🇲 Turkmenistan' },
  { code: 'TC', name: '🇹🇨 Turks and Caicos Islands' },
  { code: 'TV', name: '🇹🇻 Tuvalu' },
  { code: 'UG', name: '🇺🇬 Uganda' },
  { code: 'UA', name: '🇺🇦 Ukraine' },
  { code: 'AE', name: '🇦🇪 United Arab Emirates' },
  { code: 'GB', name: '🇬🇧 United Kingdom' },
  { code: 'US', name: '🇺🇸 United States' },
  { code: 'UY', name: '🇺🇾 Uruguay' },
  { code: 'UZ', name: '🇺🇿 Uzbekistan' },
  { code: 'VU', name: '🇻🇺 Vanuatu' },
  { code: 'VE', name: '🇻🇪 Venezuela' },
  { code: 'VN', name: '🇻🇳 Vietnam' },
  { code: 'WF', name: '🇼🇫 Wallis and Futuna' },
  { code: 'EH', name: '🇪🇭 Western Sahara' },
  { code: 'YE', name: '🇾🇪 Yemen' },
  { code: 'ZM', name: '🇿🇲 Zambia' },
  { code: 'ZW', name: '🇿🇼 Zimbabwe' },
]