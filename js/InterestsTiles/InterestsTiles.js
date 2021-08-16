class InterestsTiles extends HTMLElement {
  constructor() {
    super();
    let here = this;

    let getAttributeVal = function (attr, defaultVal) {
      return here.hasAttribute(attr) ? here.getAttribute(attr) : defaultVal;
    };

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create link for styling
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./js/InterestsTiles/style.css");

    // Add style
    shadow.appendChild(linkElem);

    // Create tile wrapper
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "gallery");

    const tilesInfo = JSON.parse(getAttributeVal("tiles"));
    const tileColor = getAttributeVal("tile-color");
    const tileBgColor = getAttributeVal("tile-bg-color");

    console.log(tilesInfo);

    for (const e in tilesInfo) {
      const tile = document.createElement("div");
      tile.setAttribute("class", "tile");
      tile.setAttribute(
        "style",
        `color: ${tileColor}; background-color: ${tileBgColor}`
      );

      const tileTitle = document.createElement("h4");
      tileTitle.setAttribute("class", "tile-title");
      tileTitle.textContent = e;

      const tileIcon = document.createElement("i");
      tileIcon.setAttribute("class", `tile-icon ${tilesInfo[e]}`);

      tile.appendChild(tileTitle);
      tile.appendChild(tileIcon);
      wrapper.appendChild(tile);
    }

    // Appending all component
    shadow.appendChild(wrapper);
  }
}

customElements.define("interests-tiles", InterestsTiles);
