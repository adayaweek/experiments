jQuery(document).ready(function(){

	  if ( window.location.hash ) {
      //clicks on element specified by hash
      
      document.getElementById(window.location.hash.substring(1)).click();
  }

});