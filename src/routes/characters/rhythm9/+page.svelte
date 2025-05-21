<script lang="ts">
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Rhythm9 from "$lib/images/Rhythm-9.png";
	import { onMount } from 'svelte';
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
	<img slot="image" width="500" height=""  alt="rhythm9" src={Rhythm9}  bind:this={image} >
<!--Your Mom-->
	<span class="text-[#d29d72]" slot="heading">Rhythm-9</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
<li><strong>Name - </strong> Rhythm-9</li>
<li><strong>Role - </strong> Protagonist</li>
<li><strong>Chronological Age -</strong> Forty-two cycles since creation</li>
<li><strong>Programmed Purpose - </strong> Originally designed as a military metronome drone</li>
<li><strong>Reprogrammed By - </strong> Piaru, a young prodigy</li>
<li><strong>Strengths - </strong> Excels in accuracy and tempo anchoring</li>
<li><strong>Weaknesses - </strong> Lacks improvisational instincts</li>
<li><strong>Key Skill - </strong> Executes percussive assaults timed to the second beat of every measure</li>
<li><strong>Core Value After Reprogramming - </strong> Values dynamic groove and emotional tempo</li>
	</span>
</Background>