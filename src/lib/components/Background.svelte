<script>
	import Logo from '$lib/images/Logo.png';
</script>

<div class="relative">
	<p class="invisible">rrr</p>
	<div class="rounded-t-[70px] bg-[#F8FAFE] ml-[50px] mr-[50px] pt-[45px] align-center mt-[80px]">
		<img src={Logo} alt="" class="max-w-[150px] max-w-[80px] rounded-[20px] ml-[40px] border" />
		<div class="flex justify-between items-center">
			<div class="flex-1 font-balsamiq-sans text-[80px] font-bold leading-normal p-0 m-0">
				<div><slot name="heading"></slot></div>
				<div class="text-[#000] font-poppins text-[16px] font-normal leading-[31px]"><slot name="paragraph"></slot></div>
			</div>
			<div class="flex-1">
                <div><slot name="image"></slot></div>
            </div>
		  </div>
	</div>
</div>
