<script>
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Piaru from "$lib/images/Piaru.png"
</script>

<Background>
	<!--      ADJUST        ↓         ↓         ↓           ↓-->
	<img slot="image" width="500" height=""  alt="Piaru" src={Piaru}>

	<span class="text-[#d29d72]" slot="heading">Piaru</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
		<li>Piaru is 17 years old.</li>
		<li>His signature attack is the Nocturne Strike (uses his daylight energy for this.)</li>
		<li>He has to fight against Violia (the villian of Pianotopia.)</li>
		<li>A fusion of Haru (Japanese for "Spring") and Piano, symbolizing both nature and music.</li>
		<li>Piaru's music produces harmonious frequencies that counteract the malevolent waves emitted by enemies, particularly Viola.</li>
		<li>Raised in the plains of Pianotopia, where he cultivated a deep connection with nature and the land.</li>
		<li>Piaru sustains himself with fresh vegetables and organically raised meat, emphasizing a natural and wholesome lifestyle.</li>
		<li>A child of the plains, Piaru has an inherent understanding and talent for the wild, reflecting his symbiotic relationship with the environment.</li>
		<li>Piano serves as his primary weapon, with his positive, harmonious compositions acting as a direct force against evil frequencies.</li>
		<li>Piaru's identity is rooted in the fusion of nature and music—his piano harmonies represent his soul's connection to the natural world.</li>
	</span>
</Background>