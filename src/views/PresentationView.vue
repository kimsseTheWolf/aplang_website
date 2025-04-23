<script setup>
import AnchorGroup from '@/components/AnchorGroup.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import RoundButton from '@/components/RoundButton.vue';
import Menu from '@/components/Menu.vue';
import MenuItem from '@/components/MenuItem.vue';
import { onMounted, ref } from 'vue';
import OverlayBox from '@/components/OverlayBox.vue';

const cp = ref(0);
const showMenu = ref(false);
const showOverlay = ref(false);

onMounted(() => {
    // Initialize any necessary data or state here
    showMenu.value = false;
});
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
            <MenuItem @onClick="showMenu = false" @click="showOverlay = true">
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
    <NavigationBar :length="10" v-model:currentPage="cp"/>
    <OverlayBox :show="showOverlay" :transparentcy="0.5">
        <template #content>
            <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                <h1>Overlay Content</h1>
                <RoundButton @click="showOverlay = false">
                    <template #icon>
                        <img src="@/components/icons/close.svg" height="20px" />
                    </template>
                </RoundButton>
            </div>
        </template>
    </OverlayBox>
</template>
<style scoped>
</style>