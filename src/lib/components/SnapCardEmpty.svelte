<script>
    import Icon from './Icon.svelte';
</script>

<div class="snapCardEmpty">
    <span>
        <Icon name="upload_snap" width="89" height="89" />
    </span>
</div>

<style>
    .snapCardEmpty {
        width: 100%;
        height: 226px;
        max-width: 290px;
        max-height: 226px;
        border: 1px dashed #fefeff;
        border-radius: 6px;
        background: #32313d;
        display: flex;
        justify-content: center;
    }
    .snapCardEmpty span {
        display: flex;
        align-items: center;
    }
</style>
