import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s13.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s13.title'),
          children: [{
            link: 'i-i-s-i-s-s13-вид-поддержки-l',
            caption: i18n.t('forms.application.sitemap.i-s-s13.i-i-s-i-s-s13-вид-поддержки-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s13.i-i-s-i-s-s13-вид-поддержки-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-i-s-s13-пользователь-l',
            caption: i18n.t('forms.application.sitemap.i-s-s13.i-i-s-i-s-s13-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s13.i-i-s-i-s-s13-пользователь-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-i-s-s13-условие-l',
            caption: i18n.t('forms.application.sitemap.i-s-s13.i-i-s-i-s-s13-условие-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s13.i-i-s-i-s-s13-условие-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})