<template>
    <body id="App">
        <Navbar></Navbar>

        <template v-if="isModal">
            <Modal></Modal>
        </template>
        <template v-else>

            <Banner     v-once />
            <About      v-once />
            <Directions v-once />

            <Vacancy    @modal="isModal = true" ></Vacancy>

            <Questions v-once />
            <Contacts v-once />

        </template>

    </body>
</template>

<script setup>
    import Banner     from "@/Banner.vue"
    import About      from "@/About.vue"
    import Directions from "@/Directions/Directions.vue"
    import Vacancy    from "@/Vacancy/Vacancy.vue"
    import Modal      from "@/Modal.vue"
    import Navbar     from "@/Navbar.vue"
    import Questions  from "@/Questions.vue"
    import Contacts  from "@/Contacts.vue"

    import { ref as variable } from "vue"

    const isModal = variable(false)
</script>

<style lang="stylus" title="fonts">

    font(name, src, type)
        font-path = "../fonts"
        font-family name

        url = url(font-path + "/" + src + "." + type)

        if type is "otf"
            format = format("opentype")
        else if type is "ttf"
            format = format("truetype")

        src url format
        url format

    @font-face
        font("Literal", "LiteralRegular", "otf")

    @font-face
        font("Literal", "LiteralBold", "otf")
        font-weight bold

    @font-face
        font("Nasalization", "nasalization-rg", "otf")

    @font-face
        font("Gotham Pro", "gothampro", "ttf")
        font-weight normal

    @font-face
        font("Gotham Pro", "gothampro_light", "ttf")
        font-weight 300

    @font-face
        font("Gotham Pro", "gothampro_medium", "ttf")
        font-weight 500

    @font-face
        font("Gotham Pro", "gothampro_bold", "ttf")
        font-weight 700

</style>

<style lang="stylus">

    body
        font-family "Literal", serif
        background-color #2f3c46

    a
        text-decoration none


    h1, h2, p
        margin 0


    ul
        margin 0
        padding 0

    .container
        max-width 1750px
        margin 0 auto
        padding-left 40px
        padding-right 40px

    .btn
        width 331px
        height 66px
        border-radius 16px
        background transparent
        font-weight 700
        font-size 24px
        line-height 32px

    .about-us-description, .vacancy-list, .questions-description, .contacts-description
        margin-left 400px


    .directions .section-header, .questions .section-header, .contacts .section-header
        color #FFFFFF


    /* SECTIONS COMMON STYLES BEGIN */

    .section-header
        font-family 'Nasalization', sans-serif
        font-weight 400
        font-size 81px
        line-height 96px
        padding-top 70px
        padding-bottom 70px

        @media screen and (max-width: 1450px)
            font-size 71px

        @media screen and (max-width: 1350px)
            font-size 65px

        @media screen and (max-width: 750px)
            font-size 60px

        @media screen and (max-width: 650px)
            font-size 54px

        @media screen and (max-width: 550px)
            font-size 50px
            padding-top 40px
            padding-bottom 40px

        @media screen and (max-width: 450px)
            font-size 40px

        @media screen and (max-width: 380px)
            font-size 38px


    .about-us-description, .questions-description, .contacts-description
        margin-left 400px

        @media screen and (max-width: 1150px)
            margin-left 0


    .directions .section-header, .questions .section-header, .contacts .section-header
        color #FFFFFF


    .contacts-description
        @media screen and (max-width: 1350px)
            margin-left 0

</style>