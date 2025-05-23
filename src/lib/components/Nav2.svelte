<script>
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
    import Logo from "$lib/images/Logo.png";

	const name = writable('');

	// Load name from localStorage when mounted
	import { onMount } from 'svelte';
	onMount(() => {
		if (typeof window !== 'undefined') {
			name.set(localStorage.getItem('page_sup') || '');
		}
	});

	const characters = [
		{ key: 'Home/Characters', label: 'Home/Characters', href: '/' },
		{ key: 'Contact Us', label: 'Contact Us', href: '/form' },
		{ key: 'The Story of the Harmonic Code!', label: 'The Story of the Harmonic Code!', href: '/characters/bios' },
		{ key: 'Credits/Sources', label: 'Credits/Sources', href: '/credits' },
	];

	// @ts-ignore
	function selectCharacter(char) {
		if (typeof window !== 'undefined') {
			localStorage.setItem('page_sup', char.key);
			name.set(char.key);
			goto(char.href); // client-side navigation
		}
	}
</script>


<nav>
<div class="bg-white font-poppins flex w-full flex-wrap items-center justify-center gap-x-12 py-3.5 text-center text-lg text-sm leading-[normal]">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img 
	 src={Logo}
	  alt=""
	  on:click={() => goto('/')} 
	  class="rounded-[30px] border-[3px] border-[#b89f5d] w-30"
	  />
	{#each characters as char}
		{#if $name === char.key}
			<div class="flex flex-col items-center">
				<div class="text-center">{char.label}</div>
				<div class="flex items-center justify-center">
					<div class="h-1 w-11 rounded-full bg-[silver]"></div>
				</div>
			</div>
		{:else}
			<div>
				<a href={char.href} on:click|preventDefault={() => selectCharacter(char)}>
					{char.label}
				</a>
			</div>
		{/if}
	{/each}
</div>
</nav>