/*DESCRIPTION⚡
Create a variable $text-color and set it to red. Then change the value of the color property for the .blog-post and h2 to the $text-color variable.
*/

/*SOLUTION🔥 */

function Return () {
  return (
    <><style type='text/scss'>
      $text-color: red;


      .header{text - align}: center;
  
      .blog-post, h2 {color}: $text-color;
  
    </style><h1 class="header">Learn Sass</h1><div class="blog-post">
        <h2>Some random title</h2>
        <p>This is a paragraph with some random text in it</p>
      </div><div class="blog-post">
        <h2>Header #2</h2>
        <p>Here is some more random text.</p>
      </div><div class="blog-post">
        <h2>Here is another header</h2>
        <p>Even more random text within a paragraph</p>
      </div></>
  )
}