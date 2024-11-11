const menuOpen = document.querySelectorAll(".toggle-menu");
const menuCont = document.querySelectorAll(".menu-container");
const langIta = document.querySelectorAll(".lang");
const rightArr = document.querySelectorAll(".right-arrow");
const leftArr = document.querySelectorAll(".left-arrow");
let imgCont = document.querySelectorAll(".img-cont");
let image = document.querySelectorAll(".show-image");
let psBtn = document.querySelectorAll(".play-stop");
let playing = true;
let pistacchio = document.querySelectorAll(".pistacchio");
let blueSensation = document.querySelectorAll(".blue-sensation");
let honey = document.querySelectorAll(".honey");
let background = document.querySelectorAll(".list-container");
let foto = document.querySelectorAll(".foto-grid img");

function appear() {
    
    imgCont[0].classList.remove("slide-right");
    image[0].classList.remove("fade-out");
    // image[0].classList.add("fade-in");
}

//CAROSEL SLIDES AUTOMATICALLY
let i = 1;
function autoSlide(maxNum, interval, distance) {        
            
            setInterval(()=> {
                // imgCont[0].classList.add("slide-right");
                if (!playing) {
                    return;
                } else {
                    image[0].classList.add("fade-out");
                    if (i < maxNum) {
                                i+=1;
                            } else {
                                i = 1;
                            }
                            setTimeout(()=> {
                                appear();
                                
                            }, interval);
                            setTimeout(()=> {
                                image[0].setAttribute("src" , "/images/carosel/img"+ i +".jpg");
            
                            },interval-100);
                           
                            console.log("cycle end")
                        }
                    }, distance);
}
                    

//MANAGES CAROSEL MANUAL SLIDING
function slider(rArr, lArr, maxImg, minImg, imgContainer, mainImage, idx) {

    rArr.forEach(arrowR => {
        // let maxImage = maxImg;
        // let minImage = minImg;
        let i = idx;
        arrowR.addEventListener("click" , ()=> {
            imgContainer[0].classList.add("slide-right");
            mainImage[0].classList.add("fade-out");
            // image[0].classList.remove("fade-out");

            setTimeout (()=> {
                if(i < maxImg) {
                    i += 1;
                } else {
                    i = minImg;
                }
                mainImage[0].setAttribute("src" , "/images/carosel/img"+ i +".jpg");
                
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
                if(i > minImg) {
                    i -= 1;
                } else {
                    i = maxImg;
                }
                mainImage[0].setAttribute("src" , "/images/carosel/img"+ i +".jpg");
            }, 500);
            setTimeout( appear , 700);
        })
    })
    
})
}



document.addEventListener("DOMContentLoaded" , function() {
       autoSlide(33, 500, 4000);

    
    
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

    psBtn.forEach(button => {
        let toggle = false;
        button.addEventListener("click" , ()=> {
            if (!toggle) {
                button.innerText = "play_arrow";
                toggle = true;
                playing = false;
            } else {
                button.innerText = "stop";
                toggle = false;
                playing = true;
            }
        });
    });
   
    slider(rightArr, leftArr, 32 , 1, imgCont, image, 1);
    
});

document.addEventListener("DOMContentLoaded" , function(){

    pistacchio.forEach(element => {
        element.addEventListener("mouseover" , ()=> {
            background.forEach(backgrd => {
                 backgrd.style.backgroundColor = "var(--pistacchio)";
                 backgrd.style.transition = "background-color 0.5s ease";
            })
        })
        element.addEventListener("mouseout" , ()=> {
            background.forEach(backgrd => {
                 backgrd.style.backgroundColor = "white";
            });
        });
    });

    blueSensation.forEach(element => {
        element.addEventListener("mouseover" , ()=> {
            background.forEach(backgrd => {
                 backgrd.style.backgroundColor = "var(--blue)";
                 backgrd.style.transition = "background-color 0.5s ease";
            })
        })
        element.addEventListener("mouseout" , ()=> {
            background.forEach(backgrd => {
                 backgrd.style.backgroundColor = "white";
            });
        });
    });

    honey.forEach(element => {
        element.addEventListener("mouseover" , ()=> {
            background.forEach(backgrd => {
                 backgrd.style.backgroundColor = "var(--honey)";
                 backgrd.style.transition = "background-color 0.5s ease";
            })
        })
        element.addEventListener("mouseout" , ()=> {
            background.forEach(backgrd => {
                 backgrd.style.backgroundColor = "white";
            });
        });
    });
        // document.querySelectorAll(".list-container").style.backgroundColor = "var(--pistacchio)"

    
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
   
    
//BACKGROUND DIVENTA DEL COLORE DEL CONTAINER IN CUI SI PASSA



