$(document).ready(() => {

    const webCtx = $("#web-dev");
    const softCtx = $("#soft-dev");
    const mobileCtx = $("#mobile-apps");
    const hostingCtx = $("#hosting");

    new Chart(webCtx, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [
                {
                    data: [95, 5],
                    backgroundColor: ['#3498db', '#ecf0f1']
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            cutoutPercentage: 80
        }
    });

    new Chart(softCtx, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [
                {
                    data: [90, 10],
                    backgroundColor: ['#3498db', '#ecf0f1']
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            cutoutPercentage: 80
        }
    });

    new Chart(mobileCtx, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [
                {
                    data: [85, 15],
                    backgroundColor: ['#3498db', '#ecf0f1']
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            cutoutPercentage: 80
        }
    });

    new Chart(hostingCtx, {
        type: 'doughnut',
        data: {
            labels: [],
            datasets: [
                {
                    data: [75, 25],
                    backgroundColor: ['#3498db', '#ecf0f1']
                }
            ]
        },
        options: {
            tooltips: {
                enabled: false
            },
            cutoutPercentage: 80
        }
    });
});