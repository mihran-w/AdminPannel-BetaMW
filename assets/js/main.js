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
  main.style.marginRight = "0";
  sidebar.style.width = "0";
  sidebar.style.display = "none";
}

function OpenSideBar() {
  main.style.marginRight = "16rem";
  sidebar.style.width = "16rem";
  sidebar.style.display = "";
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
  var chevron = $(".bi-chevron-down");
  console.log(chevron);
  const submenu = $(".submenu");
  var opens = false;
  $.each(dropdown, function (indexInArray, valueOfElement) {
    $(this).on("click", function () {
      if (opens == false) {
        opens = true;
        $(this).find(submenu).slideDown(100);
        // $(chevron).removeClass("bi-chevron-down");
        // $(chevron).addClass("bi-chevron-up");
      } else {
        opens = false;
        $(this).find(submenu).slideUp(100);
        // $(chevron).removeClass("bi-chevron-up");
        // $(chevron).addClass("bi-chevron-down");
      }
    });
  });
});

// Preloader
// $(window).on("load", function(){
//   $(".preloader").delay(800).fadeOut("slow");
// })

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
