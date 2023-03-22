# MAURICE COOL PERFORMANCE

## pitch that shit!

### What does our app do?

Our App fetches information of an api on the weather conditions.
Then the user who comes to the app can add suggestions of things to do when the weather is good or bad which the app will store.
So the App will reflect the information depending on how the weather is and will show suggestions which users of the app have inputted. so when the weather condition is sunny, the app will show the activities the user put in as good-weather activites, and do the same for bad weather.

### how does this work though?

We create 1 array of all activites and keep track of it (state variable).

-> input: what is a state Hook/ state variable?
The UseState Hook enables us to declare tracked variables, which casues react to rerender all componentes which are based on this variable, as soon as their data changes.

Then we filter our array containing all activites into two new arrays, one containing all the good weather activites and one containing all the bad weather activites. since the source of those two array ( the array containing all the activites ) is a state variable, our filtered arrays will update when the initial array is been updated by the user's formsubmit.

"In the Meantime", we fetch for the current Weather via the weather-API. We update the weather according to the API's data every 3 seconds via an intervall. In Addition, according to the "is-the-weather-good" state, we change the Array of Activites which we pass to our EntryList as a prop.
