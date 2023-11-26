const slides = document.querySelectorAll('.slide');
var counter = 0;
slides.forEach((slide,index)=>{
    // console.log(index);
    slide.style.left = `${index*100}%`

})
const next = ()=>{
    if(counter < slides.length-1){
        counter++;
        slideImage()
    }
    else{
        alert(`Your Total Images ${slides.length}.`)
    }
}
const prev = ()=>{
    if(counter!=0){
    counter--;
    slideImage()
};
}
const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
};
