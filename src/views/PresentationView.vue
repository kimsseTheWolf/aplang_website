<script setup>
import AnchorGroup from '@/components/AnchorGroup.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import RoundButton from '@/components/RoundButton.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import { onMounted, ref, watch } from 'vue';
import Modal from '@/components/Modal.vue';
import About from '@/components/templates/About.vue';
import GraphBlock from '@/components/templates/Graphs/GraphBlock.vue';
import Slide1 from '@/components/templates/Slide1.vue';
import Slide2 from '@/components/templates/Slide2.vue';
import Slide3 from '@/components/templates/Slide3.vue';
import Slide4 from '@/components/templates/Slide4.vue';
import Slide5 from '@/components/templates/Slide5.vue';
import { useRouter, useRoute } from 'vue-router';

const cp = ref(0);
const showMenu = ref(false);
const showOverlay = ref(false);
const showWC = ref(false);

const slides = [
  { id: 1, component: Slide1 },
  { id: 2, component: Slide2 },
  { id: 3, component: Slide3 },
  { id: 4, component: Slide4 },
  { id: 5, component: Slide5 },
];

const currentSlide = ref(0);
const reloadKey = ref(0);

const router = useRouter();
const route = useRoute();

// Update currentSlide based on the route
watch(
  () => route.path,
  (newPath) => {
    const match = newPath.match(/\/(\d+)/);
    if (match) {
      currentSlide.value = parseInt(match[1], 10);
    }
  },
  { immediate: true }
);

function goToSlide(index) {
  if (index >= 1 && index <= slides.length) {
    router.push(`/${index}`);
  }
}

onMounted(() => {
    // Initialize any necessary data or state here
    showMenu.value = false;
});

function handleShowOveralay() {
    showOverlay.value = true;
    console.log("showOverlay", showOverlay.value)
}

function resolveComponent(content) {
  if (content.includes('<GraphBlock />')) {
    return GraphBlock;
  }
  // Add more component resolution logic if needed
  return null;
}
</script>
<template>
  <div>
    <AnchorGroup>
        <template #anchor>
            <RoundButton @click="showMenu = !showMenu">
                <template #icon>
                    <img src="@/components/icons/menu-btn.svg" />
                </template>
            </RoundButton>
        </template>
    </AnchorGroup>
    <Menu :show="showMenu" style="position: absolute; top: 65px; left: 10px;">
        <template #content>
            <MenuItem @onClick="showMenu = false" @click="showWC = true">
                <template #icon>
                    <img src="@/components/icons/list-outline.svg" height="20px" />
                </template>
                <template #text>Works Cited</template>
            </MenuItem>
            <MenuItem @onClick="showMenu = false">
                <template #icon>
                    <img src="@/components/icons/github-fill.svg" height="20px" />
                </template>
                <template #text>Visit Repository</template>
            </MenuItem>
            <MenuItem @onClick="showMenu = false" @click="handleShowOveralay">
                <template #icon>
                    <img src="@/components/icons/info.svg" height="20px" />
                </template>
                <template #text>About</template>
            </MenuItem>
            <MenuItem @onClick="showMenu = false">
                <template #icon>
                    <img src="@/components/icons/close.svg" height="20px" />
                </template>
                <template #text>Close</template>
            </MenuItem>
        </template>
    </Menu>
    <NavigationBar :length="slides.length" v-model:currentPage="currentSlide" @update:currentPage="goToSlide" />
    <div class="slides-wrapper">
        <transition name="slide-fade" mode="out-in">
            <router-view />
        </transition>
    </div>
    <Modal v-model:show="showOverlay" :show-sidebar="false">
        <template #content>
            <About />
        </template>
    </Modal>
    <Modal v-model:show="showWC" :show-sidebar="true">
        <template #content>
            <h2>Sources and Works Cited</h2>
            <section>
              <p>Abrams, Zara. “More Teens than Ever Are Overdosing. Psychologists Are Leading New Approaches to Combat Youth Substance Misuse.” <em>APA Monitor</em>, American Psychological Association, 1 Mar. 2024, https://www.apa.org/monitor/2024/03/youth-substance-misuse.</p>

              <p>Blakemore, Erin. “Stress Is Driving Teens’ Drug Use, New Federal Study Suggests.” <em>The Washington Post</em>, 16 Feb. 2024, https://www.washingtonpost.com/health/2024/02/16/teen-drug-use-stress/.</p>

              <p>Centers for Disease Control and Prevention. “E-Cigarette Use Among Youth.” <em>CDC Tobacco and Vaping Facts</em>, 17 Oct. 2024, https://www.cdc.gov/tobacco/basic_information/e-cigarettes/index.htm.</p>

              <p>Centers for Disease Control and Prevention. “Cannabis and Brain Health.” <em>CDC Cannabis and Public Health</em>, 15 Feb. 2024, https://www.cdc.gov/marijuana/health-effects/teens.html.</p>

              <p>“DEA Warns of Brightly-Colored Fentanyl Used to Target Young Americans.” <em>Drug Enforcement Administration Press Release</em>, 30 Aug. 2022, https://www.dea.gov/press-releases/2022/08/30/dea-warns-brightly-colored-fentanyl-used-target-young-americans.</p>

              <p>Ferguson, April. “Tackling Substance Use in Schools: Current Challenges and Social Work Solutions.” <em>National Association of Social Workers</em>, 27 Feb. 2024, https://www.socialworkers.org/News/News-Releases/ID/2815/Tackling-Substance-Use-in-Schools.</p>

              <p>Health Policy Institute of Ohio. “Study: Teen Drug Use Driven by Stress.” <em>Health Policy News</em>, 23 Feb. 2024, https://www.healthpolicyohio.org/study-teen-drug-use-driven-by-stress/.</p>

              <p>National Institute on Drug Abuse. “Reported Drug Use Among Adolescents Continued to Hold Below Pre-Pandemic Levels in 2023.” <em>NIDA News Release</em>, 13 Dec. 2023, https://nida.nih.gov/news-events/news-releases/2023/12/reported-drug-use-among-adolescents-continued-to-hold-below-pre-pandemic-levels-in-2023.</p>

              <p>Tressler, Colleen. “Sellers of Edible Cannabis: Stop Using Packaging That Mimics Foods Popular with Kids.” <em>Consumer FTC Alert</em>, Federal Trade Commission, 16 July 2024, https://consumer.ftc.gov/consumer-alerts/2024/07/sellers-edible-cannabis-stop-using-packaging-mimics-foods-popular-kids.</p>

              <p>Williams, Carmen. “GPSO Warns Parents of New Ways Kids Are Being Exposed to Drugs.” <em>KALB News</em>, 20 Aug. 2024, https://www.kalb.com/2024/08/20/gpso-warns-parents-new-ways-kids-are-being-exposed-drugs/.</p>
            </section>

        </template>
        <template #sidebar>
            <img src="/source.png" height="300px" />
        </template>
    </Modal>
  </div>
</template>
<style scoped>
.slides-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: auto; /* Allow vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-fade-back-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-fade-back-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>