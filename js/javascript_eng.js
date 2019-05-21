$(document).ready(function(){
  open_pages_delay ();
  menu_high ();
});

function open_pages_delay() {
  $("#overview").click(function(){
    setTimeout(function(){
      window.document.location='pages/overview_eng.html';
    },200);
  });
  $("#tour").click(function(){
    setTimeout(function(){
      window.document.location='pages/tour_eng.html';
    },200);
  });
  $("#events").click(function(){
    setTimeout(function(){
      window.document.location='pages/events_eng.html';
    },200);
  });
  $("#news_press").click(function(){
    setTimeout(function(){
      window.document.location='pages/news&press_eng.html';
    },200);
  });
  $("#shop").click(function(){
    setTimeout(function(){
      window.document.location='pages/shop_eng.html';
    },200);
  });
  $("#contacts").click(function(){
    setTimeout(function(){
      window.document.location='pages/contacts_eng.html';
    },200);
  });
}

function menu_high() {
  $("#overview, #tour, #events, #news_press, #shop, #contacts").click(function(){
    $(".menu").removeClass("down");
    $(".menu").addClass("high");
    $("#logotipo").removeClass("logotipo1");
    $("#logotipo").addClass("logotipo2");
    $("#logo").removeClass("logo1");
    $("#logo").addClass("logo2");
  });
}
