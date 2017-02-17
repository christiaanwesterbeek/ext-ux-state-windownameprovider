# Ext.ux.state.WindowNameProvider 
An Ext JS state provider implementation that saves and retrieves state as JSON in window.name

## Intro
You're wondering why your cross-domain iframed web app using cookies works everywhere, except in Safari? By default Safari only allows cookies from sites you navigate to directly. So, you're out of luck with using cookies this time, but fear not.

You've probably already read about the window.name alternative to cookies. Whatever string page a.html sets in window.name, page b.html can read and update. Cross domain and as long as the tab stays open. A few small libraries for using window.name have been written already, but none specifically for Ext JS.

Here's an Ext JS 4 state provider implementation that saves and retrieves state as JSON in window.name. Because everybody likes window.name this implementation allows your own namspace in window.name.
