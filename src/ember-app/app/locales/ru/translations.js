import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s13',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s13',
          title: 'I s s13'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
