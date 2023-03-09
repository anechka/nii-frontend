<template>
    <section class="about-us" id="section-about">
        <div class="container">
            <h2 class="section-header subheader-about-us">О нас</h2>
            <p class="about-us-description">НИИ СТТ - это современное, высокотехнологичное предприятие, сочетающее в себе
                научную и производственную базу, основной специализацией которых является разработка и производство
                радиоэлектронной аппаратуры, телекоммуникационной техники и изделий высокоточной механики.</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
    mounted: () => {
        console.log("About mounted")
    }
}
</script>

<style lang="stylus" scoped>

    .about-us
        background linear-gradient(#C5F2FF 0.83%, #C5F2FF 100%, #C5F2FF 100%)
        p
            font-family 'Nasalization', sans-serif
            font-weight 400
            font-size 60px
            line-height 72px
            color #2F3C44
            padding-bottom 140px

            @media screen and (max-width: 1450px)
                font-size 42px

            @media screen and (max-width: 1350px)
                font-size 38px

            @media screen and (max-width: 1250px)
                font-size 33px

            @media screen and (max-width: 750px)
                font-size 28px

            @media screen and (max-width: 650px)
                font-size 23px

            @media screen and (max-width: 550px)
                font-size 21px
                line-height 55px

            @media screen and (max-width: 450px)
                font-size 20px
                line-height 45px

            @media screen and (max-width: 380px)
                font-size 20px
                line-height 40px

    .subheader-about-us
        color #2F3C44

</style>