<template>
    <header class="header">
        <nav class="nav-menu" :class="{ 'nav-open': isActive || !atTop }">
            <a class="logo" href="index.html">
                <img class="logo-image" src="/images/logo.svg" alt="Лого">
            </a>
            <button class="nav-toggler" @click="isActive = !isActive" :class="{ 'toggler-open': isActive }">
                <span></span>
            </button>
            <div class="nav-menu-collapse " :class="{ 'collapse-menu-open': isActive }">
                <ul class="nav-list">
                    <li class="nav-list-item">
                        <a class="nav-list-link" href="#section-about">О нас</a>
                    </li>
                    <li class="nav-list-item">
                        <a class="nav-list-link" href="#section-directions">Направления деятельности</a>
                    </li>
                    <li class="nav-list-item">
                        <a class="nav-list-link" href="#section-vacancies">Вакансии</a>
                    </li>
                    <li class="nav-list-item">
                        <a class="nav-list-link" href="#section-contacts">Контактная информация</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

</template>

<script setup>

    import { ref as variable } from "vue"

    const isActive = variable(false)
    const atTop    = variable(true)

    window.addEventListener("scroll", (e) => {
        atTop.value = window.scrollY === 0
    })
</script>

<style lang="stylus" scoped>

    .header
        position relative


    .nav-menu
        position fixed
        top 0
        left 0
        right 0
        z-index 9999
        display flex
        flex-wrap wrap
        justify-content space-between
        align-items center
        padding 70px 80px


        .logo::before
            content ""
            width 1px
            height 1px
            box-shadow 0 -40px 145px 100px #2FB6C4

        .logo-image
            width 159px
            height 149px

            @media screen and (max-width: 1200px)
                width 89px
                height 82px

            @media screen and (max-width: 600px)
                width 69px
                height 62px

        .nav-list
            display flex
            list-style-type none
            padding-left 0

            @media screen and (max-width: 1200px)
                padding 70px 0
                flex-direction column

            .nav-list-item
                margin-right 114px

                @media screen and (max-width: 1700px)
                    margin-right 90px

                @media screen and (max-width: 1600px)
                    margin-right 70px

                @media screen and (max-width: 1400px)
                    margin-right 50px

                @media screen and (max-width: 1300px)
                    margin-right 40px

                @media screen and (max-width: 1200px)
                    margin-bottom 66px


                .nav-list-link
                    font-weight 400
                    font-size 28px
                    line-height 40px
                    color rgba(217, 245, 253, 0.79)

                    &:hover
                        color #fff

                    @media screen and (max-width: 1800px)
                        font-size 25px

                    @media screen and (max-width: 1500px)
                        font-size 23px

                    @media screen and (max-width: 1300px)
                        font-size 21px

                    @media screen and (max-width: 1200px)
                        color #2F3C46
                        font-weight 300
                        font-size 22px

                        &:hover
                            color #000

                    @media screen and (max-width: 420px)
                        font-size 20px

            .nav-list-item:last-child
                margin-right 0


        .nav-toggler
            background #C5F2FF
            border-radius 11px
            border none
            cursor pointer
            height 51px
            width 58px
            display none
            align-items center
            justify-content center

            span,
            span:before,
            span:after
                width 24px
                height 2px
                background-color #2F3C44
                display block
                transition .3s

            span:before
                content ''
                transform translateY(-8px)
            span:after
                content ''
                transform translateY(6px)


            @media screen and (max-width: 1200px)
                display flex

            @media screen and (max-width: 600px)
                height 42px
                width 47px
                span,
                span:before,
                span:after
                    width 22px

            @media screen and (max-width: 530px)
                height 40px
                width 47px
                span,
                span:before,
                span:after
                    width 20px


        .toggler-open
            background #2F3C46

            span
                background-color transparent
                &:before
                    transform translateY(0px) rotate(45deg)

                &:after
                    transform translateY(-2px) rotate(-45deg)

                &:before, &:after
                    background-color #C5F2FF



        &.nav-open
            background rgba(153, 187, 196, 0.74)
            backdrop-filter blur(4px)


        .nav-menu-collapse
            @media screen and (max-width: 1200px)
                display none


            &.collapse-menu-open
                flex-basis 100%
                display block

</style>