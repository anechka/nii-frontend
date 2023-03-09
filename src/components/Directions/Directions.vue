<template>
    <section class="directions" id="section-directions">

        <div class="container">

            <h2 class="section-header">
                Направления<br>
                деятельности
            </h2>

            <div class="cards-directions">

                <Item :count="index + 1" :image="'images/' + item.image" v-for="(item, index) in state" :key="index">

                    <template v-slot:description>
                        <p class="card-description" v-text="item.description" />
                    </template>

                    <template v-slot:text>
                        <p v-text="item.text" />
                    </template>

                </Item>

            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted } from "vue"
    import Item from "@/Directions/Item.vue"

    console.log("Directions setup")

    onMounted(() => { console.log("Directions mounted") })

    let state = [
        {
            image: "icon_01.png",
            description: `Направление систем радиосвязи и комплексов мониторинга и формирования радиоэлектронной обстановки`,
            text: `Программное обеспечение имитации сигналов средств связи
            (высокоуровневое и низкоуровневое, включая программное обеспечение для высокотехнологичных ПЛИС
            и процессоров обработки информации)`
        },
        {
            image: "icon_02.png",
            description: `Направление систем спутниковой связи и комплексов мониторинга спутниковых систем связи`,
            text: `Программное обеспечение для спутниковых систем связи для решения навигационных задач:
            автоматического наведения на спутники ретрансляторы на подвижных объектах`
        },
        {
            image: "icon_03.png",
            description: `Направление радиолокационных систем и космических проектов связи`,
            text: `Программное обеспечение для научной аппаратуры радиотехнического мониторинга источников радиоизлучения космического базирования,
            радиотехнический мониторинг и местоопределения источников радиоизлучения наземного, морского, воздушного базирования,
            оценки радиоэлектронной обстановки`
        },
        {
            image: "icon_04.png",
            description: `Направления оптико-электронных систем и картографии`,
            text: `Программное обеспечение цифровой картографии и видеонаблюдения многофункционального комплекса наземных робототехнических средств
            Низкоуровневое программное обеспечение обработки видеосигналов, обнаружения статических и динамических объектов,
            удержания и сопровождения объектов для оптико-электронных систем робототехнических средств`
        },
        {
            image: "icon_05.png",
            description: `Направления разработки специального программного обеспечения многофункциональных робототехнических комплексов`,
            text: `Программное обеспечение управления робототехническими комплексами – воздушным движением беспилотных летательных аппаратов
            и оптико-электронными средствами`
        }
    ]
</script>

<style lang="stylus" scoped>

    .directions
        background #2F3C46
        padding-bottom 200px

        @media screen and (max-width: 660px)
            padding-bottom 100px


    .directions .section-header::before
        content ""
        width 1px
        height 1px
        box-shadow 0 0 195px 100px #2FB6C4


    .cards-directions
        display grid
        grid-template-columns repeat(auto-fill, minmax(280px, 1fr))
        grid-gap 20px
        align-items stretch
        margin-top 100px

        @media screen and (max-width: 660px)
            margin-top 0


</style>