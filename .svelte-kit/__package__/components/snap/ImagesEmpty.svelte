<script>
	export let content = '';
</script>

<div class="imagesEmpty">
	<span>
		<p>{content}</p>
	</span>
</div>

<style>
	.imagesEmpty {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    border-radius: 0.25rem;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(112 110 122 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(33 32 41 / var(--tw-bg-opacity));
    --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
	.imagesEmpty span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}
	.imagesEmpty > span > p {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(112 110 122 / var(--tw-text-opacity))
}
</style>
