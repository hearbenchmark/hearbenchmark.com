/**
 * HEAR 2021
 * Results Datatable
 */


$(document).ready(function() {
    console.log("HEAR Results");

    // Create the table of contents
    let tasks = $('.leaderboard-task');
    let open_task_toc = $('#open-task-toc');
    let secret_task_toc = $('#secret-task-toc');

    tasks.each(function() {
        let task = $(this).find("h3");
        let item = $("<li><a href='#" + $(this)[0].id + "'>" +  task[0].innerHTML + "</a></li>")
        if (task.hasClass("open-task")) {
            open_task_toc.append(item);
        }
        else {
            secret_task_toc.append(item);
        }
    });

    let tables = $('.hear2021-leaderboard');
    tables.addClass("compact");

    // Initialize the table
    let t = tables.DataTable({
        "searching": false,
        "paging": false,
        "info": false,
        "order": [[2, 'desc' ]]
        // "scrollX": true,
        // "columnDefs": [
        //     {
        //         "searchable": false,
        //         "orderable": false,
        //         "targets": [0]
        //     },
        //     // Left align text in the submission cells
        //     {
        //         "className": "cell-left",
        //         "targets": [0]
        //     }
        //     ]
    });

    // Create the unsorted rank on the side
    // t.on( 'order.dt search.dt', function () {
    //     console.log("here");
    //     t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
    //         cell.innerHTML = i+1;
    //     } );
    // }).draw();
} );