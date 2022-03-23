<script>
    import {createEventDispatcher} from 'svelte';
    import Avatar from './Avatar.svelte';

    const dispatch = createEventDispatcher();
    export let avatar = '';
    export let multiple = false;
    export let triggerInputEvent = false;
    export let username = '';
    let fileinput;

    function onClickAvatar(event) {
        if (triggerInputEvent) {
            fileinput.click();
        }

        dispatch('clickAvatar', event);
    }

    function onLogOut(event) {
        dispatch('clickLogOut', event);
    }

    const onFileSelected = e => {
        let files = e.target.files;

        dispatch('avatarChange', files);
    };
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
                {avatar}
                firstCharUsername={username.charAt(0)}
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
    <input
        class="input"
        type="file"
        {multiple}
        accept=".jpg, .jpeg, .png, .gif"
        on:change={e => onFileSelected(e)}
        bind:this={fileinput}
    />
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
    .input {
        @apply invisible w-0 h-0;
    }
</style>
