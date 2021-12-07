<template>
  <v-card>
    <v-card-title>
      hello???
    </v-card-title>
    <v-card-text>
      <v-textarea v-model="txt" />
      <v-textarea v-model="txt2"/>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="test">
        test
      </v-btn>
      <v-btn @click="hello">
        hello
      </v-btn>
      <v-btn @click="moment">
        moment
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  data() {
    return {
      txt: '',
      txt2: '',
    }
  },
  methods: {
    async test() {
      const r = await this.$axios.get('/api')
      this.txt = r.data
    },
    async hello() {
      const r = await this.$axios.get('/api/hello')
      this.txt2 = r.data
    },
    moment() {
      this.txt2 = this.$moment().toLocaleString()
    },
  }
}
</script>