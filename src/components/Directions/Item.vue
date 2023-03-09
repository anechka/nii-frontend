<template>
    <div class="card-item">

        <div class="card-image">
            <img :src="image" alt="icon">
        </div>


        <h2 class="card-header"
            :class="{ 'card-header-opened': isActive }"
            @click="isActive = !isActive"
        >
            <span>0{{ count }}</span>
            <slot name="description"></slot>
        </h2>


        <div class="card-text"
             v-show="isActive"
             :class="{ 'card-text-opened': isActive }"
        >

            <slot name="text"></slot>
        </div>

    </div>
</template>

<script setup>

    import {ref as variable, defineProps} from "vue"

    defineProps({
        count: Number,
        image: String
    })

    const isActive = variable(false)

</script>

<style lang="stylus" scoped>

    .card-item

        .card-image
            width 158px
            height 158px
            margin 0 auto

            img
                max-width 100%

        .card-header
            background radial-gradient(rgba(89, 99, 105, 0.2), rgba(255, 255, 255, 0.08))
            border-bottom-left-radius 8px
            border-bottom-right-radius 8px
            border-top-left-radius 8px
            border-top-right-radius 8px
            backdrop-filter blur(3px)
            display flex
            align-items baseline
            padding 66px 26px
            position relative
            margin-top -40px
            z-index 3

            &:hover
                background: radial-gradient(circle, rgba(0, 240, 255, 0.2), rgba(89, 99, 105, 0.2))

            &.card-header-opened
                border-bottom-left-radius 0 !important
                border-bottom-right-radius 0 !important

                .card-description
                    &::after
                        background-image url("images/arrow_down.svg") !important

            span
                font-family 'Nasalization', sans-serif
                font-weight 400
                font-size 30px
                line-height 27px
                color rgba(233, 233, 232, 0.59)
                margin-right 16px

            .card-description
                font-family "Gotham Pro", sans-serif
                font-style normal
                font-weight 400
                font-size 19px
                line-height 27px
                color #FFFFFF
                position relative
                height 250px

                &::after
                    content ""
                    background-image url("images/arrow_top.svg")
                    background-repeat no-repeat
                    width 39px
                    height 22px
                    position absolute
                    bottom -40px
                    right 0

        .card-text
            font-family 'Gotham Pro', sans-serif
            font-weight 400
            font-size 18px
            line-height 27px
            color white
            padding 66px 46px 66px 26px
            background radial-gradient(rgba(89, 99, 105, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%)
            border-radius 8px

            p
                margin-left 46px

            &.card-text-opened
                border-top-left-radius 0 !important
                border-top-right-radius 0 !important


</style>