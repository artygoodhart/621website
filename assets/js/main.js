

$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors: ['land', 'whoarewe', 'ourteam', 'pioneeringstudents','section5', '621diploma', 'ourcourses', 'pioneeringteaching', 'realworldlearning', 'makeadifference', 'contactus'  ],
      responsiveWidth: 992
    }
    );

});


function mobileDropFunction() {
  document.getElementById("mobile-dropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.fa-bars')) {

    var dropdowns = document.getElementsByClassName("mobile-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


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
