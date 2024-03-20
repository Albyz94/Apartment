const menuOpen = document.querySelectorAll(".toggle-menu");
const menuCont = document.querySelectorAll(".menu-container");
const langIta = document.querySelectorAll(".lang");
const rightArr = document.querySelectorAll(".right-arrow");
const leftArr = document.querySelectorAll(".left-arrow");
let imgCont = document.querySelectorAll(".img-cont");
let image = document.querySelectorAll(".show-image");

function appear() {
                
    imgCont[0].classList.remove("slide-right");
    image[0].classList.remove("fade-out");
    // image[0].classList.add("fade-in");
}


function slider(rArr, lArr, maxImg, minImg, imgContainer, mainImage, idx) {
    rArr.forEach(arrowR => {
        // let maxImage = maxImg;
        // let minImage = minImg;
        let index = idx;
        arrowR.addEventListener("click" , ()=> {
            imgContainer[0].classList.add("slide-right");
            mainImage[0].classList.add("fade-out");
            // image[0].classList.remove("fade-out");

            setTimeout (()=> {
                if(index < maxImg) {
                    index += 1;
                } else {
                    index = minImg;
                }
                mainImage[0].setAttribute("src" , "/images/carosel/img"+ index +".jpg");
                
            }, 500);
            setTimeout( appear , 700);
            // image.forEach(image => {
            //     image.setAttribute("src" , "/images/carosel/img"+index+".jpg" );
            // });

        });
        lArr.forEach(arrowL => {
            arrowL.addEventListener("click" , ()=> {
            imgContainer[0].classList.add("slide-right");
            mainImage[0].classList.add("fade-out");
            setTimeout (()=> {
                if(index > minImg) {
                    index -= 1;
                } else {
                    index = maxImg;
                }
                mainImage[0].setAttribute("src" , "/images/carosel/img"+ index +".jpg");
            }, 500);
            setTimeout( appear , 700);
            })
        })

    })
}

document.addEventListener("DOMContentLoaded" , function() {
    console.log(image);
    
    menuOpen.forEach(button=> {

            let toggle = false;
            button.addEventListener("click" , ()=> {
                if (!toggle) {
                    // alert("menu is opened");
                    button.innerText = "close";
                    toggle = true;
                    menuCont.forEach(menu=> {
                        menu.classList.remove("hidden");
                    });
                } else {
                    button.innerText = "menu";
                    // alert("menu is closed");
                    toggle = false;
                    menuCont.forEach(menu=> {
                        menu.classList.add("hidden");
                    });
                }
            });            
    });

    slider(rightArr, leftArr, 32 , 1, imgCont, image, 1);
    
});


//AGGIUNTA CAMBIO LINGUA DA FARE IN SEGUITO
// langIta.forEach(button=> {
//     let eng = true;
//     button.addEventListener("click" , ()=> {
//         if(eng) {
//             button.innerText= "English";
//             button.classList.add("eng");
//             document.querySelectorAll(".apart").forEach(item=> {
//                 item.innerText = "Appartamenti";
//             });
//             document.querySelectorAll(".contact").forEach(item=> {
//                 item.innerText = "Contattaci";
//             });
//             document.querySelectorAll(".discover").forEach(item=> {
//                 item.innerText = "Scopri Durazzo";
//             });
//             eng = false;
//         }
//         else if (!eng) {
//             button.innerText= "Italiano";
//             button.classList.remove("eng");
//             document.querySelectorAll(".apart").forEach(item=> {
//                 item.innerText = "Apartment";
//             });
//             document.querySelectorAll(".contact").forEach(item=> {
//                 item.innerText = "Contact Us";
//             });
//             document.querySelectorAll(".discover").forEach(item=> {
//                 item.innerText = "Discover Durres";
//             });
//             eng = true;
//         }
        
//     });
// });

// rArr.forEach(arrowR => {
    //     let maxImage = 32;
    //     let minImage = 1;
    //     let index = 1;
    //     arrowR.addEventListener("click" , ()=> {
    //         imgCont[0].classList.add("slide-right");
    //         image[0].classList.add("fade-out");
    //         // image[0].classList.remove("fade-out");

    //         setTimeout (()=> {
    //             if(index < maxImage) {
    //                 index += 1;
    //             } else {
    //                 index = minImage;
    //             }
    //             image[0].setAttribute("src" , "/images/carosel/img"+ index +".jpg");
                
    //         }, 500);
    //         setTimeout( appear , 700);
    //         // image.forEach(image => {
    //         //     image.setAttribute("src" , "/images/carosel/img"+index+".jpg" );
    //         // });

    //     });
    //     lArr.forEach(arrowL => {
    //         arrowL.addEventListener("click" , ()=> {
    //         imgCont[0].classList.add("slide-right");
    //         image[0].classList.add("fade-out");
    //         setTimeout (()=> {
    //             if(index > minImage) {
    //                 index -= 1;
    //             } else {
    //                 index = maxImage;
    //             }
    //             image[0].setAttribute("src" , "/images/carosel/img"+ index +".jpg");
    //         }, 500);
    //         setTimeout( appear , 700);
    //         })
    //     })
   
    



