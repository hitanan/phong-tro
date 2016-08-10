$(document).ready(function() {
	$(document).on('hover', '.popup', function() {
		if ($('.popup_content #office').val() === null) {
			$('.popup_content #office').val('2').change();
			$(".popup_content #projectId").val('15E156_DN').change();;
		}
	})
});