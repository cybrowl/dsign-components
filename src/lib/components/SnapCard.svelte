<script>
    import Icon from './Icon.svelte';

    export let snap = {};
    export let isLoadingSnap = false;
    export let isEditMode = false;

    function select_card() {
        snap.isSelected = !snap.isSelected;
    }
</script>

{#if isLoadingSnap}
    <div class="snapCardLoading">
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
{:else if isEditMode && snap.isSelected === false}
    <div class="snapCard">
        <img
            class={isEditMode === true ? 'editModeSnapCard' : ''}
            src={snap.image_urls[snap.cover_image_location]}
            alt="snap"
        />
        <span class="checkmark" on:click={select_card}>
            <Icon name="unchecked" width="32" height="32" />
        </span>
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
{:else if isEditMode && snap.isSelected}
    <div class="snapCard">
        <img
            class={isEditMode === true ? 'editModeSnapCard' : ''}
            src={snap.image_urls[snap.cover_image_location]}
            alt="snap"
        />
        <span class="checkmark" on:click={select_card}>
            <Icon name="checkmark" width="32" height="32" />
        </span>
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
    <div class="snapCard">
        <img src={snap.image_urls[snap.cover_image_location]} alt="snap" />
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
        max-width: 290px;
        max-height: 226px;
    }

    .snapCardLoadingImg {
        background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
        border-radius: 6px;
        background-size: 200% 100%;
        animation: 1.5s shine linear infinite;
        width: 290px;
        height: 226px;
    }

    @keyframes shine {
        to {
            background-position-x: -100%;
        }
    }

    .snapCard {
        @apply relative font-sans;
        max-width: 290px;
        max-height: 226px;
        border-radius: 6px;
        margin-bottom: 24px;
    }

    .snapCard img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        position: absolute;
        bottom: -24px;
        right: 0;
        display: flex;
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
