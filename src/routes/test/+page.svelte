<div class="relative w-full h-[370px] overflow-hidden flex justify-center items-center min-h-screen bg-gradient-to-tr from-purple-500 to-pink-500 font-mono">
    <div class="slider relative w-full h-[370px] overflow-hidden">
        <div class="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-2">Slide 1</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </div>
        <div class="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-2">Slide 2</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </div>
        <div class="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-2">Slide 3</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </div>
        <div class="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-2">Slide 4</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </div>
        <div class="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-2">Slide 5</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </div>
        <div class="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-2">Slide 6</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </div>
        <div class="item absolute w-[200px] h-[320px] text-justify bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-2">Slide 7</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
        </div>

        <button id="prev"
            class="absolute top-[40%] left-[400px] text-white bg-transparent border-none text-6xl font-bold font-mono">
            ‹
        </button>
        <button id="next"
            class="absolute top-[40%] right-[400px] text-white bg-transparent border-none text-6xl font-bold font-mono">
            ›
        </button>
    </div>

    <script>
        let items = document.querySelectorAll('.slider .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');

        let active = 3;
        function loadShow() {
            let stt = 0;
            items[active].style.transform = `none`;
            items[active].style.zIndex = 1;
            items[active].style.filter = 'none';
            items[active].style.opacity = 1;
            for (var i = active + 1; i < items.length; i++) {
                stt++;
                items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
            stt = 0;
            for (var i = active - 1; i >= 0; i--) {
                stt++;
                items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
        }
        loadShow();
        next.onclick = function () {
            active = active + 1 < items.length ? active + 1 : active;
            loadShow();
        }
        prev.onclick = function () {
            active = active - 1 >= 0 ? active - 1 : active;
            loadShow();
        }
    </script>
</div>
