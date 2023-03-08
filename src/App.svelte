<script lang="ts">
	import { generateColorHEX } from './helpers/colors'

  let color = generateColorHEX()
  let showedTooltipCount = 0

  $: isTooltipShown = showedTooltipCount > 0

  const generate = () => {
    color = generateColorHEX()
  }

  const showTooltip = () => {
    showedTooltipCount++
    setTimeout(() => {
      showedTooltipCount--
    }, 1000)
  }

  const copy = (e: Event) => {
    navigator.clipboard.writeText(color)
    showTooltip()
    ;(e.target as HTMLButtonElement).blur()
  }

  window.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      generate()
    }
  })
</script>

<main>
  <div
    style={`background: ${color}`}
    class='wrapper'
  >
  <div class='container'>
    Press space to generate color
    <button
      class='copy-button'
      on:click={copy}
    >
      {color}
      <div
        style={!isTooltipShown && 'display: none'}
        class='tooltip'
      >
        Yay! Copied :)
      </div>
    </button>
  </div>
</main>

<style>
  .wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #fff;
    color: #000;
    border-radius: 8px;
  }
  .copy-button {
    position: relative;
    background: transparent;
    border: 1px solid black;
    border-radius: 4px;
  }
  .copy-button:hover {
    cursor: pointer;
    background: #eee;
  }
  .tooltip {
    position: absolute;
    background: black;
    border-radius: 4px;
    color: white;
    width: max-content;
    padding: 8px;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>