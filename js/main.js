
 //tab
 $(document).ready(function() {
    $(".myTabs").each(function() {

        var $myTabs = $(this);

        $myTabs.find(".tab_content").hide().first().show();
        $myTabs.find("ul.tabs li:first").addClass("active").show();

        $myTabs.find("ul.tabs li").click(function() {
            var $this = $(this);

            $this.addClass("active").siblings().removeClass("active");
            $myTabs.find(".tab_content").hide();

            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();

            return false;
        });
    });
});





$(function () {


	//跳窗

	$("#msg").click(function(){
		$(".popbgc-1").fadeIn(200);
    });


	$(".pop").click(function(){
		$(".popbgc").fadeIn(200);
    });


	$(".application-btn").click(function(){
		$(".popbgc-2").fadeIn(200);
	});


	$(".x,.x-1,.x-2").click(function() {
		$('.popbgc,.popbgc-1,.popbgc-2').fadeOut(200);
	});




});

