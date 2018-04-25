$(function(){
    $.ajax({
      type:"GET",
      url:"http://localhost:3000/service",
      dataType:"json",
      success:function(data) {
        for(var i = 0; i<data.serve1.length; i++){
          $(".serve_shop_list").append(
            "<a class='serve_shop_link'><div class='serve_shop'>" +
            "<img src="+data.serve1[i].imgUrl+" ><div class='serve_name'>"+data.serve1[i].name+"</div>" +
            "<div class='serve_description'>"+data.serve1[i].description+"</div><div class='price'>"+
            data.serve1[i].price+"</div></div></a>");
        }
      },
      error:function(data){
        alert("您请求数据失败了，请检查您的请求格式以及地址！");
      }
    });
})