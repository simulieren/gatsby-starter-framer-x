import * as React from "react";
import { PropertyControls, ControlType } from "framer";

// Import the component with types for props
import { ExampleComponent as _ExampleComponent, ExampleComponentProps } from "../../framerx/ExampleComponent";

// Create a new class component with the right tyoes
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
