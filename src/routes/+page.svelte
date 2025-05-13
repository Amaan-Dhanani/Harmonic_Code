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
	<span class="text-[#383838]" slot="paragraph">Piaru combines Haru, Japanese "Spring", with Piano. He is the emblem of positivity; uses his piano skills to forge positive frequencies that fight against the evil frequencies. Specifically, he can go against the evil such as Viola, whom has evil frequencies eminating from her violin. Piaru consistently has a diet with fresh vegetables and meat organically fostered in his farms, as he grew up in the plains region of Pianotopia. All in all, Piaru has a natural and nature side as well. Growing up from nature, he has an innate interest and talent with the wild, which is also represented by his music. Combining both his nature and piano talents, he fights against the evil through his positive harmony; piano being his tool, and nature being his soul.</span>
</Background>