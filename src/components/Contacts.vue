<template>
    <footer id="section-contacts"  class="contacts">
        <div class="container">
            <h2 class="section-header">Контакты</h2>
            <div class="contacts-description">
                <div class="footer-content">
                    <a class="logo-footer" href="index.html">
                        <img src="/images/logo.svg">
                    </a>
                    <div>
                        <p>г.Смоленск</p>
                        <a href="mailto:office@niistt.ru">email:office@niistt.ru</a>
                    </div>
                    <div>
                        <p>Телефон +7(4812)706000</p>
                        <p>Факс +7(4812)706001</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Contacts"
}
</script>

<style lang="stylus" scoped>

    .contacts
        background #20282E
        padding-bottom 200px

        @media screen and (max-width: 1050px)
            padding-bottom 100px


    .footer-content
        display flex
        justify-content space-between
        align-items center
        margin-top 45px

        @media screen and (max-width: 1050px)
            flex-direction column

            & div
                width 100%
                text-align center


    .footer-content
        p, a
            font-family 'Literal', sans-serif
            font-weight 400
            font-size 30px
            line-height 40px
            color #C5F2FF


    .logo-footer::before
        content ""
        width 1px
        height 1px
        box-shadow 70px -40px 195px 150px rgba(47, 182, 196, 0.69)


</style>