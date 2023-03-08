<script lang="ts">
  export let value: string = undefined
  export let change: (value: string) => void

  function handleChange(event: Event) {
    change((event.target as HTMLInputElement).value)
  }
</script>

<input
  value={value}
  type="color"
  on:input={handleChange}
/>