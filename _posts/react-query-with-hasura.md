---
title: 'Quick API with React Query and Hasura'
excerpt: 'Once in a while I start using a new framework or package and get that feeling that I know I have found a new member of my favorite tech stack.'
coverImage: '/assets/blog/react-query-with-hasura/cover-800-400.jpg'
date: '2020-09-28T12:00:00.000Z'
author:
  name: Pablo Rocha
ogImage:
  url: '/assets/blog/react-query-with-hasura/cover-800-400.jpg'
---
Once in a while I start using a new framework or package and get that feeling that I know I have found a new member of my favorite tech stack. While working on [my latest project](https://criclick.com), I got that feeling when I found [React Query](https://react-query.tanstack.com). I quickly discovered why it has 13.3k ⭐'s on GitHub and why it's quickly gaining traction.

React Query has joined the ranks among my favorite way to build an API, [Hasura](https://hasura.io). Which in it's own right, is an excellent choice to quickly setup a robust API with built-in authorization and GraphQL API calls for your database.

Let's take a look at how simple it is to setup an API using these two powerhouse tools.

## Fast Setup

### Create a Hasura Project

Hasura makes this super easy with Hasura Cloud. First, you need to [create an account](https://cloud.hasura.io/login) if you don't already have one. You have some different login options available.

![hasura login](/assets/blog/react-query-with-hasura/1-hasura-login.png)

Once that is done you can click on the _Create a project_ button.

![create hasura project](/assets/blog/react-query-with-hasura/2-create-hasura-project.png)

You will be prompted for some database connection data, however the easiest (and free) approach is by selecting _Try with Heroku_ (another favorite part of my stack). Click the big Heroku button and watch the magic go to work.

![try with heroku](/assets/blog/react-query-with-hasura/3-try-with-heroku.png)

After everything is provisioned click the _Create project_ button and voila! - Hasura did all the hard setup work for you.

![setup complete](/assets/blog/react-query-with-hasura/4-setup-complete.png)

There will now be a big blue _Launch Console_ button on the top right of the window. This will lead you to the console where you will make all your database changes. Any changes made in the console will trigger your GraphQL API to be updated, reflecting the changes you made. Neat!

### Create a Database Table

We can quickly setup a database table by heading to the _Data_ tab and clicking the yellow _Create Table_ button.

![create a table](/assets/blog/react-query-with-hasura/5-create-table.png)

You can setup the table as you wish, but I am going to use some cool JavaScript projects and links to their GitHub repositories. Here you will enter the table specific properties including table name, column information, primary keys, etc. We are keeping it simply, all the setup you need is in the screenshot below.

![table setup](/assets/blog/react-query-with-hasura/6-table-setup.png)

Once done click the _Add Table_ button at the bottom of the screen.

### Add Some Data

Clicking on the _Insert Row_ tab will take you to a screen where you can, well, insert a row. Type in some data and click _Save_ to insert a row. Then type in some different data and click _Insert Again_ to insert another row.

![add data](/assets/blog/react-query-with-hasura/7-add-data.png)

Here is the data I am using:

```bash
pablorocha.me              https://github.com/joserocha3/pablorocha.me
React Query                https://github.com/tannerlinsley/react-query
Hasura GraphQL Engine      https://github.com/hasura/graphql-engine/
use-places-autocomplete    https://github.com/wellyshen/use-places-autocomplete
```

That is it. Within minutes we provisioned a database and have a GraphQL API layered over our database. Poke around the Hasura Console to find some more goodies.

### Take Note

Before heading to the next section, be sure to go to the _GRAPHIQL_ tab and take note of your GraphQL Endpoint. That will be used in your React app to connect to your Hasura instance.

![endpoint](/assets/blog/react-query-with-hasura/8-endpoint.png)

## Start Coding

We will create a React project that will consume the GraphQL API Hasura is providing for us.

Create a new react project using `create-react-app`. Then install `react-query` and `graphqurl`.

```bash
npx create-react-app react-query-with-hasura-ftw
cd react-query-with-hasura-ftw
yarn add react-query graphqurl
```

### Render the List

Replace the entire `App.js` file with the below code.

```jsx
import React from 'react'
import { ReactQueryCacheProvider, useQuery } from 'react-query'
import { query } from 'graphqurl'

const getProjects = async () => {
  const results = await query({
    query: 'query { project { id name github } }',
    endpoint: 'https://pet-mutt-99.hasura.app/v1/graphql',
  })

  return results.data.project
}

const App = () => {
  return (
    <ReactQueryCacheProvider>
      <Projects />
    </ReactQueryCacheProvider>
  )
}

const Projects = () => {
  const projectsQuery = useQuery('project', getProjects)

  return (
    <div>
      <h2>Some Projects</h2>
      {projectsQuery?.data?.map((project) => (
        <p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <code>{project.name}</code>
          </a>
        </p>
      ))}
    </div>
  )
}

export default App
```

After that simply run `yarn start` and you will see the project in action.

![project list](/assets/blog/react-query-with-hasura/9-project-list.png)

### Code Analysis

Let's look at individual code blocks to understand how the list is being retrieved and rendered.

The starting point is the `App` component. We have to wrap out entire app in a `ReactQueryCacheProvider` component. This component places React Query's cache into the app's context, which enables it to be acccessed anywhere in the component tree.

```jsx
const App = () => {
  return (
    <ReactQueryCacheProvider>
      <Projects />
    </ReactQueryCacheProvider>
  )
}
```

From there we can step down one level into the `Projects` component. This is where we implement `useQuery`. For this simple example that method takes two parameters: 

- query key - a unique key to indentify a query
- query function - a function to resolve the data for our component to render

`useQuery` returns the `projectsQuery` variable. That contains information about the query state such as whether it is loading or contains data. We are interested in `data` because that will contain all the records from our database.

```jsx
const Projects = () => {
  const projectsQuery = useQuery('project', getProjects)

  return (
    <div>
      <h2>Some Projects</h2>
      {projectsQuery?.data?.map((project) => (
        <p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <code>{project.name}</code>
          </a>
        </p>
      ))}
    </div>
  )
}
```

The final block of code is our `getProjects` method. Which is being used as our query function. This method makes a call to our GraphQL API and parses out the data we want to return to our `Projects` component.

```jsx
const getProjects = async () => {
  const results = await query({
    query: 'query { project { id name github } }',
    endpoint: 'https://pet-mutt-99.hasura.app/v1/graphql',
  })

  return results.data.project
}
```

## Final Thoughts

Done and done! React Query and Hasura make setting a up a new project an extremely painless process. There are a lot more aspects to cover (such as mutations and authentication), we look into those in future blog posts.
