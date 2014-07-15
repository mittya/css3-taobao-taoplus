btn = document.querySelector("#btn")
taoPlus = document.querySelector("#taoPlus")
overlay = document.querySelector("#overlay")

hasClass = (element, name) ->
  reg = new RegExp("\\b" + name + "\\b")
  reg.test element.className

addClass = (element, name) ->
  element.className += " " + name  unless hasClass(element, name)
  return

removeClass = (element, name) ->
  if hasClass(element, name)
    reg = new RegExp("\\b" + name + "\\b")
    element.className = element.className.replace(reg, "").trim()
  return

toggleClass = (element, name) ->
  if hasClass(element, name)
    removeClass element, name
  else
    addClass element, name
  return

btn.addEventListener "click", ->
  toggleClass btn, "on"
  toggleClass taoPlus, "on"
  toggleClass overlay, "on"
  return

overlay.addEventListener "click", ->
  removeClass btn, "on"
  removeClass taoPlus, "on"
  removeClass overlay, "on"
  return

return
