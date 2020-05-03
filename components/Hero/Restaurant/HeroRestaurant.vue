<template>
  <div class="hero-restaurant">
    <picture v-if="model.image" class="image">
      <img :src="model.image" alt="">
    </picture>
    <div class="hero-restaurant-content">
      <picture v-if="model.logo" class="logo">
        <img :src="model.logo" alt="">
      </picture>
      <h4 class="title">
        <span v-if="model.type" class="type" v-html="model.type" />
        <span v-if="model.restaurantName" class="name" v-html="model.restaurantName" />
      </h4>
      <h5 class="place text--13">
        <span v-if="model.parentPlace" class="parent" v-html="model.parentPlace" />
        <span v-if="model.city" class="city" v-html="model.city" />
      </h5>
    </div>
    <div class="actions">
      <ul class="actions-list">
        <li class="actions-item">
          <a v-if="model.menuFile" class="actions-button" :href="model.menuFile" download="">Меню ресторана</a>
        </li>
        <li class="actions-item">
          <button class="actions-button">
            <span>Забронировать столик</span>
            <span class="icon">
              <iconArrow />
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MODEL from './model'
import iconArrow from '~/assets/svg/arrow.svg'

export default {
  name: 'HeroRestaurant',
  components: {
    iconArrow
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
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-restaurant {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 6rem 4rem 2.5rem;
  height: 90rem;
  max-height: 100vh;
  @include desktop {
    height: 90rem;
  }
  @include mobile {
    height: 85vh;
    padding: 4rem $sectionOffsetHorizontalMobile 2.5rem;
  }
  .image {
    @include absolute;
    pointer-events: none;
    &::before {
      content: '';
      @include absolute;
      background: linear-gradient(180deg, rgba(50, 50, 50, 0.1) 55.68%, rgba(0, 0, 0, 0.80415) 96%);
    }
  }
}

.hero-restaurant-content {
  position: relative;
  margin-bottom: 8rem;
  color: $white;
}

.logo {
  display: flex;
  margin: 0 auto 2.5rem;
  width: 14rem;
}

.title {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 2rem;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  .type {
    font-weight: $light;
    &::after {
      content: ' ';
    }
  }
  .name {
    font-weight: $medium;
  }
}

.place {
  color: $border;
  text-align: center;
  .parent {
    &::after {
      content: ', ';
    }
  }
}

.actions {
  position: relative;
  display: flex;
  align-items: stretch;
  min-height: 5rem;
  background: $white;
  padding: 0 3rem;
  border-radius: 4px;
  border: 1px solid $border;
  @include mobile {
    width: 100%;
  }

  .actions-list {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex: 1 1 auto;
    @include mobile {
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
    }
  }

  .actions-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex: 1 1 auto;
    padding: 0 3rem;
    @include mobile {
      padding: 0 2rem;
      margin: 2rem 0;
      width: 100%;
    }
    & + .actions-item {
      &::before {
        content: '';
        position: absolute;
        top: 1.2rem;
        left: 0;
        width: 1px;
        height: calc(100% - 2.4rem);
        background: $border;
        @include mobile {
          top: -2rem;
          width: 100%;
          height: 1px;
        }
      }
    }
    .actions-button {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      color: $black17;
      transition: color .2s ease;
      &:active {
        color: $brown;
      }
      @include desktop {
        &:hover {
          color: $brown;
        }
      }
      .icon {
        margin: .3rem 1.5rem 0;
        display: flex;
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
}

</style>
