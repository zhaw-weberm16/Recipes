import {AbstractDatabase} from "./abstract-database";
import {PathListEntry} from "../data/path-list-entry";

export class RecipeDatabase extends AbstractDatabase {

    public getEntityName() {
        return "recipe";
    }

    protected getSort(): any[] {
        return ['recipeName'];
    }

    public createPathListEntry(entry: PathListEntry, entity: any): Promise<PathListEntry> {
        entry.name = entity.recipeName;
        return super.createPathListEntry(entry, entity);
    }

    public async addIngredient(recipeKey, ingredientKey) {
        let recipe = await this.read(recipeKey);
        if (!Array.isArray(recipe.ingredients)) {
            recipe.ingredients = [];
        }
        if (recipe.ingredients.indexOf(ingredientKey) < 0) {
            recipe.ingredients.push(ingredientKey);
            recipe = await this.update(recipeKey, recipe);
        }
        return recipe;
    }

    public async deleteIngredient(recipeKey, ingredientKey) {
        let recipe = await this.read(recipeKey);
        if (Array.isArray(recipe.ingredients)) {
            let index = recipe.ingredients.indexOf(ingredientKey);
            if (index >= 0) {
                recipe.ingredients.splice(index, 1);
            }
            recipe = await this.update(recipeKey, recipe);
        }
        return recipe;
    }

}