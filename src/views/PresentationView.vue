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
            <MenuItem @onClick="showMenu = false">
                <template #icon>
                    <img src="@/components/icons/list-outline.svg" height="20px" />
                </template>
                <template #text>Table of Contents</template>
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