(function () {
  var script = document.currentScript;
  var mapUrl = script && script.src ? script.src.replace(/aff\.js(\?.*)?$/, "aff-map.json") : null;
  function run() {
    var links = document.querySelectorAll("a[data-aff]");
    if (!links.length || !mapUrl) return;
    fetch(mapUrl, { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (map) {
        if (!map) return;
        var subid = (location.pathname.split("/").pop() || "home").replace(/\.html$/, "");
        links.forEach(function (a) {
          var key = a.getAttribute("data-aff");
          var prog = (map.programs || {})[key.split(":")[0]];
          var target = (map.targets || {})[key];
          if (!prog || !prog.template || !target) return;
          var url = target.url || a.href;
          a.href = prog.template
            .replace("{url}", encodeURIComponent(url))
            .replace("{raw_url}", url)
            .replace("{subid}", encodeURIComponent(subid + "_" + key.replace(/[^\w-]/g, "-")));
          a.setAttribute("rel", "sponsored nofollow noopener");
        });
      })
      .catch(function () {});
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
