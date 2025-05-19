<script>
  import { onMount } from 'svelte';
  let name = '';

  onMount(() => {
    name = localStorage.getItem("name_sup");
  });
</script>

{#if name === "Piaru"}
  <div class="flex w-full py-3.5 leading-[normal] font-poppins justify-center items-center gap-x-12 text-lg text-center text-sm flex-wrap">
    <div class="flex flex-col items-center">
      <div class="text-center">Piaru</div>
      <div class="flex items-center justify-center h-1 w-11 rounded-full bg-[silver]">
      </div>
    </div>

    <div>Auralis Loopwright</div>
    <div>Rhythm - 9</div>
    <div>Voxwell Ferma</div>
    <div>Clarineta</div>
    <div>Violia</div>
    <div>Basoonia</div>
    <div>Druméz</div>
  </div>
{/if}

{#if name === "Auralis Loopwright"}
  <div class="flex w-full py-3.5 leading-[normal] font-poppins justify-center items-center gap-x-12 text-lg text-center text-sm flex-wrap">
    <div>Piaru</div>
    <div class="flex flex-col items-center">
      <div class="text-center">Auralis Loopwright</div>
      <div class="flex items-center justify-center h-1 w-11 rounded-full bg-[silver]">
      </div>
    </div>
    <div>Rhythm - 9</div>
    <div>Voxwell Ferma</div>
    <div>Clarineta</div>
    <div>Violia</div>
    <div>Basoonia</div>
    <div>Druméz</div>
  </div>
{/if}

{#if name === "Rhythm - 9"}
  <div class="flex w-full py-3.5 leading-[normal] font-poppins justify-center items-center gap-x-12 text-lg text-center text-sm flex-wrap">
    <div>Piaru</div>
    <div class="flex flex-col items-center">
      <div class="text-center">Auralis Loopwright</div>
      <div class="flex items-center justify-center h-1 w-11 rounded-full bg-[silver]">
      </div>
    </div>
    <div>Rhythm - 9</div>
    <div>Voxwell Ferma</div>
    <div>Clarineta</div>
    <div>Violia</div>
    <div>Basoonia</div>
    <div>Druméz</div>
  </div>
{/if}