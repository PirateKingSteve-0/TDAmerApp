jQuery(document).ready(function(){
    $(".welcome").fadeOut(3000,function(){
      $(".secWelcome").fadeIn(7000, function(){
          $(".secWelcome").fadeOut(3000)
      });
    });
  });