$(document).ready(function(){
    $(".active").click(function(){
        $("#Div1").show();
       $("#Div2").hide();
       $("#Div3").hide();
       $(".page_content .field_item .navigation .nav_link .tab2").css("background","white");
       $(".page_content .field_item .navigation .nav_link .tab1").css("background","#49a923");
       $(".page_content .field_item .navigation .nav_link .tab3").css("background","white");
       
       $(".page_content .field_item .navigation .nav_link .tab2 a").css("color","black");
       $(".page_content .field_item .navigation .nav_link .tab1 a").css("color","white");
       $(".page_content .field_item .navigation .nav_link .tab3 a").css("color","black");

    });
    $(".tab2").click(function(){
        $("#Div2").show();
        $("#Div1").hide();
       
       $("#Div3").hide();
       $(".page_content .field_item .navigation .nav_link .tab1").css("background","white");
       $(".page_content .field_item .navigation .nav_link .tab2").css("background","#49a923");
       $(".page_content .field_item .navigation .nav_link .tab3").css("background","white");
       
       $(".page_content .field_item .navigation .nav_link .tab1 a").css("color","black");
       $(".page_content .field_item .navigation .nav_link .tab2 a").css("color","white");
       $(".page_content .field_item .navigation .nav_link .tab3 a").css("color","black");
       
       

});
$(".tab3").click(function(){
    $("#Div1").hide();
   $("#Div2").hide();
   $("#Div3").show();

   $(".page_content .field_item .navigation .nav_link .tab1").css("background","white");
   $(".page_content .field_item .navigation .nav_link .tab2").css("background","white");
   $(".page_content .field_item .navigation .nav_link .tab3").css("background","#49a923");

   
   $(".page_content .field_item .navigation .nav_link .tab2 a").css("color","black");
   $(".page_content .field_item .navigation .nav_link .tab3 a").css("color","white");
   $(".page_content .field_item .navigation .nav_link .tab1 a").css("color","black");

});
$(".tab4").click(function(){
    $("#Div2").show();
    $("#Div1").hide();
   
   $("#Div3").hide();
   $(".page_content .field_item .navigation .nav_link .tab1").css("background","white");
   $(".page_content .field_item .navigation .nav_link .tab2").css("background","#49a923");
   $(".page_content .field_item .navigation .nav_link .tab3").css("background","white");

   
   $(".page_content .field_item .navigation .nav_link .tab1 a").css("color","black");
   $(".page_content .field_item .navigation .nav_link .tab2 a").css("color","white");
   $(".page_content .field_item .navigation .nav_link .tab3 a").css("color","black");

});
$(".tab5").click(function(){
    $("#Div1").hide();
   $("#Div2").hide();
   $("#Div3").show();
   $(".page_content .field_item .navigation .nav_link .tab1").css("background","white");
   $(".page_content .field_item .navigation .nav_link .tab2").css("background","white");
   $(".page_content .field_item .navigation .nav_link .tab3").css("background","#49a923");

   
   $(".page_content .field_item .navigation .nav_link .tab2 a").css("color","black");
   $(".page_content .field_item .navigation .nav_link .tab3 a").css("color","white");
   $(".page_content .field_item .navigation .nav_link .tab1 a").css("color","black");

});

$(".secondlink").click(function(){
    
    $("#Div1").hide();
   $("#Div2").hide();
   $("#Div3").show();
   $(".page_content .field_item .navigation .nav_link .tab1").css("background","white");
   $(".page_content .field_item .navigation .nav_link .tab2").css("background","white");
   $(".page_content .field_item .navigation .nav_link .tab3").css("background","#49a923");

   
   $(".page_content .field_item .navigation .nav_link .tab2 a").css("color","black");
   $(".page_content .field_item .navigation .nav_link .tab3 a").css("color","white");
   $(".page_content .field_item .navigation .nav_link .tab1 a").css("color","black");
})
});