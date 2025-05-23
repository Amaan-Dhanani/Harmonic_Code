<script>
	import Background from '@lib/components/Background.svelte';
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Clarineta from '$lib/images/Clarineta.png';
	import { onMount } from 'svelte';
	import { animateImage } from '@lib/js/fade.js'; // Import the animation function

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
	<img slot="image" width="500" height="" alt="Clarineta" src={Clarineta} bind:this={image} />

	<span class="text-[#BCBC79]" slot="heading">Clarineta</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
		<li>Clarineta is 24 years old.</li>
		<li>Her melodies allow for healing effects when Piaru is within 1 mile.</li>
		<li>Her stamina is incredible, but her projection of volume is minimal.</li>
		<li>When she is paired strategically with Piaru, they can play duets together.</li>
		<li>She wears gloves made of sound-insulating fabric to muffle unwanted vibrations.</li>
		<li>
			Clarineta trained at the Harmonia Conservatory, a prestigious school for musically gifted
			individuals.
		</li>
		<li>Her favorite time to play is during twilight, when the air carries sound more gently.</li>
		<li>She communicates mostly through musical phrases rather than spoken words.</li>
		<li>Her clarinet is enchanted, reacting to her emotions by subtly changing tone color.</li>
		<li>Despite her quiet playing, animals are irresistibly drawn to her music.</li>
		<li>
			She can play continuously for hours without fatigue, thanks to her unique breathing technique.
		</li>
		<li>
			She often composes pieces specifically for her duets with Piaru, drawing inspiration from
			nature.
		</li>
		<li>Her presence calms storms and tempers wild winds within her musical radius.</li>
	</span>
</Background>
