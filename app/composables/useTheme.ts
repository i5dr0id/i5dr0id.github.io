type Theme = 'light' | 'dark'

// The choice is applied before hydration by the inline script in app.vue; this
// composable only flips it afterwards and remembers the choice.
export function useTheme() {
  const theme = useState<Theme>('theme', () => 'light')

  onMounted(() => {
    theme.value = (document.documentElement.dataset.theme as Theme) || 'light'
  })

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme.value
    try { localStorage.setItem('theme', theme.value) } catch {}
  }

  return { theme, toggle }
}
