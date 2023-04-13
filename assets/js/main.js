$(function(){
    fullpageActivate();
});

function fullpageActivate(){
    $('#fullpage').fullpage({
        anchors: ['section1','section2','section3','section4','section5'],
        navigation: true,
        navigationPosition: 'right',
        afterLoad :function(anchorLink, index){
            if(index == 3){
                svg_circle_progress();
            }
        } 
        //,responsiveWidth: 900
    });
}

function svg_circle_progress(){
    const chart = $('.chart');
    chart.each(function(){
        let item = $(this);
        let title = item.find('h3');
        let targetNum = title.attr('data-num');
        let circle = item.find('circle');
        let radius = circle.attr('r');
        let circumference = 2 * Math.PI * radius;

        $({rate: 0}).animate({rate: targetNum},{
            duration: 1500,
            progress: function(){
                let now = this.rate;
                let amount = circumference - (circumference*now/100);
                title.text(Math.floor(now));
                circle.css({strokeDashoffset: amount});
            }
        });
    });
}