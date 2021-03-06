$(document).ready(function() {
    fixWidths();


// main function to fix widths
function fixWidths() {
    var bar_width = $('.bar').width();
    var allbtn_width = $('.all-btn').outerWidth();
    var component_total = 0;

    $('.bar-component').not('.search').each(function(index) {
        component_total += parseInt($(this).outerWidth(), 10);
    });

    $('.search').width(bar_width - component_total - 1)
    $('.search-input').css({
        'padding-left': allbtn_width + 15 + 'px'
    });
}

var color;
$('.colorz').each(function() {
    var x = $(this).css('backgroundColor');
    hexc(x);
    $(this).find('.hex').html(color);
});

$('.colorz-gr').each(function() {
    var css = $(this).css('background-image');

    var hexStart = css.split('0%')[0].split('to right, ')[1].replace(/\s+/g, '');
    hexc(hexStart);
    $(this).find('.hex-start').html(color);

    var hexEnd = css.split('100%')[0].split('25%,')[1].replace(/\s+/g, '');
    hexc(hexEnd);
    $(this).find('.hex-end').html(color);
});




function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');
}

$(document).on('click', '.rx-select', function() {
    $(this).addClass('checked');
    $('.rx-select.checked').not(this).each(function(){
        $(this).removeClass('checked');
    });
});

$(".switch").bootstrapSwitch();
$('.datepicker').datepicker( {
    todayHighlight: true,
    startDate: "+2d"
});


// DOTS
var dots;

function startInterval() {
    dots = setInterval(function() {
        var _active = $('.active');

        if (_active.next('li').length) {
            _active.removeClass('active').next('li').addClass('active');
        } else {
            _active.removeClass('active');
            $('.dots').find('li').first().addClass('active');
        }

    },2000);
}

startInterval();

$('.dots > li').click(function() {
    clearInterval(dots);
    $('.dots > li ').each(function() {
        $(this).removeClass('active');
    });
    $(this).addClass('active');
    startInterval();
});
// END DOTS

});