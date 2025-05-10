<script setup>
import AnchorGroup from '@/components/AnchorGroup.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import RoundButton from '@/components/RoundButton.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import { onMounted, ref } from 'vue';
import OverlayBox from '@/components/OverlayBox.vue';
import Modal from '@/components/Modal.vue';
import About from '@/components/templates/About.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import MultiContentBlock from '@/components/MultiContentBlock.vue';
import PageHeader from '@/components/PageHeader.vue';
import SlideContainer from '@/components/SlideContainer.vue';
import CoverBlock from '@/components/CoverBlock.vue';

const cp = ref(0);
const showMenu = ref(false);
const showOverlay = ref(false);

const slides = [
  { id: 1, component: CoverBlock, props: { title: 'Welcome', description: 'This is the first slide.' } },
  { id: 2, component: ContentBlock, props: {}, slotContent: { content: '<h1>Example Title</h1><p>This is the first paragraph of the content block.</p><p>This is the second paragraph of the content block.</p>' } },
  { id: 3, component: MultiContentBlock, props: { leftType: 'media', rightType: 'text' }, slotContent: { left: '<img src="@/components/icons/info.svg" alt="Example Image" />', right: '<h2>Right Text Content</h2><p>This is the text content on the right side.</p>' } },
  { id: 4, component: MultiContentBlock, props: { leftType: 'text', rightType: 'media', rightAlignCenter: true }, slotContent: { left: '<h2>Left Text Content</h2><p>This is the text content on the left side.</p>', right: '<img src="@/components/icons/github-fill.svg" alt="Example Media" />' } },
];

const currentSlide = ref(0);

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlide.value = index;
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
</script>
<template>

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
    <NavigationBar :length="slides.length" v-model:currentPage="currentSlide" />
    <div class="slides-wrapper">
        <transition name="slide-fade" mode="out-in">
            <component
                :is="slides[currentSlide].component"
                v-bind="slides[currentSlide].props"
                :key="slides[currentSlide].id"
            >
                <template v-for="(content, slotName) in slides[currentSlide].slotContent" :slot="slotName" v-html="content" />
            </component>
        </transition>
    </div>
    <Modal v-model:show="showOverlay" :show-sidebar="false">
        <template #content>
            <About />
        </template>
    </Modal>
</template>
<style scoped>
.slides-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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