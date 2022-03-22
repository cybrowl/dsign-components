<script>
    import {createEventDispatcher} from 'svelte';
    import Avatar from './Avatar.svelte';
    const dispatch = createEventDispatcher();
    export let username = '';
    export let hasAvatar = false;

    function onClickAvatar(event) {
        dispatch('clickAvatar', event);
    }

    function onLogOut(event) {
        dispatch('clickLogOut', event);
    }
</script>

<div class="settings">
    <div class="nav">
        <span>
            <button>Profile</button>
            <button>Settings</button>
            <button on:click={onLogOut}>Log Out</button>
        </span>
    </div>
    <div class="content">
        <span class="avatar">
            <Avatar
                firstCharUsername={username.charAt(0)}
                {hasAvatar}
                lastCharUsername={username.charAt(username.length - 1)}
                on:click={onClickAvatar}
            />
            <h2>{username}</h2>
        </span>

        <div class="body">
            <span class="username">
                <h2>Username</h2>
                <p>{username}</p>
            </span>
        </div>
    </div>
</div>

<style>
    .settings {
        @apply flex flex-row font-sans font-bold text-white ml-6;
    }

    .nav {
        @apply basis-1/5;
    }

    .nav span {
        @apply flex flex-col items-start;
    }

    .nav button {
        @apply mb-4;
    }
    .nav button:nth-child(3) {
        @apply mt-60;
        color: #f0627c;
    }

    .content {
        @apply basis-4/5;
    }

    .body {
        @apply mt-8;
    }

    .username p {
        @apply font-normal;
    }

    .avatar {
        @apply flex flex-row items-center;
    }
    .avatar h2 {
        @apply ml-4 font-bold text-2xl;
    }
</style>
