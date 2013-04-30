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
    if (container) {
      if (container.nodeType) {
        var links = container.getElementsByTagName("a")
          , length = links.length
        for(;length--;) {
          ;(function(item){
            item[eventListener](prefix + clickEvent, function(event){
              event = event || window.event
              if("preventDefault" in event) event.preventDefault()
              else event.returnValue = false

              window.open(item.href, "", "width=640, height=280")
            })
          })(links[length])
        }
      } else if (container.length) {
        var length = container.length;
        for(;length--;) {
          socialBookmarks(container[length]);
        }
      }
    }
  }

  document.socialBookmarks = socialBookmarks

})(this, this.document)
