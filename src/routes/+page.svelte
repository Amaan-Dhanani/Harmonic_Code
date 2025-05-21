<script>
    import { onMount } from 'svelte';
    import Nav2 from '@lib/components/Nav2.svelte';
    import CharSelect from '@lib/components/CharSelect.svelte';

	onMount(() => {
		localStorage.setItem('page_sup', "Home/Characters");
	});
</script>

<Nav2/>

<div class="px-6 py-10 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-6 text-center text-indigo-700">Welcome to the Harmonic Code!</h1>
    
    <p class="text-lg text-gray-700 mb-10 leading-relaxed">
        The Harmonic Code are a series of characters that are in Pianotopia, which is a place far, far, away.
        There are 7 heroes and 3 villains that reside in the community. This webpage will introduce the universe
        of Pianotopia and what it has to offer through the use of character bios and individual stories. This
        webpage also offers to showcase the creators of the webpage and how it was planned. We even have a contact
        form that allows you to our webpage owners to give feedback about the webpage, or simply send in a note to
        our superheroes on how to improve their personality!
    </p>
</div>
<div class="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 w-300 mx-auto">
        <CharSelect />
    </div>
