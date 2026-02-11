<template>
  <view>
    <uni-card class="view-title" :title="title">
      <rich-text class="uni-body view-content" :nodes="content"></rich-text>
    </uni-card>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        content: ''
      }
    },
    onLoad(options) {
      const pageTitle = options && options.title ? decodeURIComponent(options.title) : ''
      this.title = pageTitle
      this.content = options && options.content ? decodeURIComponent(options.content) : ''

      const eventChannel = this.getOpenerEventChannel && this.getOpenerEventChannel()
      if (eventChannel) {
        eventChannel.on('protocolData', ({ title, content }) => {
          this.title = title || this.title
          this.content = content || this.content
          uni.setNavigationBarTitle({
            title: this.title
          })
        })
      }

      uni.setNavigationBarTitle({
        title: this.title
      })
    }
  }
</script>

<style scoped>
  page {
    background-color: #ffffff;
  }

  .view-title {
    font-weight: bold;
  }

  .view-content {
    font-size: 26rpx;
    padding: 12px 5px 0;
    color: #333;
    line-height: 24px;
    font-weight: normal;
  }
</style>
