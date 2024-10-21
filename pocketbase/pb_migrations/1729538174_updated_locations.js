/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wd6b6g2tagnofpb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jwci0qmq",
    "name": "town",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wd6b6g2tagnofpb")

  // remove
  collection.schema.removeField("jwci0qmq")

  return dao.saveCollection(collection)
})
