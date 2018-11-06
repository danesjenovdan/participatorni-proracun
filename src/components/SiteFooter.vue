<template>
  <div class="row footer-row">
    <div class="col-md-12">
      <h3>POVEJ NAPREJ!</h3>
    </div>
    <div class="col-md-12">
      <div class="social-buttons">
        <button
          class="btn"
          @click="onShareClick($event, 'fb')"
        >
          <svg
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
          </svg>
          DELI NA FB
        </button>
        <button
          class="btn"
          @click="onShareClick($event, 'tw')"
        >
          <svg
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
          </svg>
          DELI NA TW
        </button>
        <button
          class="btn"
          @click="onShareClick($event, 'mail')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
            class="send-icon"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M59.24 30.3L23.78 14.18a1.87 1.87 0 0 0-2.49 2.43L27.86 32l-6.57 15.39a1.87 1.87 0 0 0 2.49 2.43L59.24 33.7a1.87 1.87 0 0 0 0-3.4zM26.61 44.43l4.51-10.56h9.61a1.87 1.87 0 1 0 0-3.73h-9.61l-4.51-10.57L54 32zM8.07 25.78a1.87 1.87 0 0 1 1.87-1.87h11.51a1.87 1.87 0 0 1 0 3.73H9.94a1.87 1.87 0 0 1-1.87-1.86zm6.84 4.36h9a1.87 1.87 0 1 1 0 3.73h-9a1.87 1.87 0 0 1 0-3.73zm-5 3.73H5.53a1.87 1.87 0 1 1 0-3.73h4.41a1.87 1.87 0 0 1 0 3.73zm10.89 4.36a1.87 1.87 0 0 1-1.8 1.86h-9a1.87 1.87 0 1 1 0-3.73h9a1.87 1.87 0 0 1 1.83 1.86z" />
          </svg>
          POŠLJI
        </button>
      </div>
    </div>
    <div class="col-md-12">
      <div class="credits">
        <div class="credit">
          <a
            href="https://danesjenovdan.si/"
            target="_blank"
          >
            DANES JE NOV DAN
          </a>
        </div>
        <p class="disclaimer small">
          Pošljite nam mejl na
          <a
            href="mailto:maja@danesjenovdan.si?subject=Participatorni%20proračun"
            target="_blank"
          >maja@danesjenovdan.si</a>
          če so narobe podatki etc. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SiteFooter',
  data() {
    return {
      shareLink: typeof document !== 'undefined' ? document.location.href : '',
      shareText: 'TODO: default share text',
      shareTitle: 'TODO: default share title',
      shareHashtag: '#TODO',
    };
  },
  created() {
    if (this.shareLink) {
      axios
        .post('https://djnd.si/yomamasofat/', `fatmama=${encodeURIComponent(this.shareLink)}`)
        .then((res) => {
          this.shareLink = res.data;
        })
        .catch(error => console.error(error));
    }
  },
  methods: {
    onShareClick(event, type) {
      let url = '';
      const title = encodeURIComponent(this.shareTitle);
      if (type === 'fb') {
        const link = encodeURIComponent(this.shareLink);
        url = `https://www.facebook.com/dialog/feed?app_id=301375193309601&redirect_uri=${link}&link=${link}&ref=responsive&name=${title}`;
      } else if (type === 'tw') {
        const text = encodeURIComponent(`${this.shareText} ${this.shareHashtag} ${this.shareLink}`);
        url = `https://twitter.com/intent/tweet?text=${text}`;
      } else if (type === 'mail') {
        const text = `${this.shareText} ${this.shareLink}`;
        url = `mailto:?subject=${title}&body=${text}`;
      }
      window.open(url, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-row {
  color: #f2cc59;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
  }

  .social-buttons {
    text-align: center;
    margin-top: 1rem;

    .btn {
      font-size: 1rem;
      margin-bottom: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;

      svg {
        width: 1.25rem;
        margin-top: -1rem;
        margin-bottom: -0.8rem;
        margin-right: 0.25rem;

        &.send-icon {
          width: 1.75rem;
        }
      }
    }
  }

  .credits {
    text-align: center;

    .credit {
      display: inline-block;
      padding-bottom: 0.5rem;
      border-bottom: 4px solid #f2cc59;
      width: 300px;
    }

    a {
      color: #f2cc59;
      font-weight: 500;
      text-decoration: none;

      &:hover,
      &:active,
      &:visited {
        text-decoration: underline;
      }
    }

    .disclaimer {
      margin-top: 1rem;
      font-size: 0.75rem;
    }
  }
}
</style>
