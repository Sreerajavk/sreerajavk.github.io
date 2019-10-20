

    document.addEventListener('DOMContentLoaded', function(event) {
        var dataText = [
            "Hi there, Iam  Sreeraj S",
            "I'm a full-stack developer.",
            "I have strong knowledge in App development",
            "As well as in Nodejs and flutter",

        ];

        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
            // chekc if text isn't finished yet
            if (i < (text.length)) {
                // add next character to h1
                document.getElementById("text").innerHTML = text.substring(0, i + 1) +
                    '<span aria-hidden="true" class="banner_text_w3ls"></span>';

                // wait for a while and call this function again for next character
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback)
                }, 80);
            }
            // text finished, call callback if there is a callback function
            else if (typeof fnCallback == 'function') {
                // call callback after timeout
                setTimeout(fnCallback, 1000);
            }
        }
        // start a typewriter animation for a text in the dataText array
        function StartTextAnimation(i) {
            // check if dataText[i] exists
            if (i < dataText.length) {
                // text exists! start typewriter animation
                console.log('entered');
                typeWriter(dataText[i], 0, function() {
                    // after callback (and whole text has been animated), start next text
                    StartTextAnimation(i + 1);
                });
            } else {
                // console.log('sdf');
                StartTextAnimation(0);
            }
        }
        // start the text animation
        StartTextAnimation(0);
    });



    // alert("sdfsdf");




