let products = {
    data: [
        {
            productName: "Attender Bed",
            category: "Topwear",
            price: "30",
            image: "Images\\p1.png",
        },
        {
            productName: "Simple Bed",
            category: "Bottomwear",
            price: "49",
            image: "Images\\p2.png",
        },
        {
            productName: "Semi Fowler Bed",
            category: "Watch",
            price: "99",
            image: "Images\\p3.png",
        },
        {
            productName: "Fowler Bed",
            category: "Topwear",
            price: "29",
            image: "Images\\p4.png",
        },
        {
            productName: "Semi ICU Bed",
            category: "Jacket",
            price: "129",
            image: "Images\\p5.png",
        },
        {
            productName: "ICU Bed",
            category: "Bottomwear",
            price: "89",
            image: "Images\\p6.png",
        },
        {
            productName: "Bunker Bed",
            category: "Jacket",
            price: "189",
            image: "Images\\p7.png",
        },
        {
            productName: "Pediatric Bed",
            category: "Bottomwear",
            price: "49",
            image: "Images\\p8.png",
        },

        {
            productName: "Plain Examination Table",
            category: "Jacket",
            price: "189",
            image: "Images\\p9.png",
        },
        {
            productName: "Examination Table deluxe",
            category: "Jacket",
            price: "189",
            image: "Images\\p10.png",
        },
        {
            productName: "Examination Couch",
            category: "Jacket",
            price: "189",
            image: "Images\\p11.png",
        },
        {
            productName: "Examination couch with backrest",
            category: "Jacket",
            price: "189",
            image: "Images\\p12.png",
        }, {
            productName: "Bed Side Locker",
            category: "Jacket",
            price: "189",
            image: "Images\\p13.png",
        }, {
            productName: "Delux Bed Side Locker",
            category: "Jacket",
            price: "189",
            image: "Images\\p14.png",
        }, {
            productName: "Double Foot Step",
            category: "Jacket",
            price: "189",
            image: "Images\\p15.png",
        }, {
            productName: "Bed Side Stool",
            category: "Jacket",
            price: "189",
            image: "Images\\p16.png",
        }, {
            productName: "Saline Stand",
            category: "Jacket",
            price: "189",
            image: "Images\\p17.png",
        }, {
            productName: "Single Foot Step",
            category: "Jacket",
            price: "189",
            image: "Images\\p18.png",
        }, {
            productName: "Bed Side Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p19.png",
        }, {
            productName: "Instrument Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p20.png",
        }, {
            productName: "Dressing Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p21.png",
        }, {
            productName: "SS ECG Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p22.png",
        }, {
            productName: "ECG Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p23.png",
        }, {
            productName: "Mayos Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p24.png",
        }, {
            productName: "Over Bed Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p25.png",
        }, {
            productName: "O2 Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p26.png",
        }, {
            productName: "Jumbo o2 Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p27.png",
        }, {
            productName: "Laproscopy Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p29.png",
        }, {
            productName: "Stretcher Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p30.png",
        }, {
            productName: "Emergency Stretcher Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p31.png",
        }, {
            productName: "Crashcart Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p32.png",
        }, {
            productName: "Deluxe Crashcart Trolley",
            category: "Jacket",
            price: "189",
            image: "Images\\p33.png",
        }, {
            productName: "Plain Delivery Table",
            category: "Jacket",
            price: "189",
            image: "Images\\p34.png",
        }, {
            productName: "Telescopic Labour Table   ",
            category: "Jacket",
            price: "189",
            image: "Images\\p35.png",
        }, {
            productName: "Semi electric ortho attachment table",
            category: "Jacket",
            price: "189",
            image: "Images\\p36.png",
        }, {
            productName: "Hydraulic ot table",
            category: "Jacket",
            price: "189",
            image: "Images\\p38.png",
        },
        {
            productName: "revolving stool",
            category: "Jacket",
            price: "189",
            image: "Images\\p39.png",
        }, {
            productName: "wash scrub",
            category: "Jacket",
            price: "189",
            image: "Images\\p40.png",
        }, {
            productName: "ss wheel chair",
            category: "Jacket",
            price: "189",
            image: "Images\\p41.png",
        }, {
            productName: "folding wheel chair",
            category: "Jacket",
            price: "189",
            image: "Images\\p42.png",
        },

    ],
};



for (let i of products.data) {
    //Created Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {

    const getSearchBar =
        document.querySelector('#search-input');
    const getAllMovies =
        document.querySelectorAll('.card');

    getSearchBar.addEventListener('keyup', e => {
        getAllMovies.forEach(movie => {
            if (movie.innerText.toLowerCase().includes(
                e.target.value.toLowerCase())) {
                movie.style.display = 'block';
                return movie;
            }
            else {
                movie.style.display = 'none';
            }
        });
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};