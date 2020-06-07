<template>
  <Section class="breadcrumbs section--no-p">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-item">
        <div class="logo">
          <iconCorona />
        </div>
      </li>
      <li v-for="(item, i) in crumbs" :key="i" class="breadcrumbs-item" :class="item.classes">
        <!-- <ExternalLink class="link text--14 link--gray" :to="item.url" target="_blank" v-html="item.linkLabel" /> -->
        <nuxt-link
          class="link text--14 link--gray"
          :to="item.path"
          v-html="item.name"
        />
      </li>
    </ul>
  </Section>
</template>

<script>
import MODEL from './model'
// import ExternalLink from '~/components/ExternalLink/ExternalLink'
import iconCorona from '~/assets/svg/logo-corona.svg'
import Section from '~/components/Utils/Section'

export default {
  components: {
    // ExternalLink,
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
      const crumbs = [
        {
          name: this.$i18n.t('breadcrumbs.main'),
          path: this.localePath('/')
        }
      ]
      this.$route.matched.map((item, i, { length }) => {
        const crumb = {}
        // crumb.path = item.path
        // crumb.name = this.$i18n.t('breadcrumbs.' + item.name)
        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: this.$i18n.t('breadcrumbs.' + item.name.replace(/((___ru|___en)*$)|(-[^-]*$)/, ''))
            })
            console.warn(item.name)
            crumb.path = this.$route.path
            crumb.name = this.$i18n.t('breadcrumbs.' + this.$route.name.replace(/(___ru|___en)*$/, ''), [
              crumb.path.match(/[^/]*$/)[0]
            ])
          }
          crumb.classes = 'isActive'
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
