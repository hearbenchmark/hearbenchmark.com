/**
 * HEAR 2021
 * Leaderboard Datatable
 */

// https://www.sitepoint.com/jquery-output-array-random-order/
function shuffleArray(arr)
{
  for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
}

// Metrics will become the nested headers of the table
const tasks = [
    {
        name: "Google Speech Commands",
        table_id: 0,
        metrics: [
            "Top-1 Accuracy"
        ],
    },
    {
        name: "DCASE 2016 Office Sounds",
        table_id: 1,
        metrics: [
            "Event FMS",
            "Segment Error Rate"
        ],
    },
    {
        name: "NSynth Pitch",
        table_id: 2,
        metrics: [
            "Pitch Accuracy",
            "Chroma Accuracy"
        ]
    },
    {
        name: "NSynth Pitch - 50hrs",
        table_id: 2,
        metrics: [
            "Pitch Accuracy",
            "Chroma Accuracy"
        ]
    }
]

/**
 * List of scores for each entry:
 * ["", "Team Name", "Anonymous Code Version", "Metric 1", ...]
 * The first item for each entry is an empty string to hold space for the rank number.
 * The number of metrics should match the number of metrics from above.
 */
const scores = [
    ["", "Team A", "v1", "0.9", "0.9", "0.1", "0.9", "0.9"],
    ["", "Team B", "anonymous-code", "1.0", "0.8", "0.05", "0.2", "1.0"],
];

$(document).ready(function() {
    console.log("HEAR Leaderboard");

    // Shuffle the order of all the tasks
    let tasks = $('.leaderboard-task');
    tasks.detach();
    tasks = shuffleArray(tasks);
    $('#tasks-wrapper').append(tasks);

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