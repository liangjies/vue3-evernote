<template>
  <div class="home">
    <Table class="info-table" border stripe :columns="tableColumn" :data="tableData"></Table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  created() {
    if (this.$store.getters['isLogin'] === false) {
      this.$Message.error('没有权限-请先登录')
      this.$router.push({
        path: '/login'
      })
    } else {
      this._getAuth()
    }
  },
  data() {
    return {
      tableColumn: [
        {
          title: '信息',
          key: 'information'
        },
        {
          title: '详情',
          key: 'detail'
        }
      ],
      tableData: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    _getAuth() {
      this.tableData = [
        {
          information: '账户类型',
          detail: '云笔记免费账户'
        },
        {
          information: '用户名',
          detail: this.$store.getters['username']
        },
        {
          information: '设备',
          detail: '网页端访问云笔记'
        }
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  margin-left: 240px;
  // .info-table
  // margin 30px
}
</style>
