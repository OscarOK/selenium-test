class ProfileCard extends HTMLElement {
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

    // Create img
    const cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img");

    const profileImg = document.createElement("img");
    profileImg.src = getAttributeVal("img", "./imgs/default-profile.png");

    cardImg.appendChild(profileImg);

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

    // Create card icons
    const cardIcons = document.createElement("div");
    cardIcons.setAttribute("class", "card-icons");

    const profileIcons = JSON.parse(getAttributeVal("icons"));

    for (const icon in profileIcons) {
      const iconLink = document.createElement("div");
      iconLink.setAttribute("class", "icon-link");
      const link = document.createElement("a");
      link.href = profileIcons[icon].href;
      const item = document.createElement("i");
      item.setAttribute("class", profileIcons[icon].icon);
      link.appendChild(item);
      iconLink.appendChild(link);
      cardIcons.appendChild(iconLink);
    }

    // Appending all component

    shadow.appendChild(wrapper);
    wrapper.appendChild(cardImg);
    wrapper.appendChild(cardInfo);
    wrapper.appendChild(cardIcons);
  }
}

customElements.define("profile-card", ProfileCard);
