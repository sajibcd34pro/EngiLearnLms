const core_features = [
    {
        id: 1,
        img: 'images/core/c1.png',
        name: "HTML5"
    },
    {
        "id": 2,
        "img": "images/core/c2.png",
        "name": "CSS3"
    },
    {
        "id": 3,
        "img": "images/core/c3.png",
        "name": "SASS"
    },
    {
        "id": 4,
        "img": "images/core/c4.png",
        "name": "Bootstrap (Latest)"
    },
    {
        "id": 5,
        "img": "images/core/c5.png",
        "name": "Zoom Integration"
    },
    {
        "id": 6,
        "img": "images/core/c6.png",
        "name": "SEO Optimized"
    },
    {
        "id": 7,
        "img": "images/core/c7.png",
        "name": "eCommerce "
    },
    {
        "id": 8,
        "img": "images/core/c8.png",
        "name": "Speed Performance"
    },
    {
        "id": 9,
        "img": "images/core/c9.png",
        "name": "Swiper Slider"
    },
    {
        "id": 10,
        "img": "images/core/c10.png",
        "name": "Google Fonts"
    },
    {
        "id": 11,
        "img": "images/core/c11.png",
        "name": "Light/Dark Ready"
    },
    {
        "id": 12,
        "img": "images/core/c12.png",
        "name": "Animation"
    },
    {
        "id": 13,
        "img": "images/core/c13.png",
        "name": "Icofont"
    },
    {
        "id": 14,
        "img": "images/core/c14.png",
        "name": "Smooth Effects"
    },
    {
        "id": 15,
        "img": "images/core/c15.png",
        "name": "Responsive Layouts"
    },
    {
        "id": 16,
        "img": "images/core/c16.png",
        "name": "Browser Compatibility "
    },
    {
        "id": 17,
        "img": "images/core/c17.png",
        "name": "Developer Friendly "
    },
    {
        "id": 18,
        "img": "images/core/c18.png",
        "name": "Quick Support"
    },
    {
        "id": 19,
        "img": "images/core/c19.png",
        "name": "Well Documented"
    },
    {
        "id": 20,
        "img": "images/core/c20.png",
        "name": "Lifetime Updates"
    }
]
const core_cards = document.getElementById('core_cards');
// console.log(core_cards)

for (card of core_features) {
    
    const {img, name} = card;
    
    core_cards.innerHTML += `

<div class="single_cards">
                    <div class="inner mb-3">
                        <div class="icon  d-block">
                            <img src="${img}" alt="">
                        </div>
                    </div>
                    <h6 class="title"> ${name} </h6>
                   </div>

`
}



var acc = document.getElementsByClassName("accordionf");
var i;
const plusOrMinus = document.querySelectorAll('.plus');

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;


                for (span of plusOrMinus) {
                    if (panel.style.display === "block") {
                        span.innerHTML = `<p> + </p>`
                    } else {
                        span.innerHTML =`<p> − </p>`
                    }
                }


        if (panel.style.display === "block") {
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
        }
    });
}

// courses
const courses = [
    {
        id: 1,
        img: 'images/courses/courses1.png',
        description: 'The Complete Cyber Security Course : Hackers Exposed!',
        author: 'by Alexandar Oni'


    },
    {
        id: 2,
        img: 'images/courses/courses2.jpg',
        description: 'The Complete 2023 Web Development Bootcamp Angela Yu',
        author: 'Dr. Angela Yu'


    },
    {
        id: 3,
        img: `images/courses/courses3.jpg`,
        description: `UI UX & Web Design Master Course: Strategy, Design, Development`,
        author: `by Daniel Walter Scott`


    }
]


const coursesElement = document.getElementById('courses');

for (course of courses) {
    const { img, description, author,id } = course;


    coursesElement.innerHTML += `
     <div class="card featured_service">
                <div className="course_body">
                <img src="${img}" alt="">
                <h5>${description} </h5>
                <p>${author} </p></div>
                <a style=" text-align:center;" id="view_course"  href="/details.html?id=${id}">View Details</a>
            </div>

    `
}

