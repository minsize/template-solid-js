import App from "app"
import { render } from "solid-js/web"

import "styles/system.css"
import "styles/default.css"

/**
 * Блокировка контекстного меню
 */
document.addEventListener("contextmenu", (e) => e.preventDefault())
document.addEventListener("touchstart", (e) => {
  e.preventDefault()
  e.stopPropagation()
})

render(() => <App />, document.body)
