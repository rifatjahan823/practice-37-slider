  const images =[
    'img/pexels-karolina-grabowska-4041392.jpg',
     'img/pexels-maria-tyutina-7947355.jpg',
     'img/pexels-tara-winstead-6479563.jpg',
 ];
 let imageIndex = 0;
 const imageElement = document.getElementById("slide-image");
 setInterval(() => {
     if(imageIndex>=images.length){
      imageIndex = 0;
     }
     const imgURL = images[imageIndex];
     imageElement.setAttribute("src",imgURL)
     imageIndex++
}, 3000); 