
var prompt = '<span class="prompt"></span>';
var game_running = false;
var game_time = 3;

//Reset event
function reset_events() {
    $('.prompt').unbind('click');
    $('.prompt').click(function() {
        $(this).remove();
    });
}

//Function which add line to words and remove
function function2(e){

    e.preventDefault();

    // Get position
    elementOffset = $(this).offset(); 
    relX = e.pageX - elementOffset.left;
    relY = e.pageY - elementOffset.top;

    characterWidth = $(this).width();

    if (characterWidth / 2 < relX) {
        // Right
        if ($(this).next().attr('class') == 'prompt') {
            $(this).next().remove();
        }
        else if ($(this).next().attr('class') == 'correct_position' && $(this).next().next().attr('class') == 'prompt') {
            $(this).next().next().remove();
        }
        else {
            $(this).after(prompt);
            reset_events();
        }

    }
    else {
        // Left
        if ($(this).prev().attr('class') == 'prompt') {
            $(this).prev().remove();
        }
        else if ($(this).prev().attr('class') == 'correct_position' && $(this).prev().prev().attr('class') == 'prompt') {
            $(this).prev().prev().remove();
        }
        else {
            $(this).before(prompt);
            reset_events();
        }
    }

}

//Show the correct places and check how many right the player had
    function correct_words() {
        var total_words = 0;
        var correct_words = 0;

        $('.character').unbind('mousedown');

        $(".correct_position").show();
        $(".word").each(function() {
            total_words += 1;
            isCorrect = true;

            // Check promps
            $(this).find('.prompt').each(function() {
                if ($(this).prev().attr('class') == 'correct_position' || $(this).next().attr('class') == 'correct_position') {
                    // OK
                }
                else {
                    isCorrect = false;
                }
            });

            // Check correct position spans
            $(this).find('.correct_position').each(function() {
                if ($(this).prev().attr('class') == 'prompt' || $(this).next().attr('class') == 'prompt') {
                    // OK
                }
                else {
                    isCorrect = false;
                }
            });

            if (isCorrect) {
                $(this).fadeTo(0, 0.3);
                correct_words += 1;
            }

        });


        var playername = 'Demo';

        //save_score(playername, correct_words, total_words)

        $('#score_name').html(playername);
        $('#score_correct').html(correct_words);
        $('#score_total').html(total_words);
        $('#score').fadeIn(400);
        $('body,html').animate({scrollTop: 0}, 500);
    }

    //Starts the game on click 'start'
    $('#start_button').click(function() {
        // Initiate
        if (!game_running) {
            $('.setup').fadeOut(200, function() {
                $('.game').fadeIn(300);
            });

            game_time = $('.gametime').val();
            

            game_running = true;
            setTimeout(correct_words, game_time*1000);
        }
        fillWords();
    });

    