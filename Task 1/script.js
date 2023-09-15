
function myFunction(imageIndex) {
    var backgroundImage = "";

    switch (imageIndex) {
        case 0:
            backgroundImage = 'url("https://cdn.pixabay.com/photo/2023/04/11/13/47/coffee-7917304_1280.jpg")'; 
            document.getElementById("demo").innerHTML = 'Espresso';
            break;
        case 1:
            backgroundImage = 'url("https://media.istockphoto.com/id/1333792211/photo/brewed-coffee-pouring-hot-water-on-ground-coffee-in-a-filter-on-a-mug-for-a-stimulating-drink.jpg?s=612x612&w=0&k=20&c=wO6ls-l_jwKdylPQns_bP905-pFkShScr8gMg2mewYg=")';
            document.getElementById("demo").innerHTML = 'Filter Coffee';
            break;
        case 2:
            backgroundImage = 'url("https://thumbs.dreamstime.com/b/speciality-coffee-latte-art-my-dream-place-199068858.jpg")';
            document.getElementById('demo').innerHTML='Specialty Coffees';
            break;
        case 3:
            backgroundImage = 'url("https://media.istockphoto.com/id/1299044033/photo/coffee-cup-and-coffee-beans-on-wooden-table.jpg?s=612x612&w=0&k=20&c=FhIX03NoGHbpPpgbXd1H2BxQbQaEau7Ma6-VtrQTCks=")';
            document.getElementById('demo').innerHTML='Decaffeinated Coffee';
            break;
        case 4:
            backgroundImage='url("https://data.thefeedfeed.com/recommended/post_2067663.jpg")';
            document.getElementById('demo').innerHTML='Cold Brew';
            break;
        case 5:
            backgroundImage='url("https://live.staticflickr.com/8348/8262880483_dfc484f176_b.jpg")';
            document.getElementById('demo').innerHTML='Flavored Coffees';
            break;
        default:
            break;
    }

    // Set the image source for the <img> tag with id="img"
    document.getElementById("img").style.backgroundImage = backgroundImage;
}


// 

// slide functionality
      // execute code when webpage loaded successfully
      document.addEventListener("DOMContentLoaded", () => {
        // cache all slides
        const slides = document.querySelectorAll(".cofeetypes");
        // cache number of slides
        const size = slides.length - 1;
        // initial slide index
        let index = 0;

        // change slide method
        const changeSlide = () => {
          // remove active slides first
          slides.forEach((item) => item.classList.remove("active"));
          // active current ie. current index slide
          slides[index].classList.add("active");
        };

        // cache pagination buttons
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");

        // handle next event
        nextBtn.addEventListener("click", function () {
          if (index === size) return;
          index += 1;
          changeSlide();
        });

        // handle prev event
        prevBtn.addEventListener("click", function () {
          if (index === 0) return;
          index -= 1;
          changeSlide();
        });
      });

