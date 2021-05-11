// global data type file
type Drinks = {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate:string|null;
    strTags: string|null;
    strVideo: string|null;
    strCategory: string;
    strIBA: null|string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: null| string;
    strInstructionsDE: string|null
    strInstructionsFR: null| string;
    strInstructionsIT: null| string;
    [strInstructionsZH-HANS]: null| string;
    [strInstructionsZH-HANT]: null| string;
    strIngredient1: string;
    strIngredient2: string|null;
    strIngredient3: string| null;
    strIngredient4: string| null;
    strIngredient5: string| null;
    strIngredient6: string| null;
    strIngredient7: string| null;
    strIngredient8: string| null;
    strIngredient9: string| null;
    strIngredient10: string| null;
    strIngredient11: string| null;
    strIngredient12: string| null;
    strIngredient13: string| null;
    strIngredient14:string| null;
    strIngredient15: string| null;
    strMeasure1:string| null;
    strMeasure2: string| null;
    strMeasure3: string| null;
    strMeasure4: string| null;
    strMeasure5: string| null;
    strMeasure6: string| null;
    strMeasure7: string| null;
    strMeasure8: string| null;
    strMeasure9: string| null;
    strMeasure10: string| null;
    strMeasure11: string| null;
    strMeasure12: string| null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strImageSource: string | null;
    strImageAttribution: string | null;
    strCreativeCommonsConfirmed: string;
    dateModified: string;

}

type InitialState = {
    drinks: Drinks[];
}

// {
//     "idDrink": "15997";
//     "strDrink": "GG",
//     "strDrinkAlternate": null,
//     "strTags": null,
//     "strVideo": null,
//     "strCategory": "Ordinary Drink",
//     "strIBA": null,
//     "strAlcoholic": "Optional alcohol",
//     "strGlass": "Collins Glass",
//     "strInstructions": "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
//     "strInstructionsES": null,
//     "strInstructionsDE": "Den Galliano-Likör über Eis gießen. Füllen Sie den Rest des Glases mit Ginger Ale und das ist alles, was dazu gehört. Du hast jetzt ein eigenes GG.",
//     "strInstructionsFR": null,
//     "strInstructionsIT": "Versare il liquore Galliano su ghiaccio.\r\nRiempi il resto del bicchiere con ginger ale e questo è tutto.\r\nOra hai il tuo GG personale.",
//     "strInstructionsZH-HANS": null,
//     "strInstructionsZH-HANT": null,
//     "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg",
//     "strIngredient1": "Galliano",
//     "strIngredient2": "Ginger ale",
//     "strIngredient3": "Ice",
//     "strIngredient4": null,
//     "strIngredient5": null,
//     "strIngredient6": null,
//     "strIngredient7": null,
//     "strIngredient8": null,
//     "strIngredient9": null,
//     "strIngredient10": null,
//     "strIngredient11": null,
//     "strIngredient12": null,
//     "strIngredient13": null,
//     "strIngredient14": null,
//     "strIngredient15": null,
//     "strMeasure1": "2 1/2 shots ",
//     "strMeasure2": null,
//     "strMeasure3": null,
//     "strMeasure4": null,
//     "strMeasure5": null,
//     "strMeasure6": null,
//     "strMeasure7": null,
//     "strMeasure8": null,
//     "strMeasure9": null,
//     "strMeasure10": null,
//     "strMeasure11": null,
//     "strMeasure12": null,
//     "strMeasure13": null,
//     "strMeasure14": null,
//     "strMeasure15": null,
//     "strImageSource": null,
//     "strImageAttribution": null,
//     "strCreativeCommonsConfirmed": "No",
//     "dateModified": "2016-07-18 22:06:00"
// },
// {