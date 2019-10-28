let clothes = ['Jeans', 'T-Shirt', 'Socks'];
while(true){
    let ask = prompt('Hi there, welcome to shop admin panel, what do you do want (C, R, U, D )');
    
    if (ask =='r'){
        alert('The current clothes are:');
        for(let i = 0; i < clothes.length ; i++){
            alert(i+1+'. '+clothes[i]);
        }
    }
    else if (ask =='c'){
        let new_clothes=prompt('Enter the name if the new item');
        clothes.push(new_clothes);
        alert('Done');
        
    }

    else if (ask =='u'){
        let num_update = Number(prompt('Enter the position you want to update'));
        let item_update = prompt('Enter the new name');
        clothes.splice(num_update-1,1,item_update);
        alert('Done');
    }

    else if (ask == 'd'){
        let num_delete = Number(prompt('Enter the possition you wan to delete'));
        clothes.splice(num_delete-1,1);
        alert('DOne'); 
        
    }

    else {
        alert('This command is not supported');
    }
}