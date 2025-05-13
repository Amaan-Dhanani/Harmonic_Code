<script>
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Piaru from "$lib/images/Piaru.png"
</script>

<Background>
	<!--      ADJUST        ↓         ↓         ↓           ↓-->
	<img slot="image" width="500" height=""  alt="Piaru" src={Piaru}>

	<span class="text-[#BCBC79]" slot="heading">PIARU</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">Piaru is a character whose name is a fusion of “Piano” and “Haru,” the latter meaning spring or rebirth—symbolizing both musical essence and renewal. Piaru’s abilities include Resonant Beam, which emits emotional soundwaves powerful enough to cleanse negativity, and Key Storm, a cyclone of piano keys used for both offense and defense. However, Piaru’s greatest weakness is silence—without sound, their power fades, leaving them vulnerable.</span>
</Background>