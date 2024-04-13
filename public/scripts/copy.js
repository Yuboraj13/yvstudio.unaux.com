function copyText() {
  /* Get the text area */
  var copyText = document.getElementById("CSS");

  /* Select the text area */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text area */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied to clipboard: ");
}
function redirect()
{
  var redirect = document.getElementById("go");
  redirect.isConnected();
  document.execCommand("redirect");
  redirect( "localhost:1313/website/index.html");
}