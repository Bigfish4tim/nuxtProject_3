<template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-col>
                    <v-row style="height: 35px">
                        <FooterImg class="footermargin"/>
                        <div class="footermargin">
                            <p>대표자 : 김종성  사업자 등록번호 : 107-86-50412</p>
                            <p>Contact 인보험 : T. 02) 2068-6382. F. 02) 2068-7027</p>
                        </div>
                        <div class="footermargin">
                            <p>서울특별시 영등포구 당산로41길 11 SK V1 center W동 504호</p>
                            <p>재물/배상 : T. 02) 2632-5482. F. 02) 2637-7027</p>
                        </div>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import FooterImg from "./FooterImg.vue"
export default {
    components: { FooterImg },
}
</script>
<style scoped>
.footermargin {
    margin: 0px 20px 0px 0px;
    line-height: 45%;
}
.imgmargin {
    margin: 0px 10px 10px 0px;
}
</style>