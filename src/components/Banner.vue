<template>

    <div class="banner">
        <div class="container">
            <h1 class="main-title">Нии Стт</h1>
            <button class="btn btn-more">Подробнее</button>
            <button class="btn btn-info-protection">Защита информации</button>
        </div>
    </div>

</template>

<script setup>
    import { onMounted } from "vue"

    onMounted(() => { console.log("Banner mounted") })
</script>

<style lang="stylus" scoped>

    .banner
        background-image url("../images/header_bg_jpeg_blur.jpg")
        background-repeat no-repeat
        background-size cover
        height 1066px

        @media screen and (max-width: 1400px)
            height 1000px

        @media screen and (max-width: 1200px)
            height 850px

        @media screen and (max-width: 900px)
            height 700px

        @media screen and (max-width: 750px)
            height 600px

        @media screen and (max-width: 600px)
            height 520px


    .main-title
        padding-top 404px
        margin-bottom 50px
        font-family 'Nasalization', sans-serif
        font-weight 400
        font-size 153px
        line-height 182px
        text-transform uppercase
        color #FFFFFF

        @media screen and (max-width: 1400px)
            font-size 142px
            padding-top 344px

        @media screen and (max-width: 1300px)
            font-size 122px

        @media screen and (max-width: 1200px)
            font-size 110px
            padding-top 304px
            margin-bottom 30px

        @media screen and (max-width: 900px)
            font-size 90px
            padding-top 204px

        @media screen and (max-width: 600px)
            padding-top 184px
            line-height 143px

        @media screen and (max-width: 500px)
            padding-top 184px
            line-height 122px
            margin-bottom 0
            font-size 18vw

        @media screen and (max-width: 470px)
            font-size 17.2vw

        @media screen and (max-width: 360px)
            font-size 16.6vw

        @media screen and (max-width: 340px)
            font-size 16.4vw

    .btn-more
        margin-right 40px
        background #C5F2FF
        border none
        color #2B3D49

        @media screen and (max-width: 500px)
            margin-top 33px
            margin-bottom 33px


    .btn-info-protection
        border 2px solid #FFFFFF
        color #FFFFFF


    .btn-more:hover, .btn-info-protection:hover
        box-shadow 0 0 5px #C5F2FF
        position relative
        bottom 5px

    .btn-more, .btn-info-protection

        @media screen and (max-width: 1400px)
            width 311px

        @media screen and (max-width: 1300px)
            width 271px
            font-size 21px

        @media screen and (max-width: 1200px)
            width 241px
            height 56px
            font-size 17px

            &:hover, &:hover
                bottom 3px

        @media screen and (max-width: 900px)
            width 201px
            font-size 16px
            height 56px

        @media screen and (max-width: 530px)
            margin-right 5px

        @media screen and (max-width: 500px)
            width 100%
            font-size 20px


</style>