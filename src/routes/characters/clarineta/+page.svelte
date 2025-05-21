<script>
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Clarineta from "$lib/images/Clarineta.png";
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
		<li>Her name is a fusion of "clarinet" and "Elsa."</li>
		<li>Her melodies allow for healing effects when Piaru is within 1 mile.</li>
		<li>Her stamina is incredible, but her projection of volume is minimal.</li>
		<li>When she is paired strategically with Piaru, they can play duets together.</li>
	</span>
</Background>