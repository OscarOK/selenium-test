class ProjectCard extends HTMLElement {
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
    linkElem.setAttribute("href", "./js/ProfileCard/style.css");

    // Add style
    shadow.appendChild(linkElem);

    // Create wrappers
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "card-container");

    // Create card info
    const cardInfo = document.createElement("div");
    cardInfo.setAttribute("class", "card-info");

    const profileName = document.createElement("h2");
    profileName.setAttribute("class", "primary-text");
    profileName.textContent = getAttributeVal("name", "Juan Perez");

    const profilePosition = document.createElement("p");
    profilePosition.setAttribute("class", "secondary-text");
    profilePosition.textContent = getAttributeVal("position", "Position");

    cardInfo.appendChild(profileName);
    cardInfo.appendChild(profilePosition);

    // Appending all component

    shadow.appendChild(wrapper);
    wrapper.appendChild(cardInfo);
  }
}

customElements.define("project-card", ProjectCard);
