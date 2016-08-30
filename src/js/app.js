import index from "./index"

export default function routes(path) {
  switch(path) {
    case "/":
    case "/index.html":
      return index()
  }
}

routes(window.location.pathname)
