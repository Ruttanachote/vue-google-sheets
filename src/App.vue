<script setup lang="ts">
import { layouts } from "./layouts";
import { computed } from "vue";
import { useRoute, RouterView } from "vue-router";
import { darkThemeOverrides, lightThemeOverrides } from "./themes";
import { darkTheme, NGlobalStyle, NMessageProvider, useDialog } from "naive-ui";
import { useStyleStore } from "./stores/style.store";

//store
// import { usePermissionsStore } from "./services/usePermissions.store";
// import { useGetMenu } from "./services/useGetMenu.store";
// import { useRolesStore } from "./services/useRolesStore.store";

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const PermissionsStore = usePermissionsStore();
// const RolesStore = useRolesStore();

// PermissionsStore.fetchPermissions();
// RolesStore.fetchRoles();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const route = useRoute();
const layout = computed(() => route?.meta?.layout ?? layouts.base);
const styleStore = useStyleStore();

const theme = computed(() => (styleStore.isDarkTheme ? darkTheme : null));
const themeOverrides = computed(() =>
  styleStore.isDarkTheme ? darkThemeOverrides : lightThemeOverrides
);

console.clear();

console.info(
  `\n%c⚠️ Warning ⚠️%c \nWarning \n`,
  "color:#ceb73f; background: #ceb73f33; font-size:1.5rem; padding:0.15rem; margin: 1rem auto; font-family: Rockwell, Tahoma, 'Trebuchet MS', Helvetica; border: 2px solid #ceb73f; border-radius: 4px; font-weight: bold; text-shadow: 1px 1px 1px #000000bf;",
  "font-weight: bold; font-size: 1rem;color: #ceb73f;"
);
</script>

<template>
asdad
  <!-- <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-global-style />
    <n-message-provider placement="top-right">
      <n-dialog-provider>
        <n-notification-provider>
          <component :is="layout">
            asdad
            <RoutPath />
            <router-view id="drawer-target" />
          </component>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider> -->
</template>
<style>
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Prompt", sans-serif;
}

.n-alert .n-alert-body {
  border: none;
  padding: var(--n-padding);
}

html {
  height: 100%;
  margin: 0;
  padding: 0;
  font-smooth: always;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale !important;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);

  transform: rotate(-0.0000000001deg);
}

* {
  box-sizing: border-box;
}
</style>
