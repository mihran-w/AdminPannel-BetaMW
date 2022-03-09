// Prue Counter init
$(document).ready(function () {
  new PureCounter();
});

// Preloader
$(window).on("load",function(){
  $(".preloader").fadeOut("slow");
})

// Toggle Side Bar
const opesSidebarBtn = document.getElementById("openSideBar");
const closeSidebarBtn = document.getElementById("closeSideBar");
const main = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");

const mediaWidth = window.innerWidth;

if (mediaWidth <= 992) {
  CloseSideBar();
} else {
  OpenSideBar();
}

function CloseSideBar() {
  if (mediaWidth <= 600) {
    main.style.marginRight = "0";
    sidebar.style.width = "16rem";
    sidebar.style.display = "none";
  } else {
    main.style.marginRight = "0";
    sidebar.style.width = "0";
    sidebar.style.display = "none";
  }
}

function OpenSideBar() {
  if (mediaWidth <= 600) {
    main.style.marginRight = "0rem";
    sidebar.style.width = "16rem";
    sidebar.style.display = "block";
  } else {
    main.style.marginRight = "16rem";
    sidebar.style.width = "16rem";
    sidebar.style.display = "block";
  }
}

opesSidebarBtn.addEventListener("click", function () {
  OpenSideBar();
});

closeSidebarBtn.addEventListener("click", function () {
  CloseSideBar();
});

// DropDown Sub Menu
$(document).ready(function () {
  const dropdown = $(".dropdown");

  const submenu = $(".submenu");
  var opens = false;
  $.each(dropdown, function () {
    $(this).on("click", function (e) {
      if (opens === false) {
        $(this).find(submenu).slideDown(100);
        opens = true;
      } else {
        $(this).find(submenu).slideUp(100);
        opens = false;
      }
    });
  });
});




// Dark Mode Theme
// $(document).ready(function () {
//   var ThemeVal = localStorage.getItem("ThemeMode");
//   if (ThemeVal == "dark") {
//     $("html").addClass("darkMode");
//     $("#btnSwith").attr("checked", "checked");
//   } else {
//     $("html").removeClass("darkMode");
//   }
//   $("#btnSwith").click(function () {
//     if ($(this).is(":checked")) {
//       $("html").addClass("darkMode");
//       localStorage.setItem("ThemeMode", "dark");
//     } else {
//       $("html").removeClass("darkMode");
//       localStorage.setItem("ThemeMode", "light");
//     }
//   });
// });
