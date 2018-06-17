// Smooth Scroll Animation
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Delighters
var Delighters=new function(){var t=this.dels=[],e={attribute:"data-delighter",classNames:["delighter","started","ended"],start:.75,end:.75,autoInit:!0};function s(){document.addEventListener("scroll",d);for(var s=document.querySelectorAll("["+e.attribute+"]"),a=0;a<s.length;a++){var n=s[a],i=n.getAttribute(e.attribute,2).split(";"),r={};r.start=e.start,r.end=e.end;for(var l=0;l<i.length;l++){var o=i[l].split(":"),c=o[0],u=isNaN(1*o[1])?o[1]:1*o[1];c&&(r[c]=void 0===u||u)}r.el=n,r.id=t.length,t.push(r),n.classList.add(e.classNames[0]),r.debug&&(n.style.outline="solid red 4px")}d()}function d(){for(var s=window.innerHeight,d=0;d<t.length;d++){var a=t[d],n=a.el.getBoundingClientRect(),i=n.top/s,r=n.bottom/s;a.debug&&(i>=0&&i<=1&&(a.startLine||(a.startLine=document.createElement("div"),document.body.appendChild(a.startLine),a.startLine.style="position:fixed;height:0;width:100%;border-bottom:dotted red 2px;top:"+100*a.start+"vh")),(r<a.end||i>1)&&a.startLine&&(a.startLine.parentNode.removeChild(a.startLine),delete a.startLine)),i<a.start&&!a.started?(a.started=!0,a.el.classList.add(e.classNames[1])):i>a.start&&a.started&&(a.started=!1,a.el.classList.remove(e.classNames[1])),r<a.end&&!a.ended?(a.ended=!0,a.el.classList.add(e.classNames[2])):r>a.end&&a.ended&&(a.ended=!1,a.el.classList.remove(e.classNames[2]))}}document.addEventListener("DOMContentLoaded",function(){e.autoInit&&s()}),this.init=s,this.config=function(t){for(var s in t)e[s]=t[s]}};

/*
// Scroll Bar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}
*/
