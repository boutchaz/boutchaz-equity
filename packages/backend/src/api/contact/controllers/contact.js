'use strict';

/**
 * A set of functions called "actions" for `contact`
 */

module.exports = {
  getContactDetails: async (ctx, next) => {
    let phones = [
      '+212523351661',
      '+212630868986',
    ];
    let emails = [
      'info@lahagroup.fr',
      'info@lahagroup.fr',
    ]
    let socials = [
      {'name': 'facebook', 'href': 'https://www.facebook.com/lahagroup/'},
      {'name': 'twitter', 'href': 'https://twitter.com/lahagroup'},
      {'name': 'youtube', 'href': 'https://www.linkedin.com/company/laha-group/'},
      {'name': 'instagram', 'href': 'https://www.instagram.com/lahagroup/'},
    ]
    let addresses = [
      '1 Rue de la République, 75001 Paris',
      '1 Rue de la République, 75001 Paris',
    ]
    try {
      ctx.body = {
        'phones': phones,
        'emails':emails,
        'socials':socials,
        'addresses':addresses,
      };
    } catch (err) {
      ctx.body = err;
    }
  }
};
