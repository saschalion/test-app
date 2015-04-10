$(function() {
    $('.js-btn').click(function(e) {
        $.ajax({
            url: 'test.html',
            success: function(data) {
                if ( data.search('out') !== -1 ) {
                    window.location = '/text2.html';
                }
            }
        });

        e.preventDefault();
    });
});