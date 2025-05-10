<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

onMounted(() => {
  const ctx = document.getElementById('exampleGraph').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Example 1', 'Example 2', 'Example 3'],
      datasets: [
        {
          label: 'Example Data',
          data: [10, 20, 30],
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

<template>
  <div class="slide slide3">
    <div class="content-container">
      <div class="text-content">
        <h1>Why Old Strategies Don’t Work</h1>
        <p>
          Traditional programs like D.A.R.E. and “Just Say No” often fail to connect with teens today. They focus on scare tactics and one-way messaging, which teens find unrelatable. Many students turn to drugs not for fun, but as a way to cope with stress, anxiety, and depression. Academic pressure, social struggles, and personal trauma are major contributors to substance use.
        </p>
        <p>
          Social media makes matters worse. Teens see content that glamorizes drug use or shows peers using substances without visible consequences. Viral challenges and influencer behavior normalize risky activities. School lectures can’t compete with this constant stream of online influence.
        </p>
        <p>
          Moreover, many prevention efforts don’t address root causes or offer real support. Teens often don’t have safe places to ask questions or admit they’re struggling. Without honest, two-way conversations and empathy, traditional methods fall flat.
        </p>
      </div>
      <div class="graph-content">
        <canvas id="exampleGraph"></canvas>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide3 {
  color: #ffffff;
  background-color: #3a3a3a; /* Slightly different dark grayscale background */
  padding: 20px;
  border-radius: 20px; /* Larger border radius */
  overflow-y: auto;
  max-height: 100vh;
}
.content-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.text-content {
  flex: 1;
  margin-right: 20px;
}
.graph-content {
  flex: 1;
}
</style>
