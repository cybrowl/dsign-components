<script>
    import {fade} from 'svelte/transition';

    import Icon from './Icon.svelte';

    export let snap = {};
    export let isLoadingSnap = false;
    export let isEditMode = false;

    function select_card() {
        snap.isSelected = !snap.isSelected;
    }
</script>

{#if isLoadingSnap}
    <div class="snapCardLoading" in:fade out:fade>
        <div class="snapCardLoadingImg" />
        <span class="icons">
            <span>
                <Icon name="like" width="16" height="16" />
                <span class="count">{snap.likes}</span>
            </span>
            <span>
                <Icon name="visibility" width="16" height="16" />
                <span class="count">{snap.views}</span>
            </span>
        </span>
    </div>
{:else}
    <div class="snapCard" on:click={isEditMode && select_card}>
        <img
            class={isEditMode === true ? 'editModeSnapCard' : ''}
            src={snap.image_urls[snap.cover_image_location]}
            alt="snap"
            in:fade
            out:fade
        />

        <!-- Unselected -->
        {#if isEditMode && snap.isSelected === false}
            <span class="checkmark">
                <Icon name="unchecked" width="32" height="32" />
            </span>
        {/if}

        <!-- Selected -->
        {#if isEditMode && snap.isSelected}
            <span class="checkmark">
                <Icon name="checkmark" width="32" height="32" />
            </span>
        {/if}

        <!-- Icons -->
        <span class="icons">
            <span>
                <Icon name="like" width="16" height="16" />
                <span class="count">{snap.likes}</span>
            </span>
            <span>
                <Icon name="visibility" width="16" height="16" />
                <span class="count">{snap.views}</span>
            </span>
        </span>
    </div>
{/if}

<style>
    .snapCardLoading {
        @apply relative font-sans cursor-pointer;
        --numcolumns: 6;
        --gap: 1rem;
        --size: calc(100vw / var(--numcolumns));
        height: calc(var(--size) - var(--gap));
    }

    .snapCardLoadingImg {
        background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
        border-radius: 6px;
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;
        width: 100%;
        height: 100%;
    }

    @keyframes shine {
        to {
            background-position-x: -100%;
        }
    }

    .snapCard {
        @apply relative font-sans cursor-pointer;
        --numcolumns: 6;
        --gap: 1rem;
        --size: calc(100vw / var(--numcolumns));
        height: calc(var(--size) - var(--gap));
    }

    .snapCard > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }

    .checkmark {
        @apply absolute top-2 left-2;
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .editModeSnapCard {
        background: #1b1a22;
        opacity: 0.5;
    }

    .icons {
        @apply gap-1;
        display: flex;
        float: right;
        margin-top: 8px;
    }

    .icons span {
        @apply flex gap-0.5;
        align-items: center;
        color: #fefeff;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.015em;
    }
</style>
