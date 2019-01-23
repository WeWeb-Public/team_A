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

        <div class="card-container">
            <div class="container-center">
                <div class="card" v-for="(card, index) in section.data.rowCards[0]" :key="card.uniqueId">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="addCard(section.data.rowCards[0], index)" @ww-remove="removeCard(section.data.rowCards[0], index)">
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>-->
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <!-- title here is banner -->
                    <wwObject tag="div" class="card-banner" :ww-object="card.banner" ww-default="ww-image"></wwObject>

                    <div :ww-list="card.teamPics" @ww-add="addPicToTeam(card.teamPics, $event)" @ww-remove="remove(card.teamPics, index)">
                        <wwObject tag="div" class="team-pic" v-for="(teamPic, index) in card.teamPics" :key="index" :ww-object="teamPic" @ww-add="addPicToTeam(card.teamPics, index)" @ww-remove="remove(card.teamPics, index)"></wwObject>
                    </div>

                    <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="card.teamNames" class="top-ww-obj" @ww-add="add(card.teamNames, $event)" @ww-remove="remove(card.teamNames, $event)">
                        <wwObject tag="div" v-for="(teamName, index) in card.teamNames" :key="index" :ww-object="teamName"></wwObject>
                    </wwLayoutColumn>
                </div>
            </div>
            <!-- second row -->
            <div class="container-center">
                <div class="card" v-for="card in section.data.rowCards[1]" :key="card.uniqueId">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="addCard(section.data.rowCards[1], index)" @ww-remove="removeCard(section.data.rowCards[1], index)">
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <wwObject tag="div" class="card-banner" :ww-object="card.banner" ww-default="ww-image"></wwObject>
                    <div :ww-list="card.teamPics">
                        <wwObject tag="div" class="team-pic" v-for="(teamPic, index) in card.teamPics" :key="index" :ww-object="teamPic" @ww-add="addPicToTeam(card.teamPics, index)" @ww-remove="remove(card.teamPics, index)"></wwObject>
                    </div>
                    <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="card.teamNames" class="top-ww-obj" @ww-add="add(card.teamNames, $event)" @ww-remove="remove(card.teamNames, $event)">
                        <wwObject tag="div" v-for="(teamName, index) in card.teamNames" :key="index" :ww-object="teamName"></wwObject>
                    </wwLayoutColumn>
                    <!-- <div class="team-names" :ww-list="card.teamNames">
                        <wwObject tag="div" v-for="(teamName, index) in card.teamNames" :key="index" :ww-object="teamName"></wwObject>
                    </div>-->
                </div>
            </div>
            <!-- third row -->
            <div class="container-center">
                <div class="card" v-for="card in section.data.rowCards[2]" :key="card.uniqueId">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="addCard(section.data.rowCards[2], index)" @ww-remove="removeCard(section.data.rowCards[2], index)">
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <wwObject tag="div" class="card-banner" :ww-object="card.banner" ww-default="ww-image"></wwObject>
                    <!-- class="team-pic-container" -->
                    <div :ww-list="card.teamPics">
                        <wwObject tag="div" class="team-pic" v-for="(teamPic, index) in card.teamPics" :key="index" :ww-object="teamPic" @ww-add="addPicToTeam(card.teamPics, index)" @ww-remove="remove(card.teamPics, index)"></wwObject>
                    </div>
                    <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="card.teamNames" class="top-ww-obj" @ww-add="add(card.teamNames, $event)" @ww-remove="remove(card.teamNames, $event)">
                        <wwObject tag="div" v-for="(teamName, index) in card.teamNames" :key="index" :ww-object="teamName"></wwObject>
                    </wwLayoutColumn>
                </div>
            </div>
            <!-- bottom wrapper box -->
            <div class="section-bio">
                <wwObject tag="div" class="team-bio-background" :ww-object="section.data.teamBioBackground" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="section.data.teamBio" @ww-add="add(section.data.teamBio, index)" @ww-remove="remove(section.data.teamBio, index)">
                    <wwObject v-for="(text, index) in section.data.teamBio" :key="index" :ww-object="text"></wwObject>
                </wwLayoutColumn>
            </div>
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
            /*    if (_.isEmpty(this.section.data.firstRowCards)) {
                this.section.data.firstRowCards = [];
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
            list.splice(options.index, 0, options.wwObject);
            this.sectionCtrl.update(this.section); //FIXME: the update don't allow for text to be added
        },

        remove(list, options) {
            list.splice(options.index, 1);
            this.sectionCtrl.update(this.section);
        },

        getNewCard() {
            let self = this;
            let card = {
                background: wwLib.wwObject.getDefault({
                    type: "ww-color",
                    data: { color: "grey" }
                }),
                banner: wwLib.wwObject.getDefault({
                    type: "ww-image",
                    data: {
                        url: "http://cdn.wewebapp.io/public/images/weweb-wp.png"
                    }
                }),
                teamPics: [],
                teamNames: [],
                uniqueId: wwLib.wwUtils.getUniqueId()
            };
            card.teamPics.push(
                wwLib.wwObject.getDefault({
                    type: "ww-image",
                    data: {
                        url: "http://cdn.wewebapp.io/public/images/weweb-wp.png"
                    }
                })
            );
            card.teamNames.push(
                wwLib.wwObject.getDefault({
                    type: "ww-text",
                    data: {}
                })
            );
            return card;
        },
        getNewTeamPic() {
            return wwLib.wwObject.getDefault({
                type: "ww-image",
                data: {
                    url: "http://cdn.wewebapp.io/public/images/weweb-wp.png"
                }
            });
        },

        addCard(list, index) {
            list.splice(index, 0, this.getNewCard());
            this.sectionCtrl.update(this.section);
        },

        /* not tested */
        addCardBefore(list, index) {
            if (index > 0) {
                list.splice(index - 1, 0, this.getNewCard());
                this.sectionCtrl.update(this.section);
            } else {
                list.splice(index, 0, this.getNewCard());
                this.sectionCtrl.update(this.section);
            }
        },
        /* not tested */
        addCardAfter(list, index) {
            list.splice(index + 1, 0, this.getNewCard());
            this.sectionCtrl.update(this.section);
        },

        removeCard(list, options) {
            list.splice(options.index, 1);
            this.sectionCtrl.update(this.section);
        },
        addPicToTeam(list, index) {
            list.push(this.getNewTeamPic());
            this.sectionCtrl.update(this.section); //FIXME: strange behavior can't add to an array
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

.team_A .card-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 1200px;
    align-items: center;
}
.team_A .card-background {
    pointer-events: all;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}

.team_A .card-banner {
    position: relative;
    width: 100%;
    height: 30%;
    overflow: hidden;
}

.team_A .card {
    position: relative;
    width: 25%;
    margin: 30px 15px;
    background-color: white;
    min-height: 50px;
    box-shadow: 0 10px 40px 0 rgba(113, 124, 137, 0.2);
    border-radius: 7px;
}
.team_A .card .content {
    position: relative;
}
.team_A .section-bio {
    position: relative;
    width: 100%;
    height: 20%;
    bottom: 0;
}
.team_A .team-bio-background {
    position: absolute;
    pointer-events: all;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.team_A .container-center {
    display: flex;
    justify-content: center;
    width: 30%;
}

.top-ww-objs,
.bottom-ww-objs {
    position: relative;
}
.team_A .team-pic-continer {
    display: flex;
    flex-direction: row;
}
.team_A .team-pic {
    width: 35%;
    height: 35%;
    margin: 5px;
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

@media (min-width: 768px) {
    .team_A .card-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
    }
    .team_A .card-background {
        pointer-events: all;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
    }

    .team_A .card-banner {
        position: relative;
        width: 100%;
        height: 30%;
        overflow: hidden;
    }

    .team_A .card {
        position: relative;
        width: 25%;
        margin: 30px 15px;
        background-color: white;
        min-height: 50px;
        box-shadow: 0 10px 40px 0 rgba(113, 124, 137, 0.2);
        border-radius: 7px;
    }
    .team_A .card .content {
        position: relative;
    }
    .team_A .section-bio {
        position: relative;
        width: 100%;
        height: 20%;
        bottom: 0;
    }
    .team_A .team-bio-background {
        position: absolute;
        pointer-events: all;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .team_A .container-center {
        display: flex;
        justify-content: center;
        width: 30%;
    }

    .top-ww-objs,
    .bottom-ww-objs {
        position: relative;
    }
    .team_A .team-pic-continer {
        display: flex;
        flex-direction: row;
    }
    .team_A .team-pic {
        width: 35%;
        height: 35%;
        margin: 5px;
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
}
</style>
