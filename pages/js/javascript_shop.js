$(document).ready(function(){
  open_home_delay ();
  menu_down ();
  over_pen ();
  over_agenda ();
  over_tshirt ();
  over_pencil ();
  over_shopper ();
  pencil_description ();
  agenda_description ();
  tshirt_description ();
  pen_description ();
  shopper_description ();
  exit_description ();
  select_color1_tshirt ();
  select_color2_tshirt ();
  select_color3_tshirt ();
  select_sizeS ();
  select_sizeM ();
  select_sizeL ();
});

function open_home_delay() {
  $("#link_logo").click(function(){
    setTimeout(function(){
      window.document.location='../index.html';
    },200);
  });
}

function menu_down() {
  $("#link_logo").click(function(){
    $(".menu").removeClass("high");
    $(".menu").addClass("down");
    $("#logotipo").removeClass("logotipo2");
    $("#logotipo").addClass("logotipo1");
    $("#logo").removeClass("logo2");
    $("#logo").addClass("logo1");
  });
}

function over_pencil() {
  $(".pencil_list").mouseover(function(){
    $(".pencil_img").removeClass("hidden");
    $(".pencil_list").addClass("over");
  });
  $(".pencil_list").mouseout(function(){
    $(".pencil_img").addClass("hidden");
    $(".pencil_list").removeClass("over");
  });
}

function over_agenda() {
  $(".agenda_list").mouseover(function(){
    $(".agenda_img").removeClass("hidden");
    $(".agenda_list").addClass("over");
  });
  $(".agenda_list").mouseout(function(){
    $(".agenda_img").addClass("hidden");
    $(".agenda_list").removeClass("over");
  });
}

function over_tshirt() {
  $(".tshirt_list").mouseover(function(){
    $(".tshirt_img").removeClass("hidden");
    $(".tshirt_list").addClass("over");
  });
  $(".tshirt_list").mouseout(function(){
    $(".tshirt_img").addClass("hidden");
    $(".tshirt_list").removeClass("over");
  });
}

function over_pen() {
  $(".pen_list").mouseover(function(){
    $(".pen_img").removeClass("hidden");
    $(".pen_list").addClass("over");
  });
  $(".pen_list").mouseout(function(){
    $(".pen_img").addClass("hidden");
    $(".pen_list").removeClass("over");
  });
}

function over_shopper() {
  $(".shopper_list").mouseover(function(){
    $(".shopper_img").removeClass("hidden");
    $(".shopper_list").addClass("over");
  });
  $(".shopper_list").mouseout(function(){
    $(".shopper_img").addClass("hidden");
    $(".shopper_list").removeClass("over");
  });
}

function pencil_description() {
  $(".pencil_list").click(function(){
    $(".pencil_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function agenda_description() {
  $(".agenda_list").click(function(){
    $(".agenda_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function tshirt_description() {
  $(".tshirt_list").click(function(){
    $(".tshirt_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function pen_description() {
  $(".pen_list").click(function(){
    $(".pen_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function shopper_description() {
  $(".shopper_list").click(function(){
    $(".shopper_description").removeClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").addClass("blurred");
    $(".pencil_img, .agenda_img, .tshirt_img, .pen_img, .shopper_img").addClass("hidden");
    $(".pencil_list, .agenda_list, .tshirt_list, .pen_list, .shopper_list").removeClass("over");
  })
}

function exit_description() {
  $(".exit_link").click(function(){
    $(".pencil_description, .agenda_description, .tshirt_description, .pen_description, .shopper_description").addClass("hidden");
    $("#logo, .menu, .lingua, #instagram, #facebook, #support").removeClass("blurred");
  })
}

function select_color1_tshirt() {
  $(".color1").click(function(){
    $("#color1").attr('src','img/shop/color_tshirt/color1_selected.png');
    $("#color2").attr('src','img/shop/color_tshirt/color2.png');
    $("#color3").attr('src','img/shop/color_tshirt/color3.png');
  })
}

function select_color2_tshirt() {
  $(".color2").click(function(){
    $("#color1").attr('src','img/shop/color_tshirt/color1.png');
    $("#color2").attr('src','img/shop/color_tshirt/color2_selected.png');
    $("#color3").attr('src','img/shop/color_tshirt/color3.png');
  })
}

function select_color3_tshirt() {
  $(".color3").click(function(){
    $("#color1").attr('src','img/shop/color_tshirt/color1.png');
    $("#color2").attr('src','img/shop/color_tshirt/color2.png');
    $("#color3").attr('src','img/shop/color_tshirt/color3_selected.png');
  })
}

function select_sizeS() {
  $(".sizeS").click(function(){
    $(".sizeS").addClass("selected_size");
    $(".sizeM").removeClass("selected_size");
    $(".sizeL").removeClass("selected_size");
  })
}

function select_sizeM() {
  $(".sizeM").click(function(){
    $(".sizeS").removeClass("selected_size");
    $(".sizeM").addClass("selected_size");
    $(".sizeL").removeClass("selected_size");
  })
}

function select_sizeL() {
  $(".sizeL").click(function(){
    $(".sizeS").removeClass("selected_size");
    $(".sizeM").removeClass("selected_size");
    $(".sizeL").addClass("selected_size");
  })
}
