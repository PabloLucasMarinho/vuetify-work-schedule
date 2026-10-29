<template>
    <v-calendar ref="calendar">
    </v-calendar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const type = ref('month');
const mode = ref('stack');
const modes = ['stack', 'column']
const weekday = ref([0, 1, 2, 3, 4, 5, 6])

</script>