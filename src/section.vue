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
                <wwObject v-for="topWwObj in section.data.topWwObjs" :key="topWwObj.uniqueId" :ww-object="topWwObj"></wwObject>
            </wwLayoutColumn>
        </div>

        <div class="card-container">
            <div class="container-center">
                <div class="card" v-for="(card, index) in section.data.rowCards[0]" :key="card.uniqueId">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="addElement(section.data.rowCards[0], index)" @ww-remove="removeCard(section.data.rowCards[0], index)">
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <!-- title here is banner -->
                    <div class="card-banner">
                        <wwObject tag="div" class="background" :ww-object="card.banner" ww-default="ww-image"></wwObject>
                        <wwObject tag="div" class="title-banner" :ww-object="card.title" ww-default="ww-text"></wwObject>
                    </div>

                    <div class="team-pic-container" :ww-list="card.teamPics">
                        <wwObject tag="div" class="team-pic" v-for="(teamPic, index) in card.teamPics" :key="index" :ww-object="teamPic" @ww-add="addElement(card.teamPics, index)" @ww-remove="remove(card.teamPics, index)"></wwObject>
                    </div>

                    <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="card.teamNames" class="team-names" @ww-add="add(card.teamNames, $event)" @ww-remove="remove(card.teamNames, $event)">
                        <wwObject tag="div" class="member-names" v-for="(teamName, index) in card.teamNames" :key="index" :ww-object="teamName"></wwObject>
                    </wwLayoutColumn>
                </div>
            </div>
            <!-- second row -->
            <div class="container-center">
                <div class="card" v-for="(card, index) in section.data.rowCards[1]" :key="card.uniqueId">
                    <!-- wwManager:start -->
                    <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="addElement(section.data.rowCards[1], index)" @ww-remove="removeCard(section.data.rowCards[1], index)">
                        <div class="wwi wwi-config"></div>
                    </wwContextMenu>
                    <!-- wwManager:end -->
                    <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                    <!-- <wwObject tag="div" class="card-banner" :ww-object="card.banner" ww-default="ww-image"></wwObject> -->
                    <div class="card-banner">
                        <wwObject tag="div" class="background" :ww-object="card.banner" ww-default="ww-image"></wwObject>
                        <wwObject tag="div" class="title-banner" :ww-object="card.title" ww-default="ww-text"></wwObject>
                    </div>
                    <div class="team-pic-container" :ww-list="card.teamPics">
                        <wwObject tag="div" class="team-pic" v-for="(teamPic, index) in card.teamPics" :key="index" :ww-object="teamPic" @ww-add="addElement(card.teamPics, index)" @ww-remove="remove(card.teamPics, index)"></wwObject>
                    </div>
                    <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="card.teamNames" class="team-names" @ww-add="add(card.teamNames, $event)" @ww-remove="remove(card.teamNames, $event)">
                        <wwObject tag="div" class="member-names" v-for="(teamName, index) in card.teamNames" :key="index" :ww-object="teamName"></wwObject>
                    </wwLayoutColumn>
                </div>
            </div>
            <!-- third row -->
            <!-- <div class="container-center"> -->
            <!-- <div class="card" v-for="(card, index) in section.data.rowCards[2]" :key="card.uniqueId"> -->
            <!-- wwManager:start -->
            <!-- <wwContextMenu v-if="sectionCtrl.getEditMode() == 'CONTENT'" tag="div" class="button" @ww-add="addElement(section.data.rowCards[2], index)" @ww-remove="removeCard(section.data.rowCards[2], index)">
                        <div class="wwi wwi-config"></div>
            </wwContextMenu>-->
            <!-- wwManager:end -->
            <!-- <wwObject tag="div" class="card-background" :ww-object="card.background" ww-category="background" ww-default-object-type="ww-color"></wwObject> -->
            <!-- <wwObject tag="div" class="card-banner" :ww-object="card.banner" ww-default="ww-image"></wwObject> -->
            <!-- <div class="card-banner">
                        <wwObject tag="div" class="background" :ww-object="card.banner" ww-default="ww-image"></wwObject>
                        <wwObject tag="div" class="title-banner" :ww-object="card.title" ww-default="ww-text"></wwObject>
            </div>-->
            <!-- <div class="team-pic-container" :ww-list="card.teamPics">
                        <wwObject tag="div" class="team-pic" v-for="(teamPic, index) in card.teamPics" :key="index" :ww-object="teamPic" @ww-add="addElement(card.teamPics, index)" @ww-remove="remove(card.teamPics, index)"></wwObject>
                    </div>
                    <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="card.teamNames" class="team-names" @ww-add="add(card.teamNames, $event)" @ww-remove="remove(card.teamNames, $event)">
                        <wwObject tag="div" class="member-names" v-for="(teamName, index) in card.teamNames" :key="index" :ww-object="teamName"></wwObject>
            </wwLayoutColumn>-->
            <!-- </div> -->
            <!--             </div> -->
            <!-- bottom wrapper box -->
            <div class="section-bio">
                <wwObject tag="div" class="team-bio-background" :ww-object="section.data.teamBioBackground" ww-category="background" ww-default-object-type="ww-color"></wwObject>
                <wwLayoutColumn tag="div" ww-default="ww-text" :ww-list="section.data.teamBio" @ww-add="add(section.data.teamBio, $event)" @ww-remove="remove(section.data.teamBio, $event)">
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
    name: "__COMPONENT_NAME__",
    props: {
        // The section controller object is passed to you.
        sectionCtrl: Object
    },
    data() {
        return {
            columnWidth: { width: "calc(25% - 30px)" }
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
            let row = 2
            /* Initialize section data */
            this.section.data = this.section.data || {};
            this.section.data.teamBio = this.section.data.teamBio || [];
            this.section.data.rowCards = this.section.data.rowCards || [];

            /* cards initialisation  */
            while (this.section.data.rowCards.length < row) {
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
            /* Initialize image */
            if (!this.section.data.background) {
                this.section.data.background = wwLib.wwObject.getDefault({
                    type: "ww-image",
                    data: {
                        url: "http://cdn.wewebapp.io/public/images/weweb-wp.png"
                    }
                });
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
                    { type: "ww-color", data: { backgroundColor: "white" } }
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
            this.sectionCtrl.update(this.section);
        },

        remove(list, options) {
            if (list.length > 1) {
                list.splice(options.index, 1);
                this.sectionCtrl.update(this.section);
            } else {
                return;
            }
        },

        getNewCard() {
            let self = this;
            let card = {
                background: wwLib.wwObject.getDefault({
                    type: "ww-color",
                    data: { backgroundColor: "white" }
                }),
                banner: wwLib.wwObject.getDefault({
                    type: "ww-image",
                    data: {
                        url:
                            "https://wewebapp.s3.eu-west-3.amazonaws.com/designs/19/sections/o9rN8jgKrQoNXjHa1My8WLo48AqmE3yE.png"
                    }
                }),

                title: wwLib.wwObject.getDefault({
                    type: "ww-text",
                    data: {
                        text: { fr: "Mon titre", en: "my Title" }
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
                        url:
                            "https://wewebapp.s3.eu-west-3.amazonaws.com/designs/19/sections/9dPzHjdfwZGN541N7RXvNZK6N59O9VZJ.png"
                    }
                })
            );
            card.teamNames.push(
                wwLib.wwObject.getDefault({
                    type: "ww-text",
                    data: {
                        text: { fr: "Nom", en: "Name" }
                    }
                })
            );
            return card;
        },
        getNewTeamPic() {
            return wwLib.wwObject.getDefault({
                type: "ww-image",
                data: {
                    url:
                        "https://wewebapp.s3.eu-west-3.amazonaws.com/designs/19/sections/9dPzHjdfwZGN541N7RXvNZK6N59O9VZJ.png"
                    /* image: "http://cdn.wewebapp.io/public/images/weweb-wp.png" */
                }
            });
        },


        /* not tested */
        addElementBefore(list, index) {
            if (index > 0) {
                list.splice(index - 1, 0, this.getNewCard());
                this.sectionCtrl.update(this.section);
            } else {
                list.splice(index, 0, this.getNewCard());
                this.sectionCtrl.update(this.section);
            }
        },
        /* not tested */
        addElementAfter(list, index) {
            list.splice(index + 1, 0, this.getNewCard());
            this.sectionCtrl.update(this.section);
        },

        removeCard(list, index) {
            if (list.length > 1) {
                list.splice(index, 1);
                this.sectionCtrl.update(this.section);
            } else {
                return;
            }
        },

        addElement(list, index) {
            let newCopie = JSON.parse(JSON.stringify(list[0]))
            wwLib.wwUtils.changeUniqueIds(newCopie)
            list.splice(index, 0, newCopie);
            this.sectionCtrl.update(this.section);
        },

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
.team_A .header-banner-logo {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
}
.team_A .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.team_A .member-names {
    margin-top: 10px;
}
.team_A .team-names {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
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
    width: 90%;
    height: 50px;
    margin-bottom: 10%;
    overflow: hidden;
}
.team_A .curb_your_expectation {
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
}
.team_A .title-banner {
    margin-top: 10px;
}
.team_A .card {
    position: relative;
    width: 100%;
    margin: 30px 15px;
    min-height: 50px;
    border-radius: 7px;
}
.team_A .card .content {
    position: relative;
}
.team_A .section-bio {
    position: relative;
    width: 100%;
    min-height: 60px;
    margin-top: 100px;
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
    width: 100%;
    min-height: 350px;
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
    width: 25%;
    height: 25%;
    border-radius: 100%;
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
.team_A .member-names {
    margin-top: 10px;
}
.team_A .card {
    position: relative;
    width: 100%;
    min-height: 50px;
    border-radius: 7px;
}

.team_A .team-pic-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.team_A .container-center {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 350px;
    flex-direction: column;
}

@media (min-width: 768px) {
    .team_A .team-pic {
        width: 35%;
        height: 35%;
    }
    .team_A .card-banner {
        width: 100%;
        height: 30%;
        margin-bottom: 0;
    }
    .team_A .card {
        position: relative;
        width: 33%;
        margin: 30px;
        min-height: 50px;
        border-radius: 7px;
    }

    .team_A .team-pic-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .team_A .container-center {
        display: flex;
        justify-content: center;
        width: 100%;
        min-height: 350px;
        flex-direction: row;
    }
}

@media (min-width: 992px) {
    .team_A .card {
        position: relative;
        width: 30%;
        margin: 30px;
        min-height: 50px;
        border-radius: 7px;
    }

    .team_A .team-pic-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .team_A .container-center {
        display: flex;
        justify-content: center;
        width: 80%;
        min-height: 350px;
    }
}

@media (min-width: 1400px) {
    .team_A .card {
        position: relative;
        width: 25%;
        margin: 30px;
        min-height: 50px;
        border-radius: 7px;
    }

    .team_A .team-pic-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .team_A .container-center {
        display: flex;
        justify-content: center;
        width: 50%;
        min-height: 350px;
    }
}
</style>
