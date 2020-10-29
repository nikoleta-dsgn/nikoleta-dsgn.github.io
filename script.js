// 1
var oldScroll = 1000;

window.addEventListener('load', () => {

    if (window.screen.availWidth <= 1280) {
        window.location = 'notAvailable.html';
    }

    // glider
    const gliders = [...document.querySelectorAll('.glider-contain')]

    gliders.forEach(gliderDiv => {
        new Glider(gliderDiv.querySelector('.glider'), {
            dots: gliderDiv.querySelector('.dots'),
            draggable: true
        });
    })

    //autoplay

    //gett all the video elements on the document
    var vids = document.getElementsByClassName('autoplay');

    //loop through all the video elements
    for (var i = vids.length - 1; i >= 0; i--) {
        //pause all the videos by default
        vids[i].pause();
    }

    //trigger an anonymous function that handles the play, pause video actions
    window.onscroll = function () {

        var backToTop = document.getElementById('bcktt');

        // 2
        if ((this.scrollY < 1000 || this.oldScroll < this.scrollY)
            && this.scrollY < document.body.scrollHeight - 1000) {
            backToTop.style.visibility = 'hidden';
        } else {
            backToTop.style.visibility = 'visible';
        }

        this.oldScroll = this.scrollY;

        for (var i = vids.length - 1; i >= 0; i--) {

            //get current scrol position
            var currentYpos = window.pageYOffset || document.documentElement.scrollTop;

            if (currentYpos >= vids[i].offsetTop - 200
                && currentYpos <= vids[i].offsetTop + vids[i].offsetHeight
            ) {
                //Play video if the current scroll position
                //is between the top and bottom of the video element
                vids[i].play();
            } else {
                //else pause the video
                vids[i].pause();
            }
        }
    };


})
