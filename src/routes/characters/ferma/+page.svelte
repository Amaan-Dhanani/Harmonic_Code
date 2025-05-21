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
        <li>Born in Fermontipiano, he is 72 years old, trained by piano grand masters on their grand pianos, he uses his memory to play every piece he's learned. </li>
        <li>Ferma is incredibly rich and serves as Piaru's piano teacher.</li>
        <li>Raised in the plains of Pianotopia, where he cultivated a deep connection with nature and the land.</li>
        <li>Just like Piaru, Verma sustains himself with fresh vegetables and organically raised meat, emphasizing a natural and wholesome lifestyle.</li>
        <li>Like Piaru, Ferma has an inherent understanding and talent for the wild, reflecting his symbiotic relationship with the environment.</li>
        <li>Ferma's identity is rooted in the fusion of nature and music—his piano harmonies represent his soul's connection to the natural world.</li>
    </span>
</Background>