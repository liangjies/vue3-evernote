<template>
  <el-dialog v-model="dialogFormVisible" width="98%" top="1vh" class="dialog-type">
    <div class="modal-body">
      <div class="history-list-wrap pull-left">
        <div class="history-list-header">
          历史记录 (<span class="history-num">2</span>)
        </div>
        <div class="history-list list-group">
          <a class="list-group-item active" data-index="0"
            ><span class="badge">#1</span>2022-04-03 19:18:16</a
          ><a class="list-group-item" data-index="1"
            ><span class="badge">#2</span>2022-04-03 19:17:55</a
          >
        </div>
      </div>
      <div class="history-content-wrap pull-left">
        <div class="history-content-header">
          <el-button class="button-type" type="primary">从该版本还原</el-button>
        </div>
        <div class="history-content">
          <div>
            <h2>xLEANOTE, NOT JUST A NOTEPAD!&nbsp;&nbsp;<br /></h2>
            <p>Welcome to Leanote!&nbsp;</p>
            <p>Features:</p>
            <ul>
              <li>
                <p>Geek paradise:&nbsp;Wanna Markdown? We support it!</p>
              </li>
              <li>
                <p>
                  Private notebook: Organize your knowledge &amp; Snap every
                  moment
                </p>
              </li>
              <li>
                <p>Awesome blog: Create unique themes &amp; Share your ideas</p>
              </li>
              <li><p>Collaboration: Learn together with your friends</p></li>
              <li>...</li>
            </ul>
            <p>Related links:</p>
            <ul>
              <li>
                <p>
                  Help us improve at&nbsp;<a
                    href="https://github.com/leanote"
                    target="_blank"
                    data-mce-href="https://github.com/leanote"
                    >GitHub</a
                  >
                </p>
              </li>
              <li>
                <a
                  href="http://leanote.leanote.com/post/Leanote-manual-project"
                  target="_blank"
                  data-mce-href="http://leanote.leanote.com/post/Leanote-manual-project"
                  >How to use Leanote</a
                >
              </li>
              <li>
                <a
                  href="http://app.leanote.com"
                  target="_blank"
                  data-mce-href="http://app.leanote.com"
                  >Leanote App</a
                >
              </li>
              <li>
                <a
                  href="http://bbs.leanote.com"
                  target="_blank"
                  data-mce-href="http://bbs.leanote.com"
                  >Discussion</a
                >
              </li>
              <li><p>QQ Group: 326073529</p></li>
            </ul>
            <p>
              Any questions, please feel free to email us:
              <a
                href="mailto:leanote@leanote.com"
                data-mce-href="mailto:leanote@leanote.com"
                >leanote@leanote.com</a
              >
            </p>
            <hr />
            <h2>LEANOTE, 不只是笔记！&nbsp;</h2>
            <p>欢迎来到Leanote!</p>
            <p>
              Leanote特性: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
            </p>
            <ul>
              <li>笔记: Leanote是一个笔记, 你可以用它来管理自己的知识.</li>
              <li>
                博客:&nbsp;将笔记公开,&nbsp;Leanote成为你的博客,
                并且有多款博客主题供您安装.
              </li>
              <li>分享协作:&nbsp;你也可以将知识分享给你的好友.</li>
              <li>两款编辑器, 支持Markdown, 代码高亮.</li>
              <li>桌面端三大平台全覆盖!</li>
              <li>写作模式.</li>
              <li>....</li>
            </ul>
            <p>相关链接:</p>
            <ul>
              <li>
                <p>
                  帮助我们改善Leanote&nbsp;<a
                    href="https://github.com/leanote"
                    target="_blank"
                    data-mce-href="https://github.com/leanote"
                    >GitHub</a
                  >
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="http://leanote.leanote.com/post/Leanote-manual-project"
                    target="_blank"
                    data-mce-href="http://leanote.leanote.com/post/Leanote-manual-project"
                    >Leanote教程</a
                  >
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="http://app.leanote.com"
                    target="_blank"
                    data-mce-href="http://app.leanote.com"
                    >客户端</a
                  >
                </p>
              </li>
              <li>
                <a
                  href="http://bbs.leanote.com"
                  target="_blank"
                  data-mce-href="http://bbs.leanote.com"
                  >社区</a
                >
              </li>
              <li>QQ 群: 326073529</li>
            </ul>
            <p>
              任何问题, 欢迎发送邮件至
              <a
                href="mailto:leanote@leanote.com"
                data-mce-href="mailto:leanote@leanote.com"
                >leanote@leanote.com</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      dialogFormVisible: true,
    };
  },
};
</script>

<style lang="less" scoped>
.modal-body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  .history-list-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 200px;
    border-right: 1px solid #ccc;
    box-shadow: 1px 1px 10px #ddd;
    .history-list-header {
      line-height: 50px;
      font-size: 16px;
      font-weight: bold;
      padding-left: 15px;
      border-bottom: 1px solid #eee;
      background-color: #ccc;
    }
    .history-list {
      position: absolute;
      top: 51px;
      bottom: 0;
      left: 0;
      right: 0;
      overflow-y: auto;
      margin-bottom: 0;
      .list-group-item {
        position: relative;
        display: block;
        padding: 10px 15px;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid #ddd;
        .badge {
          min-width: 10px;
          padding: 3px 7px;
          font-size: 12px;
          color: #fff;
          background-color: #999;
          border-radius: 10px;
          float: right;
        }
      }
    }
  }
  .history-content-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 200px;
    .history-content-header {
      height: 51px;
      border-bottom: 1px solid #eee;
      box-shadow: 5px 0px 5px #ccc;
      .button-type {
        margin-left: 10px;
        margin-top: 5px;
      }
    }
    .history-content {
      position: absolute;
      top: 51px;
      bottom: 0;
      right: 0;
      left: 0;
      padding-top: 5px;
      padding-right: 5px;
      padding-left: 10px;
      overflow-y: auto;
    }
  }
}
</style>
<style lang="less">
.el-dialog{
    height: 95%;
}
</style>
