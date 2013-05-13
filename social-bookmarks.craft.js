/*
  Social Bookmarks on Craft.js
  mlb.li
*/

;(function(window, document){

  function socialBookmarks(containers){
    if (containers && containers.length) {
      containers.each(function(container){
        $(container).getElements("a").each(function(item){
          $(item).listen("click", function(event){
            Event.stop(event)
            window.open(item.href, "", "width=640, height=280")
          })
        })
      })
    }
  }

  Object.extend(document, {
    socialBookmarks : socialBookmarks
  })

})(this, this.document)