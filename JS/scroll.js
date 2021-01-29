window.onscroll = function () {

    if (document.documentElement.scrollTop > 80 || document.body.scrollTop>80) {
        
        document.getElementById("barremenu").style.padding = "20px 10px";   
    }
    else {
        
        document.getElementById("barremenu").style.padding = "35px 10px";
    }


}
