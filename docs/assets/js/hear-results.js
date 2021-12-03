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
        let task = $(this).find("h2");
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
        "order": [[2, 'desc' ]],
        "columnDefs": [
            {
                "targets": 0,
                "className": "dt-left"
            },
            {
                "targets": 1,
                "className": "dt-left"
            }
        ]
    });
} );