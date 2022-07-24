import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS13ВидПоддержкиLForm from './forms/i-i-s-i-s-s13-вид-поддержки-l';
import IISISS13ПользовательLForm from './forms/i-i-s-i-s-s13-пользователь-l';
import IISISS13УсловиеLForm from './forms/i-i-s-i-s-s13-условие-l';
import IISISS13ВидПоддержкиEForm from './forms/i-i-s-i-s-s13-вид-поддержки-e';
import IISISS13ПользовательEForm from './forms/i-i-s-i-s-s13-пользователь-e';
import IISISS13УсловиеEForm from './forms/i-i-s-i-s-s13-условие-e';
import IISISS13ВидПоддержкиModel from './models/i-i-s-i-s-s13-вид-поддержки';
import IISISS13ПользовательModel from './models/i-i-s-i-s-s13-пользователь';
import IISISS13УсловиеModel from './models/i-i-s-i-s-s13-условие';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s13-вид-поддержки': IISISS13ВидПоддержкиModel,
    'i-i-s-i-s-s13-пользователь': IISISS13ПользовательModel,
    'i-i-s-i-s-s13-условие': IISISS13УсловиеModel
  },

  'application-name': 'I s s13',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s13',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s13',
          title: 'I s s13'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s13': {
          caption: 'ISS13',
          title: 'ISS13',
          'i-i-s-i-s-s13-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          },
          'i-i-s-i-s-s13-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-i-s-s13-условие-l': {
            caption: 'Условие',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s13-вид-поддержки-l': IISISS13ВидПоддержкиLForm,
    'i-i-s-i-s-s13-пользователь-l': IISISS13ПользовательLForm,
    'i-i-s-i-s-s13-условие-l': IISISS13УсловиеLForm,
    'i-i-s-i-s-s13-вид-поддержки-e': IISISS13ВидПоддержкиEForm,
    'i-i-s-i-s-s13-пользователь-e': IISISS13ПользовательEForm,
    'i-i-s-i-s-s13-условие-e': IISISS13УсловиеEForm
  },

});

export default translations;
