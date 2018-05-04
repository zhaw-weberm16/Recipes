import {IngredientDatabase} from "./database/ingredient-database";
import {RecipeDatabase} from "./database/recipe-database";
import {RegionDatabase} from "./database/region-database";

export class TestData {

    public static init() {
        let recipeDatabase = new RecipeDatabase();
        let ingredientDatabase = new IngredientDatabase();
        let regionDatabase = new RegionDatabase();

        let promises = [];
        promises.push(ingredientDatabase.create({name: 'Zwiebeln', season: 'Sommer', calories: '40'}));
        promises.push(ingredientDatabase.create({name: 'Peperoni', season: 'Sommer', calories: '40'}));
        promises.push(ingredientDatabase.create({name: 'Karotten', season: 'Immer', calories: '41'}));
        promises.push(ingredientDatabase.create({name: 'Knoblauch', season: 'Juli bis April', calories: '142'}));
        promises.push(ingredientDatabase.create({name: 'Olivenöl', season: 'Immer', calories: '844'}));
        promises.push(ingredientDatabase.create({name: 'Mais', season: 'August bis Oktober', calories: '365'}));
        promises.push(ingredientDatabase.create({name: 'Rinderhackfleisch', season: '-', calories: '332'}));
        promises.push(ingredientDatabase.create({name: 'Rotwein', season: '-', calories: '85'}));
        promises.push(ingredientDatabase.create({name: 'Gehackte Tomaten', season: '-', calories: '25'}));
        promises.push(ingredientDatabase.create({name: 'Babedibubi', season: '-', calories: '25'}));

            Promise.all(promises).then((ingredients) => {
                promises = [];

                promises.push(regionDatabase.create({name: 'Europa'}));
                promises.push(regionDatabase.create({name: 'Asien'}));
                promises.push(regionDatabase.create({name: 'Amerika'}));

                    Promise.all(promises).then((regions) => {
                        promises = [];
                        promises.push(recipeDatabase.create({
                            recipeName: 'Spaghetti Bolognese',
                            preparationTime: '30',
                            recipe: '1. Zwiebeln, Peperoni, Knoblauch und Karotten in kleine Stücke schneiden\n2. Olivenöl in einer Bratpfanne heiss werden lassen\n3. Zwiebeln, Gemüse und Mais andämpfen\n4. Fleisch beigeben und anbraten\n5. Mit Wein ablöschen und auskochen\n6. Gehackte Tomaten beigeben\n7. Würzen und abschmecken\n\nNebenbei Spaghetti al dente kochen - En guete!',
                            ingredient: [ingredients[0].key, ingredients[1].key, ingredients[2].key, ingredients[3].key, ingredients[4].key, ingredients[5].key, ingredients[6].key, ingredients[7].key, ingredients[8].key],
                            region: regions[0].key
                        }));
                        promises.push(recipeDatabase.create({
                            recipeName: 'Rotes Thai Curry',
                            preparationTime: '30',
                            recipe: '1. Zwiebeln, Peperoni, Knoblauch und Karotten in kleine Stücke schneiden\n2. Olivenöl in einer Bratpfanne heiss werden lassen\n3. Zwiebeln, Gemüse und Mais andämpfen\n4. Fleisch beigeben und anbraten\n5. Mit Wein ablöschen und auskochen\n6. Gehackte Tomaten beigeben\n7. Würzen und abschmecken\n\nNebenbei Spaghetti al dente kochen - En guete!',
                            ingredient: [ingredients[0].key, ingredients[9].key],
                            region: regions[1].key
                        }));
                        promises.push(recipeDatabase.create({
                            recipeName: 'Hamburger',
                            preparationTime: '30',
                            recipe: '1. Zwiebeln, Peperoni, Knoblauch und Karotten in kleine Stücke schneiden\n2. Olivenöl in einer Bratpfanne heiss werden lassen\n3. Zwiebeln, Gemüse und Mais andämpfen\n4. Fleisch beigeben und anbraten\n5. Mit Wein ablöschen und auskochen\n6. Gehackte Tomaten beigeben\n7. Würzen und abschmecken\n\nNebenbei Spaghetti al dente kochen - En guete!',
                            ingredient: [ingredients[2].key, ingredients[7].key],
                            region: regions[2].key
                        }));
            }
            ).catch((err) => {
                console.log(err);
                }
            );
        }
        ).catch((err) => {
            console.log(err);
        }
        );
    }
}