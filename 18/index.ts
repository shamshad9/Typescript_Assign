function main (): void {
    let items: string[] = [
      list of mountains
       "Mount Everest",
       "kilimanjaro",
       "Donali",

      list of rivers
       "Nile",
       "Amazon",
       "Yangtze",
       list of countries
       "United States",
       "Canada",
       "Australia",
       "India",
      list of cities
       "New Yark",
       "Tokyo",
       "London",
       "Sudney",
      list of languages
       "English",
       "Spanish",
       "Mandarin",
       "Hindi",
      other random items
       "Pizza",
       "Guitar",
       "Sunflower",
       "Spaceship",
       
]}
   let print the list of items
   items.forEach ,(item): void=> {const}
   main();
   console.log("List of Items.for each(item)=>{const");

   
the array of places
let placesToVisit: string[] = ['Machu picchu','Tokyo','Santorini','Banff Nationalpark','Cape Town',];
 print the array in its origional order
console.log("origional order:",placesToVisit);
print the array in alphabetical order without modifying the origional list
console.log("Alphabetical Order:",[...placesToVisit].sort());
show that the origional order is still preserved
console.log("Origional order(Aftersorting):",placesToVisit);
print the array in reversealphabetical order without changing thr origional list
console.log("Origional Order:",[...placesToVisit].sort((a,b)=>b.localeCompare(a)));
show that the origionalorder is still preserved
console.log("orional order  (After reverse sorting):",placesToVisit);
reverse the order of list(modifies the origional list)
placesToVisit.reverse();
console.log("Reversed Order:",placesToVisit);
reverse the order of the list again (back to origional order)
placesToVisit.reverse();
console.log("Back to Origional order:", placesToVisit);
sort the array in alphabetical order (modifies the origional list)
placesToVisit.sort();
console.log("sorted Order:",placesToVisit);
sort the array in reverse alphabetical order(modifies the origional list)
placesToVisit.sort((a,b)=>b.localeCompare(a));
console.log("Reverse Sorted order:",placesToVisit);

