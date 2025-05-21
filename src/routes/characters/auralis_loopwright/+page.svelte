<script>
	import Background from '@lib/components/Background.svelte';
	import { onMount } from 'svelte';

	//       ↓                       ↓
	import Auralis_Loopwright from '$lib/images/Auralis_Loopwright.png';
	import { animateImage } from "@lib/js/fade.js"; // Import the animation function

  // @ts-ignore
  let image; // Reference for the image element

  // Use onMount to trigger the animation when the component is mounted
  onMount(() => {
    // @ts-ignore
    animateImage(image);
});
</script>

<Background>
	<!--      ADJUST        ↓         ↓         ↓           ↓-->
	<img slot="image" width="500" height="" alt="Auralis Loopwright" src={Auralis_Loopwright} bind:this={image} />

	<span class="text-[#BCBC79]" slot="heading">Auralis Loopwright</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
		<li>Auralis Loopwright is 38 years old</li>
		<li>
			Auralis creates hymns that are in 7/8 time, creating hallucinatory effects for her enemies.
		</li>
		<li>Her melodies allow for healing effects when Piaru is within 1 mile.</li>
		<li>Her stamina is incredible, but her projection of volume is minimal.</li>
		<li>When she is paired strategically with Piaru, they can play duets together.</li>
	</span>
</Background>
