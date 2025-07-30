class Meal {
  constructor(
    private id: string,
    private categoryIds: string[],
    private title: string,
    private affordability: string,
    private complexity: string,
    private imageUrl: string,
    private duration: number,
    private ingredients: string[],
    private steps: string[],
    private isGlutenFree: boolean,
    private isVegan: boolean,
    private isVegetarian: boolean,
    private isLactoseFree: boolean
  ) {}
}

export default Meal;
