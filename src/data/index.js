import laylalay from "./../music/laylalay.mp3";
import niuDuyen from "./../music/NiuDuyen.mp3";
import tinhBanDieuKy from "./../music/TinhBanDieuKy.mp3";

import img1 from "./../images/slideshow/1.jpg";
import img2 from "./../images/slideshow/2.jpg";
import img3 from "./../images/slideshow/3.jpg";

import hien1 from "./../images/hien1.jpg"

const data = {
    songs: [
        {
            name: "Lay la lay",
            singer: "Jack",
            path: laylalay,
        },
        {
            name: "Níu Duyên",
            singer: "Lê Bảo Bình",
            path: niuDuyen,
        },
        {
            name: "Tình Bạn Diệu Kỳ",
            singer: "Ricky Star, Lăng LD, AMee",
            path: tinhBanDieuKy,
        },
    ],
    images: [
        {
            id: 1,
            title: "Image 1",
            path: img1,
            content: "Perseverance, you can only get through the long nights of wanting to give up, only to see the light.",
            author: "李子柒Liziqi",
        },
        {
            id: 2,
            title: "Image 2",
            path: img2,
            content: "Insanity is doing the same thing, over and over again, but expecting different results.",
            author: "Narcotics Anonymous"
        },
        {
            id: 3,
            title: "Image 3",
            path: img3,
            content: "No one can make you feel inferior without your consent.",
            author: "Eleanor Roosevelt",
        },
    ],

    cards: [{
        img: 'https://brandinginasia.com/wp-content/uploads/2019/08/Ronaldo-Shopee-Ambassador-Branding-in-Asia-1068x772.jpg',
        name: 'Clone Shopee',
        title: 'img 1',
        content: 'I used HTLM&CSS3 and responsive with Grid System',
        link: 'https://htmlcss-ten.vercel.app/',
        type: 1,
    },
    {
        img: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/186538750_503710587640638_8480963535691231166_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=ndpCQ-XP_BMAX8drI65&_nc_ht=scontent.fhan2-4.fna&oh=ea463dc0e2cc0800661ee0c20fa6205c&oe=60CE2BE0',
        name: 'Covid-19 App',
        title: 'img 3',
        content: 'I used ReactJS, Hooks and Highcharts',
        link: 'http://lio-covid19.surge.sh/',
        type: 1,
    },

    {
        img: 'https://lh6.googleusercontent.com/Wa0xhMBix0PLylS9fhFSUzOp-ta4mEQ-0PuU1Flg2QgMsJaPsfBDdUofdpF-K0cpbblXi5J9hNaS-v-73TLy0ikKBMMppFFmjvY0lH_h2uAyFQTSaIIpnDDupkDtahY0WHrPj-Oe',
        name: 'Clone Tiki',
        title: 'img 2',
        content: 'I used ReactJS, Hooks, Redux and Material-UI',
        link: 'http://huucucreactjs.surge.sh/',
        type: 1,

    },
    {
        img: hien1,
        name: 'Album Hien&Khoa',
        title: 'img 4',
        content: 'I used Fujifilm xe1 + 35mm and Photoshop to Blend color',
        link: 'https://www.facebook.com/media/set/?set=a.2176615395806712&type=3',
        type: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        name: 'Play Music',
        title: 'img 3',
        content: 'I used HTLM&CSS3 and code with JavaScript',
        link: '',
        type: 1,
    },
    ]


}

export default data;