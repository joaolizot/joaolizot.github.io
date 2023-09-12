async function loadCategories(){
    try{
        const response = fetch(
           "https://japceibal.github.io/emercado-api/cats/cat.json" 
        );
        const json = (await response).json();
        console.log(json);
    } catch (error) {
        console.log(error)
    }
}
loadCategories()