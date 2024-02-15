$(document).ready(function () {

  // ___________________________Header
  $(".main").hover(function () {
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown();
  },function () {
    $(this).find(".sub").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });

  // ___________________________Main

  let $img=$(".changeimg ul li");
  let $btn=$(".btn ul li");
  let oldidx=0;
  let idx=0; 
  let img_n=$img.length;

  function changeImg(idx){ 

    if(oldidx!=idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop(true,true).fadeOut(300);
      $img.eq(idx).stop(true,true).fadeIn(300); 
    }
    oldidx=idx; 

  }

  function changeAuto(){
  
    idx++;

    if(idx>img_n-1){ 
      idx=0;
    }

    changeImg(idx);

  }

  timer=setInterval(changeAuto,4000); 

  $btn.click(function(){

    clearInterval(timer);
    idx=$(this).index(); 
    changeImg(idx);
    timer=setInterval(changeAuto,4000);

  });

   // ___________________________Section

   //--------------menu

  $(".menu_card img:first-of-type").click(function(){
    
    
    $(this).parent().addClass("active");
    $(this).parent().siblings(".menu_card").removeClass("active");
  }); 

   //--------------store

  $(".store_list li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".store_map iframe").removeClass("active");
    $("#"+result).addClass("active");
    
  });
  
  //--------------sns

  $('.sns').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  //-------------notice

  $(".n_tap li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".n_in>div").removeClass("active");
    $("#"+$(this).attr("data-notice")).addClass("active");
  });

  $(".n_title").click(function(){
    $(this).siblings(".n_title").removeClass("selected");
    $(this).toggleClass("selected");
    $(this).siblings(".n_content").stop().slideUp();
    $(this).next().stop().slideToggle();

  });

});