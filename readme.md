#Material Design address book, v1.2
Built on Angular. Angular lends itself greatly to this address book and is the quickest and best way to implement a CRUD addressbook. With a bunch of built in functions and animations, it was a simple choice to go with it. In this implementation,  Firebase is added as a backend to add, delete, edit contacts in realtime!

###Create 
Make new contact cards by using the Floating Action Button (+) on the upper right. 
The form requires both fields to create a contact. 

###View/Edit/Delete
Clicking on the a contact will open the details view, giving access to the Delete and Edit features. 

User **images** are from [Placehold.it](http://placehold.it) and are dynamically rendering an image with a blue/white color and the users name. 
**uploading images have not been implemented yet**

###Search
The Searchbar can be accessed by using the magnifying glass in the top right. 
Searching currently works by finding any match within a contact to your search string, name or number.

###Animations
Basic animations have been added with traditional CSS and a few implementations of ngAnimate. More dynamic animations to come in the coming version. 

---

##Using the styles
###Mixins 
Some mixins that I'm using that are useful for repeating Material UI elements.

	@include size($size) //returns width & height 1:1

	@include clearfix // standard clearfix 

	@include headings // returns h1,h2,h3,h4,h5,h6

	@include default-border-bottom // returns a consistant 1px border

	@include svg-button($color, $size, $iconsize, $icon-top, $icon-left) // returns styling for a div with a nested SVG element. Styles as a Floating Action Button
	
	@include textButton // returns text styles for UI interactions without an icon, In a consistant color

###Notable Variables
The following variables are used throughout to keep consistant visuals

	$shadow1 // used for adding the same (level1 - flat) box-shadow to elements
	$baseline // used as a base spacer to evenly space elements on a consistant grid

##feature roadmap
-Add group lists to quickly sort through friends, business contacts, and everyone else. 

-Add user accounts.

-~~Add a search filter to quickly type in someones name to access their information~~



**~~images from UIFaces, http://uifaces.com/~~**