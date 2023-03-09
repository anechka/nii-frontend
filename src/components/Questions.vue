<template>
    <section id="section-questions" class="questions">
        <div class="container">
            <h2 class="section-header">Вопросы</h2>
            <div class="questions-description">
                <p>Заполните форму, если у Вас остались вопросы и мы свяжемся с Вами!</p>
                <form class="form-input">
                    <label for="name">Ваше имя:</label><input type="text" id="name"/>
                    <label for="phone">Ваш телефон:</label><input type="text" id="phone"/>
                    <label for="mail">Ваш почта:</label><input type="email" id="mail"/>
                    <button class="btn-submit">Отправить</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Questions"
}
</script>

<style lang="stylus" scoped>

    .questions
        background #2F3C46


        .section-header::before
            content ""
            width 1px
            height 1px
            box-shadow 0 0 195px 100px #2FB6C4


        .questions-description

            p
                font-family 'Literal', sans-serif
                font-weight 400
                font-size 37px
                line-height 34px
                color rgba(197, 242, 255, 0.71)
                width 385px
                margin-bottom 60px

                @media screen and (max-width: 480px)
                    width 100%
                    font-size 30px

            .form-input
                display flex
                flex-direction column


                label
                    font-family 'Literal', sans-serif
                    font-weight 400
                    font-size 35px
                    line-height 32px
                    color #E9E9E8
                    margin-bottom 24px
                    margin-top 24px

                    @media screen and (max-width: 1450px)
                        font-size 28px


                 input
                    height 76px
                    border 3px solid #00A8C1
                    border-radius 10px
                    outline none
                    width 65%

                    @media screen and (max-width: 700px)
                        width 100%
                        height 66px

                     @media screen and (max-width: 480px)
                         font-size 24px


                .btn-submit
                    width 331px
                    height 66px
                    background #C5F2FF
                    border-radius 16px
                    border none
                    font-family 'Literal', sans-serif
                    font-weight 700
                    font-size 24px
                    line-height 32px
                    color #2F3C46
                    margin-top 53px
                    margin-bottom 100px


                    &:hover
                        box-shadow 0 0 5px #C5F2FF
                        position relative
                        bottom 5px

                    @media screen and (max-width: 480px)
                        width 100%

</style>