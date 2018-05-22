<template>
    <footer class="cnode_footer">
        <section class="cnode_footer-wrap">
            <div v-for="(item,index) in pageCount" :key="index" class="cnode_footer-wrap--page" :class="{'cnode_footer-wrap--active': active === item.label}" @click='gotoPage(item.label)'>{{item.value}}</div>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'nv-page',
    data() {
        return {

        }
    },
    props: {
        pageCount: {
            type: Array,
            default() {
                return [];
            },
        },
        active: {
            type: String,
            default: '',
        },
    },
    methods: {
        gotoPage(label) {
            this.$emit('gotoPage', label);
        },
    },
}
</script>

<style lang="less" scoped>
.cnode_footer{
    width: 80%;
    height: .5rem;
    margin: .3rem auto;
    &-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &--page{
            font-size: .25rem;
            // border: 1px solid #948e8e;
            // border-radius: .08rem;
            padding: .1rem .05rem;
        }
        &--active{
            color:rgb(128,189,1);
        }
    }
}
</style>


