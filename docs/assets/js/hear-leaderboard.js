/**
 * HEAR 2021
 * Leaderboard Datatable
 */

// Metrics will become the nested headers of the table
const tasks = [
    {
        name: "Google Speech Commands",
        metrics: [
            "Top-1 Accuracy"
        ],
    },
    {
        name: "DCASE 2016 Office Sounds",
        metrics: [
            "Event FMS",
            "Segment Error Rate"
        ],
    },
    {
        name: "NSynth Pitch",
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
    let table = $('#hear2021-leaderboard');

    let header = $('<thead></thead>');

    // Upper header -- contains all the task names
    let topHeader = $('<tr></tr>');
    topHeader.append('<th rowspan="2" class="cell-border-right">Rank</th>');
    topHeader.append('<th colspan="2">Submission</th>');
    for (const task of tasks) {
        topHeader.append(`<th class="cell-border-left" colspan="${task.metrics.length}">${task.name}</th>`);
    }

    // Lower header -- contains all the tasks
    let lowerHeader = $('<tr></tr>');
    lowerHeader.append('<th>Team Name</th>');
    lowerHeader.append('<th>Code</th>');

    for (const task of tasks) {
        for (let i = 0; i < task.metrics.length; i++) {
            let thClass = i === 0 ? "cell-border-left" : "";
            lowerHeader.append(`<th class="${thClass}">${task.metrics[i]}</th>`);
        }
    }

    // Add the headers to the DOM
    header.append(topHeader);
    header.append(lowerHeader);
    table.append(header);

    // Initialize the table
    let t = table.DataTable({
        "searching": false,
        "paging": false,
        "scrollX": true,
        data: scores,
        "columnDefs": [
            {
                "searchable": false,
                "orderable": false,
                "targets": [0]
            },
            // Left align text in the submission cells
            {
                "className": "cell-left",
                "targets": [1,2]
            }
            ],
        "order": [[3, 'asc' ]]
    });

    // Create the unsorted rank on the side
    t.on( 'order.dt search.dt', function () {
        console.log("here");
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    }).draw();
} );