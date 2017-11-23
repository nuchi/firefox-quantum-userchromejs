// Set "useLionFullScreen" in the same way that it's done in
// chrome://browser/content/browser-fullScreenAndPointerLock.js
XPCOMUtils.defineLazyGetter(FullScreen, "useLionFullScreen", function() {
    return false;
});
