<script setup>
import { onMounted, ref, defineProps, watch, computed } from 'vue';
import { animate } from 'animejs';
import OverlayBox from './OverlayBox.vue';
import RoundButton from './RoundButton.vue';

const isShowingModal = defineModel("show", {
    type: Boolean,
    default: false,
    required: true,
});

const props = defineProps({
    showSidebar: {
        type: Boolean,
        default: false,
    },
    sidebarWidth: {
        type: String,
        default: "300px",
    },
    mainWidth: {
        type: String,
        default: "600px",
    },
    height: {
        type: String,
        default: "450px",
    },
});

const adjustableCornerRadisu = computed(() => {
    if (props.showSidebar) {
        return "0px"
    }
    else {
        return "7px"
    }
});

const componentID = ref(`component-${crypto.randomUUID()}`);

const emit = defineEmits(['update:show']);

function handleOnClose() {
    isShowingModal.value = false
    emit('update:show', false);
}


</script>
<template>
    <OverlayBox :show="isShowingModal">
        <template #content>
            <div class="modal-container">
                <div class="sidebar-container" v-if="showSidebar">
                    <slot name="sidebar" />
                </div>
                <div class="main-container">
                    <slot name="content" />
                </div>
            </div>

            <RoundButton class="close-btn" @click="handleOnClose">
                <template #icon>
                    <img src="@/components/icons/close.svg" height="20px" />
                </template>
            </RoundButton>
        </template>
    </OverlayBox>
</template>
<style scoped>
.modal-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
}
.main-container {
    display: flex;
    flex-direction: column;
    padding: 17px;
    width: v-bind(mainWidth);
    height: v-bind(height);
    border-top-left-radius: v-bind(adjustableCornerRadisu);
    border-bottom-left-radius: v-bind(adjustableCornerRadisu);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    overflow-y: auto;
    background-color: rgba(18, 18, 18, 0.85); /* Dark theme background */
    color: #ffffff; /* Light text for contrast */
}
.sidebar-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: v-bind(sidebarWidth);
    height: v-bind(height);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    overflow-y: auto;
    background-color: rgb(65, 65, 65);
    color: white;
}
.close-btn {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
}
</style>