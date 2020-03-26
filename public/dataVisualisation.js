$(document).ready(() => {
    const SERVER = "http://localhost:3000/api/plot";
    $.get(SERVER, data => {
        if(data !== null) {
            const key = data.key;
            const value = data.value;
            config.data.labels.push(key);
            let count = 0;
            value.forEach(item => {
                count++;
                config.data.datasets[0].data.push({x:count, y:item});
            });
        }
        const context = document.getElementById('canvas').getContext('2d');
        const chart = new Chart(context, config);
    });
});
