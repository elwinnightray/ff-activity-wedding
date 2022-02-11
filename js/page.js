
$('.msg').each(function () {
    var $table = $(this);
    var itemsPerPage = 6;
    var currentPage = 0;
    var pages = Math.ceil($table.find(".publication-1").length / itemsPerPage);
    $table.bind('repaginate', function () {
    if (pages > 1) {
    var pager;
    if ($table.next().hasClass("pager"))
        pager = $table.next().empty();  else
    pager = $('<div class="pager" style="direction:ltr; " align="center"></div>');

    $('<span class="pg-goto"></span>').text('').bind('click', function () {
        currentPage = 0;
        $table.trigger('repaginate');
    }).appendTo(pager);

    $('<span class="pg-goto"></span>').bind('click', function () {
        if (currentPage > 0)
        currentPage--;
        $table.trigger('repaginate');
    }).appendTo(pager);

    var startPager = currentPage > 2 ? currentPage - 2 : 0;
    var endPager = startPager > 0 ? currentPage + 3 : 5;
    if (endPager > pages) {
        endPager = pages;
        startPager = pages - 5;    if (startPager < 0)
        startPager = 0;
    }

    for (var page = startPager; page < endPager; page++) {
        $('<span id="pg' + page + '" class="' + (page == currentPage ? 'pg-selected' : 'pg-normal') + '"></span>').text(page + 1).bind('click', {
            newPage: page
        }, function (event) {
            currentPage = event.data['newPage'];
            $table.trigger('repaginate');
        }).appendTo(pager);
    }

    $('<span class="pg-goto"></span>').bind('click', function () {
        if (currentPage < pages - 1)
        currentPage++;
        $table.trigger('repaginate');
    }).appendTo(pager);
    $('<span class="pg-goto"></span>').bind('click', function () {
        currentPage = pages - 1;
        $table.trigger('repaginate');
    }).appendTo(pager);

    if (!$table.next().hasClass("pager"))
        pager.insertAfter($table);
        //pager.insertBefore($table);

    } else {
        pager = $table.next().empty();
    }// end $table.bind('repaginate', function () { ...

    $table.find('.publication-1').hide().slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).show();
    });

    $table.trigger('repaginate');
});



