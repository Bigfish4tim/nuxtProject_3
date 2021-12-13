<template>
  <v-card>
    <v-card-title>
      hello???
    </v-card-title>
    <v-card-text>
      <v-textarea v-model="txt"/>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="dbWrite">쓰기</v-btn>
      <v-btn @click="dbRead">읽기</v-btn>
      <v-btn @click="dbdelete">삭제</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
<script>
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'

export default {
  name: "Test",
  data() {
    return {
      txt: '',
      // db: null,
    }
  },
  mounted() {
    // console.log(process.env.FIREBASE_APIKEY)
    // firebase.initializeApp({
    //   apiKey: process.env.FIREBASE_APIKEY,
    //   authDomain: process.env.FIREBASE_AUTHDOMAIN,
    //   projectId: process.env.FIREBASE_PROJECTID,
    // });

    // this.db = firebase.firestore()
  },
  methods: {
    dbWrite() {
      // this.$db.collection("users").add({
      // first: "Ada",
      // last: "Lovelace",
      // born: 1816
      // })
      // .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      // })
      // .catch((error) => {
      //     console.error("Error adding document: ", error);
      // });

      this.$rdb.ref().child('aaa').set({
        first: "Ada",
        last: "Lovelace",
      })

      console.log('set correct')
    },
    dbRead() {


      // this.$db.collection("users").get().then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     console.log(`${doc.id} => ${doc.data()}`);
      //     this.txt = `${doc.id} => ${JSON.stringify(doc.data())}`
      //   });
      // });

      this.$rdb.ref().child('aaa').on('value', (sn) => {
        
        this.txt = JSON.stringify(sn.val())
      })
    },
    async dbdelete() {
      const sn = await this.$rdb.ref().child('aaa').once('value')
      this.txt = JSON.stringify(sn)
      console.log(sn)
    }
  }

}
</script>