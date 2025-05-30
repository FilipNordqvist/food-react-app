# Recipe rescue (food-react-app)

Web application using Spoonacular API (https://spoonacular.com/food-api) to search for recipes.
You can filter on dietery preferences, rate the recipes and save your favorites.

## Getting Started

Clone the repository.

Navigate (cd) into ./food-react-app/food-app

To install dependencies, run:
npm install

and then to start development server:
npm start

Go to http://localhost/3000

Search for recipes, rate them and save favorites.

## Troubleshooting
Om det uppstår ett fel där applikationen säger att "Components" eller "compontents" saknas så kontrollera om mappen är döpt till "Components"/"components" och byt till motsatsen.


## Built With

* [React] - Web framework
* [Bootstrap5] - Styling library and responsivity
* [NPM] - Package Manager
* [Axios] - Used to make API-calls


We chose React beacuse it is the most popular framework and there are a lot of guides and videos to follow [1]. Even if you are new to web development, you can learn React quickly – as long as you know basic HTML, CSS and JavaScript [2].
When comparing the differences between the frameworks, there are not many major distinctions. Most of them use JavaScript and support modern frontend development.

React is component based, where user interfaces are divided into reusable components. These components encapsulates logic for a specific behaviour and can be used together to build complex user interfaces. This enables modularity, reusability and maintainability.[3] This suited our needs well since our application is built as a Single Page Application (SPA), where content updates dynamically without full page reloads [4]. React uses Virtual DOM (Document Object Model), which differentiates it from other frameworks. This is a lighter version of the original DOM, and makes it possible to only update the necessary parts, resulting in better performance than updating the actual DOM [3].

React is easier to use when performing functionality testing, and more popular than Angular in this aspect, due to its easiness and flexibility.  It’s also a framework that comes with a lot of developer tools and libraries which are easy and simple to use. These tools are one of the reasons that React is so popular among developers, since they make life easier and save time [2]. It’s also possible for developers to add additional features to these tools/libraries, to further enhance productivity [3].

Comparisons
Other frameworks like Angular and Vue follow design patterns such as MVC, which could be beneficial in larger projects, especially if we were building a Progressive Web App (PWA) or working with multiple pages and views [5].

Angular is a full toolkit made by Google for building web apps. It provides you with tools for routing, forms, etc  [3]. 
Vue.js, like React, also breaks your UI into pieces called components and updates the screen when data changes. Vue uses plain HTML for its templates, which makes it easy to start but can be harder to scale in very large apps. It offers better integration with backend frameworks such as Laravel, making it a strong choice for full-stack applications [3], [5].

React is pretty much just the part that shows stuff on the screen and you add extra tools yourself if you need them. Because React only handles the view, it’s easy to drop into existing projects and it works well for small to medium apps, such as ours. React uses JSX (HTML inside JavaScript), which takes a bit more getting used to but scales up better than Vue.js. React’s bigger community means more ready-made code and help when you need it [3].


[1] https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190
[2] https://www.geeksforgeeks.org/why-choose-react-for-web-development/
[3] https://medium.com/@jshristi17/why-choose-react-how-is-it-different-from-other-frameworks-32743dda3297
[4] https://www.browserstack.com/guide/angular-vs-react-vs-vue
[5] https://www.geeksforgeeks.org/react-vs-angular-vs-vue-which-framework-is-the-best/


## Versioning

We use GitHub for versioning.

## Authors

* **Hugo Andersson**
* **Emelie Eklund**
* **Filip Nordqvist**

## License

This project is licensed under the MIT License.

