#Material Design address book
This is an example of a simple CRUD address book. Build around Material design. As an experiment and challenge, no thirdpart frameworks or libraries were used. 

*Currently no JavaScript. motion and onclick action are simulated via CSS*


#This outlines a 3 view card for each contact. 

* The firt card (top left) is a static example of what each contact card looks like when viewing the contact list.

* The second card *currently on hover* Shows the second state of interaction, in this case it shows the contact details again, with the option to edit the information

* Here, the user is able to add basic information including twitter handle, which could be what populates the user image when one is not provided. Because really, who has their own images of their contacts?
	The Form fields have basic interaction 

###Mixins 
Some mixins that I'm using that are useful for repeating Material UI elements.

	@include size($size) //returns width & height 1:1

	@include clearfix // standard clearfix 

	@include headings // returns h1,h2,h3,h4,h5,h6

	@include default-border-bottom // returns a consistant 1px border

	@include svg-button($color, $size, $iconsize, $icon-top, $icon-left) // returns styling for a div with a nested SVG element. Styles as a Floating Action Button
	
	@include textButton // returns text styles for UI interactions without an icon, In a consistant color


##feature roadmap
Add group lists to quickly sort through friends, business contacts, and everyone else. 
Add a search filter to quickly type in someones name to access their information

Add javascript to have proper interactions and motion. 

**images from UIFaces, http://uifaces.com/**