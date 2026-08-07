//So if you want to add other stuff just add them there or change anything maybe
// add a boolean if isChecked but so far for the PlaceCard it will be simply like this -drew

// Nevermind I added the isBought boolean to the GroceryItem type so
//  you can use that for the PlaceCard component -drew 


export type GroceryItem = {
    id?: string;
    name: string;
    quantity: number;
    category: string; 
    notes?: string;  
    isBought?: boolean; 
};

