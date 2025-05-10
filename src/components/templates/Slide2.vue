<script setup>
import { animate } from 'animejs';
import { onMounted } from 'vue';

const drugs = [
  {
    name: 'Marijuana',
    effects: 'Interferes with brain development, impairs memory, decision-making, and coordination.',
  },
  {
    name: 'Nicotine (Vapes)',
    effects: 'Highly addictive, affects attention and mood, often disguised as school supplies.',
  },
  {
    name: 'Prescription Drugs',
    effects: 'Includes opioids, ADHD medications, and anti-anxiety pills. Misuse can lead to addiction and overdose.',
  },
  {
    name: 'Synthetic Drugs',
    effects: 'Unpredictable and often fatal, includes ecstasy, LSD, and fentanyl.',
  },
];

onMounted(() => {
  animate('.slide2-content', {
    keyframes: [
        { opacity: 0, translateY: -50 },
        { opacity: 1, translateY: 0 }
    ],
    duration: 1000,
    easing: 'easeOutQuad'
  });
});
</script>

<template>
  <div class="slide slide2">
    <h1>What Teens Are Using – Common Drugs & Effects</h1>
    <div class="drug-card" v-for="drug in drugs" :key="drug.name">
      <h2>{{ drug.name }}</h2>
      <p>{{ drug.effects }}</p>
    </div>
  </div>
</template>

<style scoped>
.slide2-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212; /* Dark theme background */
  padding: 20px;
}

.slide2-content {
  text-align: center;
  opacity: 0; /* Initial opacity for animation */
  color: #ffffff; /* Light text for contrast */
}

.drug-card {
  background: rgba(18, 18, 18, 0.8); /* Dark theme background */
  color: #ffffff; /* Light text for contrast */
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); /* Adjusted shadow for dark theme */
}

.drug-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.drug-card p {
  font-size: 1rem;
  margin: 0;
}

.slide2 {
  color: #ffffff;
  background-color: #2a2a2a; /* Slightly different dark grayscale background */
  padding: 20px;
  border-radius: 20px; /* Larger border radius */
  overflow-y: auto;
  max-height: 100vh; /* Ensure it doesn't exceed the viewport height */
}

.drug-card {
  background-color: #1e1e1e;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
