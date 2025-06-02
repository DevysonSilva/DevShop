// Gráfico de linha: Estatísticas de vendas
const vendasCtx = document.getElementById('vendasChart').getContext('2d');
const vendasChart = new Chart(vendasCtx, {
  type: 'line',
  data: {
    labels: ['Jan 31', 'Feb 28', 'Mar 31', 'Apr 30', 'May 31', 'Jun 30'],
    datasets: [{
      label: 'Contagem de vendas',
      data: [0, 90, 340, 260, 185, 20],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Gráfico de pizza: Vendas vitais
const vitaisCtx = document.getElementById('vitalChart').getContext('2d');
const vitalChart = new Chart(vitaisCtx, {
  type: 'pie',
  data: {
    labels: ['Pedidos', 'Concluídos', 'Cancelados'],
    datasets: [{
      data: [9898, 0, 0],
      backgroundColor: ['#80deea', '#a5d6a7', '#ef9a9a']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});