document.addEventListener("DOMContentLoaded", function() {


data_M = [{"aniotrim_desaparicion":"2020-T1","age":"Mujer (0 a 5 años)","population":3},{"aniotrim_desaparicion":"2020-T1","age":"Mujer (6 a 11 años)","population":6},{"aniotrim_desaparicion":"2020-T1","age":"Mujer (12 a 17 años)","population":68},{"aniotrim_desaparicion":"2020-T2","age":"Mujer (0 a 5 años)","population":6},{"aniotrim_desaparicion":"2020-T2","age":"Mujer (6 a 11 años)","population":9},{"aniotrim_desaparicion":"2020-T2","age":"Mujer (12 a 17 años)","population":58},{"aniotrim_desaparicion":"2020-T3","age":"Mujer (0 a 5 años)","population":4},{"aniotrim_desaparicion":"2020-T3","age":"Mujer (6 a 11 años)","population":7},{"aniotrim_desaparicion":"2020-T3","age":"Mujer (12 a 17 años)","population":59},{"aniotrim_desaparicion":"2020-T4","age":"Mujer (0 a 5 años)","population":7},{"aniotrim_desaparicion":"2020-T4","age":"Mujer (6 a 11 años)","population":5},{"aniotrim_desaparicion":"2020-T4","age":"Mujer (12 a 17 años)","population":69},{"aniotrim_desaparicion":"2021-T1","age":"Mujer (0 a 5 años)","population":18},{"aniotrim_desaparicion":"2021-T1","age":"Mujer (6 a 11 años)","population":7},{"aniotrim_desaparicion":"2021-T1","age":"Mujer (12 a 17 años)","population":79},{"aniotrim_desaparicion":"2021-T2","age":"Mujer (0 a 5 años)","population":18},{"aniotrim_desaparicion":"2021-T2","age":"Mujer (6 a 11 años)","population":5},{"aniotrim_desaparicion":"2021-T2","age":"Mujer (12 a 17 años)","population":108},{"aniotrim_desaparicion":"2021-T3","age":"Mujer (0 a 5 años)","population":16},{"aniotrim_desaparicion":"2021-T3","age":"Mujer (6 a 11 años)","population":9},{"aniotrim_desaparicion":"2021-T3","age":"Mujer (12 a 17 años)","population":105},{"aniotrim_desaparicion":"2021-T4","age":"Mujer (0 a 5 años)","population":5},{"aniotrim_desaparicion":"2021-T4","age":"Mujer (6 a 11 años)","population":6},{"aniotrim_desaparicion":"2021-T4","age":"Mujer (12 a 17 años)","population":71},{"aniotrim_desaparicion":"2022-T1","age":"Mujer (0 a 5 años)","population":3},{"aniotrim_desaparicion":"2022-T1","age":"Mujer (6 a 11 años)","population":5},{"aniotrim_desaparicion":"2022-T1","age":"Mujer (12 a 17 años)","population":104},{"aniotrim_desaparicion":"2022-T2","age":"Mujer (0 a 5 años)","population":12},{"aniotrim_desaparicion":"2022-T2","age":"Mujer (6 a 11 años)","population":4},{"aniotrim_desaparicion":"2022-T2","age":"Mujer (12 a 17 años)","population":81},{"aniotrim_desaparicion":"2022-T3","age":"Mujer (0 a 5 años)","population":7},{"aniotrim_desaparicion":"2022-T3","age":"Mujer (6 a 11 años)","population":7},{"aniotrim_desaparicion":"2022-T3","age":"Mujer (12 a 17 años)","population":82},{"aniotrim_desaparicion":"2022-T4","age":"Mujer (0 a 5 años)","population":8},{"aniotrim_desaparicion":"2022-T4","age":"Mujer (6 a 11 años)","population":7},{"aniotrim_desaparicion":"2022-T4","age":"Mujer (12 a 17 años)","population":78},{"aniotrim_desaparicion":"2023-T1","age":"Mujer (0 a 5 años)","population":7},{"aniotrim_desaparicion":"2023-T1","age":"Mujer (6 a 11 años)","population":7},{"aniotrim_desaparicion":"2023-T1","age":"Mujer (12 a 17 años)","population":95},{"aniotrim_desaparicion":"2023-T2","age":"Mujer (0 a 5 años)","population":13},{"aniotrim_desaparicion":"2023-T2","age":"Mujer (6 a 11 años)","population":7},{"aniotrim_desaparicion":"2023-T2","age":"Mujer (12 a 17 años)","population":98},{"aniotrim_desaparicion":"2023-T3","age":"Mujer (0 a 5 años)","population":13},{"aniotrim_desaparicion":"2023-T3","age":"Mujer (6 a 11 años)","population":15},{"aniotrim_desaparicion":"2023-T3","age":"Mujer (12 a 17 años)","population":57},{"aniotrim_desaparicion":"2023-T4","age":"Mujer (0 a 5 años)","population":1},{"aniotrim_desaparicion":"2023-T4","age":"Mujer (6 a 11 años)","population":0},{"aniotrim_desaparicion":"2023-T4","age":"Mujer (12 a 17 años)","population":3}];

data_H = [{"aniotrim_desaparicion":"2020-T1","age":"Hombre (0 a 5 años)","population":6},{"aniotrim_desaparicion":"2020-T1","age":"Hombre (6 a 11 años)","population":5},{"aniotrim_desaparicion":"2020-T1","age":"Hombre (12 a 17 años)","population":5},{"aniotrim_desaparicion":"2020-T2","age":"Hombre (0 a 5 años)","population":5},{"aniotrim_desaparicion":"2020-T2","age":"Hombre (6 a 11 años)","population":0},{"aniotrim_desaparicion":"2020-T2","age":"Hombre (12 a 17 años)","population":6},{"aniotrim_desaparicion":"2020-T3","age":"Hombre (0 a 5 años)","population":5},{"aniotrim_desaparicion":"2020-T3","age":"Hombre (6 a 11 años)","population":4},{"aniotrim_desaparicion":"2020-T3","age":"Hombre (12 a 17 años)","population":5},{"aniotrim_desaparicion":"2020-T4","age":"Hombre (0 a 5 años)","population":5},{"aniotrim_desaparicion":"2020-T4","age":"Hombre (6 a 11 años)","population":4},{"aniotrim_desaparicion":"2020-T4","age":"Hombre (12 a 17 años)","population":18},{"aniotrim_desaparicion":"2021-T1","age":"Hombre (0 a 5 años)","population":12},{"aniotrim_desaparicion":"2021-T1","age":"Hombre (6 a 11 años)","population":13},{"aniotrim_desaparicion":"2021-T1","age":"Hombre (12 a 17 años)","population":26},{"aniotrim_desaparicion":"2021-T2","age":"Hombre (0 a 5 años)","population":14},{"aniotrim_desaparicion":"2021-T2","age":"Hombre (6 a 11 años)","population":11},{"aniotrim_desaparicion":"2021-T2","age":"Hombre (12 a 17 años)","population":22},{"aniotrim_desaparicion":"2021-T3","age":"Hombre (0 a 5 años)","population":15},{"aniotrim_desaparicion":"2021-T3","age":"Hombre (6 a 11 años)","population":5},{"aniotrim_desaparicion":"2021-T3","age":"Hombre (12 a 17 años)","population":25},{"aniotrim_desaparicion":"2021-T4","age":"Hombre (0 a 5 años)","population":7},{"aniotrim_desaparicion":"2021-T4","age":"Hombre (6 a 11 años)","population":4},{"aniotrim_desaparicion":"2021-T4","age":"Hombre (12 a 17 años)","population":18},{"aniotrim_desaparicion":"2022-T1","age":"Hombre (0 a 5 años)","population":9},{"aniotrim_desaparicion":"2022-T1","age":"Hombre (6 a 11 años)","population":5},{"aniotrim_desaparicion":"2022-T1","age":"Hombre (12 a 17 años)","population":19},{"aniotrim_desaparicion":"2022-T2","age":"Hombre (0 a 5 años)","population":10},{"aniotrim_desaparicion":"2022-T2","age":"Hombre (6 a 11 años)","population":6},{"aniotrim_desaparicion":"2022-T2","age":"Hombre (12 a 17 años)","population":23},{"aniotrim_desaparicion":"2022-T3","age":"Hombre (0 a 5 años)","population":7},{"aniotrim_desaparicion":"2022-T3","age":"Hombre (6 a 11 años)","population":7},{"aniotrim_desaparicion":"2022-T3","age":"Hombre (12 a 17 años)","population":21},{"aniotrim_desaparicion":"2022-T4","age":"Hombre (0 a 5 años)","population":6},{"aniotrim_desaparicion":"2022-T4","age":"Hombre (6 a 11 años)","population":2},{"aniotrim_desaparicion":"2022-T4","age":"Hombre (12 a 17 años)","population":21},{"aniotrim_desaparicion":"2023-T1","age":"Hombre (0 a 5 años)","population":17},{"aniotrim_desaparicion":"2023-T1","age":"Hombre (6 a 11 años)","population":4},{"aniotrim_desaparicion":"2023-T1","age":"Hombre (12 a 17 años)","population":26},{"aniotrim_desaparicion":"2023-T2","age":"Hombre (0 a 5 años)","population":14},{"aniotrim_desaparicion":"2023-T2","age":"Hombre (6 a 11 años)","population":2},{"aniotrim_desaparicion":"2023-T2","age":"Hombre (12 a 17 años)","population":21},{"aniotrim_desaparicion":"2023-T3","age":"Hombre (0 a 5 años)","population":6},{"aniotrim_desaparicion":"2023-T3","age":"Hombre (6 a 11 años)","population":9},{"aniotrim_desaparicion":"2023-T3","age":"Hombre (12 a 17 años)","population":21},{"aniotrim_desaparicion":"2023-T4","age":"Hombre (0 a 5 años)","population":1},{"aniotrim_desaparicion":"2023-T4","age":"Hombre (6 a 11 años)","population":0},{"aniotrim_desaparicion":"2023-T4","age":"Hombre (12 a 17 años)","population":0}];

function chart_M(data) {
    const width = 928;
    const height = 1500;
    const innerRadius = 20;
    const outerRadius = 120;

    // Stack the data into series by age
    const series = d3.stack()
        .keys(d3.union(data.map(d => d.age))) // distinct series keys, in input order
        .value(([, D], key) => D.get(key).population) // get value for each series key and stack
        (d3.index(data, d => d.aniotrim_desaparicion, d => d.age)); // group by stack then series key
            
    // An angular x-scale
    const x = d3.scaleBand()
        .domain(data.map(d => d.aniotrim_desaparicion)) // Ordena el dominio de forma ascendente
        .range([0, 2 * Math.PI])
        .align(0);

    // A radial y-scale maintains area proportionality of radial bars
    const y = d3.scaleRadial()
        .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
        .range([innerRadius, outerRadius]);

        
    const arc = d3.arc()
        .innerRadius(d => y(d[0]))
        .outerRadius(d => y(d[1]))
        .startAngle(d => x(d.data[0]))
        .endAngle(d => x(d.data[0]) + x.bandwidth())
        .padAngle(1.5 / innerRadius)
        .padRadius(innerRadius)
        .cornerRadius(5); // Ajusta el radio de las esquinas para dar un aspecto más grueso y suave
    

    // Define los colores de manera explícita
    const color = ['rgba(235, 172, 192, 0.7)', 'rgba(199, 105, 159, 0.7)', 'rgba(180, 167, 214, 0.7)'];

    // A function to format the value in the tooltip
    const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en")

    const svg = d3.create("svg")
    .attr("width", 2 * Math.PI * outerRadius * 1) // Multiplica el valor de outerRadius por un factor adecuado
    .attr("height", height * 1) // Aumenta el alto del SVG
    .attr("viewBox", [-300, -60, width, height])
    .attr("style", "width: 100%; height: auto; font: bold 9px sans-serif;");
                    
    // A group for each series, and a rect for each element in the series
    svg.append("g")
        .selectAll()
        .data(series)
        .join("g")
        .attr("fill", (_, i) => color[i])
        .selectAll("path")
        .data(D => D.map(d => (d.key = D.key, d)))
        .join("path")
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data[0]} ${d.key}\n${formatValue(d.data[1].get(d.key).population)}`);

    // x axis
    svg.append("g")
        .attr("text-anchor", "middle")
        .selectAll()
        .data(x.domain())
        .join("g")
        .attr("transform", d => {
            const angle = (x(d) + x.bandwidth() / 2) * (180 / Math.PI) - 90; // Calcula el ángulo basado en la posición en el dominio x
            const radius = innerRadius + 100; // Ajusta el radio para que las etiquetas estén más cerca del centro
            return `rotate(${angle})translate(${radius},0)`; // Aplica la rotación y la traslación
        })
        .call(g => g.append("line")
            .attr("x2", -5)
            .attr("stroke", "#000"))
        .call(g => g.append("text")
            .attr("dy", "0.10em")
            .attr("fill", "white")
            .text(d => d));

    // y axis
    svg.append("g")
        .attr("text-anchor", "end")
        .call(g => g.append("text")
            .attr("x", -6)
            .attr("y", d => -y(y.ticks(10).pop()))
            .attr("dy", "-1em")
            .attr("fill", "none")
            .text("Population"))
        .call(g => g.selectAll("g")
            .data(y.ticks(10).slice(1))
            .join("g")
            .attr("fill", "none")
            .call(g => g.append("circle")
                .attr("stroke", "#fff")
                .attr("stroke-opacity", 0.5)
                .attr("r", y))
            .call(g => g.append("text")
                .attr("x", -6)
                .attr("y", d => -y(d))
                .attr("dy", "0.5em")
                // .attr("stroke", "#fff")
                .attr("stroke-width", 5)
                .text(y.tickFormat(10, "s"))
                .filter(d => d % 10 !== 0)
                .clone(true)
                .attr("fill", "#000")
                .attr("stroke", "none")));

    // color legend
    const legendHeight = series.length * 70; // Calcula la altura total de la leyenda
    svg.append("g")
        .selectAll()
        .data(series.map(d => d.key)) // Usamos los nombres de las series en lugar de color
        .join("g")
        .attr("transform", (d, i, nodes) => `translate(-200,${(nodes.length / 2 - i - 1) * 15 - legendHeight / 2})`) // Ajusta la posición vertical y horizontal
        .call(g => g.append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", (_, i) => color[i]))  // Usamos el color correspondiente al índice
        .call(g => g.append("text")
            .attr("x", 15)
            .attr("y", 0)
            .attr("dy", "8px")
            .attr("fill", "white")
            .attr("font-size", "8px")
            .text(d => d));


    // Imprime un mensaje para verificar si la función se ejecuta correctamente
    console.log("Función chart ejecutada correctamente");
    return svg.node();
}

function chart_H(data) {
    const width = 928;
    const height = 1500;
    const innerRadius = 20;
    const outerRadius = 120;

    // Stack the data into series by age
    const series = d3.stack()
        .keys(d3.union(data.map(d => d.age))) // distinct series keys, in input order
        .value(([, D], key) => D.get(key).population) // get value for each series key and stack
        (d3.index(data, d => d.aniotrim_desaparicion, d => d.age)); // group by stack then series key
            
    // An angular x-scale
    const x = d3.scaleBand()
        .domain(data.map(d => d.aniotrim_desaparicion)) // Ordena el dominio de forma ascendente
        .range([0, 2 * Math.PI])
        .align(0);

    // A radial y-scale maintains area proportionality of radial bars
    const y = d3.scaleRadial()
        .domain([0, 130]) // Establece el dominio de 0 a 50, que es el valor máximo deseado
        .range([innerRadius, outerRadius]); // Mantiene el mismo rango de radio interior y exterior

        
    const arc = d3.arc()
        .innerRadius(d => y(d[0]))
        .outerRadius(d => y(d[1]))
        .startAngle(d => x(d.data[0]))
        .endAngle(d => x(d.data[0]) + x.bandwidth())
        .padAngle(1.5 / innerRadius)
        .padRadius(innerRadius)
        .cornerRadius(5); // Ajusta el radio de las esquinas para dar un aspecto más grueso y suave
    

    // Define los colores de manera explícita
    const color = ['rgba(178, 255, 239, 0.7)', 'rgba(158, 163, 255, 0.7)', 'rgba(60, 118, 158, 0.7)'];

    // A function to format the value in the tooltip
    const formatValue = x => isNaN(x) ? "N/A" : x.toLocaleString("en")

    const svg = d3.create("svg")
    .attr("width", 2 * Math.PI * outerRadius * 1) // Multiplica el valor de outerRadius por un factor adecuado
    .attr("height", height * 1) // Aumenta el alto del SVG
    .attr("viewBox", [-650, -60, width, height])
    .attr("style", "width: 100%; height: auto; font: bold 9px sans-serif;");
                    
    // A group for each series, and a rect for each element in the series
    svg.append("g")
        .selectAll()
        .data(series)
        .join("g")
        .attr("fill", (_, i) => color[i])
        .selectAll("path")
        .data(D => D.map(d => (d.key = D.key, d)))
        .join("path")
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data[0]} ${d.key}\n${formatValue(d.data[1].get(d.key).population)}`);

    // x axis
    svg.append("g")
        .attr("text-anchor", "middle")
        .selectAll()
        .data(x.domain())
        .join("g")
        .attr("transform", d => {
            const angle = (x(d) + x.bandwidth() / 2) * (180 / Math.PI) - 90; // Calcula el ángulo basado en la posición en el dominio x
            const radius = innerRadius + 100; // Ajusta el radio para que las etiquetas estén más cerca del centro
            return `rotate(${angle})translate(${radius},0)`; // Aplica la rotación y la traslación
        })
        .call(g => g.append("line")
            .attr("x2", -5)
            .attr("stroke", "#000"))
        .call(g => g.append("text")
            .attr("dy", "0.10em")
            .attr("fill", "white")
            .text(d => d));

    // y axis
    svg.append("g")
        .attr("text-anchor", "end")
        .call(g => g.append("text")
            .attr("x", -6)
            .attr("y", d => -y(y.ticks(10).pop()))
            .attr("dy", "-1em")
            .attr("fill", "none")
            .text("Population"))
        .call(g => g.selectAll("g")
            .data(y.ticks(10).slice(1))
            .join("g")
            .attr("fill", "none")
            .call(g => g.append("circle")
                .attr("stroke", "#fff")
                .attr("stroke-opacity", 0.5)
                .attr("r", y))
            .call(g => g.append("text")
                .attr("x", -6)
                .attr("y", d => -y(d))
                .attr("dy", "0.5em")
                // .attr("stroke", "#fff")
                .attr("stroke-width", 5)
                .text(y.tickFormat(10, "s"))
                .filter(d => d % 10 !== 0)
                .clone(true)
                .attr("fill", "#000")
                .attr("stroke", "none")));

    // color legend
    const legendHeight = series.length * 70; // Calcula la altura total de la leyenda
    svg.append("g")
        .selectAll()
        .data(series.map(d => d.key)) // Usamos los nombres de las series en lugar de color
        .join("g")
        .attr("transform", (d, i, nodes) => `translate(-200,${(nodes.length / 2 - i - 1) * 15 - legendHeight / 2})`) // Ajusta la posición vertical y horizontal
        .call(g => g.append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", (_, i) => color[i]))  // Usamos el color correspondiente al índice
        .call(g => g.append("text")
            .attr("x", 15)
            .attr("y", 0)
            .attr("dy", "8px")
            .attr("fill", "white")
            .attr("font-size", "8px")
            .text(d => d));


    // Imprime un mensaje para verificar si la función se ejecuta correctamente
    console.log("Función chart ejecutada correctamente");
    return svg.node();
}

const chartElement1 = chart_M(data_M);
document.getElementById('chart1').appendChild(chartElement1);

const chartElement2 = chart_H(data_H);
document.getElementById('chart2').appendChild(chartElement2);

});