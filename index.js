var Links = {
  setLinkColor:function (color) {
    var atags = document.querySelectorAll('a');
    var ii = 0;
    while(ii < atags.length) {
       console.log(atags[ii]);
       atags[ii].style.color = color;
       ii = ii + 1;
    }
  }
}

var pageBody = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(btn){
  var target = document.querySelector('body');

  if(btn.value === 'night'){
    pageBody.setColor('white');
    pageBody.setBackgroundColor('black');
    Links.setLinkColor('powderblue');
    btn.value = 'day';
  } else {
    pageBody.setColor('black');
    pageBody.setBackgroundColor('white');
    Links.setLinkColor('blue');
    btn.value = 'night';
  }
}
