<template>
  <div class="row faq-row mx-0">
    <div class="col-md-12">
      <h2>
        VSE, KAR STE ŽELELI VEDETI O
        <span>PARTICIPATORNEM PRORAČUNU</span>
      </h2>
    </div>
    <div class="col-md-6 mt-5 px-0">
      <div
        v-for="(qa, i) in stuff"
        :key="qa.q"
        :class="['faq-q-box', { active: i === selected }]"
        @click="selectAnswer(i)"
      >
        {{ qa.q }}
      </div>
    </div>
    <div class="col-md-6 mt-5 px-0">
      <div class="faq-a-content">
        {{ stuff[selected].a }}
      </div>
    </div>
  </div>
</template>

<script>
const stuff = [
  {
    q: 'q',
    a: 'a',
  },
  {
    q: 'q1',
    a: 'a1',
  },
  {
    q: 'q2',
    a: 'a2',
  },
];

export default {
  name: 'Questions',
  data() {
    return {
      stuff,
      selected: 0,
    };
  },
  methods: {
    selectAnswer(i) {
      this.selected = i;
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-row {
  h2 {
    color: #27223a;
    font-size: 3rem;
    line-height: 1.1;
    text-align: center;

    @media (max-width: 1199.98px) {
      font-size: 2.5rem;
    }

    span {
      color: #f2cc59;
    }
  }

  .faq-q-box {
    background-color: #f2cc59;
    padding: 0.75rem 7rem 0.75rem 2.5rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    &.active {
      background-color: #5f235b;
      color: #fff;
      cursor: auto;
    }

    &::after {
      content: '';
      display: block;
      background-image: url('../assets/arrow-right.svg');
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 4rem;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50%;
      transform: translateX(-1rem);
      transition: transform 0.15s ease-in-out;
    }

    &.active::after,
    &:hover::after {
      transform: translateX(1.5rem);
    }
  }

  .faq-a-content {
    padding: 1.75rem 2.5rem;
  }
}
</style>
