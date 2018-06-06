
const dbName = 'project', version = 1
let db

const DBOpenRequest = window.indexedDB.open(dbName,version)

DBOpenRequest.onerror  = function() {
  console.log('打开失败')
}

DBOpenRequest.onsuccess = function(e) {
  db = DBOpenRequest.result
  method.show()
}
DBOpenRequest.onupgradeneeded = function(e) {
  let dbResult = e.target.result
  dbResult.onerror = (e) => {
    console.log('打开失败');
  }

  const objectStore = dbResult.createObjectStore(dbName, {
    keyPath: 'id',
    autoIncrement: true
  })

  objectStore.createIndex('id', 'id', { unique: false })
  objectStore.createIndex('name','name')
  objectStore.createIndex('begin','begin')
  objectStore.createIndex('end','end')
  objectStore.createIndex('persion','persion')
  objectStore.createIndex('remark','remark')

}

export const method = {
  add: function (newItem) {
    if (db) {
      var transaction = db.transaction([dbName],'readwrite')
      var objectStore = transaction.objectStore(dbName)
      var objectStoreRequest = objectStore.add(newItem)
      objectStoreRequest.onsuccess = (e) => {
        method.show()
      }
    }
  },
  edit:function(id, data){
    var transaction = db.transaction([dbName], "readwrite");
    var objectStore = transaction.objectStore(dbName);
    var objectStoreRequest = objectStore.get(id);
    objectStoreRequest.onsuccess = function(event) {
      var myRecord = objectStoreRequest.result;
      for (var key in data) {
          if (typeof myRecord[key] !== 'undefined') {
              myRecord[key] = data[key];
          }
      }
      objectStore.put(myRecord)
    }
  },
  del: function (id) {
    var objectStore = db.transaction([dbName], "readwrite").objectStore(dbName);
    var objectStoreRequest = objectStore.delete(id);
    objectStoreRequest.onsuccess = function() {
        method.show();
    };
  },
  show: function () {
    var objectStore = db.transaction(dbName).objectStore(dbName);
    objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result
      console.log(cursor);
    }
  }
}
