jQuery(document).ready(function()
{
	var navOffset = jQuery("nav").offset().top;

	jQuery(window).scroll(function()
	{
		var scrollPos = jQuery(window.scrollTop());

		jQuery("nav").wrap('<div class="nav-placeholder"></div>');
		jQuery(".nav-placeholder").height(jQuery("nav").outerHeight);

		if (scrollPos >= navOffset)
		{
			jQuery("nav").addClass("sticky");
		}
		else
		{
			jQuery("nav").removeClass("sticky");
		}
	});

});