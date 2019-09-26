v19.3.0  
- Compatible with Angular 8
- Reduced bundle size for all individual component modules
- Option to choose whether you want the dropdown to appear downwards or upwards
- Tooltips can now appear without animation
- Option to change the drag drop position in user code and display the correct icon
- Option to set drag drop action to copy or move in code
- Option to show expanded boxes in TreeView only on hover, in normal mode
- Option to change calendar style from DatePicker controlStyle property
- Breadcrumb now adjust visible items based on its size and provides a root dropdown menu
- Samples are updated to work on Angular 8

- In drop event in user code, selection of items now can be cleared
- Fixed the issue that caused getValue for DropList in ToolItem to thrown a style error exception
- Fixed the issue that shows previous item from where dragging starts to appear as hovered, after drag and drop completes 
- The image of dragged item is now correctly shown in FireFox and appears the same in all browsers
- Calendar and dropdown list in Toolbar now appear only on left mouse click
- Fixed the issue that prevented loading icon from appearing during load on demand in TreeView
- Changes to the data field names in Breadcrumb is now correctly applied
- Fixed the issue that caused style error to be thrown when Breadcrumb is initialized
- Other minor bug fixes

v19.2.0        
- A new event is added named dragDropComplete, which is fired after drag drop finishes and grid layout is updated. This event is present in TreeView component
- Sorting and Filtering icon improvements
- New theme Office (animations are added on hovering, selection etc. for most components)
- New  and updated samples

- Improve performance on grid update (internal data size scalling based on columns and rows)
- While dragging a row close to top or bottom grid border, the view is scrolled vertically is now corrected
- Vertical scrolling is now correctly updated during drag drop in Grid and TreeGrid
- Vertical scrollbar doesn't appear when row is expanded in the TreeGrid with only one row
- Fixed the issue that caused horizontal scrollbar to appear incorrectly in TreeView
- Fixed the issue that caused dropdown list editor to appear for cells that has it set to hidden
- ListPopup now longer causes style error with its position is set in Grid
- CalendarPopup and ListPopup are added to the DOM from the Grid only when associated editor is present
- With many columns in Grid scrolling speed is now increased when using touch
- Fixed the issue of closing the DropDown editors when touch is made outside the editor
- Tooltip no longer appears after the attached element is removed

v19.1.0
- New components: AutoComplete, Breadcrumb, Popover, Toolbar
- Compact Mode in TreeView, displays limited set of tree hierarchy based on selected item
- New  and updated samples

- Fixed the issue that incorrectly changes the rating values when division is larger than 1 in Rating component
- The mousedown event is now suspended from bubbling up, when item is selected from dropdown list in ComboBox
- Other minor bug fixes

v18.4.0
- New components: Calendar and DatePicker
- Components now have built-in animations during hovering or selection
- All components now have a property  that determines whether animations are enabled or not
- A getClientPos method is added to CommonService, which returns the mouse position in client coordinates based on specified element
- New and updated samples

- Changes to the value property when common component is disabled is no longer applied
- When moving an item from one TreeView to another with drag drop, the drop marker from the first tree view is now correctly removed from the DOM
- Themes are updated to reflect component changes
- Other minor bug fixes

v18.3.0
- Option to reorder items from code in TreeView using moveItem method
- Click, Right Click and Double Click events for all List components
- Whenever component enabled state changes, the enabledChanged event is now fired
- There are five scrolling speed levels to choose from, when using mouse wheel
- Option to show or hide the expand box in TreeView
- New dragStart and dragEnd events for all List components
- New and updated samples

- In SplitContainer, the position of splitter handle in horizontal layout is now correctly set when orientation changes
- Expand/Collapse now works with double click in TreeView items in non-virtual mode
- Fixed the issue when using Left/Right keys during keyboard navigation in ListView
- Changing the scroll mode in ListView component, now resets the scroll position
- Cursor icon over scrollbars now remains as the default one
- Mapping of data fields in TreeView when not in virtual mode is now correctly set for all item fields
- ListBar now correctly sets a group as selected when header is clicked
- The clone object during drag drop is now correctly attached with the drag drop data
- Fixed the issue that caused interference between dragging a grid row and selecting a new Rating value inside grid cells
- Fixed the issue in Rating when displaying large values within small component size
- Themes are updated to reflect component changes
- Other minor bug fixes

v18.2.0
- New themes: Office 360, Windows 10, Bootstrap, Blue, Red, Green, Dark
- Option to set component size on demand from code
- Hover events for items are now available
- Option to apply inline styles on demand to items in TreeView
- New samples

- Rating component when included in Grid cells no longer causes flickering
- The text outside ComboBox header is now hidden
- MouseWheel operation in ComboBox no longer bubbles up in parent elements
- Frame directive now correctly resizes the attached element when element has a border
- Fixed the issue that caused drop mark to remain visible in TreeView component, after item is dropped
- Hovering is now disabled when row or item is dragged
- Fixed the issue that caused incorrect functionalty of loadData method when flat parameter is not provided
- Opening of context menu no longer causes window to scroll
- The Splitter size is now correctly calculated and updated when attached panels or parent elements resize
- decreaseValue and increaseValue methods in ListScroller are changed to to prevItem, nextItem
- When TreeView is in virtual mode, the item width is now correctly set
- Other minor bug fixes

v18.1.0
- Angular 5 compatible
- New components: Button, CheckBox, Dialog, ListScroller, Numeric, ProgressBar, RadioButton, Rating, Slider
- dragEnter and dragLeave events for most components
- Touch events support for basic functionalities: scrolling, selection, expand/collapse etc.
- Export to JSON for TreeView
- New samples that demonstrates functionality of all new components, and more

v17.4.0
- getTopItem method for TreeView, returns the first visible item in the current view
- getList method now can return the current list of all visible items, without children of collapsed items
- Option to change the scrollbar visibility on demand, separately for horizontal and vertical scroll
- canSelect field for items to prevent their selection
- enabled property for all components: appearance and functionality

v17.3.0
- Version number changes to correspond with official product release 	
- Filter service - provides a set of related functions for custom filter operations
- DropDown directive - represents a dropdown window
- IntegralUITemplateOutlet directive - replaces the standard ngTemplateOutlet that solves the problem with memory usage by removing the generated view automatically
- Virtualization is now available for TreeView
- Performance improvements for the TreeView
- Option to show/hide items on demand
- Drag and Drop of multiple items
- Keyboard navigation for all list components
- keyDown, keyPress, keyUp events for all list components
- All components now have a name property that uniquely identifies the component
- Option to change the distance between parent-child items
- Improve performance by suspending and resuming the component layout
- Option to quickly navigate to specific item by showing it in the current view
- Option to auto-expand the parent item during drag drop operations
- Filtering is now available for all list components
- New samples that demonstrates: filtering, keyboard navigation and virtualization

v1.1.0
- All components are now built on top of Angular 4 framework
- AOT (Ahead Of Time compilation) is now supported
- Sorting is now available
- New samples available in QuickStart application
- clearSelection method for all list components

v1.0.0
- First official version of the product
