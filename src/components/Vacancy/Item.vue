<template>
    <div  class="vacancy"
         :class="{ 'last-vacancy': isLast }" >


        <div class="vacancy-name" @click="isActive = true">
            <div class="vacancy-number">
                <span v-text="count"></span>
            </div>
            <div class="title" v-text="title">Инженер - программист компьютерных систем</div>
        </div>



        <div class="vacancy-desc">

            <div class="requirements" v-if="isActive">
                <div>
                    <span v-text="description"></span>
                    <p    v-text="text"></p>
                </div>

                <button class="btn-respond" @click="$parent.$emit('modal')">Откликнутьcя</button>
            </div>

        </div>

    </div>
</template>

<script setup>
    import { ref as variable, defineProps } from "vue"

    defineProps({
        count: Number,
        title: String,
        description: String,
        text: String,
        isLast: Boolean
    })

    const isActive = variable(false)
</script>

<style lang="stylus" scoped>

    .vacancy
        border-bottom 2px solid rgb(66, 66, 156)
        padding 40px 0
        position relative

        .vacancy-name

            display flex
            align-items center
            cursor pointer
            margin-bottom 34px

            .vacancy-number
                font-family 'Nasalization', sans-serif
                font-weight 400
                font-size 81px
                line-height 96px
                color #C5F2FF
                -webkit-text-stroke 1px #2F3C44
                width 100px
                text-align center


                @media screen and (max-width: 1100px)
                    font-size 71px

                @media screen and (max-width: 650px)
                    font-size 61px

                @media screen and (max-width: 500px)
                    font-size 51px

                @media screen and (max-width: 430px)
                    font-size 41px

            .title
                font-family 'Literal', sans-serif
                font-weight 400
                font-size 44px
                line-height 49px
                color #2F3C44
                flex 1 1 0


                @media screen and (max-width: 1100px)
                    font-size 34px

                @media screen and (max-width: 650px)
                    font-size 30px

                @media screen and (max-width: 500px)
                    font-size 25px

                @media screen and (max-width: 430px)
                    font-size 20px


        .vacancy-desc
            font-family 'Literal', sans-serif
            color #2F3C46
            padding 0 100px
            @media screen and (max-width: 550px)
                padding 0

            .requirements
                display flex
                justify-content space-between
                align-items center
                flex-wrap wrap

                div
                    @media screen and (max-width: 1100px)
                        flex 0 0 100%

                span
                    font-weight 400
                    font-size 33px

                    @media screen and (max-width: 1100px)
                        font-size 24px

                    @media screen and (max-width: 650px)
                        font-size: 20px

                    @media screen and (max-width: 500px)
                        font-size: 17px

                p
                    font-weight 300
                    font-size 31px
                    line-height 35px
                    width 320px
                    padding-top 60px


                    @media screen and (max-width: 1100px)
                        font-size 22px

                    @media screen and (max-width: 650px)
                        font-size 18px
                        padding-top 40px

                    @media screen and (max-width: 500px)
                        font-size 15px

                .btn-respond
                    cursor pointer
                    width 331px
                    height 66px
                    background #2F3C46
                    border-radius 16px
                    border none
                    font-family 'Literal', sans-serif
                    font-weight 700
                    font-size 24px
                    line-height 32px
                    color #FFFFFF
                    position relative
                    z-index 1

                    &:hover
                        box-shadow 0 0 5px #2F3C46
                        position relative
                        bottom 5px


                    @media screen and (max-width: 1200px)
                        &:hover
                            bottom 3px

                    @media screen and (max-width: 1100px)
                        margin-top: 40px

                    @media screen and (max-width: 550px)
                        flex-basis 100%


    .last-vacancy
        border-bottom none
</style>