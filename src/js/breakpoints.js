// empty table
const breakpoint = {};

// add CSS breakpoint on table
breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(
        document.querySelector('body'), ':before'
    ).getPropertyValue('content').replace(/\"/g, '');
};

// Diplay on console
function breakpointsConsole() {

    breakpoint.refreshValue();
    console.log(breakpoint.value);

}


function FixedHeader () {


    const body =  document.querySelector('body');
    const headerTop = document.querySelector(".AxaXl-Header__top");

    const HeaderAxalogo = document.querySelector(".AxaXl-Header__Link-Axa");
    const HeaderXllogo = document.querySelector(".AxaXl-Header__Link-Xl");

    const headerTopHeight = headerTop.clientHeight;

    const HeaderAxalogoHeight = document.querySelector(".AxaXl-Header__Link-Axa").scrollHeight;



    if (breakpoint.value != 'phone'){


        //HeaderAxalogo.classList.remove("AxaXl-headertopHidden");
        //HeaderXllogo.classList.remove("AxaXl-headertopHidden");

        //headerTop.classList.remove("AxaXl-fixedTop");
        //body.removeAttribute("style");

    }else{

        //HeaderAxalogo.classList.add("AxaXl-headertopHidden");
        //HeaderXllogo.classList.add("AxaXl-headertopHidden");


        //headerTop.classList.add("AxaXl-fixedTop");
        //body.setAttribute("style", "padding-top:" + headerTopHeight +"px;");
    }

}




window.addEventListener("resize", function() {

    breakpoint.refreshValue();

    //FixedHeader();

});



// function myFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
//         document.getElementById("myP").className = "test";
//     } else {
//         document.getElementById("myP").className = "";
//     }
// }


window.addEventListener('scroll', function(e) {


    const AxaLogoScrollHeight = document.querySelector(".AxaXl-Header__Link-Axa").scrollHeight;

    const bodyScrollHeight = document.body.scrollHeight;




    const body =  document.querySelector('body');

    const HeaderNav = document.querySelector(".AxaXl-Header__Nav");

    const HeaderNavHeight = HeaderNav.clientHeight;

    const sticky = HeaderNav.offsetTop;

    const HeaderTop = document.querySelector(".AxaXl-Header__top");

    const HeaderTopHeight = HeaderTop.clientHeight;


    const bodyPadding =  HeaderTopHeight - HeaderNavHeight


    //console.log(bodyPadding);

    if (window.pageYOffset > sticky ) {

        //HeaderNav.classList.add("AxaXl-fixedTop");
        //body.setAttribute("style", "padding-top:" + bodyPadding +"px;");


    } else {

        //HeaderNav.classList.remove("AxaXl-fixedTop");
        //body.removeAttribute("style");

    }


    //console.log(document.body.scrollHeight);
    //console.log(document.body.scrollTop);

    // console.log(AxaLogoScrollHeight);
    // console.log(bodyScrollHeight);




});


document.addEventListener("DOMContentLoaded", function() {

    breakpointsConsole();

    FixedHeader();

});
