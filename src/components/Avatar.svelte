<script>
    export let avatar = '';
    export let firstCharUsername = '';
    export let lastCharUsername = '';
    export let hasAvatar = false;

    function onClick(event) {
        dispatch('click', event);
    }
</script>

{#if hasAvatar}
    <div class={['cropAvatar', $$props.class].join(' ')}>
        <img alt="avatar" class="avatarImg" src={avatar} />
    </div>
{:else}
    <div class={['avatarUsername', $$props.class].join(' ')} on:click={onClick}>
        <p>
            {firstCharUsername}
            {lastCharUsername}
        </p>
    </div>
{/if}

<style>
    .cropAvatar {
        @apply w-14 h-14 flex items-center justify-center rounded-full bg-neutral-900;
    }
    .avatarImg {
        @apply w-12 bg-transparent;
    }
    .avatarUsername {
        @apply font-sans font-bold text-white w-14 h-14 flex justify-center items-center rounded-full 
		bg-neutral-900 text-xl text-white uppercase cursor-pointer;
    }
    .avatarUsername p {
        @apply cursor-pointer;
    }
</style>
