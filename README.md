# IntegralUI TreeView for Angular, v19.3

IntegralUI TreeView is a library built on top of Angular 8 framework. It consists of TreeView and other common components, directives and services that can help you build modern web applications. 

<b>Note</b>   The TreeView and other common components are also part of the [IntegralUI Web](https://github.com/lidorsystems/integralui-web) product package. 


Here is a brief overview of what is included:

## Components

[AutoComplete](https://www.lidorsystems.com/products/web/studio/samples/angular/#/autocomplete/overview/) - Represents a text box with a dropdown list where you can choose among suggested options<

[Breadcrumb](https://www.lidorsystems.com/products/web/studio/samples/angular/#/breadcrumb/overview/) - Used for navigation, where each item can have a link that is automatically separated

[Button](https://www.lidorsystems.com/products/web/studio/samples/angular/#/button/overview/) - Represents a button

[Calendar](https://www.lidorsystems.com/products/web/studio/samples/angular/#/calendar/overview/) - Enables the user to select a date using a visual monthly calendar display

[CheckBox](https://www.lidorsystems.com/products/web/studio/samples/angular/#/checkbox/overview/) - Represents a check box

[ComboBox](https://www.lidorsystems.com/support/articles/angular/combobox/combobox-component.aspx) - Advanced version of standard ComboBox element

[DatePicker](https://www.lidorsystems.com/products/web/studio/samples/angular/#/datepicker/overview/) - Allows the user to select a date by using a drop-down calendar

[Dialog](https://www.lidorsystems.com/products/web/studio/samples/angular/#/dialog/overview/) - Displays a modal window

[ListScroller](https://www.lidorsystems.com/products/web/studio/samples/angular/#/listscroller/overview/) - Displays a scrollable item list in horizontal or vertical layout

[NumericUpDown](https://www.lidorsystems.com/products/web/studio/samples/angular/#/numeric-updown/overview/) - Displays a numeric value and allows changes within a range of defined minimum and maximum values

[Paginator](https://www.lidorsystems.com/support/articles/angular/paginator/paginator-component.aspx) - Allows you to divide the content in multiple views in single page

[ProgressBar](https://www.lidorsystems.com/products/web/studio/samples/angular/#/progressbar/overview/) - Visualize the progression of an operation

[RadioButton](https://www.lidorsystems.com/products/web/studio/samples/angular/#/radiobutton/overview/) - Represents a radio button

[Rating](https://www.lidorsystems.com/products/web/studio/samples/angular/#/rating/overview/) - Visualizes ratings

[Slider](https://www.lidorsystems.com/products/web/studio/samples/angular/#/slider/overview/) - Allows changes to a numeric value within a range of defined minimum and maximum values

[Splitter](https://www.lidorsystems.com/support/articles/angular/splitter/splitter-component.aspx) - Allows you to resize two block elements during run-time

[Toolbar](https://www.lidorsystems.com/products/web/studio/samples/angular/#/toolbar/overview/) - Displays a collection of different tool items and editors in one line

[TreeView](https://www.lidorsystems.com/support/articles/angular/treeview/treeview-component.aspx) - Displays hierarchical data structures


## Directives

<b>DropDown</b> - Represents a dropdown window

[Frame](https://www.lidorsystems.com/support/articles/angular/frame/frame-component.aspx) - Places a grip handle that allows you to resize a container during run-time

[Popover](https://www.lidorsystems.com/products/web/studio/samples/angular/#/popover/overview/) - Displays custom HTML content over specified element

[Range](https://www.lidorsystems.com/support/articles/angular/range/range-component.aspx) - Allows you to set limits in which an element can resize during run-time

<b>Resize</b> - Detects changes to the element size and fires notifications when it happens

[Tooltip](https://www.lidorsystems.com/support/articles/angular/tooltip/tooltip-component.aspx) - Adds a tooltip to an element

## Services

<b>Common</b> - Includes a set of common functions usable in most applications

<b>Data</b> - Includes a set of data related functions for different operations like: add/remove, search, etc.

<b>DragDrop</b> - Provides a way to use drag drop operations between custom components or elements.

<b>Filter</b> - Includes a set of related functions for filter operations


All components are inheritable, you can further extend functionalities of specific component by simple create a subclass of component main class. To get access to the TreeView component import the IntegralUITreeViewModule in your application. For other common components, import the IntegralUICommonModule.

## Dependencies

IntegralUI TreeView requires only the following library:

Angular - v8.0 and above


## DEMO

[Online QuickStart App](https://www.lidorsystems.com/products/web/studio/samples/angular/) - An online demo of each component included


## Installation

Install the repository by running

```bash
npm install https://github.com/lidorsystems/integralui-treeview.git
```

Open your application module and add a reference to the IntegralUITreeViewModule

```bash
import { IntegralUITreeViewModule } from 'integralui-web/bin/integralui/integralui.treeview.module';

@NgModule({
  imports:      [ IntegralUITreeViewModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

<b>Note</b>   In order to use a specific component or directive in your application, follow the [guidelines from corresponding article](https://www.lidorsystems.com/support/help/web/angular/guide/articles.aspx). You can find a separate article available for each component or directive.

### Angular CLI

After installation, in angular.json under styles section add this code line:

```bash
"node_modules/integralui-web/bin/integralui/css/integralui.treeview.module.css"
```

To apply a theme, also add code line for corresonding theme file. For example to use the Office theme, add this:
```bash
"node_modules/integralui-web/bin/integralui/themes/integralui.themes.office.css"
```

<b>Note</b>   You can choose a theme from available themes located at '~ ... /integralui/themes' folder.


To include resources that are used by IntegralUI components in your project during build, you need to:
1. Under assets folder create a subfolder named integralui
2. Copy/Paste the node_modules/integralui-treeview/bin/integralui/resources folder to it
3. Add the following code under <b>assets</b> section in angular.json file:

```bash
"src/integralui/resources"
```

<b>Note</b>   This is required because Angular compiler cannot detect resources that are outside the /src section of your app. It is needed if you are using resources that are part of IntegralUI Web, in your application.

### Creating Custom Styles for IntegralUI Components

When you create custom styles or changes to built-in CSS classes of IntegralUI components, placed for example within app.component.css file, make sure ViewEncapsulation is set to None. This allows to override default settings from corresponding component css file. For example:

<b>app.component.ts</b>

```bash
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
```

<b>app.component.css</b>

```bash
.iui-treeview
{
  width: 400px;
  height: 300px;
}
```

In this example, the TreeView component will have its width and height set from within the app.component. 

<b>Note</b>   Changes to ViewEncapsulation set to None is avoidable, if you create your own CSS style sheet and include it in angular.json file under styles section. Like it is explained above for general IntegralUI styles.

## QuickStart App

There is a demo application with source code that contains samples for each component included. You can access this app from the [IntegralUI Web](https://github.com/lidorsystems/integralui-web) repository. It can help you to get started quickly with learning about the components and write tests immediatelly.

In order to start this application, you only need to install the latest Angular library. Open the nodejs command prompt, go to application directory and type:

```bash
    npm install
```
After installation completes, start the application by typing:

```bash
    ng serve --open
```

The application will start displaying the main window with links to all components included. Each component window contains a demo and description about the component functionality. You can checkout the sample source code (located under integralui-web/quickstart/src/app/samples subfolder) for more information on the sample and component used.


## Release Notes

This is Trial version of the product. All features are fully functional, except that each component displays a pop-up trial window.

## License Information

You may use this version for the limited purposes of demonstrations, trials or design-time evaluations.

This project has been released under the IntegralUI Web License, and may not be used except in compliance with the License.
A copy of the License should have been installed in the product's root installation directory or it can be found here: [License Agreement](https://www.lidorsystems.com/products/web/treeview/license-agreement.aspx).

This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.