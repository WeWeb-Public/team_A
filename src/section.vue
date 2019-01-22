<!-- This is a Vue.js single file component. -->
<!-- Check the Vue.js doc here :  -->
<!-- https://vuejs.org/v2/guide/ -->

<!-- This is your HTML -->
<template>
    <div class="team_A">
        <!-- wwManager:start -->
        <wwSectionEditMenu v-bind:sectionCtrl="sectionCtrl"></wwSectionEditMenu>
        <!-- wwManager:end -->
        <wwObject class="background" v-bind:ww-object="section.data.background" ww-category="background"></wwObject>

        <!--TOP WWOBJS-->
        <div class="top-ww-objs">
            <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="section.data.topWwObjs" class="top-ww-obj" @ww-add="add(section.data.topWwObjs, $event)" @ww-remove="remove(section.data.topWwObjs, $event)">
                <wwObject v-for="topWwObj in section.data.topWwObjs" :key="topWwObj.uniqueId" v-bind:ww-object="topWwObj"></wwObject>
            </wwLayoutColumn>
        </div>

        <div class="container">
            <wwLayoutColumn class="container-center" tag="div" :ww-list="section.data.rowCards[0]" @ww-add="addCard(section.data.firstRowCards, $event)" @ww-remove="removeCard(section.data.firstRowCards, $event)">
                <div class="card" v-for="(card, index) in section.data.rowCards[0]" :key="card.uniqueId" :style="columnWidth">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="test()" ww-add-after ww-add-before="add(section.data.rowCards[0], index, -1)" @ww-remove="removeCard(section.data.rowCards[0], index)" ww-options>
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <wwObject tag="div" class="card-title" :ww-object="card.title" ww-default="ww-image"></wwObject>

                    <wwObject tag="div" class="team-pic" :ww-object="card.teamPic" v-for="(teamPic, index) in card.teamPic" :key="index" @ww-add></wwObject>
                    <wwObject tag="div" class="team-names" :ww-object="card.teamNames" v-for="(teamName, index) in card.teamNames" :key="index"></wwObject>
                </div>
            </wwLayoutColumn>

            <wwLayoutColumn class="container-center" tag="div" :ww-list="section.data.rowCards[1]" @ww-add="addCard(section.data.secondRowCards, $event)" @ww-remove="removeCard(section.data.secondRowCards, $event)">
                <div class="card" v-for="card in section.data.rowCards[1]" :key="card.uniqueId" :style="columnWidth">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="test()" ww-add-after ww-add-before="add(section.data.rowCards[0], index, -1)" @ww-remove="removeCard(section.data.rowCards[0], index)" ww-options>
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <wwObject tag="div" class="card-title" :ww-object="card.title" ww-default="ww-image"></wwObject>

                    <wwObject tag="div" class="team-pic" :ww-object="card.teamPic" v-for="(teamPic, index) in card.teamPic" :key="index"></wwObject>
                    <wwObject tag="div" class="team-names" :ww-object="card.teamNames" v-for="(teamName, index) in card.teamNames" :key="index"></wwObject>
                </div>
            </wwLayoutColumn>

            <wwLayoutColumn class="container-center" tag="div" :ww-list="section.data.rowCards[2]" @ww-add="addCard(section.data.thirdRowCards, $event)" @ww-remove="removeCard(section.data.thirdRowCards, $event)">
                <div class="card" v-for="card in section.data.rowCards[2]" :key="card.uniqueId" :style="columnWidth">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="test()" ww-add-after ww-add-before="add(section.data.rowCards[0], index, -1)" @ww-remove="removeCard(section.data.rowCards[0], index)" ww-options>
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <wwObject tag="div" class="card-title" :ww-object="card.title" ww-default="ww-image"></wwObject>

                    <wwObject tag="div" class="team-pic" :ww-object="card.teamPic" v-for="(teamPic, index) in card.teamPic" :key="index"></wwObject>
                    <wwObject tag="div" class="team-names" :ww-object="card.teamNames" v-for="(teamName, index) in card.teamNames" :key="index"></wwObject>
                </div>
            </wwLayoutColumn>
            <!-- <wwLayoutColumn class="container-center" tag="div" :ww-list="section.data.cards" @ww-add="addCard($event)" @ww-remove="removeCard($event)">
                <div class="card" v-for="card in section.data.cards" :key="card.uniqueId" :style="columnWidth">
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <wwObject tag="div" class="card-title" :ww-object="card.title" ww-default="ww-image"></wwObject>
                    <wwLayoutColumn tag="div" class="team-pic" :ww-list="card.teamPic" ww-default="ww-text" @ww-add="add(card.teamPic, $event)" @ww-remove="remove(card.teamPic, $event)">
                        <wwObject tag="div" class :ww-object="teamPic" v-for="(teamPic, index) in card.teamPic" :key="index"></wwObject>
                    </wwLayoutColumn>
                    <wwLayoutColumn tag="div" class="team-names" :ww-list="card.teamNames" ww-default="ww-text" @ww-add="add(card.teamNames, $event)" @ww-remove="remove(card.teamNames, $event)">
                        <wwObject tag="div" class :ww-object="teamName" v-for="(teamName, index) in card.teamNames" :key="index"></wwObject>
                    </wwLayoutColumn>
                </div>
            </wwLayoutColumn>-->
        </div>
        <div class="section-bio">
            <wwObject class="team-bio-background" v-bind:ww-object="section.data.teamBioBackground" ww-category="background"></wwObject>
            <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="section.data.teamBio" @ww-add="add(section.data.teamBio, $event)" @ww-remove="remove(section.data.teamBio, $event)">
                <wwObject v-for="(text, index) in section.data.teamBio" :key="index" :ww-object="text"></wwObject>
            </wwLayoutColumn>
        </div>

        <!--BOTTOM WWOBJS-->
        <div class="bottom-ww-objs">
            <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="section.data.bottomWwObjs" class="top-ww-obj" @ww-add="add(section.data.bottomWwObjs, $event)" @ww-remove="remove(section.data.bottomWwObjs, $event)">
                <wwObject v-for="bottomWwObj in section.data.bottomWwObjs" :key="bottomWwObj.uniqueId" v-bind:ww-object="bottomWwObj"></wwObject>
            </wwLayoutColumn>
        </div>
    </div>
</template>

<!-- This is your Javascript -->
<!-- ✨ Here comes the magic ✨ -->
<script>
export default {
    name: "team_A",
    props: {
        // The section controller object is passed to you.
        sectionCtrl: Object
    },
    data() {
        return {
            columnWidth: { width: "calc(33% - 30px)" }
            //bioText: null
        };
    },
    computed: {
        //Get the section object here !
        // It contains all the info and data about the section
        // Use it has you like !
        section() {
            return this.sectionCtrl.get();
        }
    },
    created() {
        this.initData();
    },
    methods: {
        test() {
            console.log("lalalala");
        },
        initData() {
            let needUpdate = false;

            //Initialize section data
            this.section.data = this.section.data || {};
            this.section.data.teamBio = this.section.data.teamBio || [];
            //this.section.data.container = this.section.data.container || [];

            this.section.data.rowCards = this.section.data.rowCards || [];
            while (this.section.data.rowCards.length < 3) {
                let cards = [];
                for (
                    let i = 0;
                    i < this.section.data.rowCards.length + 1;
                    i++
                ) {
                    cards.push(this.getNewCard());
                }

                this.section.data.rowCards.push(cards);
                needUpdate = true;
            }

            //Initialize image
            if (!this.section.data.background) {
                this.section.data.background = wwLib.wwObject.getDefault({
                    type: "ww-image",
                    data: {
                        url: "http://cdn.wewebapp.io/public/images/weweb-wp.png"
                    }
                });
            }
            if (_.isEmpty(this.section.data.firstRowCards)) {
                this.section.data.firstRowCards = [];
                needUpdate = true;
            }
            /*  if (_.isEmpty(this.section.data.cards)) {
                this.section.data.cards = [];
                needUpdate = true;
            } */

            /*  if (_.isEmpty(this.section.data.cards)) {
                let row = 3;

                for (let i = 0; i < row; i++) {
                    this.section.data.cards.push(this.getNewCard());
                }
                console.log(
                    "this.section.data.cards:",
                    this.section.data.cards
                );
                needUpdate = true;
            } */
            if (!this.section.data.teamBio) {
                this.section.data.teamBio = wwLib.wwObject.getDefault({
                    type: "ww-text",
                    data: {}
                });
                needUpdate = true;
            }
            if (!this.section.data.teamBioBackground) {
                this.section.data.teamBioBackground = wwLib.wwObject.getDefault(
                    { type: "ww-color", data: { color: "grey" } }
                );
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.topWwObjs)) {
                this.section.data.topWwObjs = [];
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.bottomWwObjs)) {
                this.section.data.bottomWwObjs = [];
                needUpdate = true;
            }
            if (needUpdate) {
                this.sectionCtrl.update(this.section);
            }
        },

        add(list, options) {
            console.log("inside add", options);
            list.splice(options.index, 0, options.wwObject);
            this.sectionCtrl.update(this.section);
        },

        remove(list, options) {
            list.splice(options.index, 1);
            this.sectionCtrl.update(this.section);
        },

        getNewCard() {
            console.log("inside getNewCard");
            let self = this;
            let card = {
                background: wwLib.wwObject.getDefault({
                    type: "ww-color",
                    data: { color: "grey" }
                }),
                title: wwLib.wwObject.getDefault({
                    type: "ww-image",
                    data: {
                        url: "http://cdn.wewebapp.io/public/images/weweb-wp.png"
                    }
                }),
                teamPic: [],
                teamNames: [],
                uniqueId: wwLib.wwUtils.getUniqueId()
            };
            return card;
        },

        addCard(list, options) {
            console.log("inside addCard");
            list.splice(options.index, 0, this.getNewCard(options.wwObject));
            this.sectionCtrl.update(this.section);
        },
        removeCard(list, options) {
            list.splice(options.index, 1);
            this.sectionCtrl.update(this.section);
        }
        /* addCard(options) {
            console.log("inside addCard");
            this.section.data.cards.splice(
                options.index,
                0,
                this.getNewCard(options.wwObject)
            );
            this.sectionCtrl.update(this.section);
        },
        removeCard(options) {
            this.section.data.cards.splice(options.index, 1);
            this.sectionCtrl.update(this.section);
        } */
    }
};
</script>

<!-- This is your CSS -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add lang="scss" or others to use computed CSS -->
<style scoped>
.team_A {
    position: relative;
}

.team_A .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.team_A .card-background {
    margin-top: 5px;
    pointer-events: all;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}

.team_A .card-title {
    position: relative;
    padding: 0px;
    width: 100%;
    height: 10%;
}

.team_A .card {
    margin-right: 15px;
    position: relative;
    margin: 30px 15px;
    background-color: white;
    min-height: 50px;
    box-shadow: 0 10px 40px 0 rgba(113, 124, 137, 0.2);
    padding: 0 45px;
    border-radius: 7px;
}
.team_A .card .content {
    position: relative;
}
/* .team_A .team-bio-background {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
} */

.team_A .container-center {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.team_A .section-bio {
    position: absolute;
    bottom: 50px;
    width: 100%;
}
.top-ww-objs,
.bottom-ww-objs {
    position: relative;
    margin-top: 50px;
}

.team_A .button {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 35px;
    height: 35px;
    background-color: orange;
    border-radius: 50%;
    color: white;
    z-index: 2;
    box-shadow: 0 0 5px -1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
}
</style>
