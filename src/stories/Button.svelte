<script>
  import './button.css';

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * @type {string} What background color to use
   */
  export let backgroundColor = undefined;

  /**
   * @type {string} Button contents
   */
  export let label;

  $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button
  type="button"
  class='bg-red-500 decoration-zinc-600 underline rounded-full'
  {style}
  on:click
>
  {label}
</button>
