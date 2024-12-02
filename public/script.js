document.addEventListener('DOMContentLoaded', function() {
  // Meals Donated Line Chart
  const mealsChartCtx = document.getElementById('mealsChart').getContext('2d');
  if (!mealsChartCtx) {
    console.error('Canvas for Meals Chart not found!');
    return;
  }
  
  new Chart(mealsChartCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Meals Donated',
        data: [500, 700, 800, 1200, 1500, 2000],
        borderColor: '#ff6f61',
        fill: false,
        tension: 0.4,
      }],
    },
  });

  // Donor Type Pie Chart
  const donorTypeChartCtx = document.getElementById('Donor').getContext('2d');
  if (!donorTypeChartCtx) {
    console.error('Canvas for Donor Type Chart not found!');
    return;
  }

  const donorTypeData = {
    labels: ['Individual', 'Restaurant', 'NGO'],
    datasets: [{
      data: [45, 25, 30],
      backgroundColor: ['#ff5733', '#33ff57', '#3357ff'],
      hoverOffset: 4,
    }],
  };

  new Chart(donorTypeChartCtx, {
    type: 'pie',
    data: donorTypeData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw + '%';
            },
          },
        },
      },
    },
  });
});
