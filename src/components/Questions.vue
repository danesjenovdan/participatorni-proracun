<template>
  <div class="row faq-row mx-0">
    <div class="col-md-12">
      <h2>
        VSE, KAR STE ŽELELI VEDETI O
        <span>PARTICIPATORNEM PRORAČUNU</span>
      </h2>
    </div>
    <div class="col-md-6 mt-5 px-0">
      <div class="faq-q-box">
        Lorem ipsum dolor sit amet, consectetur adipisicing?
      </div>
      <div class="faq-q-box">
        Lorem ipsum dolor sit amet, adipisicing?
      </div>
      <div class="faq-q-box">
        Lorem ipsum dolor sit amet?
      </div>
      <div class="faq-q-box">
        Lorem ipsum dolor sit amet?
      </div>
      <div class="faq-q-box">
        Lorem ipsum dolor sit amet?
      </div>
    </div>
    <div class="col-md-6 mt-5 px-0">
      <div class="faq-a-content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolore
        dicta impedit obcaecati, corporis, facilis fuga nihil illo blanditiis
        sint reprehenderit distinctio laborum porro, dignissimos minus culpa
        voluptate earum hic?
        Qui asperiores recusandae nihil, rem possimus ipsam repellendus
        dignissimos provident excepturi quisquam aliquam sunt accusantium,
        mollitia soluta eaque ab numquam deleniti dolores. Numquam unde cumque
        rerum a, dolor aliquam! Et.
        Facere perspiciatis aut, delectus, temporibus officia corrupti sequi
        iusto doloribus suscipit, repellat illum minima commodi quo natus
        veritatis animi praesentium. Optio iste debitis quasi ut repellendus
        autem accusantium pariatur qui.
        Omnis at accusantium fugiat! Consequuntur doloribus sint fuga
        voluptatibus, dolorem nemo asperiores. Natus ea culpa tempore magni unde
        eligendi numquam, incidunt iure vel! Explicabo exercitationem similique
        perferendis suscipit nesciunt molestias?
        Aspernatur repellendus, exceptu
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
