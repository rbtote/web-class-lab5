$("#btn_submit").on( "click", function( event ) {
    event.preventDefault();
    let item = $("#item").val();
    $( "#list" ).append( "<li class='lista'><p>"+item+"</p><div id='btns'><button type='submit' id='check'> Check</button> <button type='submit' id='del'> Delete</button> </div></li>");
});

$("ul").on("click","#check", function(e){
  e.preventDefault();
  var el = $(this).parent().parent().find("p");
  if(!el.hasClass("checked")){
    el.css("text-decoration", "line-through");
    el.addClass("checked");
  }else{
    el.css("text-decoration", "none");
    el.removeClass("checked");
  }
});

$("ul").on("click","#del", function(e){
    e.preventDefault();
    $(this).parent().parent().remove();
});