let images = document.querySelectorAll(".imageThatCanBeLarger"),
containers = document.querySelectorAll(".containerForImage"),
songwritingText = document.querySelector(".songwriting-text"),
imageSelector = document.querySelector(".image-selector")

let isEnabled = false;

//image becoming larger on click
for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", e =>{
        e.target.classList.toggle("photo-from-concert")
        e.target.classList.toggle("larger-img")

        let parent = e.target.parentElement
        parent.classList.toggle("img-container")

        if(isEnabled){
            //songwritingText.style.display = "block"
            songwritingText.style.opacity = "1"
            imageSelector.style.display = "block"
            imageSelector.style.opacity = "1"
            isEnabled = false
        } else{
            songwritingText.style.opacity = "0"
            // songwritingText.style.display = "none"
            imageSelector.style.display = "none"
            imageSelector.style.opacity = "0"
            isEnabled = true
        }

    })
}

//switching images
const options = document.querySelectorAll(".option"),
      tabs = document.querySelectorAll(".imageThatCanBeLarger")

let prevElementIndex = 0

for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", (e)=>{
        tabs[prevElementIndex].style.display = "none"
        tabs[prevElementIndex].classList.remove("animation-left")
        options[prevElementIndex].classList.remove(`currentImage`)

        tabs[i].style.display = "block"
        tabs[i].classList.add("animation-left")
        options[i].classList.add(`currentImage`)



        prevElementIndex = i
    })
}

