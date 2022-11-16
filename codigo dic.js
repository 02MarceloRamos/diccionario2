$(document).ready(Function(){
  $(".imagen").click(Function(){
    $(". descripcion").slidetoggle("slow")
  })
   $(function() {
     $(".tarjeta").removeClass("resaltado");
     $(this).addClass("resaltado")
   } )
  })
  
  $("tbxBuscar").on("Keyup".function(){
    let texto=$(this).val().tolowerCase();
    $(".tarjeta").filter(function(){
      $(this).toggle($(this).text().tolowerCase().index0f(texto)>-1)
    })
  })
})
