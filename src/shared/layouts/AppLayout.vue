<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('calendar')
</script>

<template>
    <v-container>
        <h1>Work Schedule</h1>
        <v-sheet rounded>
            <v-tabs v-model="tab" color="primary">
                <v-tab value="calendar">Calendário</v-tab>
            </v-tabs>

            <v-divider></v-divider>

            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="calendar">
                    <v-sheet class="pa-5 rounded-b-lg" color="grey-darken-3">
                        Calendário
                    </v-sheet>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-sheet>
    </v-container>
</template>