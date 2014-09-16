jQuery(document).ready(function(){
		jQuery('#dataoverlay div').hide(); // Hide all divs
		jQuery('#dataoverlay div:first').show(); // Show the first div
		jQuery('#dataoverlay div:first div').show();
		jQuery('#dataoverlay-tabs li:first').addClass('active'); // Set the class of the first link to active
		jQuery('#dataoverlay-tabs li a').click(function(){ //When any link is clicked
		jQuery('#dataoverlay-tabs li').removeClass('active'); // Remove active class from all links
		jQuery(this).parent().addClass('active'); //Set clicked link class to active
		var currentTab = jQuery(this).attr('href'); // Set variable currentTab to value of href attribute of clicked link
		jQuery('#dataoverlay div').hide(); // Hide all divs
		jQuery('#dataoverlay div div').show();
		jQuery(currentTab).show(); // Show div with id equal to variable currentTab
		return false;
		});
		});