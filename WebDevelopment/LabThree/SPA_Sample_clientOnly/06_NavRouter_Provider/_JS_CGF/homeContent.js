function homeContent() {

    // ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
    // 
    // NetBeans menu option "Source - Format" will not work with the text inside of a 
    // String, so you have to do this indentation manually with the editor. 

    var content = `
        <style> /* no big gap between h4 and p */
            h4 + p {margin-top:-1rem;}
        </style>
        
        <h3>Home</h3>
        <p>
            This page explains how to use the more sophisticated features of the NavRouter component. 
            Advanced NavRouter features include:
        </p>
    
        <ul>
            <li>
                drop down menus,
                <ul>
                    <li>
                      See how "Account" and "Search" drop down menus are specified in MyNavList
                      in the HTML page (it's pretty self-explanatory).
                    </li>
                </ul>
            </li>
            <li>
                "Normal links" reference a CGF (content generating function): 
                <ul>
                    <li>
                    Make up a unique linkURL property and set the action attribute to be the name 
                    of the content generating function. The NavRouter will invoke that function 
                    whenever the user clicks on the associated link.
                    </li>
                </ul>
            </li>
            <li>
                links that open up pages (e.g., HTML pages or PDFs) in a new tab, 
                <ul>
                    <li>
                     See the "Open PDF" link under the "Search" drop down menu.
                     All you have to do is provide an action attribute that is a character string
                     link (relative or fully qualified) -- instead of providing the name of a JS function. 
                    </li>
                </ul>
            </li>

            <li>
                use of "local storage" (the new cookies) to "remember" the last nav link 
                you clicked and keeps you looking at that content when you refresh the page.
                <ul>
                    <li>
                    The consumer does not have to do anything special to get this. I'm just mentioning 
                    that the NavRouter has the nice behavior that if you refresh the page, the "clicked 
                    link" will be whatever the last clicked link was. Otherwise (without using local storage) 
                    say you were testing a particular link, everytime you'd refresh, you'd have to reclick 
                    the link you were testing because by default it would always render the home content. 
                    </li>
                </ul>
            </li>
        </ul>
    
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}