<script setup>
import { animate } from 'animejs';
import { onMounted } from 'vue';

onMounted(() => {
  animate('.slide4-content', {
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
  <div class="slide slide4">
    <h1>Better Solutions for Everyone</h1>
    <p>
      To make a difference, we need updated strategies that reflect teens’ real lives. For students, this means learning safe ways to manage stress, like joining clubs, practicing mindfulness, and having access to mental health resources. Peer-led discussions can also help by making the message more relatable and removing stigma.
    </p>
    <p>
      Parents should create open channels of communication. Talking about stress, emotions, and peer pressure without judgment makes it more likely that teens will be honest. Learning the signs of drug use, understanding modern trends, and maintaining supportive relationships are all critical.
    </p>
    <p>
      Teachers and school administrators must take the lead on prevention. Training staff to recognize early signs of trouble, incorporating real-life examples into education, and focusing on wellness over punishment can shift school culture. Having dedicated mental health counselors and creating safe environments for students to talk are essential.
    </p>
    <p>
      Community leaders and policymakers also play a role. By funding after-school programs and mental health services, and promoting realistic drug education, they can help teens find purpose and belonging. Harm reduction tools like naloxone (Narcan) should be accessible, and campaigns should reach teens where they are—especially on social media—with engaging, fact-based content.
    </p>
  </div>
</template>

<style scoped>
.slide4-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212; /* Dark theme background */
  padding: 20px;
}

.slide4-content {
  text-align: center;
  opacity: 0; /* Initial opacity for animation */
  color: #ffffff; /* Light text for contrast */
}

.solution {
  background: rgba(18, 18, 18, 0.8); /* Dark theme background */
  color: #ffffff; /* Light text for contrast */
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); /* Adjusted shadow for dark theme */
}

.solution h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.solution p {
  font-size: 1rem;
  margin: 0;
}

.slide4 {
  color: #ffffff;
  background-color: #4a4a4a; /* Slightly different dark grayscale background */
  padding: 20px;
  border-radius: 20px; /* Larger border radius */
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 100vh; /* Ensure it doesn't exceed the viewport height */
}
</style>
