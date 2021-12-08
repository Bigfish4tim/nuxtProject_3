# nuxtProject_3

# firebase setting


## .env File setting form
```text
FIREBASE_APIKEY = 
FIREBASE_AUTHDOMAIN = 
FIREBASE_PROJECTID= 
FIREBASE_STORAGEBUCKET = 
FIREBASE_MESSAGINGSENDERID = 
FIREBASE_APPID = 
FIREBASE_MEASUREMENTID = 
```


1. yarn create nuxt-app [project name]

2. yarn add firebase

3. yarn add @nuxtjs/firebase

4. firebase > 프로젝트 설정 > 일반 > 내 앱 > SDK 설정 및 구성 > 구성(firebaseConfig 내용 복사)

5. nuxt.config.js 내용 수정
modules: ['@nuxtjs/firebase'],
firebase: {
    config: { .... }
},
        services: {
          // Just as example. Can be any other service.
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          analytics: true,
        }

6. yarn add -D sass sass-loader@10.1.1
sass 로더 설치

7. nuxt.config.js 내용 수정
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }

8. npm install -g firebase-tools

9. firebase login

10. firebase init

11. firebase deploy

12. yarn generate

13. firebase deploy