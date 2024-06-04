document.addEventListener("DOMContentLoaded", function() {


const mestizoValue = 10;
const indigenaValue = 4;
const total = mestizoValue + indigenaValue;

const mestizoPercentage = (mestizoValue / total) * 100;
const indigenaPercentage = (indigenaValue / total) * 100;

const pie2Data = [
  { name: "Mestizo", value: mestizoPercentage },
  { name: "Indígena", value: indigenaPercentage }
];

const width = window.innerWidth; // Ancho de la ventana del navegador
const height = window.innerHeight * 0.9; // Reducir un poco la altura para dejar espacio para el texto
const radius = Math.min(width, height) / 4; // Radio del pie chart

const color = d3.scaleOrdinal()
  .domain(pie2Data.map(d => d.name))
  .range(['rgba(178, 255, 239, 0.8)', 'rgba(199, 105, 159, 0.8)']); // Colores pie chart

const pie2Arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius * 0.8);

const svg = d3.select("#visualization")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const pieChartGroup = svg.append("g")
  .attr("transform", "translate(" + width / 3 + "," + height / 2.04 + ")"); // Posición del pie chart
  

const arcs2 = d3.pie()
  .padAngle(0.005)
  .sort(null)
  .value(d => d.value)(pie2Data);

const pie = pieChartGroup.selectAll("path")
  .data(arcs2)
  .join("path")
  .attr("fill", d => color(d.data.name))
  .attr("d", pie2Arc);

// Agregar etiquetas de porcentaje y nombre al pie chart
pieChartGroup.selectAll("text")
  .data(arcs2)
  .join("text")
  .attr("transform", d => `translate(${pie2Arc.centroid(d)})`)
  .attr("dy", "0.35em")
  .attr("text-anchor", "middle")
  .attr("font-size", "14px")
  .attr("font-weight", "bold")
  .attr("fill", "white")
  .text(d => `${d.data.name} (${d.data.value.toFixed(1)}%)`);

// Título del pie chart
// svg.append("text")
//   .attr("x", width / 5.5 + 230)
//   .attr("y", height / 10 + 100)
//   .attr("text-anchor", "middle")
//   .attr("font-size", "20px") // Increase font size
//   .attr("font-weight", "bold")
//   .attr("fill", "white") // Add bold style
//   .text("Desaparecidos por etnia ");

// Expliación Desaparecidos en Chiapas por Etnia
// const pieTextBox = svg.append("foreignObject")
// .attr("x", width / 5.5 - 200)
// .attr("y", height / 1.5 + radius -350) // Posición debajo del pie chart
// .attr("width", 250)
// .attr("height", 300);

// pieTextBox.append("xhtml:div")
// .html("Según la <a href='https://catedraunescodh.unam.mx/catedra/ocpi/pj/ie/docs/chiap_ie.pdf' target='_blank'>Cátedra UNESCO de Derechos Humanos de la UNAM</a>, en Chiapas el 26% de la población total es indígena, por lo que no vemos un sesgo significativo hacia los desaparecidos, pero subraya la importancia de comprender la diversidad étnica en esta problemática.")
// // .style("font-family", "Arial")
// .style("font-size", "14px")
// .style("color", "white")
// .style("overflow-wrap", "break-word")
// .style("text-align", "justify");


// Definimos los datos para la gráfica de barras horizontal
const barChartData = [
  { country: "Honduras",  value: 18 },
  { country: "Guatemala", value: 7 },
  { country: "Venezuela",  value: 2 },
  { country: "Haití",  value: 2 },
  { country: "El Salvador", value: 1 },
  { country: "Ecuador", value: 1 },
];

// Ajustamos la posición la segunda gráfica
const barChartGroup = svg.append("g")
  .attr("transform", "translate(" + (width / 1.7) + "," + (height / 3.5 ) + ")"); 

const barHeight = 32; // Alto de cada barra
const barWidthScale = d3.scaleLinear()
  .domain([0, d3.max(barChartData, d => d.value)])
  .range([0, width / 3]); // Escala para el ancho de las barras

// Título de la gráfica de barras
// svg.append("text")
//   .attr("x", width / 1.54)
//   .attr("y", height / 9.8)
//   .attr("text-anchor", "middle")
//   .attr("font-size", "40px") 
//   .attr("font-weight", "bold") 
//   .text("Desaparecidos por país de origen");

// Explicación de la gráfica de barras
const textBox = svg.append("foreignObject")
  .attr("x", width / 2 + 400)
  .attr("y", height / 3 + 100) // Posición debajo del título
  .attr("width", 250)
  .attr("height", 150);

textBox.append("xhtml:div")
  .html("De los 2065 casos registrados, 31 eran de origen extranjero. Estos datos subrayan la complejidad y el impacto de la migración en la problemática de desapariciones de menores en la región.")
  // .style("font-family", "Arial")
  .style("font-size", "14px")
  .style("color", "white")
  .style("overflow-wrap", "break-word")
  .style("text-align", "justify");


  barChartGroup.selectAll(".bar")
  .data(barChartData)
  .join(enter => enter.append("g").attr("class", "bar"))
  .attr("transform", (d, i) => `translate(-30, ${i * barHeight * 1.5})`) // Ajusta la posición vertical de cada barra
  .each(function(d) {
    d3.select(this)
      .selectAll("image")
      .data(new Array(d.value).fill(d))
      .join("image")
      .attr("xlink:href", d => "imgs/iconos/" + d.country.toLowerCase() + ".png") 
      .attr("width", 40) 
      .attr("height", 40) 
      .attr("x", (d, i) => i * 32) // Espaciado horizontal entre las imágenes
      .attr("y", 0);

    d3.select(this)
      .append("text")
      .attr("x", -150) // Ajusta el posicionamiento del texto a la izquierda de las imágenes
      .attr("y", 30) // Ajusta el posicionamiento del texto verticalmente
      .attr("text-anchor", "start") 
      .attr("alignment-baseline", "middle") 
      .attr("font-size", "20px") 
      .attr("fill", "white") 
      .attr("font-weight", "bold") 
      .text(d => d.country);


    d3.select(this)
      .append("image")
      .attr("xlink:href", d => "imgs/banderas/" + d.country.toLowerCase() + ".png")
      .attr("width", 30) 
      .attr("height", 30) 
      .attr("x", -35)
      .attr("y", 10); 
  });

});