<script>
// @ts-nocheck

	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
  	import { onMount } from 'svelte';
	import Bassoonia from "$lib/images/Bassoonia.png";
  import Bassoonia2 from "$lib/components/skyfall/Bassoonia.svelte";
  import { animateImage } from "@lib/js/fade.js"; // Import the animation function
  let image; // Reference for the image element

  // Use onMount to trigger the animation when the component is mounted
  onMount(() => {
    // @ts-ignore
    animateImage(image);
});
</script>

<Background>
	<!--      ADJUST        ↓         ↓         ↓           ↓-->
	<img slot="image" width="500" height=""  alt="Bassoonia" src={Bassoonia} bind:this={image}>

	<span class="text-[#d29d72]" slot="heading">Bassoonia</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
		<ul>
  <li><strong>Name - </strong> Bassoonia</li>
  <li><strong>Age - </strong> 33</li>
  <li><strong>Role - </strong> Antagonist</li>
  <li><strong>Primary Weapon - </strong> Bassoon</li>
  <li><strong>Signature Technique - </strong> Subsonic Collapse — unleashes deep-frequency tremors that destabilize tonal infrastructure and warp the harmonic fabric of battlefields.</li>
  <li><strong>Strengths - </strong>
    <ul>
      <li>Excels at suppressing high-pitch resonance</li>
      <li>Generates powerful low-end sonic disruptions</li>
    </ul>
  </li>
  <li><strong>Weaknesses:</strong>
    <ul>
      <li>Slowed by techniques that operate in the upper registers</li>
    </ul>
  </li>
  <li><strong>Philosophy:</strong> Believes all music originates from low-end vibrations and seeks to envelop Pianotopia in an eternal, monolithic drone.</li>
</ul>

	</span>
</Background>