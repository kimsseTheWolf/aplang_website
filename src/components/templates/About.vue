<script setup>
import MenuItem from '../MenuItem.vue';

</script>

<template>
    <h1>About</h1>
    <p>This presentation template is created by kimsseTheWolf, which aims to have a prettier and interactive way for presenting different information to audiences.</p>
    <p>This project is open sourced under MIT license and feel free to use this in your future presentation!</p>
    <MenuItem>
        <template #icon>
            <img src="@/components/icons/github-fill.svg" height="20px" />
        </template>
        <template #text>Visit Repository on GitHub!</template>
    </MenuItem>
</template>