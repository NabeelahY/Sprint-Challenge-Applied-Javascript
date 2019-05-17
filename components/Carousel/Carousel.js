class Carousel {
    constructor(image) {
        this.image = image;
        this.imgLength = image.length;
        this.slide = 0;
        this.moving = true;
        this.initCarousel();
    }
    setInitialClasses() {
        // Targets the previous, current, and next images

        this.image[this.imgLength - 1].classList.add('prev');
        this.image[0].classList.add("active");
        this.image[1].classList.add("next");

        // Set event listeners on the buttons

        let prev = document.querySelector('.left-button')
        let next = document.querySelector('.right-button')
        // console.log(next)

        next.addEventListener('click', () => this.moveNext());
        prev.addEventListener('click', () => this.movePrev());

    }
    moveNext() {
        if (!this.moving) {
            if (this.slide === this.imgLength - 1) {
                this.slide = 0
            } else {
                this.slide++
            }

            this.moveCarousel(this.slide);
        }
    }

    movePrev() {
        if (!this.moving) {
            if (this.slide === 0) {
                this.slide = this.imgLength - 1
            } else {
                this.slide--
            }

            this.moveCarousel(this.slide);
        }
    }

    disableMove() {
        this.moving = true;
        setTimeout(() => {
            this.moving = false
        }, 500);
    }

    moveCarousel(slide) {
        if (!this.moving) {
            this.disableMove();
            
            if (this.imgLength > 3) {
                let newPrev = slide - 1;
                let newNext = slide + 1;
                let oldPrev = slide - 2;
                let oldNext = slide + 2;

                if (newPrev <= 0) {
                    oldPrev = this.imgLength - 1
                } else if (newNext >= this.imgLength - 1) {
                    oldNext = 0;
                }

                if (this.slide === 0) {
                    newPrev = this.imgLength - 1;
                    oldPrev = this.imgLength - 2;
                    oldNext = this.slide + 1;
                } else if (this.slide === this.imgLength - 1) {
                    newPrev = this.slide - 1
                    newNext = 0;
                    oldNext = 1;
                }
                this.image[oldPrev].className = 'carousel-photo';
                this.image[oldNext].className = 'carousel-photo';

                this.image[newPrev].className = 'carousel-photo' + ' prev'
                this.image[this.slide].className = 'carousel-photo' + ' active'
                this.image[newNext].className = 'carousel-photo' + ' next'

            }


        }
    }

    initCarousel() {
        this.setInitialClasses();
        this.moving = false;
    }

    
}
let carousel = document.querySelectorAll('.carousel > img');

new Carousel(carousel);
console.log(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
