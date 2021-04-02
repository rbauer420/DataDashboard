# DataDashboard 

***About Website***
This website is a Data Dashboard that visualizes data from the Federal Bureau of Investigation's Crime Data Explorer. The website also includes a contact form that posts user entered data to an API CSV file. 

***Features List***
This project includes the following features:

(1) Create a form and save the values (on click of Submit button) to an external file 
You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted (note data is being saved to an API)

(2) Create an array, dictionary, or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

(3) Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

(4) Visualize data in a graph, chart, or other visual representation of data

(5) Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value

(6) Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)

TO DO (7) Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app



***Header***

Hovering the mouse over each of the navigation links with change the color of the text from whitesmoke to clue and the mouse will turn into a pointer.

As the screen size gets smaller, the navigation links begin to wrap and then at the 500px max breaking point, the navigation links will collapse into a hamburger menu. The navigation links will reappear once the user selects the hamburger menu icon. At the min width of 768px and 700px (orientation: landscape), the navigation links will be in a single column.  

*Note, these same features are repeated across all pages


***Footer***

The footer contains copyright information and on the main page and the source (hyperlink) of the data included in the dashboard.


***Homepage***

See files: index.html, dataDashboard.js and dataDashboard.css

This page contains all the data used in the data dashboard displayed in multiple ways.  

In the first column (the "Variables" column), the users can select a variable from the dropdown button and below the dropdown menu, the page will display the total count for that variable (e.g. how many victims identified as female) that has been pulled from an array based on the users selection.

In the second column there are three graphs (horizontal bar, line, and a doughnut graph).  The labels on the x-axis will be displayed on the horizontal bar and the line graph.  When the user hovers over the bar on the first graph, the circle on the line graph or any section/slice of the doughnut graph a popup will display with the data label and the total. The outline of the bar, the circle on the line graph or the section/slice of the doughnut graph will change color from dark gray to gold. 

As the screen size gets smaller, both columns will reduce in size and then collapse from two columns to one column. The graphs will be responsive to the size of the screen to display the entire graph. 

When the window loads data from an external CSV file (KY population) is being fetched from an API and displayed automatically when the page loads below the doughnut graph as well as in the console.

Link to API: https://api.apispreadsheets.com/data/9745/
 

***Contact Page***

See files: contact.html, contactUs.js and dataDashboard.css

This page contains the contact form for the site and includes regex validation. Error messages are pulled from an array based on which entry fails to pass the programmed regex.

If the user enters a name with numbers, a red, error message will display under the header saying, "Please enter your first and last name using only letters a-z".

If the user enters a subject with numbers, a red, error message will display under the header saying, "Your subject can only contain letters a-z". 

If the user enters an invalid phone number, a red, error message will display under the header saying, "You must enter a telephone number in the format of (555) 555-5555".

If the user enters an invalid email address, error message will display under the header saying, "You must enter a valid email address". 

If the user enters a message less than ten characters, a red, error message will display under the header saying, "Please Enter More Than 10 Characters in Your Message". 

If the user enters everything according to the validation, the form will submit and an alert will post saying, ""Your contact form was submitted successfully (name user entered)! We will respond as soon as possible!"

The information entered in the contact form will be posted to an API CSV file if the user inputs data that meets the form requirements.  If the posting is successful the user will see the alert, ""Your Contact Form Data Was Saved!"  If the post was not successful, the site will alert the user, "Huston, We Have A Problem! Your Contact Form Data Was NOT Saved!"

Link to API: https://api.apispreadsheets.com/data/9192/


The next function on this page is a Per Capita Calculator. The user enters an integer for total times a crime was reported (whole number) and total times a crime was reported (whole number) and then toggles the "Calculate Per Capita" button. 

The JS function will complete the following math function ((totalCrime/totalPop)*100000) and provide the user with a per capita value.  

If the user enters something that does not match the regex of a whole number for either input, an error message will appear that says, "Please enter a whole number." 