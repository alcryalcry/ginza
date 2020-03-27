<template>
  <Layout :header="header" :footer="footer">
    <template v-slot:page-content>
      <component
        v-for="(item, index) in generatedComps"
        :is="item"
        :key="index"
        :data="components[index]"
        :class="`section--${components[index].mode}`"
      />
    </template>
  </Layout>
</template>

<script>
import get from '~/plugins/api';
import { API_ROUTES_INDEX } from '~/config/constants';

import Layout from '~/components/Layout/Layout';

export default {
  components: {
    Layout,
  },
  data() {
    return {
      generatedComps: [],
    };
  },
  async asyncData(context) {
    const { 
      header = {}, 
      footer = {}, 
      pageComponents = {} 
    } = await get(context, API_ROUTES_INDEX);
    return {
      header,
      footer,
      components: pageComponents.components,
    };
  },
  created() {
    if (this.components) {
      this.components.forEach((component) => {
        const componentName = this.capitalize(component.name);
        const comp = () => import(`~/components/${componentName}/${componentName}.vue`);
        this.generatedComps.push(comp);
      });
    } else {
      console.error('components not found');
    }
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style lang="scss" scoper></style>
