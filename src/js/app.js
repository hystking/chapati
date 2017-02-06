import index from "./index"

function routes(path) {
  switch(path) {
    case "/":
    case "/index.html":
    default:
      return index()
  }
}

routes(window.location.pathname)
