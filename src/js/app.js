'use strict';

import { h, app } from "hyperapp";
import 'babel-polyfill';

import '../less/app.less';
import '../favicon.ico';
import '../favicon-16x16.png';
import '../favicon-32x32.png';

const state = {
  projects: [],
  bio: ''
}

const actions = {
}

const view = (state, actions) => (
  <div class="body">
    <div class="body__img"></div>
    <div class="body-information">
      <h1 class="body-information__title">Evan Ribey</h1>
      <hr class="body-information__keyline" />
      <p class="body-information-summary">Full-Stack Developer at <a href="https://himandher.ca" class="body-information-summary__link" target="_blank">Him &amp; Her Inc.</a></p>
      <ul class="body-information-links">
        <a target="_blank" href="https://www.linkedin.com/in/evanribey/" class="body-information-links-link">
          <li class="body-information-links__item"><i class="fab fa-linkedin-in"></i></li>
        </a>
        <a target="_blank" href="https://github.com/EvanRibey" class="body-information-links-link">
          <li class="body-information-links__item"><i class="fab fa-github"></i></li>
        </a>
        <a target="_blank" href="https://twitter.com/evanribey" class="body-information-links-link">
          <li class="body-information-links__item"><i class="fab fa-twitter"></i></li>
        </a>
      </ul>
    </div>
  </div>
)

app(state, actions, view, document.body)