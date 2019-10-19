const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
},
]
let inventoryByBrand = {
    'HP': [],
    'Asus' : [],
    'Dell': [],
}
let input = prompt('Which brand');
let item;
let itemBrand;

for(let i = 0; i < inventory.length; i++){
    item = inventory[i];
    itemBrand = item['brand'];
    inventoryByBrand[itemBrand].push(item);   
}
let tong = 0;
if(input.toLowerCase() == 'hp'){
    for(let i = 0; i < inventoryByBrand['HP'].length; i++){
        tong += inventoryByBrand['HP'][i]['price'] * inventoryByBrand['HP'][i]['quantity'];
    }
    alert(`There are ${inventoryByBrand['HP'].length} generation of '${input.toUpperCase()}' in inventory \n \n ${inventory[0]['name']} \n ${inventory[5]['name']} \n \n With total value: ${tong}k`);
} else if(input.toLowerCase() == 'asus'){
    for(let i = 0; i < inventoryByBrand['Asus'].length; i++){
        tong += inventoryByBrand['Asus'][i]['price'] * inventoryByBrand['Asus'][i]['quantity'];
    }
    alert(`There are ${inventoryByBrand['Asus'].length} generation of '${input.toUpperCase()}' in inventory \n \n ${inventory[4]['name']} \n \n With total value: ${tong}k`);
} else if(input.toLowerCase() == 'dell'){
    for(let i = 0; i < inventoryByBrand['Dell'].length; i++){
        tong += inventoryByBrand['Dell'][i]['price'] * inventoryByBrand['Dell'][i]['quantity'];
    }
    alert(`There are ${inventoryByBrand['Dell'].length} generation of '${input.toUpperCase()}' in inventory \n \n ${inventory[1]['name']} \n ${inventory[2]['name']} \n ${inventory[3]['name']} \n \n With total value: ${tong}k`);
}
