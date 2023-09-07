/* 
BOM[Browser Object Model]
    open(URL[Opt],Window Name Or Target Attr[Opt],Win Features.[Opt],
    close()
-Window Features
    width[Num]
    height[Num]
    left[Num]
    top[Num]
*/

setTimeout(function () {
    window.open("https://facebook.com", "_blank", "width=400,height=400,left=200,top=10")
}, 2000);