<template>
  <div>
    <div class="search-box">
      <div class="search-btn" @click="onShow" v-if="!isShow">
        <Icon class="icon-style" @click="clickSearch" type="ios-search" />
        <span class="search-btn-text">搜索</span>
      </div>
      <div v-if="isShow">
        <Input ref="input" class="search-btn-text" placeholder="搜索" @on-blur="onBlur" @on-click="onClick" @on-enter="onEnter" icon="close-circled" v-model="searchKey" size="large"></Input>
      </div>
    </div>
    <div class="add-box">
      <div class="add-btn">
        <Icon class="add-btn-icon" type="android-add"></Icon>
        <span class="add-btn-text">新建</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchKey: "",
      isShow: false,
    };
  },
  methods: {
    onShow() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        //input 自动获取焦点
        this.$nextTick(() => {
          this.$refs.input.focus()
        });
      }
      this.searchKey = "";
      this.clickSearch();
    },
    onBlur() {
      if (this.searchKey == "") {
        this.isShow = !this.isShow
      }
    },
    onClick() {
      this.searchKey == ""
      this.isShow = !this.isShow
    },
    onEnter() {
      // 搜索触发
    },
    clickSearch() {
      let param = {
        moduleCode: "xmzl_zxjd",
        keyword: this.searchKey.trim(),
      };
    },
  },
};
</script>

<style lang="less" scoped>
.search-box {
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  // display: flex
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;

  .ivu-input {
    border-radius: 18px !important;
  }

  .search-btn {
    flex: 1;
    height: 36px;
    background-color: #404040;
    border-radius: 18px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    .icon-style {
      font-size: large;
    }

    .search-btn-text {
      margin-left: 5px;
    }
  }
}

.add-box {
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .add-btn {
    flex: 1;
    height: 36px;
    background: #00a82d;
    border-radius: 18px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: left;

    .add-btn-icon {
      color: #ffffff;
      font-size: large;
    }

    .add-btn-text {
      margin-left: 5px;
      color: #ffffff;
      font-size: 14px;
    }
  }
}
</style>
