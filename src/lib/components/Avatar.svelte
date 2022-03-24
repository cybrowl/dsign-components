<script>
    import {createEventDispatcher} from 'svelte';
    import Icon from '../components/Icon.svelte';

    export let avatar = '';
    export let firstCharUsername = '';
    export let lastCharUsername = '';
    export let canEditAvatar = false;
    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', event);
    }
</script>

{#if avatar.length > 3}
    <div class={['cropAvatar', $$props.class].join(' ')} on:click={onClick}>
        <img alt="avatar" class="avatarImg" src={avatar} />
        {#if canEditAvatar}
            <Icon class="editAvatar" name="edit_avatar" width="25" height="25" />
        {/if}
    </div>
{:else}
    <div class={['avatarUsername', $$props.class].join(' ')} on:click={onClick}>
        <p>
            {firstCharUsername}
            {lastCharUsername}
        </p>
        {#if canEditAvatar}
            <Icon class="editAvatar" name="edit_avatar" width="25" height="25" />
        {/if}
    </div>
{/if}

<style>
    .cropAvatar {
        @apply relative w-14 h-14 flex items-center justify-center rounded-full bg-neutral-900 cursor-pointer;
    }
    .avatarImg {
        @apply bg-transparent;
        clip-path: circle(1.7rem);
    }
    .avatarUsername {
        @apply relative font-sans font-bold w-14 h-14 flex justify-center items-center rounded-full
		bg-neutral-900 text-xl text-white uppercase cursor-pointer;
    }
    .avatarUsername p {
        @apply cursor-pointer;
    }
</style>
