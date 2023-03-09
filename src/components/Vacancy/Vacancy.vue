<template>
    <section id="section-vacancies" class="vacancies">

        <div class="container">

            <h2 class="section-header subheader-vacancies">Вакансии</h2>

            <div class="vacancy-list">

                <Item v-for="(item, index) in state"
                      :key          ="index"
                      :count        ="index + 1"
                      :title        ="item.title"
                      :description  ="item.description"
                      :text         ="item.text"
                      :isLast       ="index + 1 === state.length"
                >
                </Item>

            </div>
        </div>
    </section>


</template>

<script setup>
    import Item from "@/Vacancy/Item.vue"
    import { onMounted } from "vue"

    onMounted(() => { console.log("Vacancy mounted") })

    let state = [
        {
            title: "Инженер - программист API SolidWorks+Tflex docs",
            description: "Требования",
            text: "ВПО. Опыт программирования или базовые знания API SolidWorks+Tflex docs"
        },

        {
            title: "Инженер - программист компьютерных систем",
            description: "Требования",
            text: "ВПО. Знания, практические навыки и наличие портофолио разработок на С#"
        },

        {
            title: "Инженер - программист МК",
            description: "Требования",
            text: "ВПО. Знания и опыт разработки аппаратной части и программирования прикладных разработок на микроконтроллерах AT, STM, BK и аналогичных."
        },

        {
            title: "Техник - программист МК",
            description: "Требования",
            text: "СПО. Знания и опыт разработки аппаратной части и программирования прикладных разработок на микроконтроллерах AT, STM, BK и аналогичных."
        },

        {
            title: "Инженер-конструктор РЭА и П",
            description: "Требования",
            text: "ВПО. Базовое образование, знания и практические навыки в разработке, конструировании или изготовлении РЭА."
        },

        {
            title: "Инженер - электронщик",
            description: "Требования",
            text: "ВПО. Базовое образование, знания в области электроники."
        },

        {
            title: "Техник испытатель РЭА и П",
            description: "Требования",
            text: "СПО. Основные знания знания в области электроники."
        },

        {
            title: "Наладчик-оператор ЧПУ",
            description: "Требования",
            text: "СПО. Образование, опыт работы на обрабатывающих центрах с ЧПУ."
        },

        {
            title: "Инженер - программист ЧПУ",
            description: "Требования",
            text: "ВПО. Образование, представление о програмиировании ЧПУ."
        },

        {
            title: "Экономист",
            description: "Требования",
            text: "ВПО. Образование, знания. Опыт работы экономистом(приветствуется)."
        }

    ]
</script>

<style lang="stylus" scoped>

    .vacancies
        background linear-gradient(#C5F2FF 0.83%, #C5F2FF 100%, #C5F2FF 100%)
        position relative
        padding-bottom 100px


    .subheader-vacancies
        color #2F3C44


    .vacancy-list

        @media screen and (max-width: 1500px)
            margin-left 0

</style>