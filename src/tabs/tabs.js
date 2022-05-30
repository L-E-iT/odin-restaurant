import breakfastData from '../data/breakfast.json'
import lunchData from '../data/lunch.json'
import dinnerData from '../data/dinner.json'

function _clearSiteContent(siteContent) {
    while (siteContent.firstChild) {
        siteContent.firstChild.remove();
    }
}

function _toggleSiteContentGrid(isGrid, _siteContent) {
    if (isGrid) {
        if (!_siteContent.classList.contains("site-content-grid")) {
            _siteContent.classList.add("site-content-grid")
        }
    } else {
        _siteContent.classList.remove("site-content-grid")
    }
}

function _createReservationContent(_siteContent) {

}

function _createAboutContent(_siteContent){
    const aboutSection = document.createElement("div")
    aboutSection.textContent = "This is where we would keep the about section... IF WE HAD ONE"
    _siteContent.appendChild(aboutSection)
}

function _createMenuContent(menuData, _siteContent) {
    menuData.forEach(function(item){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item")

        const itemName = document.createElement("p");
        itemName.classList.add("menu-item-name");
        itemName.textContent = item.name;

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("menu-item-description");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("menu-item-price");
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        _siteContent.appendChild(menuItem);
    })
}

function generateSiteContent(tabChoice) {
    const _siteContent = document.querySelector(".site-content")

    _clearSiteContent(_siteContent);

    switch (tabChoice.toLowerCase()) {
        case "breakfast":
            _createMenuContent(breakfastData.menuItems, _siteContent);
            _toggleSiteContentGrid(true, _siteContent);
            break;
        case "lunch":
            _createMenuContent(lunchData.menuItems, _siteContent);
            _toggleSiteContentGrid(true, _siteContent);
            break;
        case "dinner":
            _createMenuContent(dinnerData.menuItems, _siteContent);
            _toggleSiteContentGrid(true, _siteContent);
            break;
        case "reservations":
            _createReservationContent(_siteContent);
            _toggleSiteContentGrid(false, _siteContent);
            break;
        case "about":
            _createAboutContent(_siteContent);
            _toggleSiteContentGrid(false, _siteContent);
            break;
        default:
            _createMenuContent(breakfastData.menuItems, _siteContent);
    }
}

export { generateSiteContent }