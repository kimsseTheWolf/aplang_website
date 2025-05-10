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
import Slide1 from '@/components/templates/Slide1.vue';
import Slide2 from '@/components/templates/Slide2.vue';
import Slide3 from '@/components/templates/Slide3.vue';
import Slide4 from '@/components/templates/Slide4.vue';
import { useRouter } from 'vue-router';

const cp = ref(0);
const showMenu = ref(false);
const showOverlay = ref(false);
const slides = [Slide1, Slide2, Slide3, Slide4];
const router = useRouter();

onMounted(() => {
    // Initialize any necessary data or state here
    showMenu.value = false;
});

function handleShowOveralay() {
    showOverlay.value = true;
    console.log("showOverlay", showOverlay.value)
}

function handleNextPage() {
    if (cp.value < slides.length - 1) {
        cp.value++;
        router.push(`/slide${cp.value + 1}`);
    }
}

function handlePrevPage() {
    if (cp.value > 0) {
        cp.value--;
        router.push(`/slide${cp.value + 1}`);
    }
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
    <NavigationBar :length="slides.length" v-model:currentPage="cp" @next="handleNextPage" @prev="handlePrevPage"/>
    <div v-if="slides[cp]" class="slide-wrapper">
        <component :is="slides[cp]" />
    </div>
    <Modal v-model:show="showOverlay" :show-sidebar="false">
        <template #content>
            <About />
        </template>
    </Modal>
</template>
<style scoped>
.slide-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>