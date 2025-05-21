<script lang="ts">
    import Piaru from "$lib/images/Piaru.png";
    import AuralisLoopwright from "$lib/images/Auralis_Loopwright.png";
    import Rhythm9 from "$lib/images/Rhythm-9.png";
    import Ferma from "$lib/images/Ferma.png";
    import Clarineta from "$lib/images/Clarineta.png";
    import Violia from "$lib/images/Violia.png";
    import Bassoonia from "$lib/images/Bassoonia.png";
</script>

<div class="relative w-full h-[370px] overflow-hidden flex justify-center items-center min-h-screen bg-gradient-to-tr from-purple-500 to-pink-500 font-mono">
    
    <div class="slider relative w-full h-[370px] overflow-hidden">
        <!-- Intro Slide Left -->
        <div class="item absolute w-[200px] h-[320px] flex flex-col justify-center items-center text-center bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-3">Choose a character...</h1>
            <span class="mt-4 text-7xl">&rsaquo;&rsaquo;&rsaquo;</span>
        </div>

        <!-- Characters -->
        <div class="item absolute w-[200px] h-[320px] bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <a href="/characters/piaru" class="block w-full h-full" on:click={() => localStorage.setItem('name_sup', 'Piaru')}>
                <h1 class="text-xl font-bold mb-2">Piaru</h1>
                <img src={Piaru} alt="Piaru" class="w-full h-auto rounded border" />
            </a>
        </div>
        <div class="item absolute w-[200px] h-[320px] bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <a href="/characters/auralis_loopwright" class="block w-full h-full" on:click={() => localStorage.setItem('name_sup', 'Auralis Loopwright')}>
                <h1 class="text-xl font-bold mb-2">Auralis Loopwright</h1>
                <img src={AuralisLoopwright} alt="Auralis Loopwright" class="w-full h-auto rounded border" />
            </a>
        </div>
        <div class="item absolute w-[200px] h-[320px] bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <a href="/characters/rhythm9" class="block w-full h-full" on:click={() => localStorage.setItem('name_sup', 'Rhythm-9')}>
                <h1 class="text-xl font-bold mb-2">Rhythm - 9</h1>
                <img src={Rhythm9} alt="Rhythm - 9" class="w-full h-auto rounded border" />
            </a>
        </div>
        <div class="item absolute w-[200px] h-[320px] bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <a href="/characters/ferma" class="block w-full h-full" on:click={() => localStorage.setItem('name_sup', 'Ferma')}>
                <h1 class="text-xl font-bold mb-2">Voxwell Ferma</h1>
                <img src={Ferma} alt="Ferma" class="w-full h-auto rounded border" />
            </a>
        </div>
        <div class="item absolute w-[200px] h-[320px] bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <a href="/characters/clarineta" class="block w-full h-full" on:click={() => localStorage.setItem('name_sup', 'Clarineta')}>
                <h1 class="text-xl font-bold mb-2">Clarineta</h1>
                <img src={Clarineta} alt="Clarineta" class="w-full h-auto rounded border" />
            </a>
        </div>
        <div class="item absolute w-[200px] h-[320px] bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <a href="/characters/violia" class="block w-full h-full" on:click={() => localStorage.setItem('name_sup', 'Violia')}>
                <h1 class="text-xl font-bold mb-2">Violia</h1>
                <img src={Violia} alt="Violia" class="w-full h-auto rounded border" />
            </a>
        </div>
        <div class="item absolute w-[200px] h-[320px] bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <a href="/characters/bassoonia" class="block w-full h-full" on:click={() => localStorage.setItem('name_sup', 'Bassoonia')}>
                <h1 class="text-xl font-bold mb-2">Bassoonia</h1>
                <img src={Bassoonia} alt="Bassoonia" class="w-full h-auto rounded border" />
            </a>
        </div>

        <!-- Outro Slide Right -->
        <div class="item absolute w-[200px] h-[320px] flex flex-col justify-center items-center text-center bg-white rounded-lg p-5 transition-all duration-500 left-1/2 -translate-x-[110px] top-0">
            <h1 class="text-xl font-bold mb-3">Choose a character...</h1>
            <span class="mt-4 text-7xl">&lsaquo;&lsaquo;&lsaquo;</span>
        </div>

        <!-- Navigation Buttons -->
        <button id="prev"
            aria-label="Previous Slide"
            class="absolute top-[40%] left-[400px] text-white bg-transparent border-none text-6xl font-bold font-mono">
            ‹
        </button>
        <button id="next"
            aria-label="Next Slide"
            class="absolute top-[40%] right-[400px] text-white bg-transparent border-none text-6xl font-bold font-mono">
            ›
        </button>
    </div>

    <script>
        let items = document.querySelectorAll('.slider .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');

        let active = 0;

        function loadShow() {
            let stt = 0;
            items[active].style.transform = `none`;
            items[active].style.zIndex = 1;
            items[active].style.filter = 'none';
            items[active].style.opacity = 1;

            for (let i = active + 1; i < items.length; i++) {
                stt++;
                items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }

            stt = 0;
            for (let i = active - 1; i >= 0; i--) {
                stt++;
                items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
                items[i].style.zIndex = -stt;
                items[i].style.filter = 'blur(5px)';
                items[i].style.opacity = stt > 2 ? 0 : 0.6;
            }
        }

        loadShow();

        next.onclick = function () {
            if (active + 1 < items.length) {
                active++;
                loadShow();
            }
        }

        prev.onclick = function () {
            if (active - 1 >= 0) {
                active--;
                loadShow();
            }
        }
    </script>
</div>
