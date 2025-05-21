<script>
	import Logo from '$lib/images/Logo.png';
	import Nav from './Nav.svelte';
	import Nav3 from './Nav3.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		const name_sup = document.querySelector('.heading')?.textContent || '';
		localStorage.setItem('name_sup', name_sup);
	});
</script>
<div class="relative">
	<p class="invisible">rrr</p>
	<div class="align-center mt-[80px] mr-[50px] ml-[50px] rounded-t-[70px] bg-[#F8FAFE] pt-[45px]">
				<Nav3 />
		<Nav />
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<img
			src={Logo}
			alt=""
			on:click={() => goto('/')}
			class="ml-25 max-w-[150px] rounded-[40px] border-[3px] border-[#b89f5d] pl-[5px]"
		/>
		<div class="box-border flex place-content-center items-center justify-center gap-10 px-25">
			<div class="font-balsamiq-sans m-0 flex-1 p-0 text-[80px] leading-normal font-bold">
				<div class="heading"><slot name="heading"></slot></div>
				<div class="font-poppins text-[16px] leading-[31px] font-normal text-[#000]">
					<slot name="paragraph"></slot>
				</div>
			</div>
			<div><slot name="image"></slot></div>
		</div>
	</div>
</div>
