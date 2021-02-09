var cursor = document.querySelector(".cursor");
var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e){
  cursor.style.cssText = cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});




let btnShow = document.querySelector('button');

btnShow.addEventListener('click', () => {
  swal({
    title:'Nixon Vs McGovern',
    text: 'Vote for Nixon, because McGovern sucks!',
    
    button:'Ok!'
  });
});


