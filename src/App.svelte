<script lang="ts">
	import { generateColorHEX } from './helpers/colors'

  let color = getQuery('color') ? '#' + getQuery('color') : generateColorHEX()
  let showedTooltipCount = 0

  $: isTooltipShown = showedTooltipCount > 0

  function getQuery(key: string) {
    const query = new URLSearchParams(window.location.search)
    return query.get(key)
  }

  function setQuery() {
    const url = new URL(window.location.href)
    url.searchParams.set('color', color.replace(/#/, ''))
    window.history.pushState({}, "", url)
  }

  setQuery()

  const generate = () => {
    color = generateColorHEX()
    setQuery()
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
    <button
      on:click={generate}
      class='button'
    >
      Generate new color
    </button>
    <button
      class='button'
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
    min-height: 100vh;
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
    border-radius: 12px;
  }
  .button {
    position: relative;
    background: transparent;
    border: 1px solid black;
    border-radius: 8px;
    color: inherit;
    padding: 12px;
    font-size: 20px;
  }
  .button:hover {
    cursor: pointer;
    background: #eee;
  }
  .button:active {
    transform: translateY(2px);
  }
  .tooltip {
    position: absolute;
    background: black;
    border-radius: 8px;
    color: white;
    width: max-content;
    padding: 12px;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>