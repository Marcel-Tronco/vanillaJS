# VanillaJS ![VanillaJS](button.png)

This is a repo that is dedicated to remind of some the features of the built in APIs of browsers and servers (for my case: Node.js).

It's thought to be used as a mix of a Selfmade Handbook and case studies for common problems.

# Browser History
## Clear browsing history
In some cases we want to limit visibility of the history for security reasons: like prevent leaking data of former users on public browsers with insecure configs. There's a simple take home message: **All we can do is redirect and forget the location we redirected from** That's what we do at [redirectAndForget.js](redirectAndForget.js)

For more info:
https://stackoverflow.com/questions/20044554/how-to-clear-browsing-history-using-javascript

> "So there is no Javascript method to clear the session history, instead, if you want to block navigating back to a certain page, you can use the location.replace() method, and pass the page link as parameter, which will not push the page to the browser's session history list." 

# Forms
## Use FormData to ease the pain to gather data from forms

About FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData

Easy Ways to interact with form data, like gather data from a form or use it to send a fetch request in [forms.js Ln 10](forms.js?plain=1#L10)