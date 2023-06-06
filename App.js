const main = document.getElementById('images');
const DOG_API_LINK = "https://dog.ceo/api/breeds/image/random";

class Image{

    constructor(){
        this.element = document.createElement('div');
        this.element.classList.add('loading');
        main.appendChild(this.element);
    }
}

async function loadApiImage(imageContainer){
         
    try{
        const response = await fetch(DOG_API_LINK);
        
        if(!response.ok){

            throw new Error(`http error: ${response.status}`);

        }

        const data = await response.json();
        console.log(data);

        const image = document.createElement('img');
        image.classList.add('image');
        image.src = data["message"];

        imageContainer.element.appendChild(image);
    } 
    catch(error){

        console.log(`could not get it ${error}`);
    }
}


// Loads first 6 images
for(i = 0; i< 6; i++){

    const imageBody = new Image();
    loadApiImage(imageBody);
}


// Load image on scrolling downward
let count = 0;
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        
        if(count <= 50){
            
            for(i = 0; i < 3; i++){

                const imageBody = new Image();
                loadApiImage(imageBody);
            }
            console.log(++count);
        }      
    }
};

  