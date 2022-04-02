import React from 'react';

import Nav from './Layouts/Nav/Nav';
import Banner1 from './Layouts/Banner1/Banner1';
import Banner2 from './Layouts/Banner2/Banner2';
import Banner3 from './Layouts/Banner3/Banner3';
import Product from './Layouts/Product/Product';
import Contact_us from './Layouts/ContactUs/Contact_us';
import Catalogues from './Layouts/Catalogues/Catalogues';
import Catalogue1 from './Layouts/Catalogue1/Catalogue1';
import Footer from './Layouts/Footer/Footer';

function App() {

    var products = [
        {
            id: 1001,
            name: "Product",
            src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
        },
        {
            id: 1002,
            name: "Product",
            src: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 1003,
            name: "Product",
            src: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhaXIlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            id: 1004,
            name: "Product",
            src: "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg",
        },
        {
            id: 1005,
            name: "Product",
            src: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 1006,
            name: "Product",
            src: "https://c0.wallpaperflare.com/preview/579/90/558/products-laptop-computer-keyboard.jpg",
        },
        {
            id: 1007,
            name: "Product",
            src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
        },
        {
            id: 1008,
            name: "Product",
            src: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
        },

    ]

    var catalogue = [
        {
            id: 1001,
            name: "Grocery",
            inStock: "10",
            src: "https://foodro.in/media/category//category-16160702352006.jpeg",
        },
        {
            id: 1002,
            name: "Electronics",
            inStock: "15",
            src: "https://cdn.shopclues.com/images/thumbnails/25390/320/320/IRON21443597576.jpg",
        },
        {
            id: 1003,
            name: "Clothings",
            inStock: "10",
            src: "https://i.pinimg.com/originals/28/14/02/281402f2c1fa8e31b25ae8e3d1cbf9fa.jpg",
        },
        {
            id: 1004,
            name: "Grocery",
            inStock: "5",
            src: "https://kilikood.ca/wp-content/uploads/2020/12/201613091543195Image1.jpg",
        },
        {
            id: 1005,
            name: "Electronics",
            inStock: "2",
            src: "https://5.imimg.com/data5/QO/TR/MY-45581289/helix-mixer-grinder-500x500.jpg",
        },
        {
            id: 1006,
            name: "Clothings",
            inStock: "0",
            src: "https://www.styless.co/wp-content/uploads/2018/08/1-Casual-Wear-679.jpg",
        },
        {
            id: 1007,
            name: "Grocery",
            inStock: "9",
            src: "https://cdn.citymapia.com/assets/business/8245/portfolio/29347/8245_637565416774740550.png?rendered=true",
        },
        {
            id: 1008,
            name: "Electronics",
            inStock: "11",
            src: "https://gsmimpex.in/images/Electronics/Headset%20wholesaler.jpg",
        },
        {
            id: 1009,
            name: "Clothings",
            inStock: "20",
            src: "http://picture-cdn.wheretoget.it/c3v6mo-l-610x610.jpg",
        },
        {
            id: 1010,
            name: "Grocery",
            inStock: "0",
            src: "https://sendgifttopakistan.com/wp-content/uploads/2021/08/grocery-pack.jpg",
        },
        {
            id: 1011,
            name: "Electronics",
            inStock: "0",
            src: "https://www.pngkit.com/png/detail/265-2652893_sale-home-theater-system-jm668b-muf-jack-martin.png",
        },
        {
            id: 1012,
            name: "Clothings",
            inStock: "9",
            src: "https://m.media-amazon.com/images/I/61Xq7J6FpdL._AC_UL320_.jpg",
        },
        {
            id: 1013,
            name: "Grocery",
            inStock: "21",
            src: "https://www.tohfay.com/images/products/medium/m_pid_11373.jpg",
        },
        {
            id: 1014,
            name: "Electronics",
            inStock: "5",
            src: "https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-boat-rockerz-370-wireless-headphone-with-bluetooth-5-0-124763-m.jpg",
        },
        {
            id: 1015,
            name: "Clothings",
            inStock: "7",
            src: "https://ae01.alicdn.com/kf/H1479a83ebd3b491099c17a12a5eb76cdg/Lolita-Harajuku-Kawaii-Hoodie-with-Ear-Women-Print-Graphic-Japanese-Clothes-Cute-Cartoon-Cat-Pink-Sweatshirt.jpg_Q90.jpg_.webp",
        },
        {
            id: 1016,
            name: "Grocery",
            inStock: "0",
            src: "https://media.istockphoto.com/photos/groceries-picture-id171302954?k=20&m=171302954&s=612x612&w=0&h=kDpFXA8IoG22Uxog3YUmWvzBRzwyibd6r4S2v5z-Mno=",
        },
        {
            id: 1017,
            name: "Electronics",
            inStock: "6",
            src: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 1018,
            name: "Clothings",
            inStock: "13",
            src: "https://s7img.carters.com/is/image/carters/CAR_Q1_2022_TG_easter",
        },
        {
            id: 1019,
            name: "Grocery",
            inStock: "9",
            src: "https://previews.123rf.com/images/monticello/monticello1401/monticello140100062/25073631-composition-with-variety-of-grocery-products-isolated-on-white.jpg",
        },
        {
            id: 1020,
            name: "Electronics",
            inStock: "14",
            src: "https://i.pinimg.com/236x/6f/b1/35/6fb13577a8e8afe1617be81ab509ec62--dry-vacuums-home-appliances.jpg",
        },
        {
            id: 1021,
            name: "Clothings",
            inStock: "26",
            src: "https://i5.walmartimages.com/asr/2fea78cb-4926-46d0-af78-2e718e521c43.2ecafa78bbfa8444d60bf2c22d04ff17.jpeg",
        },
        {
            id: 1022,
            name: "Grocery",
            inStock: "0",
            src: "https://img.freepik.com/free-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg",
        },
        {
            id: 1023,
            name: "Electronics",
            inStock: "8",
            src: "https://i.pinimg.com/474x/da/82/07/da8207aa08e154147d2408ac81b99e3b--vacuum-cleaners-home-appliances.jpg",
        },
        {
            id: 1024,
            name: "Clothings",
            inStock: "3",
            src: "https://i.pinimg.com/originals/93/0d/b5/930db53814b25a1a55016b2258f4c6f8.jpg",
        },
  

    ]


  return (
    <>
    <Nav />
    <Banner1 />
    <Product data={products}/>
    <Banner2 />
    <Contact_us />
    <Catalogues data={catalogue}/>
    <Banner3 />
    <Catalogue1 data={catalogue}/>
    <Footer />
    </>
  )
}

export default App