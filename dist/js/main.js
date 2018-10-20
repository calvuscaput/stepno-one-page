$('.owl-carousel__1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
})

$('.owl-carousel__2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
})
var nextBtn = $(".car__right");
var prevBtn = $(".car__left");
//Третья карусель
var rdCarousel = $('.owl-carousel__3')
rdCarousel.owlCarousel({
    onInitialized: slideInit,
    onChanged: slidePosition,
    loop:false,
    margin:10,
    nav:false,
    items: 1,
    dots: false,
})

function slideInit(e){
    rdCarousel.slideCount = e.item.count;
}
function slidePosition(e) {
    rdCarousel.slidePos = e.item.index+1
    console.log(rdCarousel.slidePos, rdCarousel.slideCount);
    
    if (rdCarousel.slidePos == rdCarousel.slideCount) {
        nextBtn.addClass('disabled');
    } else {
        nextBtn.removeClass('disabled');
    }

    if (rdCarousel.slidePos == 1) {
        prevBtn.addClass('disabled');
    } else {
        prevBtn.removeClass('disabled');
    }

}
//Работа с копками навигации
nextBtn.click(function(){
    rdCarousel.trigger("next.owl.carousel");
});
prevBtn.click(function(){
    rdCarousel.trigger("prev.owl.carousel");
});

//Скрытие и раскрытие блоков в sevices-items
$(".close-item").click(function() {
   $(this).parent().animate({'left':'-475px'},500);
})

$(".more").click(function() {
    $('.services-item__content').animate({'left':'0'},500);
 })