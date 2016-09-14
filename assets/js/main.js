$(document).ready(function() {
    $('#fullpage').fullpage({
      responsiveWidth: 992
    }
    );

});

function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.fa-bars')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// $(window).scroll(function() {
//   if (Array.prototype.some.call($('.button-change'), function(element) {
//   	scrollPosition = $(window).scrollTop();
//     elementTop = $(element).offset().top - 80;
//     elementBottom = $(element).outerHeight() + elementTop;
//     if (scrollPosition > elementTop && scrollPosition < elementBottom) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   })) {
//   	$('#dropbtn').css('color', '#222');
//   } else {
//   	$('#dropbtn').css('color', '#fff');
//   }
// });
//
// $('#dropbtn').click(function(e){
//     $('.dropdown-content').fadeIn('slow', function(){
//         $('#bank').fadeOut('slow');
//     });
// });
