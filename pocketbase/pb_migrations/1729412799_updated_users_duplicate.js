/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1ngtzcj8oo9vcc")

  collection.name = "teachers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1ngtzcj8oo9vcc")

  collection.name = "users_duplicate"

  return dao.saveCollection(collection)
})
