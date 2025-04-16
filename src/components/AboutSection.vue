<template>
  <section class="about-section bg-light-gray">
    <div class="container">
      <div class="grid">
        <div class="span-8">
          <div class="about">
            <p>
              Kampanjo “Kje je participativni proračun?” že od 2018 prostovoljno
              izvaja
              <a href="https://danesjenovdan.si"
                >Danes je nov dan, Inštitut za druga vprašanja</a
              >.
            </p>
          </div>
        </div>
        <div class="span-1"></div>
        <div class="span-7">
          <div class="djnd-box djnd-green">
            <img src="../assets/newsletter.png" alt="" class="mail-icon" />
            <h2>Naroči se na <em>Občasnik</em>, naš mesečni novičnik</h2>
            <p class="lead">
              Občasnik vsak mesec prinaša izbor naših razmišljanj, projektov,
              javnih pojavljanj in sodelovanj ter priporočil. Je kratek, a poln
              vsebine, udaren, a nevsiljiv – in vedno pride ob pravem času.
            </p>
            <a
              href="https://danesjenovdan.si/obcasnik/"
              target="_blank"
              class="btn-link"
            >
              <span>Naroči se!</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="31.957 35.93 66.358 55.2"
              >
                <path
                  d="m68.357 40.73 19.7 19.8h-53.1a3 3 0 0 0 0 6h53.1l-19.7 19.8a3 3 0 0 0 4.2 4.2l24.9-24.9a3 3 0 0 0 0-4.2l-24.9-24.9a3 3 0 0 0-4.2 4.2z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="span-1"></div>
        <div class="span-7">
          <div class="djnd-box djnd-red">
            <h2>
              Za nadaljnje neodvisno delovanje potrebujemo tudi
              <em>tvojo podporo!</em>
            </h2>
            <a
              href="https://danesjenovdan.si/podpri-nas/"
              target="_blank"
              class="btn-link"
            >
              <span>Podpri nas!</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="31.957 35.93 66.358 55.2"
              >
                <path
                  d="m68.357 40.73 19.7 19.8h-53.1a3 3 0 0 0 0 6h53.1l-19.7 19.8a3 3 0 0 0 4.2 4.2l24.9-24.9a3 3 0 0 0 0-4.2l-24.9-24.9a3 3 0 0 0-4.2 4.2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.about-section {
  padding-block: 8rem;

  .about {
    p {
      font-family: var(--fnt-alt);
      font-size: 1.625rem;
      line-height: 1.2;
    }

    a {
      font-weight: 700;
    }
  }

  .djnd-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 2.5rem 1.25rem;
    border: 2px solid #000;
    font-family: system-ui;

    &.djnd-red {
      background-color: #fff8f6;

      .btn-link {
        background-color: #ffd1c7;
      }
    }

    &.djnd-green {
      background-image: linear-gradient(to top left, #fff, #9df2d3);

      .btn-link {
        background-color: #9df2d3;
      }
    }

    .mail-icon {
      width: 100px;
      margin-bottom: 1rem;
    }

    h2 {
      margin-bottom: 1.5rem;
      font-size: 2.25rem;
      font-weight: 600;
      line-height: 1.1;
    }

    .lead {
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.3;
    }

    .btn-link {
      display: inline-flex;
      justify-content: space-between;
      min-width: min(300px, 100%);
      padding-inline: 1rem;
      padding-top: 0.625rem;
      padding-bottom: 0.75rem;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.3;
      text-decoration: none;
      box-shadow: 0 0 0 1px #000;
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);

      svg {
        display: block;
        width: 1.25rem;
        margin-left: 1rem;
        margin-bottom: -0.125rem;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 0 2px #000;
      }
    }
  }
}
</style>
