# rxshell
react + material-ui basic app shell

**Material-UI** (https://material-ui.com/) is a popular React-based components Framework. They give some good examples of app building blocks such as menu items on a left-side pane, which they call *drawers*. Open source frameworks such as **react most wanted** (https://www.react-most-wanted.com/) give you complete app shells to jump-start your app with. However, the architecture can be a bit complex and the lack of documentation may scare some developers away.

There is a sweet-spot in between: A simple react app shell that is easy enough to grok over and which developers can use to put a bunch of pages together and make an app of. This is the purpose of **rxshell**.

The architecture is pretty etraightforward. In the *pages* folder, create new folders and drop your React components that share a UI in that folder. There is a single component called **AppBar** under the *components* folder which builds a drawer-based menu for all your components, routes URLs to your components, and provides for a collapsed and semi-collapsed menu. Edit *AppBar.js* and add your components and URLs. Simple examples illustrate the process. The tristate expanded/semi-collpased/collapsed menu may be a bit complex to grok, but you don't need to understand how it works (hint: React's clsx() API and hiding chevrons are the main engine). Enjoy!
