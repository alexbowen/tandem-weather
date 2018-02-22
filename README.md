# Tandem technical challenge

![home page](https://raw.githubusercontent.com/alexbowen/tandem-weather/blob/master/application.png)

This application uses the http://openweathermap.org/ API to display 3hourly weather infomation for a UK city for the next 5 days.

Seeing as the task requirements mentioned React specifically this application concentrates on the React/Redux side of things. Some basic styling is applied using bootstrap but I did not spend much time on that. The semantics of the markup probably leave a bit to be desired also!

The application is a client side React application (no server side HTML construction) that uses Redux for state management.

I spent 3-4 hours on developing this but in that time frame I did not get the time to implement the requirement of the CSV data source. I would be totally willing to discuss how this could be implemeted in any discussions.

## Instructions to run the application

Please install NPM dependencies with `npm i` from the project root. This application was developed using node 8.9.0 and is untested on other versions.

Now start the main application

- `npm start`
- navigate to localhost:3000 in your browser

In development mode all actions and corresponding states created are logged in the browser console.

## Discussion points

I used create-react-app (see below) for some initial boilerplate to save some time.

### Architecture

The container/component react/redux pattern is used. Containers have their state mapped to the redux store and components are stateless. redux-thunk is used to manage asynchronous calls to the API. I would probably refine the container/componet architecture as i took some shortcuts here - the controls for selecting city/data source i would probably absract in a seperate container for instance

### Error handling

Some basic error handling is added to the main API call that then displays an erro state to the user if there is a problem. Its a fairly crude implementation but just to demonstrate i have considred error handling.

![home page](https://raw.githubusercontent.com/alexbowen/tandem-weather/blob/master/error-state.png)

I would add a 'loading' state with an indicator to the content area area when requests are made and removed when resolved with more time.

### Testing

I have included unit tests for the actions of an API call, and some of the helpers I have implemented. These are intende for demonsatration and coverage would need to be greater in a real life application.

I have also included a demonstration of a simple component snapshot test.

The above tests are implemented using the Jest tool. 

Some examples of internal propType checks have been added, although these need to be added to all components if more time spent on this.

### Considerations

- As mentioned there is some very basic responsive styling. This kind of application is ideally suited to being a Progressive web application and this would greatly enhange the user experience on smaller devices/bad connections.

### Production

This uses the standard create-react-app workflow and so you can create production assets for deployment with `npm run build` and the logger would not run if `process.env.NODE_ENV` was set to production.

## create-react-app

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX.  See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

