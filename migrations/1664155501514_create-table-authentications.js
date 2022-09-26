/* eslint-disable camelcase */
/* eslint-disable indent */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('authentications', {
        token: {
            type: 'TEXT',
            notNull: true,
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable('authentications');
};
