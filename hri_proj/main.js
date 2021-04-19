$('.search-input').focus(function(){
  $(this).parent().addClass('focus');
}).blur(function(){
  $(this).parent().removeClass('focus');
})


const mySet1 = new Set()
mySet1.add("0010001");
mySet1.add("0020001");
mySet1.add("0010002");
mySet1.add("0020002");
mySet1.add("0010003");
mySet1.add("0020003");

document.getElementById("form").addEventListener("submit", function() {
  // alert("test");
  let code = document.getElementById("code").value;
  if(!mySet1.has(code)){
    alert("please type in your code correctly");
  }
  else{
  switch(code) {
    case "0010001":
      window.open("webot.html");
      break;
    case "0020001":
      window.open("nao.html");
      break;
    case "0010002":
      window.open("webot_vc.html");
      break;
    case "0020002":
      window.open("naobot_vc.html");
      break;
    case "0010003":
      window.open("webot_pc.html");
      break;
    case "0020003":
      window.open("naobot_pc.html");
      break;

  }
}
});
