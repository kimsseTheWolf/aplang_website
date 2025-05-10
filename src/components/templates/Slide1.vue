<template>
  <div class="slide slide1">
    <h1>The Issue – Teen Drug Use in U.S. Schools</h1>
    <p>
      Teen drug use remains a serious issue in U.S. schools. According to 2023 data from the National Institute on Drug Abuse, 10.9% of 8th graders, 19.8% of 10th graders, and 31.2% of 12th graders reported using illicit drugs in the past year. While fewer teens may be using drugs compared to past decades, the substances available now are more dangerous. Synthetic opioids like fentanyl, which is fifty times stronger than heroin, are being found in counterfeit pills. Just two milligrams of fentanyl can be fatal. As a result, youth overdose deaths have more than doubled since 2019, creating a more deadly drug landscape despite declining usage rates.
    </p>
    <p>
      The danger lies not just in how many teens are using drugs, but in how lethal even a single encounter can be. The Monitoring the Future survey highlights how experimentation increases with age, with 12th grade being a particularly high-risk period. Schools must take this data seriously, as the risks today are greater than ever before.
    </p>
    <div class="chart-container">
      <canvas id="drugUseChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('drugUseChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['8th Grade', '10th Grade', '12th Grade'],
      datasets: [
        {
          label: 'Illicit Drug Use (%)',
          data: [10.9, 19.8, 31.2],
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
});
</script>

<style scoped>
.slide1 {
  color: #ffffff;
  background-color: #1a1a1a; /* Slightly different dark grayscale background */
  padding: 20px;
  border-radius: 20px; /* Larger border radius */
  overflow-y: auto;
  max-height: 100vh;
}
.chart-container {
  margin-top: 20px;
}
</style>
