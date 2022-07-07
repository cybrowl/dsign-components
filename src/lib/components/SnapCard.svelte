<script>
    import Icon from './Icon.svelte';

    export let snap = {};
</script>

<div class="snapCard">
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
    <img src={snap.url} alt="snap" />
</div>

<style>
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
