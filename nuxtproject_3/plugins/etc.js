import Vue from 'vue'
import moment from 'moment'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/firebase-database'

Vue.prototype.$moment = moment
 
if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASEID,
    storateBucket: process.env.FIREBASE_STORAGEBUCKET,
    projectId: process.env.FIREBASE_PROJECTID,
  }
  firebase.initializeApp(config)
  Vue.prototype.$db = firebase.firestore()
  Vue.prototype.$rdb = firebase.database() 
}