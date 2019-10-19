let inventoryByBrand = {
    hp: 
    [
        {
            name: `HP Envy 13aq`,
            price: 21000,
            brand: `HP`,
            quantivy: 5,
        },
        {
            name: `HP Pavilion`,
            brand: `HP`,
            price: 14000,
            quantivy: 7,
        }
    ],
    dell: 
    [
        {
            name: `Dell XPS 9370`,
            price: 30000,
            brand: `Dell`,
            quantivy: 1,
        },
        {
            name: `Dell Inspiron 3567`,
            price: 9300,
            brand: `Dell`,
            quantivy: 12,    
        },
        {
            name: `Dell Latitude E5450`,
            price: 8600,
            brand: `Dell`,
            quantivy: 2,
        }

    ],
    asus: 
    [
        {
            name: `Asus Zenbook`,
            price: 20000,
            brand: `Asus`,
            quantivy: 4, 
        }
    ]
};

let a = prompt(`Which brand?`);
alert(`There are ${inventoryByBrand[a].length} generations of '${a.toUpperCase()}' in inventory`);