---
combine:
    files:
      - script.js
      - luffy.*.js
    where: top
    remove: yes
---

var scripts = [luffy.mathjax,
               luffy.effects,
               luffy.comments,
               luffy.gallery];
for (var i = 0; i < scripts.length; i++) {
    try {
        scripts[i]();
    } catch (e) {
        (console.error || console.log).call(console, e.stack || e);
    }
}
