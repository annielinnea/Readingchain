//This script is in use!

function fillWords() {
    //Get all the elements I need
    var first = document.getElementById('first');
    var firstChild = document.getElementById('first').children;
    var second = document.getElementById('second');
    var secondChild = document.getElementById('second').children;
    var hidden = document.getElementById('hidden');
    var allWords = document.getElementsByClassName('word');
    var character = document.getElementsByClassName('character');
    var level = 2;


    //after click on character call function2 in app.js
    for (var i = 0; i < character.length; i++) {
        character[i].addEventListener('click', function2, false);
    }

    //Fill first div with word
    function firstWord() {
        console.log('first')
        first.append(allWords[0]);

        allWords[0].addEventListener('click', event => {
            console.log("click1")
            secondListener();
        });

        function secondListener() {
            allWords[0].addEventListener('click', event => {
                console.log("click2")
                fillNext();
            })
        }

    };
    firstWord();

    //This will loop and continue to fill 'first' with words
    async function fillNext() {
        console.log("fill");
        for (let i = 1; i < allWords.length; i++) {
            if (secondChild == null) {
                console.log("second")
                $(firstChild).detach().appendTo(second);
                first.append(allWords[i]);
                await click(first);
            }
            else {
                console.log("third")
                $(secondChild).detach().appendTo(hidden);
                $(firstChild).detach().appendTo(second);
                first.append(allWords[i]);
                await click(first);
            }
        }
    }

    //Click function
    async function click(first) {
        var clickCount = 0;
        var isWaiting = true;

        setTimeout(() => isWaiting = false, 300)

        return new Promise(resolve => first.onclick = () => {
            if (isWaiting == false) {
                clickCount += 1;
                console.log(clickCount);

                if (clickCount % 2 == 0) {
                    clickCount = 0;
                    resolve();
                }
            }
        });
    }
}