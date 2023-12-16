import upcoming1 from  '../images/upcoming-1.png'
import upcoming2 from  '../images/upcoming-2.png'
import upcoming3 from  '../images/upcoming-3.png'
import upcoming4 from  '../images/upcoming-4.png'
import movie1 from  '../images/movie-1.png'
import movie2 from  '../images/movie-2.png'
import movie3 from  '../images/movie-3.png'
import movie4 from  '../images/movie-4.png'
import movie5 from  '../images/movie-5.png'
import movie6 from  '../images/movie-6.png'
import movie7 from  '../images/movie-7.png'
import movie8 from  '../images/movie-8.png'
import series1 from  '../images/series-1.png'
import series2 from  '../images/series-2.png'
import series3 from  '../images/series-3.png'
import series4 from  '../images/series-4.png'


const moviedata = [
    {
        id: 1,
        name: "The Northman",
        imdb: 8.5,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "137 min",
        category: [
            "action", "drama","drama"
        ],
        resolution:"hd",
        views:100000,
        likes:85000,
        image:{upcoming1},
        iframe:"https://www.youtube.com/embed/oMSdFM12hOw?si=-FGTAZj6HvL0ILRi"
    },
    {
        id: 2,
        name: "Doctor Strange in the Multiverse of Madness",
        imdb: 6.9,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "126 min",
        category: [
            "action", "adventure","fantasy"
        ],
        resolution:"4k",
        views:200000,
        likes:11000,
        image:{upcoming2},
        iframe:"https://www.youtube.com/embed/aWzlQ2N6qqg?si=fEAvcKyJcnOvEcmw"
    },
    {
        id: 3,
        name: "Memory",
        imdb: 5.7,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "114 min",
        category: [
            "action", "crime","thriller"
        ],
        resolution:"2k",
        views:16000,
        likes:10000,
        image:{upcoming3},
        iframe:"https://www.youtube.com/embed/ye63hQLDj4k?si=W-j6XwFVXTzvBscE"
    },
    {
        id: 4,
        name: "The Unbearable Weight of Massive Talent",
        imdb: 7.0,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "107 min",
        category: [
            "action", "crime","comedy"
        ],
        resolution:"hd",
        views:20000,
        likes:12000,
        image:{upcoming4},
        iframe:"https://www.youtube.com/embed/x2YHPZMj8r4?si=JmbDyOyB51kO21eD"
    },
    {
        id: 5,
        name: "Sonic the Hedgehog 2",
        imdb: 7.8,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "122 min",
        category: [
            "action", "adventure","comedy"
        ],
        resolution:"2k",
        views:250000,
        likes:120000,
        image:{movie1},
        iframe:"https://www.youtube.com/embed/G5kzUpWAusI?si=k_3WIy2J8_ZtXGM5"
    },
    {
        id: 6,
        name: "Morbius",
        imdb: 5.9,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "104 min",
        category: [
            "action", "adventure","horror"
        ],
        resolution:"hd",
        views:20000,
        likes:120000,
        image:{movie2},
        iframe:"https://www.youtube.com/embed/oZ6iiRrz1SY?si=VWfYpUvDRvwT2oHV"
    },
    {
        id: 7,
        name: "The Adam Project",
        imdb: 7.0,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "106 min",
        category: [
            "action", "adventure","comedy"
        ],
        resolution:"4k",
        views:340000,
        likes:220000,
        image:{movie3},
        iframe:"https://www.youtube.com/embed/IE8HIsIrq4o?si=_JexKtEHupNcDZjA"
    },
    {
        id: 8,
        name: "Free Guy",
        imdb: 7.7,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "115 min",
        category: [
            "action", "adventure","comedy"
        ],
        resolution:"4k",
        views:400000,
        likes:310000,
        image:{movie4},
        iframe:"https://www.youtube.com/embed/X2m-08cOAbc?si=kPJRF8-98pskvdPB"
    },
    {
        id: 9,
        name: "The Batman",
        imdb: 7.9,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "176 min",
        category: [
            "action", "crime","drama"
        ],
        resolution:"4k",
        views:600000,
        likes:500000,
        image:{movie5},
        iframe:"https://www.youtube.com/embed/mqqft2x_Aa4?si=ja-R0_Q2_abm1QpI"
    },
    {
        id: 10,
        name: "Uncharted",
        imdb: 7.0,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "116 min",
        category: [
            "action", "adventure",
        ],
        resolution:"hd",
        views:400000,
        likes:320000,
        image:{movie6},
        iframe:"https://www.youtube.com/embed/eHp3MbsCbMg?si=Dk9OMYiuctGabWnQ"
    },
    {
        id: 11,
        name: "Death On The Nile",
        imdb: 6.5,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "127 min",
        category: [
            "crime", "drama","mystery"
        ],
        resolution:"hd",
        views:400000,
        likes:320000,
        image:{movie7},
        iframe:"https://www.youtube.com/embed/dZRqB0JLizw?si=YpMCZhpl4bzh3ywv"
    },
    {
        id: 12,
        name: "The King's Man",
        imdb: 7.0,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora impedit placeat totam in iste molestias voluptates, dolore quisquam enim non consectetur blanditiis laboriosam architecto ullam ipsum voluptas accusamus reprehenderit dolores.",
        releasedate: "2022",
        time: "131 min",
        category: [
            "action", "adventure","thriller"
        ],
        resolution:"hd",
        views:123000,
        likes:80000,
        image:{movie8},
        iframe:"https://www.youtube.com/embed/5zdBG-iGfes?si=iDPVCujIJSn07Czb"
    },
   
    
]

export default moviedata