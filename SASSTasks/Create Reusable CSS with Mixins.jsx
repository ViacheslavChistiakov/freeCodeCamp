/*DESCRIPTION⚡
Write a mixin for border-radius and give it a $radius parameter. It should use all the vendor prefixes from the example. Then use the border-radius mixin to give the #awesome element a border radius of 15px.


*/

/*SOLUTION🔥 */

<>
<style type='text/scss'>

@mixin border-radius($radius)
  -webkit-border-radius:  $radius ;
  -moz-border-radius:  $radius ;
  -ms-border-radius:  $radius ;
  -border-radius:  $radius ;


div 
  @include border-radius(15px);

</style>

<div id="awesome"></div>
</>