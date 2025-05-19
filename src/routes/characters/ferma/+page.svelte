<script>
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Ferma from "$lib/images/Ferma.png"
</script>

<Background>
	<!--      ADJUST        ↓         ↓         ↓           ↓-->
	<img slot="image" width="500" height=""  alt="Ferma" src={Ferma}>

	<span class="text-[#563728]" slot="heading">Ferma</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
		<li>Born in Fermontipiano, trained by piano grand masters on their grand pianos, he uses his memory to play every piece he's learned. </li>
		<li>Ferma</li>
		<li>Raised in the plains of Pianotopia, where he cultivated a deep connection with nature and the land.</li>
		<li>Piaru sustains himself with fresh vegetables and organically raised meat, emphasizing a natural and wholesome lifestyle.</li>
		<li>A child of the plains, Piaru has an inherent understanding and talent for the wild, reflecting his symbiotic relationship with the environment.</li>
		<li>Piano serves as his primary weapon, with his positive, harmonious compositions acting as a direct force against evil frequencies.</li>
		<li>Piaru's identity is rooted in the fusion of nature and music—his piano harmonies represent his soul's connection to the natural world.</li>
	</span>
</Background>