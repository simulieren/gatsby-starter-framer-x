# gatsby-starter-framer-x

The [default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) converted to [TypeScript](https://www.typescriptlang.org/) with realtime [Framer X](https://www.framer.com) component support.

## 💻 Demo

https://gatsby-starter-framer-x.netlify.com/

## 🚀 Quick Start - Installation

Install the GatsbyJS CLI.

```
npm i -g gatsby-cli
```

Install this starter (assuming Gatsby is installed) by running from your CLI.
```
gatsby new gatsby-starter-framer-x https://github.com/simulieren/gatsby-starter-framer-x
```

Change directories into site folder.

```
cd gatsby-starter-framer-x
```

Start development server.

```
npm run develop
```

> ℹ For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

## 👨‍💻 Getting started

After you have installed this starter you can do the following things.

### Start with Framer X

You can open `src/framerx.framerfx` like a normal Framer X project and do everything Framer X has to offer. All code components from framer are saved in `src/framerx.framerfx/code/` and you can access them easily with any code editor.

### Run a local development server

```
npm run develop 
```

### Build a production ready site

```
npm run build
```

## Getting started with Framer X code components

Easy way get started with your first Framer X code component:

1. Create a new component file in `src/framerx/` or copy the existing `ExampleComponent`.
1. Import it in a page like `src/pages/index.tsx` and use it like an ordinary React component:
    ```js
    // src/pages/index.tsx
    
    import { ExampleComponent } from '../framerx/ExampleComponent';
    
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
1. Import it in your Framer X code component `src/framerx.framerfx/code/ExampleComponent`:
    ```js
    // Import the component with types for props
    import { ExampleComponent as _ExampleComponent, ExampleComponentProps } from "../../framerx/ExampleComponent";

    // Create a new class component with the right types
    export class ExampleComponent extends React.Component<ExampleComponentProps, any> {
      // Return the component contents in JSX
      // https://reactjs.org/docs/introducing-jsx.html
      render() {
        return <_ExampleComponent {...this.props}/>;
      }

      // Add Framer UI for this component (in the properties panel)
      // https://framer.com/learn/docs/components#code
      static propertyControls: PropertyControls<ExampleComponentProps> = {
      text: { type: ControlType.String, title: "Text" }
      };
    }

    ```
1. If you do any changes to your code component in `src/framerx/`, it will be reflected in the browser and Framer X at the same time.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/simulieren/gatsby-starter-framer-x)
