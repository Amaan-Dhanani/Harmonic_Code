<script>
    import { onMount } from 'svelte';
    import Nav2 from '@lib/components/Nav2.svelte';

	onMount(() => {
		localStorage.setItem('page_sup', "Contact Us");
	});
</script>
<Nav2/>
<!-- svelte-ignore a11y_missing_attribute -->
<iframe class="w-full h-full" src="form.html"></iframe>