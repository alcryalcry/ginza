<template>
  <Section class="breadcrumbs section--no-p">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-item">
        <div class="logo">
          <iconCorona />
        </div>
      </li>
      <li v-for="item in model" :key="item.linkLabel" class="breadcrumbs-item">
        <ExternalLink class="link text--14 link--gray" :to="item.url" target="_blank" v-html="item.linkLabel" />
      </li>
    </ul>
  </Section>
</template>

<script>
import MODEL from './model'
import ExternalLink from '~/components/ExternalLink/ExternalLink'
import iconCorona from '~/assets/svg/logo-corona.svg'
import Section from '~/components/Utils/Section'

export default {
  components: {
    ExternalLink,
    Section,
    iconCorona
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    },
    crumbs() {
      const crumbs = []
      console.log(this.$route)
      this.$route.matched.map((item, i, { length }) => {
        console.log(item)
        const crumb = {}
        crumb.path = item.path
        crumb.name = this.$i18n.t('route.' + (item.name || item.path))

        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, ''))
            })
            crumb.path = this.$route.path
            crumb.name = this.$i18n.t('route.' + this.$route.name, [
              crumb.path.match(/[^/]*$/)[0]
            ])
          }
          crumb.classes = 'is-active'
        }

        crumbs.push(crumb)
      })

      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  border-top: 1px solid $border;
  border-bottom: 1px solid $border;
  overflow: hidden;
  .breadcrumbs-list {
    display: flex;
    align-items: center;
    padding: 2.5rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .breadcrumbs-item {
    position: relative;
    display: flex;
    flex: 0 0 auto;
    padding-right: 2rem;

    & + .breadcrumbs-item {
      padding-left: 4rem;
      &::before {
        content: ''
      }
    }

    &::before {
      position: absolute;
      top: calc(50% - 6px);
      left: 0;
      padding: 6px;
      border: solid $border;
      border-width: 1px 1px 0 0;
      transform: rotate(45deg);
    }
  }

  .logo {
    width: 2rem;
    height: 2rem;
    color: $gray69;
  }
}
</style>
