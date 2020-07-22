
/*******************************
*       js of Countdown        *
********************************/

$(document).ready(function() {

    // $('#clockImage').countdown('2018/8/12').on('update.countdown', function(event) {
    //   var $this = $(this).html(event.strftime(''
    //     + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span>%-w</span> <br> <p class="lead mb-0">أسبوع </p> </div>'
    //     + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span>%d</span> <br> <p class="lead mb-0">يوم </p> </div>'
    //     + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span>%H</span> <br> <p class="lead mb-0">ساعة </p> </div>'
    //     + '<div class="clockCard p-2 mr-1 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span>%M</span> <br> <p class="lead mb-0">دقيقة </h5> </div>'
    //     + '<div class="clockCard p-2 mb-3 bg-cyan bg-darken-4 box-shadow-2"> <span>%S</span> <br> <p class="lead mb-0"> ثانية </p> </div>'))
    // });

    // $('#clockFlat').countdown('2018/8/12').on('update.countdown', function(event) {
    //   var $this = $(this).html(event.strftime(''
    //     + '<div class="clockCard p-1"> <span>%-w</span> <br> <p class="bg-amber clockFormat lead p-1 mt-1 black"> أسبوع </p> </div>'
    //     + '<div class="clockCard p-1"> <span>%d</span> <br> <p class="bg-amber clockFormat lead p-1 mt-1 black"> يوم </p> </div>'
    //     + '<div class="clockCard p-1"> <span>%H</span> <br> <p class="bg-amber clockFormat lead p-1 mt-1 black"> ساعة </p> </div>'
    //     + '<div class="clockCard p-1"> <span>%M</span> <br> <p class="bg-amber clockFormat lead p-1 mt-1 black"> دقيقة </p> </div>'
    //     + '<div class="clockCard p-1"> <span>%S</span> <br> <p class="bg-amber clockFormat lead p-1 mt-1 black"> ثانية </p> </div>'))
    // });

    $('#clockMinimal').countdown('2020/8/12').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="clockCard white p-2"> <span>%-w</span> <br> <p class="lead white"> أسبوع </p> </div>'
        + '<div class="clockCard white p-2"> <span>%d</span> <br> <p class="lead white">يوم </p> </div>'
        + '<div class="clockCard white p-2"> <span>%H</span> <br> <p class="lead white"> ساعة </p> </div>'
        + '<div class="clockCard white p-2"> <span>%M</span> <br> <p class="lead white"> دقيقة </p> </div>'
        + '<div class="clockCard white p-2"> <span>%S</span> <br> <p class="lead white"> ثانية </p> </div>'))
    });

    // YouTube video
    // Uncomment following code to enable YouTube background video
    if($('.comingsoonVideo').length > 0){
        $('.comingsoonVideo').tubular({videoId: 'iGpuQ0ioPrM'});
    }

    // Custom Video
    // Comment / Uncomment to show / hide your custom video. Please exchange your video name and paths accordingly.
    // var BV = new $.BigVideo({useFlashForFirefox:false});
    // BV.init();
    // BV.show([
    //     { type: "video/mp4",  src: "../../../app-assets/videos/481479901.mp4" },
    //     { type: "video/webm", src: "../../../app-assets/videos/481479901.webm" },
    //     { type: "video/ogg",  src: "../../../app-assets/videos/481479901.ogv" }
    // ]);
});
