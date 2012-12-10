/*
  Social Bookmarks
  mlb.li
*/

;(function(window, document){

  var addEventListener = "addEventListener" in window
    , eventListener = addEventListener ? "addEventListener" : "attachEvent"
    , prefix = addEventListener ? "" : "on"
    , clickEvent = "createTouch" in document ? "touchend" : "click"

  function socialBookmarks(container){
    var links = container.getElementsByTagName("a")
      , length = links.length
      , item
    for(;length--;) {
      item = links[length]
      item[eventListener](prefix + clickEvent, function(event){
        event = event || window.event 
        if("preventDefault" in event) event.preventDefault()
        else event.returnValue = false

        window.open(item.href, "", "width=640, height=280")
      })
    }
  }

  document.socialBookmarks = socialBookmarks

})(this, this.document)