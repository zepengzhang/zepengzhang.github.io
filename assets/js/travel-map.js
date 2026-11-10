/* Travel footprint map: local geography and city data, with no tracking. */
(() => {
  const atlas = document.querySelector(".travel-atlas");
  if (!atlas) return;
  const frame = atlas.querySelector(".travel-atlas-frame");
  const fallback = atlas.querySelector(".travel-atlas-fallback");
  const tooltip = atlas.querySelector(".travel-atlas-tooltip");
  const tabs = [...atlas.querySelectorAll('[role="tab"]')];
  const places = JSON.parse(atlas.querySelector("#travel-map-data").textContent);
  const colors = { Asia: "#c26959", Europe: "#48877c" };
  const views = {
    World: () =>
      d3.geoNaturalEarth1().fitExtent(
        [
          [25, 22],
          [935, 475],
        ],
        { type: "Sphere" }
      ),
    Asia: () => d3.geoMercator().center([110, 33]).scale(610).translate([480, 250]),
    Europe: () => d3.geoMercator().center([12, 50]).scale(1300).translate([480, 250]),
  };
  let region = "World";
  let selected = null;
  let projection;
  let svg, geography, countries, borders;

  function showPlace(place) {
    selected = place;
    const [x, y] = projection([place.lon, place.lat]);
    tooltip.textContent = `${place.name}, ${place.country}`;
    tooltip.style.left = `${Math.max(15, Math.min(85, (x / 960) * 100))}%`;
    tooltip.style.top = `${(y / 500) * 100}%`;
    tooltip.hidden = false;
    svg.selectAll(".atlas-marker").classed("is-selected", (p) => p === place);
  }

  function draw() {
    if (!geography) return;
    projection = views[region]();
    const path = d3.geoPath(projection);
    svg
      .selectAll(".atlas-sphere")
      .data([{ type: "Sphere" }])
      .join("path")
      .attr("class", "atlas-sphere")
      .attr("d", path);
    svg.selectAll(".atlas-graticule").data([d3.geoGraticule10()]).join("path").attr("class", "atlas-graticule").attr("d", path);
    svg.selectAll(".atlas-land").data([countries]).join("path").attr("class", "atlas-land").attr("d", path);
    svg.selectAll(".atlas-borders").data([borders]).join("path").attr("class", "atlas-borders").attr("d", path);
    const visible = places.filter((p) => region === "World" || p.region === region);
    const mobile = window.matchMedia("(max-width: 575px)").matches;
    svg
      .selectAll(".atlas-marker")
      .data(visible, (p) => p.name)
      .join("circle")
      .attr("class", "atlas-marker")
      .attr("cx", (p) => projection([p.lon, p.lat])[0])
      .attr("cy", (p) => projection([p.lon, p.lat])[1])
      .attr("r", mobile ? 6.5 : 5)
      .attr("fill", (p) => colors[p.region])
      .attr("role", "button")
      .attr("tabindex", 0)
      .attr("aria-label", (p) => `${p.name}, ${p.country}`)
      .on("mouseenter focus click", (_, p) => showPlace(p))
      .on("keydown", (event, p) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          showPlace(p);
        }
        if (event.key === "Escape") {
          tooltip.hidden = true;
          selected = null;
          svg.selectAll(".atlas-marker").classed("is-selected", false);
        }
      });
    // Two reference labels keep the world view uncluttered; regional views label every city.
    const labels = region === "World" ? visible.filter((p) => ["Hong Kong", "Paris"].includes(p.name)) : visible;
    svg
      .selectAll(".atlas-label")
      .data(labels, (p) => p.name)
      .join("text")
      .attr("class", "atlas-label")
      .attr("x", (p) => projection([p.lon, p.lat])[0] + (p.name === "Paris" ? -10 : 11))
      .attr("y", (p) => projection([p.lon, p.lat])[1] + (p.name === "Wuhan" ? 20 : -10))
      .attr("text-anchor", (p) => (p.name === "Paris" ? "end" : "start"))
      .text((p) => p.name);
    atlas.querySelector(".travel-atlas-count").textContent =
      region === "World" ? `${places.length} places across Asia and Europe` : `${visible.length} places in ${region}`;
    svg.attr("aria-label", `${region}: ${visible.length} visited places`);
    if (selected && visible.includes(selected)) showPlace(selected);
    else {
      selected = null;
      tooltip.hidden = true;
    }
  }

  function changeRegion(next) {
    region = next;
    tabs.forEach((tab) => {
      const active = tab.dataset.region === region;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    atlas.querySelector('[role="tabpanel"]').setAttribute("aria-labelledby", `travel-tab-${region.toLowerCase()}`);
    draw();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => changeRegion(tab.dataset.region));
    tab.addEventListener("keydown", (event) => {
      const offsets = { ArrowRight: 1, ArrowLeft: -1, Home: -index, End: tabs.length - 1 - index };
      if (!(event.key in offsets)) return;
      event.preventDefault();
      const next = tabs[(index + offsets[event.key] + tabs.length) % tabs.length];
      changeRegion(next.dataset.region);
      next.focus();
    });
  });
  atlas.querySelectorAll("[data-place]").forEach((button) => {
    button.addEventListener("click", () => {
      selected = places[Number(button.dataset.place)];
      changeRegion(selected.region);
    });
  });
  window.addEventListener("resize", draw);
  if (!window.d3 || !window.topojson) {
    fallback.textContent = "The map is unavailable. You can still browse the places below.";
    return;
  }
  svg = d3.select(frame.querySelector("svg"));
  fetch(frame.dataset.worldUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Map data unavailable");
      return response.json();
    })
    .then((data) => {
      geography = data;
      countries = topojson.feature(data, data.objects.countries);
      borders = topojson.mesh(data, data.objects.countries, (a, b) => a !== b);
      fallback.hidden = true;
      draw();
    })
    .catch(() => {
      fallback.textContent = "The map is unavailable. You can still browse the places below.";
    });
})();
