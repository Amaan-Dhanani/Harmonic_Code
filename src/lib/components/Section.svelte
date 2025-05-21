<div class="relative">
	<p class="invisible">rrr</p>
	<div class="">
		<div class="box-border flex place-content-center items-center justify-center gap-10 px-25">
			<div class="font-balsamiq-sans m-0 flex-1 p-0 text-[80px] leading-normal font-bold">
				<div class="heading text-[24px]"><slot name="heading"></slot></div>
				<div class="font-poppins text-[16px] leading-[31px] font-normal text-[#000]">
					<slot name="paragraph"></slot>
				</div>
			</div>
			<div><slot name="image"></slot></div>
		</div>
	</div>
</div>
