/******************* DOM Diagram *******************/

/*                                 
                                                 Window
                                                    |
                                                    |
                                                   \|/
                                                 Documents
                                                    |
                                                   \|/
                                                   HTML
                                                    |
                            ---------------------------------------------------
                            |                                                  |
                            |                                                  |
                           \|/                                                \|/
                           HEAD                                               BODY
                            |                                                  |
                ------------------------                                      \|/
                |                       |                                     div-------> attribute
               \|/                     \|/                                     |
               title                   meta                ----------------------------------------                   
                |                       |                  |                                       |
               \|/                     \|/                 |                                       |
            text node                attribute             |                                       |
                                                          \|/                                     \|/
                                             attribute<---h1                                       p
                                                           |                                       |
                                                          \|/                                     \|/
                                                        text node                              text node
*/

/*  
* Document holds the all elemnet and of structure
* we can access any element by it's id or class -> document.getElementById('id_name')
* we can manipulate accessed element -> document.getElementById('id_name').innerHTML = "<h1>Chai or JS</h1>"
*/