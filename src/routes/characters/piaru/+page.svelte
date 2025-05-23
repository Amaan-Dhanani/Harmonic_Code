<script lang="ts">
  import Background from "@lib/components/Background.svelte";
  import Piaru from "$lib/images/Piaru.png";
  import { onMount } from 'svelte'; // Import onMount from svelte
  // @ts-ignore
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
  <img 
    bind:this={image} 
    slot="image" 
    width="500" 
    height=""  
    alt="Piaru" 
    src={Piaru} 
    style="opacity: 0; transform: translateX(100%);"   >

  <span class="text-[#d29d72]" slot="heading">Piaru</span>

  <span class="text-[#383838]" slot="paragraph">
    <li><strong>Age -&nbsp;</strong>17</li>
    <li><strong>Signature Attack -&nbsp;</strong>Nocturne Strike</li>
    <li><strong>Origin -&nbsp;</strong>A fusion of Haru (Japanese for "Spring") and Piano, symbolizing both nature and music.</li>
    <li><strong>Strength -&nbsp;</strong>Piaru's music produces harmonious frequencies that counteract the malevolent waves emitted by enemies, particularly Viola.</li><br>
    <hr class="bg-gray"><br>
    <li>Raised in the plains of Pianotopia, where he cultivated a deep connection with nature and the land.</li>
    <li>Piaru sustains himself with fresh vegetables and organically raised meat, emphasizing a natural and wholesome lifestyle.</li>
    <li>A child of the plains, Piaru has an inherent understanding and talent for the wild, reflecting his symbiotic relationship with the environment.</li>
  </span>
</Background>
