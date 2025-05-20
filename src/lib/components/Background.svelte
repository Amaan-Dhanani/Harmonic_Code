<script>
	import Logo from '$lib/images/Logo.png';
	import Nav from './Nav.svelte';
	import { onMount } from 'svelte';

  onMount(() => {
    const name_sup = document.querySelector('.heading')?.textContent || '';
    localStorage.setItem('name_sup', name_sup);
  });
</script>

<div class="relative">
	<p class="invisible">rrr</p>
	<div class="align-center mt-[80px] mr-[50px] ml-[50px] rounded-t-[70px] bg-[#F8FAFE] pt-[45px]">
		<Nav/>
		<img
			src={Logo}
			alt=""
			class="ml-25 max-w-[80px] max-w-[150px] rounded-[40px] border-[3px] border-[#b89f5d] pl-[5px]"
		/>
		<div class="flex place-content-center items-center justify-center box-border px-25 gap-10">
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
