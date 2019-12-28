<template>
  <div class="body">
    <div class="body__img"></div>
    <div class="body-information">
      <h1 class="body-information__title">Evan Ribey</h1>
      <hr class="body-information__keyline" />
      <p class="body-information-summary">
        Full-Stack Developer at
        <a
          href="https://www.himandher.ca"
          class="body-information-summary__link"
          target="_blank"
        >
          Him &amp; Her Inc.
        </a>
      </p>
      <p class="body-information-summary">
        Also has other passions in powerlifting, logic puzzles, coffee and
        cooking
      </p>
      <ul class="body-information-links">
        <li class="body-information-links-item">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/evanribey/"
            class="body-information-links-item-link"
            title="LinkedIn Profile"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li class="body-information-links-item">
          <a
            target="_blank"
            href="https://github.com/EvanRibey"
            class="body-information-links-item-link"
            title="Github Profile"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="body-information-links-item">
          <a
            target="_blank"
            href="https://twitter.com/evanribey"
            class="body-information-links-item-link"
            title="Twitter Profile"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Evan Ribey | Full-Stack Developer - Waterloo ON',
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.evanribey.com',
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en_US',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Evan Ribey | Full-Stack Developer - Waterloo ON',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'A Full-Stack Developer with a passion for powerlifting, logic puzzles, coffee, and cooking',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Evan Ribey',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Evan Ribey | Full-Stack Developer - Waterloo ON',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'A Full-Stack Developer with a passion for powerlifting, logic puzzles, coffee, and cooking',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@EvanRibey',
        },
        {
          hid: 'twitter:domain',
          name: 'twitter:domain',
          content: 'Evan Ribey',
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@EvanRibey',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',
          integrity:
            'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
          crossorigin: 'anonymous',
        },
      ],
    };
  },
};
</script>

<style lang="less">
@import (reference) '../assets/css/base/_vars.less';

.body {
  font-family: @nunito;
  font-weight: 300;
  font-size: 16px;
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  height: 100vh;

  @media screen and (max-width: @sm) {
    flex-direction: column;
  }

  &__img {
    width: 20vw;
    height: 20vw;
    min-width: 150px;
    min-height: 150px;
    margin-right: 35px;
    border: 1px solid #2e2e2e;
    box-shadow: 0 1px 8px #999;
    border-radius: 50%;
    /* prettier-ignore */
    background: url('~assets/img/Evan.jpg') ~"top center / cover" no-repeat;

    @media screen and (max-width: @sm) {
      margin: 0 0 35px;
    }
  }

  &-information {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 35vw;
    min-width: 200px;

    @media screen and (max-width: @sm) {
      align-items: center;
      width: 90vw;
    }

    &__title {
      font-family: @cinzel;
      font-weight: 600;
      font-size: 4.4rem;
      letter-spacing: 2px;
      color: #0f0f0f;
      margin: 0 0 15px;
      padding-left: 5px;
    }

    &__keyline {
      height: 1px;
      background-color: #d1d1d1;
      border: 0;
      width: 100%;
      margin-bottom: 20px;
    }

    &-summary {
      font-size: 1.9rem;
      line-height: 2.5rem;
      padding-left: 5px;
      margin: 6px 0;
      max-width: 80%;
      letter-spacing: 0.1rem;

      &:last-of-type {
        margin-bottom: 0;
      }

      &__link {
        font-weight: 300;
        text-decoration: none;
        color: #0f0f0f;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 100%;
          background-color: currentColor;
          opacity: 0;
          height: 1px;
          transition: bottom 0.2s, opacity 0.2s;
        }

        &:hover::after {
          opacity: 1;
          bottom: 0px;
        }
      }

      @media screen and (max-width: @sm) {
        padding-left: 0;
        text-align: center;
        max-width: 37.7rem;
      }
    }

    &-links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      margin-top: 30px;

      @media screen and (max-width: @sm) {
        justify-content: center;
      }

      &-item {
        &-link {
          text-decoration: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          border: 1px solid #2e2e2e;
          // box-shadow: 0 1px 8px #999;
          color: #0f0f0f !important;
          transition: color 0.3s, background-color 0.3s;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0 7px;
          font-size: 2.24rem;
          color: #2e2e2e;

          &:first-of-type {
            margin-left: 4px;
          }

          @media screen and (max-width: @sm) {
            margin-left: 7px;
          }

          &:hover {
            color: #fcfcfc !important;
            background-color: #0f0f0f;
          }
        }
      }
    }
  }
}
</style>
