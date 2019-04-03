# gatsby-starter-framer-x

The [default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) converted to [TypeScript](https://www.typescriptlang.org/) and [Framer X](https://www.framer.com).

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-starter-framer-x https://github.com/simulieren/gatsby-starter-framer-x
```

## Demo

https://gatsby-starter-framer-x.netlify.com/

## Getting started

After you have installed this starter you can do the following things.

### Start with Framer X

You can open `src/framerx.framerfx` like a normal Framer X project and do everything Framer X has to offer. All code components from framer are saved in `src/framerx.framerfx/code/` and you can access them easily with any code editor.

### Run a local development environment

```
npm run develop 
```

### Build a production ready site

```
npm run build
```

## Getting started with Framer X

Easy way get started with your first Framer X Code component:

1. Create a new component file in `src/framerx.framerfx/code/` or copy the existing one. This is where all code components from Framer X are.
1. Import it in `src/framerx/index.ts` and export it. This file is a barrel file, this means it collects all components in one place so they can be easily reimported from here.
    ```
    // src/framerx/index.ts
    
    import { ExampleComponent } from "../framerx.framerfx/code/ExampleComponent";

    export { ExampleComponent }
    ```
1. Import it in a page like `src/pages/index.tsx` and use it like an ordinary React component:
    ```
    // src/pages/index.tsx
    
    import { ExampleComponent } from '../framerx'; // This is the barrel file used for collecting all components
    
    export default class extends React.Component<IndexPageProps, {}> {
      constructor(props: IndexPageProps, context: any) {
        super(props, context)
      }
      public render() {
        return (
          <div>
            <h1>Hi people</h1>
            
            <ExampleComponent text="This is a Framer X Component"/>          
          </div>
        )
      }
    }
    ```
1. If you do any changes to your code component, it will be reflected in the browser and Framer X at the same time.
    
> ⚠ Note: If you want to build your website you should comment out or delete all functions imported from `framer`.

## Troubleshooting

There is a build error when trying to build components that use features like `PropertyControls` or `ControlType` from the `framer` package. They currently only work during `npm run develop`. This error is caused during the server side rendering process.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/simulieren/gatsby-starter-framer-x)
