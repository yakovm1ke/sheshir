const HEX_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

export function generateColorHEX() {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += HEX_VALUES[Math.trunc(Math.random() * 16)]
  }
  return color
}