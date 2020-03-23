// const numItemsToGenerate = 8; //how many gallery items you want on the screen
// const numImagesAvailable = 153; //how many total images are in the collection you are pulling from
// const imageWidth = 750 ; //your desired image width in pixels
// const imageHeight = 750; //desired image height in pixels
// const collectionID = 1771718; //the collection ID from the original url

// for(let i=0;i<numItemsToGenerate;i++){
//   let randomImageIndex = Math.floor(Math.random() * 99999);
//   renderGalleryItem(randomImageIndex);
// }

// function renderGalleryItem(randomNumber){
//    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`) 
//   .then((response)=> {    
//     console.log(response);
//     let galleryItem = document.createElement('div');
//     galleryItem.classList.add('gallery-item');
//     galleryItem.innerHTML = `<img class="gallery-image" src="${response.url}" alt="gallery image"/>`
//     document.body.appendChild(galleryItem);
//   })
// }