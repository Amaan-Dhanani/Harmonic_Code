<script>
	import Background from "@lib/components/Background.svelte";
	//PUT CHARACTER NAME
	//       ↓                       ↓
	import Piaru from "$lib/images/Clarineta.png"
</script>

<Background>
	<!--      ADJUST        ↓         ↓         ↓           ↓-->
	<img slot="image" width="500" height=""  alt="Clarineta" src={Piaru}>

	<span class="text-[#BCBC79]" slot="heading">Clarineta</span>

	<!--      ADJUST        ↓                      ↓           -->
	<span class="text-[#383838]" slot="paragraph">
		<li>Her name is a fusion of "harmony" and "bassoon."</li>
		<li>Tries to fight against Piaru via evil concerto melodies, typically in minor key.</li>
		<li>Her family's villainous and arrogant past can be seen through her playing.</li>
		<li>Sometimes she can mask her evilness through starting her minor key concerto with sereneness (defense tactic.)</li>
		<li>Born with a chord that is divergent from her parents, she has a weakness: she is not purely evil, thus Piaru's music can effect her.</li>
		<li>She's easily stunned by 1+ min major key passages in music, making her weak to Piaru and Ferma.</li>
	</span>
</Background>