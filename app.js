$(() => {
    const products = [
        { name: 'Dead or Alive 6', price: 549, id: 2, description: 'Från skaparna av den bästsäljande actionserien kommer nu det senaste kapitlet av Devil May Cry-sagan. Djävulen återvänder i den mest storartade, tekniskt avancerade och galnaste actionupplevelsen av denna generation.', picture: 'https://www.discshop.se/img/front_200/159183/dead_or_alive_6.jpg', category: 'Games' },
        { name: 'Devil May Cry 5', price: 300, id: 1, description: 'The renowned fighting franchise, DEAD OR ALIVE, is set to return with the long-awaited next entry in the series, DEAD OR ALIVE 6, and invites fans and aspiring fighters to test their skills in the ring in Early 2019. With fan-favourite fighters;', picture: 'https://www.discshop.se/img/front_200/160001/devil_may_cry_5.jpg', category: 'Games' },
        { name: 'Left Alive', price: 399, id: 3, description: 'LEFT ALIVE tells a human story of survival from the perspective of three different protagonists during the devastating invasion set in war-torn Novo Slava in 2127.', picture: 'https://www.discshop.se/img/front_200/154823/left_alive_day_one_edition.jpg', category: 'Games' },
        { name: 'Nier', price: 500, id: 4, description: 'Inkräktare från en annan värld angriper utan förvarning och jorden tas över av mekaniska väsen. Människorna kan inte försvara sig mot hotet och tvingas söka skydd på månen.', picture: 'https://www.discshop.se/img/front_200/162212/nier_automata_game_of_the_yorha_edition_ps4.jpg', category: 'Games' },
        { name: 'LEGO The Movie 2 Videogame', price: 450, id: 5, description: 'Publikfavoriterna Emmet, Lucy, LEGO Batman och deras vänner är tillbaka, och den här gången får du även följa nya mystiska karaktärer som General Vilda och Rex Vågarväst.', picture: 'https://www.discshop.se/img/front_200/161716/lego_the_movie_2_videogame.jpg', category: 'Games' },
        { name: 'Dark Souls 3', price: 349, id: 6, description: 'Includes Dark Souls Remastered, Dark Souls II: Scholar of The First Sin, Dark Souls III: The Fire Fades, all DLC content for all 3 games and all original soundtracks.', picture: 'https://www.discshop.se/img/front_200/162352/dark_souls_trilogy.jpg', category: 'Games' },
        { name: 'OLED55B8', price: 19000, id: 7, description: 'Njut av ett kristallklart ljud och en verklig bioupplevelse hemma med LG 55" 4K UHD OLED Smart TV B8 OLED55B8.', picture: 'https://www.elgiganten.se/image/dv_web_D18000100289935/OLED55B8/lg-55-4k-uhd-oled-smart-tv-b8-oled55b8.jpg?$prod_all4one$', category: 'Oleds' },
        { name: 'OLED65E7V', price: 26000, id: 8, description: 'Med LG 65" 4K UHD OLED Smart TV OLED65E7V får du en känsla av framtiden tack vare dess ultratunna och lätta design. Med en mängd banbrytande funktioner, fantastisk bild och högkvalitativt ljud kan du njuta av dina program och filmer i högsta klass.', picture: 'https://www.elgiganten.se/image/dv_web_D180001002132802/OLED65E7V/lg-65-4k-uhd-oled-smart-tv-e7-oled65e7v.jpg?$prod_all4one$', category: 'Oleds' },
        { name: '65OLED873/12', price: 22990, id: 9, description: 'Utnämnd som den bästa TV någonsin testats av Tek.no 7. mars 2018. Philips 65" OLED 4K UHD Smart TV 65OLED873/12 kombinerar superb 4K UHD-bildkvalitet, skarpa färger, hög kontrast, utmärkt ljud och 3-sidig Ambilight-teknik.', picture: 'https://www.elgiganten.se/image/dv_web_D18000100226691/65OLED873/philips-65-oled-4k-uhd-smart-tv-65oled87312.jpg?$prod_all4one$', category: 'Oleds' },
        { name: 'KD65AF8', price: 24990, id: 10, description: 'Toppbetyg av av Ljud&Bild Juni 2018. Bravia AF8 har en suverän svärta och ett fenomenalt djupperspektiv. I kombination med fin skärpa och mjuka rörelser är man garanterad en bildupplevelse av highend-klass.', picture: 'https://www.elgiganten.se/image/dv_web_D180001002182260/KD65AF8BAE/sony-65-4k-uhd-oled-smart-tv-kd65af8.jpg?$prod_all4one$', category: 'Oleds' }
    ];

    let cart = [];

    const appendList = (array, location) => {
        const template = array.map((item, id) => {
            return `
            <li class="product col-md-12">
            <img src="${item.picture}" alt="${item.description}">
            <div class="product-content">
            <h4>${item.name} - <span class="category">${item.category}</span> <small>${item.price}kr</small></h4>
            <p>${item.description}</p>
            </div>
            <button type="button" id="${item.id}">Köp Nu!</button>
            </li>
            
            `;
        });
        $(location).html(template);
    }

    const addToCart = (array, id, location) => {
        //  " a " is product
        let a = array.find(i => i.id === id);

        cart.push(a);

        const item = `
        
        <li class="item" id="${a.id}">
        <h4> ${a.name}</h4>
        <button type="button">X</button>
        </li>

        `;

        $('span.amount').text(cart.length);
        $(location).append(item);

    }

    const removeFromCart = (array, removedItem) => {
        array.splice(removeItem, 1);
    }

    const populateCart = (array, location) => {
        let item = `
        
        <li class ="item" id="${array.id}">
        <h4>${array.name}</h4>
        <button type="button">X</button>
        </li>

        `;

        $('span.amount').text(array.length);
    }

    appendList(products, $('.product-list'));

// add item in basket
    $('.product').on('click', 'button', (e) => {
        let id = e.currentTarget.id;
        addToCart(products, +id, $('.cart-list'));
    });
// remove item in basket
    $('.cart-list').on('click', 'button', (e) => {
        let item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('cart-list'));
    });


});


