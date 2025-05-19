<script>
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Clarineta from "$lib/images/Clarineta.png"
</script>

<Background>
	<!--      ADJUST        ↓         ↓         ↓           ↓-->
	<img slot="image" width="500" height=""  alt="Clarineta" src={Clarineta}>

	<span class="text-[#BCBC79]" slot="heading">Clarineta</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
		<li>Auralis Loopwright is 38 years old</li>
		<li>Auralis creates hymns that are in 7/8 time, creating hallucinatory effects for her enemies.</li>
		<li>Her melodies allow for healing effects when Piaru is within 1 mile.</li>
		<li>Her stamina is incredible, but her projection of volume is minimal.</li>
		<li>When she is paired strategically with Piaru, they can play duets together.</li>
	</span>
</Background>