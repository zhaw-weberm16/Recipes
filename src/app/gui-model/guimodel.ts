export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Recipes",
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Recipes",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "page": "recipespage",
                        },
                        {
                            "type": "button",
                            "name": "Ingredients",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "page": "ingredientspage",
                        },
                        {
                            "type": "button",
                            "name": "Regions",
                            "icon": "fa-globe",
                            "color": "yellow",
                            "page": "regionspage",
                        }
                    ]
                },
                {
                    "id": "recipespage",
                    "name": "Recipes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "New Recipe",
                            "icon": "fa-cutlery",
                            "color": "red",
                            "form": {
                                "form": "RecipeForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "RecipeList",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "search": true,
                            "url": "/person",
                            "page": "recipepage",
                        }
                    ]
                },
                {
                    "id": "recipepage",
                    "name": "Recipe",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Show Recipe",
                            "icon": "fa-cutlery",
                            "color": "red",
                            "form": {
                                "form": "RecipeForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Add Ingredient",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "form": {
                                "form": "AddIngredientForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "IngredientList",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "search": true,
                            "url": "/company",
                            "form": {
                                "form": "IngredientForm"
                            }
                        }
                    ]
                },
                {
                    "id": "ingredientspage",
                    "name": "Zutaten",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "New Ingredient",
                            "icon": "fa-apple",
                            "color": "red",
                            "form": {
                                "form": "AddIngredientForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "IngredientList",
                            "icon": "fa-apple",
                            "color": "carrot",
                            "search": true,
                            "url": "/company",
                            "page": "ingredientpage"
                        }
                    ]
                },
                {
                    "id": "ingredientpage",
                    "name": "Ingredient",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Ingredient",
                            "icon": "fa-apple",
                            "color": "red",
                            "form": {
                                "form": "IngredientForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "RecipeList",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "search": true,
                            "url": "/person",
                            "page": "recipepage"
                        }
                    ]
                },
                {
                    "id": "regionspage",
                    "name": "Regionen",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "New Region",
                            "icon": "fa-globe",
                            "color": "red",
                            "form": {
                                "form": "RegionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "RegionsList",
                            "icon": "fa-globe",
                            "color": "yellow",
                            "search": true,
                            "url": "/project",
                            "page": "regionpage"
                        }
                    ]
                },
                {
                    "id": "regionpage",
                    "name": "Region",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Region",
                            "icon": "fa-globe",
                            "color": "red",
                            "form": {
                                "form": "RegionForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "RecipeList",
                            "icon": "fa-cutlery",
                            "color": "blue",
                            "search": true,
                            "url": "/person",
                            "page": "recipepage"
                        }
                    ]
                }
            ],
            "formList": [
                {
                    "id": "RecipeForm",
                    "title": "Recipe",
                    "url": "/person",
                    "formFieldList": [
                        {
                            "id": "recipeName",
                            "type": "text",
                            "name": "Recipe Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "preparationTime",
                            "type": "number",
                            "name": "Preparationtime in minutes",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "region",
                            "type": "autocomplete",
                            "name": "Region",
                            "wordSearchEnabled": true,
                            "defaultKey": "regionKey",
                            "form": "RegionForm",
                            "url": "/project",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "recipe",
                            "type": "text",
                            "name": "Recipe",
                            "width": 2,
                            "height": 8,
                            "maxLength": 50000,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddIngredientForm",
                    "title": "Add Ingredient",
                    "url": "/company",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Ingredient",
                            "width": 2,
                            "url": "/company",
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "RegionForm",
                    "title": "Region",
                    "url": "/project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Region",
                            "width": 2,
                            "url": "/project",
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "IngredientForm",
                    "title": "Ingredient",
                    "url": "/company",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Ingredient Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "season",
                            "type": "text",
                            "name": "Season",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "calories",
                            "type": "number",
                            "name": "Calories per 100g",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
