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
        default: "100%",
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
                    <slot name="sidebar">
                        <!-- Default content for the sidebar slot -->
                    </slot>
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
/* Adjust scroll behavior to eliminate the scroll bar for the overall container */
.modal-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    max-height: 90vh; /* Set maximum height for the modal */
    overflow: hidden; /* Disable scroll bar for the overall container */
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
    overflow-y: auto; /* Enable scroll bar only for content */
    background-color: rgb(55, 55, 55);
    color: white;
}
/* Ensure images in the sidebar occupy the maximum width and disable overflow */
.sidebar-container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center contents vertically */
    align-items: center; /* Center contents horizontally */
    padding: 17px;
    width: v-bind(sidebarWidth);
    height: v-bind(height);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    overflow: hidden; /* Disable any overflow */
    background-color: rgb(65, 65, 65);
    color: white;
}

.sidebar-container img {
    width: 100%; /* Set image width to the maximum width of the sidebar */
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensure the image fits within the container */
}
.close-btn {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
}
</style>