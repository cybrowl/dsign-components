<script>
	let ncirc = 10;
</script>

<div class="loading">
	{#each Array(ncirc) as _, i}
		<div class="circle" style="transform: rotate({i * 70}deg);">
			<div class="inner" style="animation: spin 2s infinite linear;" />
		</div>
	{/each}
</div>

<style>
	.loading {
		width: 100px;
		height: 100px;
		border-radius: 100%;
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: spin 5s infinite linear;
	}

	.circle {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.inner {
		width: 100%;
		height: 100%;
		border-radius: 100%;
		border: 0.5rem solid rgba(62, 32, 99, 0.3);
		border-right: none;
		border-top: none;
		background-clip: padding;
		box-shadow: inset 0px 0px 10px rgba(191, 205, 223, 0.15);
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
