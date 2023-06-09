<h1>Shopping Cart Web App</h1>

<h2>Assignment</h2>

<ol>
    <li>Create a new project with create-react-app and get rid of the boilerplate as in the previous projects.</li>
    <li>Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need?</li>
    <li>You should have at least two pages (a homepage and a shop page, which includes your shopping cart). Let a user navigate between the pages with a navigation bar, which will be shown on both routes.</li>
    <li>To your homepage, you can add whatever you’d like! A few images or information will be totally fine; it doesn’t have to be something fancy. The main goal of the project is to focus on setting up the shopping cart. The homepage is there to practice routing using react-router-dom.</li>
    <li>On your shopping cart route, a user should see a sticky bar (it can be just a top section as well), which displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).</li>
    <li>Build individual card items for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.</li>
    <li>Once a user has submitted their order, the amount on the cart itself should adjust.</li>
    <li>Make sure to test your app thoroughly using the React Testing Library. Take care that you don’t directly test react-router-dom, since it is an external library and the developers working on it must have tested the library already.</li>
    <li>As usual, style your application so you can show it off!</li>
    <li>Lastly, push the project to GitHub! Follow this link for instructions on how to deploy React applications with client-side routing to Github Pages. Be aware that the page will stay blank, unless you import { HashRouter } from react-router-dom and utilize a ‘’ component in place of ‘’ as GitHub no longer supports ‘’. For a more detailed description, read these parts of the React Router Docs on client-side routing and deploying using gh-pages.</li>
</ol>
