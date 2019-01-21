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
            <wwLayoutColumn tag="div" ww-default="ww-image" :ww-list="section.data.topWwObjs" class="top-ww-obj" @ww-add="add(section.data.topWwObjs, $event)" @ww-remove="remove(section.data.topWwObjs, $event)">
                <wwObject v-for="topWwObj in section.data.topWwObjs" :key="topWwObj.uniqueId" v-bind:ww-object="topWwObj"></wwObject>
            </wwLayoutColumn>
        </div>

        <div class="container">
            <div class="card" v-for="(row, rowindex) in section.data.cards" :key="rowindex" v-bind:style="columnWidth">
                <div v-for="(col, colindex) in row" :key="colindex">
                    <div>
                        <wwObject class="background" v-bind:ww-object="col.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                        <wwLayoutColumn tag="div" ww-default="ww-image" :ww-list="col.contents" class="content" @ww-add="add(col.contents, $event)" @ww-remove="remove(col.contents, $event)">
                            <wwObject v-for="(content, index) in col.contents" :key="index" v-bind:ww-object="content"></wwObject>
                        </wwLayoutColumn>
                    </div>
                </div>
            </div>
            <!-- <div class="card" v-for="(card, index) in section.data.cards" :key="index" v-bind:style="columnWidth">
                <div>
                    <wwObject class="background" v-bind:ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <wwLayoutColumn tag="div" ww-default="ww-image" :ww-list="card.contents" class="content" @ww-add="add(card.contents, $event)" @ww-remove="remove(card.contents, $event)">
                        <wwObject v-for="(content, index) in card.contents" :key="index" v-bind:ww-object="content"></wwObject>
                        <wwObject v-for="content in card.contents" :key="content.uniqueId" v-bind:ww-object="content">{{ content }}</wwObject>
                    </wwLayoutColumn>
                </div>
            </div>-->
            <div class="section-bio">
                <wwObject class="team-bio-background" v-bind:ww-object="section.data.teamBioBackground" ww-category="background"></wwObject>
                <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="section.data.teamBio" class @ww-add="add(section.data.teamBio, $event)" @ww-remove="remove(section.data.teamBio, $event)">
                    <wwObject v-for="(text, index) in section.data.teamBio" :key="index" :ww-object="text"></wwObject>
                </wwLayoutColumn>
            </div>
        </div>

        <!--<div class="content-container">
            <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="activeFeature.contents" class="feature-content" @ww-add="add(activeFeature.contents, $event)" @ww-remove="remove(activeFeature.contents, $event)">
                <wwObject v-for="content in activeFeature.contents" :key="content.uniqueId" :ww-object="content"></wwObject>
            </wwLayoutColumn>
        </div>-->
        <!--BOTTOM WWOBJS-->
        <!--BOTTOM WWOBJS-->
        <div class="bottom-ww-objs">
            <wwLayoutColumn tag="div" ww-default="ww-image" :ww-list="section.data.bottomWwObjs" class="top-ww-obj" @ww-add="add(section.data.bottomWwObjs, $event)" @ww-remove="remove(section.data.bottomWwObjs, $event)">
                <wwObject v-for="bottomWwObj in section.data.bottomWwObjs" :key="bottomWwObj.uniqueId" v-bind:ww-object="bottomWwObj"></wwObject>
            </wwLayoutColumn>
        </div>
        <!--  <div class="content">
       
            <wwObject v-bind:ww-object="section.data.helloWorld"></wwObject>
        </div>-->
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
            columnWidth: { width: "calc(25% - 30px)" }
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
        initData() {
            let needUpdate = false;

            //Initialize section data
            this.section.data = this.section.data || {};
            this.section.data.teamBio = this.section.data.teamBio || [];

            //Initialize image
            if (!this.section.data.background) {
                this.section.data.background = wwLib.wwObject.getDefault({
                    type: "ww-image",
                    data: {
                        url: "http://cdn.wewebapp.io/public/images/weweb-wp.png"
                    }
                });
            }
            if (_.isEmpty(this.section.data.cards)) {
                this.section.data.cards = [];
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.tmp)) {
                this.section.data.tmp = [];
                needUpdate = true;
            }
            if (_.isEmpty(this.section.data.tmp)) {
                let cards = 4;

                for (let i = 0; i < cards; i++) {
                    this.section.data.tmp.push({
                        background: wwLib.wwObject.getDefault({
                            type: "ww-color",
                            data: { color: "white" }
                        }),
                        contents: []
                    });
                }
                console.log("this.section.data.tmp:", this.section.data.tmp);
                needUpdate = true;
            }

            if (_.isEmpty(this.section.data.cards)) {
                let row = 3;
                let col = 1;

                // expand to have the correct amount or rows
                for (let i = 0; i < row; i++) {
                    this.section.data.cards.push([]);
                }

                // expand all rows to have the correct amount of cols
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        this.section.data.cards[i].push({
                            background: wwLib.wwObject.getDefault({
                                type: "ww-color",
                                data: { color: "grey" }
                            }),
                            contents: []
                        });
                    }
                    ++col;
                }
                console.log(
                    "this.section.data.cards:",
                    this.section.data.cards
                );

                /*      for (let i = 0; i < row; i++) {
                    for (
                        let j = this.section.data.cards[i].length;
                        j < col;
                        j++
                    ) {
                        this.section.data.cards[i].push(0);
                    }
                } */
                /*  for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        this.section.data.cards[i].push({
                            background: wwLib.wwObject.getDefault({
                                type: "ww-color",
                                data: { color: "grey" }
                            }),
                            contents: []
                        });
                    }
                    ++col;
                } */
                needUpdate = true;
            }
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
            console.log(list);
            list.splice(options.index, 0, options.wwObject);
            this.sectionCtrl.update(this.section);
        },

        remove(list, options) {
            list.splice(options.index, 1);
            this.sectionCtrl.update(this.section);
        }
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

.top-ww-objs,
.bottom-ww-objs {
    position: relative;
    margin-top: 50px;
}
</style>
