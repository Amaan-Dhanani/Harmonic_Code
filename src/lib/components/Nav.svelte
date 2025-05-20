<script>
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	const name = writable('');

	// Load name from localStorage when mounted
	import { onMount } from 'svelte';
	onMount(() => {
		if (typeof window !== 'undefined') {
			name.set(localStorage.getItem('name_sup') || '');
		}
	});

	const characters = [
		{ key: 'Piaru', label: 'Piaru', href: '/characters/piaru' },
		{ key: 'Auralis Loopwright', label: 'Auralis Loopwright', href: '/characters/auralis_loopwright' },
		{ key: 'Rhythm-9', label: 'Rhythm - 9', href: '/characters/rhythm9' },
		{ key: 'Ferma', label: 'Voxwell Ferma', href: '/characters/ferma' },
		{ key: 'Clarineta', label: 'Clarineta', href: '/characters/clarineta' },
		{ key: 'Violia', label: 'Violia', href: '/characters/violia' },
		{ key: 'Bassoonia', label: 'Bassoonia', href: '/characters/bassoonia' }
	];

	function selectCharacter(char) {
		if (typeof window !== 'undefined') {
			localStorage.setItem('name_sup', char.key);
			name.set(char.key);
			goto(char.href); // client-side navigation
		}
	}
</script>

<div class="font-poppins flex w-full flex-wrap items-center justify-center gap-x-12 py-3.5 text-center text-lg text-sm leading-[normal]">
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
