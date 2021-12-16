# browserscript
My personal repo of javascript (userscript, bookmarklet, etc.) and plugins for better browsing experience. <br>
Optimized for plugin-enabled chromium-based browser for Android (e.g. Kiwi browser) in Android Desktop mode (e.g. Samsung Dex).  

## Overview
| item | description | screenshot | U | B | P |  |
|---|---|---|---|---|---|---|
| android.js | A better android browsing experience (esp. for Kiwi Browser)<br>- fake contextmenu<br>- hyperlink shown in bottom left<br>- tooltip on hover<br>- disable pull to request<br>- drag text and drop in address bar to search |  | ✅ |  |  |  |
| file.js | Preview office files and csv/tsv without downloading to drive |  | 👍 | ✅ |  |  |
| pdf.js | Preview pdf files without downloading to drive |  |  |  | ✅ |  |
| Bypass Paywalls | Bypass news media paywalls |  |  |  | ✅ |  |
| reader.js | Double click (or Ctrl select) to check dictionary and other services |  | 👍 | ✅ |  |  |
| coder.js | A coding tool that inserts code snippets. <br>It supports code-server, Jupyter, Google Colab and more.<br>Different variants are available: <br>- coder-U.js: userscript, for kiwi browser on Android<br>- coder-B.js: bookmarklet, for desktop browser<br>- coder-M.js: bookmarklet, for smartphone browser<br><br><br>→ coder-U.js (See /coder-U.js)<br>Please assign appropriate @match<br><br>→ coder-B.js (Check out https://knyipab.github.io/browserscript/coder)<br>Similar to coder-U.js, but in bookmarklet<br>- all data inside the bookmarklet (private and offline)<br>- to update, drag and drop to bookmark bar<br>- once the bookmarklet exceeds 5000 chars, <br>  - Chrome sync/backup will fail, and<br>  - it won't work with Chrome on Android<br><br>→ coder-M.js (unmaintaind)<br>It's unmaintained and poorly designed, USE WITH CARE!!<br>Similar to coder-B.js, but<br>- will not exceed 5000 chars<br>- all data stored in GitHub repo /coder/library.js<br>- you will need to update /coder/library.js yourself |  | ✅ | ✅ |  |  |
| ceic.js | [unmaintained] A collection of bookmarklets for insights.ceicdata.com.  |  |  | ✅ |  |  |
| enabler.js | Enable copy, right-click and select. <br>Note: be careful that this script would likely destruct a website. <br>It is highly not recommended to turn this script into userscript.  |  | ❌ | ✅ |  |  |

Key: 
- U = userscript, B = bookmarklet, P = plugin
- ✅ = available, 👍 = convertible from bookmarklet, ❌ = not recommended