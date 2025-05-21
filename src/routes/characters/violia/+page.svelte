<script>
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Violia from "$lib/images/Violia.png";
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
	<img slot="image" width="500" height="" alt="Violia" src={Violia} bind:this={image} />


	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-durple" slot="heading">Violia</span>

	<span class="text-[#383838]" slot="paragraph">
		<li>Violia is 28 years old.</li>
		<li>Her weakness consists of prolonged engagements because her stamina is low. </li>
		<li>She plays rapid passages in 16th notes which makes her exhaustion rate high.</li>
		<li>Derived from the fusion of Violia, a string instrument symbolizing disagreement, and Euphoria/Anhedonia, representing the contrast between intense pleasure and a lack of it, embodying a twisted emotional state.</li>
		<li>Violia can paralyze her victims by emitting piercing, discordant screeches from her violin.</li>
		<li>Piaru’s music is her greatest vulnerability. The positive, harmonious frequencies he plays can weaken Violia’s will, disrupting her chaotic powers.</li>
		<li>Violia carries an air of refinement and grace, often displaying an aura of aristocratic elegance.</li>
		<li>Deeply resentful and cynical, Violia’s bitterness stems from a life filled with emotional conflict. Her sharp, discordant music reflects her inner turmoil and rejection of peace or resolution.</li>
		<li>Violia’s pain and anguish fuel her art. She is constantly battling with her inner demons, and her music serves as both an outlet and a weapon, channeling her torment into every note she plays.</li>
	</span>
</Background>