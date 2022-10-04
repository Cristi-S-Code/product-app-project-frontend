# ProductAppProject

  A web application used to visualise a list of products. The list can be visualised only after the user has logged in. 
We have 3 types of entities: User, Product and Stock. Based on these the app has the following features:
 - User can create account, login, update user details, logout
 - Product: CRUD operations on this entity
 - Stock: can pe added/updated for every product.
 - a search bar for products
 - APIs created using Swagger and tested with Postman
 
  The application is split into multiple views with menu. We also have validations for every form with success/error messages after each endpoint call and the app keeps the user logged in after refreshing page.
  For UI components we used PrimeNG.
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
