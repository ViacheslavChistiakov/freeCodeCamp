/*DESCRIPTION⚡
Use @while to create a series of classes with different font-sizes.

There should be 5 different classes from text-1 to text-5. Then set font-size to 15px multiplied by the current index number. Make sure to avoid an infinite loop!

/*SOLUTION🔥 */

{/* <>
<style type='text/scss'>
$i: 1;
@while $i < 6 {
  .text-#{$i} { font-size: 15px/ + 1 * $i }
  $i: $i + 1;
}


</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

</> */}