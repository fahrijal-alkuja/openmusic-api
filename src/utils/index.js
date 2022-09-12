/* eslint-disable camelcase */
const mapDBToModel = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  album_id,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
});

const mapDBToAlbum = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
});

module.exports = { mapDBToModel, mapDBToAlbum };
