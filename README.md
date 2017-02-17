# Ext.ux.state.WindowNameProvider 
An Ext JS state provider implementation that saves and retrieves state as JSON in window.name

## Intro
You're wondering why your cross-domain iframed web app using cookies works everywhere, except in Safari? By default [Safari only allows cookies from sites you navigate to directly](http://stackoverflow.com/questions/172223/how-do-i-set-cookies-from-outside-domains-inside-iframes-in-safari). So, you're out of luck with using cookies this time. But fear not.

You've probably already read about the [window.name alternative to cookies](http://stackoverflow.com/questions/2035075/using-window-name-as-a-local-data-cache-in-web-browsers). Whatever string page a.html sets in window.name, page b.html can read and update. Cross domain and as long as the tab stays open. A [few small libraries](http://ajaxian.com/archives/whats-in-a-windowname) for using window.name have been written already, but none specifically for [Ext JS](https://www.sencha.com/products/extjs/).

Here's an Ext JS state provider implementation that saves and retrieves state as JSON in window.name. Because everybody likes window.name this implementation allows your own namspace in window.name.

## Outro

This implementation was originally available on the Sencha Market, but that has been shutdown as per 2017-02-17.
