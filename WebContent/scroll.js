var stickymenu = document.getElementById("sticky")
var stickymenuoffset = stickymenu.offsetTop
var scrolltimer

window.addEventListener("scroll", function(e)
{
	requestAnimationFrame(function()
	{
		if (window.pageYOffset > stickymenuoffset)
		{
			stickymenu.classList.add('sticky')
		}
		else
			stickymenu.classList.remove('sticky')
	})
})