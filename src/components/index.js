
const files = import.meta.globEager('./global/*.vue')

export default {
  install(app) {
    Object.keys(files).forEach((c) => {
      const component = files[c].default || files[c]
      app.component(component.name, component)
    })
  }
}
