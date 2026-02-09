<template>
  <view class="order-page">
    <NavBar :showBack="false" title="我的订单">
      <template v-slot:right>
        <view class="order-select-wrap" @click.stop>
          <!-- 下拉按钮（匹配UI红色框样式） -->
          <view class="select-btn" @click="toggleSelect">
            <!-- 下拉箭头图标（用文本模拟，也可替换为图片） -->
            <text class="arrow-icon">▼</text>
            <text class="btn-text">{{ selectedValue }}</text>
          </view>

          <!-- 下拉列表（点击按钮显示/隐藏） -->
          <view class="select-list" v-if="showList">
            <view class="list-item" v-for="(item, index) in options" :key="index" @click="handleSelect(item)">
              <text class="item-text">{{ item }}</text>
            </view>
          </view>
        </view>
      </template>
    </NavBar>
    <!-- 状态标签栏 -->
    <uni-segmented-control :current="current" :values="statusList" style-type="text" :activeColor="'#1B1E26'"
      :inActiveColor="'#BFBFBF'" @clickItem="onClickItem" />
    <scroll-view class="status-tab-scroll" scroll-y>
      <!-- 订单列表区域 -->
      <view class="order-list-wrap">
        <view class="order-item"
          :style="{ backgroundImage: 'url(' + (orderType === 0 ? '/static/images/buy_bg.png' : '/static/images/sale_bg.png') + ')' }"
          v-for="order in orderList" :key="order.orderNo" @click="goToOrderDetail(order)">
          <view class="order-info">
            <view class="order-header flex justify-between">

              <view class="order-user flex align-center">
                <image class="order-image" src="/static/images/profile.jpg" mode="scaleToFill" />
                <text class="user-id">{{ order.userId }}</text>
              </view>
              <view class="group-button flex align-center">
                <button class="my-button button-one">{{ orderType === 0 ? '卖出' : '买入' }}</button>
                <button class="my-button button-primary">{{ statusList[order.status] }}</button>
              </view>
            </view>
            <view class="order-data">
              <text class="data-item">交易数量: {{ order.amount }} REP</text>
              <text class="data-item">交易金额: {{ order.money }}</text>
            </view>
            <view class="order-data">
              <text class="data-item">订单号: {{ order.orderNo }}</text>
              <view class="copy-btn" @click.stop="copyOrderNo(order.orderNo)">复制</view>
            </view>
            <view class="order-time">
              <text>{{ order.time }}</text>
            </view>
          </view>
        </view>
        <view class="no-more-data" v-if="orderList.length > 0">无更多数据</view>

        <!-- 空数据状态 -->
        <view class="empty-wrap" v-if="orderList.length === 0">
          <!-- 无订单占位图（匹配UI的空盒子+小人） -->
          <image src="/static/images/nodata.png" mode="aspectFit" class="empty-img" />
          <text>暂无信息</text>
          <text class="empty-text">暂无交易信息，先去交易吧～</text>
        </view>
      </view>
    </scroll-view>


    <!-- 底部自定义TabBar（复用之前的组件） -->
    <!-- <CustomTabBar /> -->
  </view>
</template>

<script>
export default {
  name: "OrderPage",
  data() {
    return {
      orderType: 1, // 买入/卖出：0/1
      statusList: [ // 状态列表
        "待成交",
        "待付款",
        "交易中",
        "已完成",
        "已取消"
      ],
      orderList: [ // 模拟订单数据（可替换为接口返回）
        {
          userId: "542533355",
          isSelf: true,
          amount: 1000,
          money: "$150",
          orderNo: "202501010184562",
          time: "2025-11-20 15:45:52",
          status: 0
        },
        {
          userId: "562533355",
          isSelf: false,
          amount: 1000,
          money: "$150",
          orderNo: "202601082092021",
          time: "2025-11-20 15:45:52",
          status: 1
        }
      ],
      current: 0,
      selectedValue: '买入',
      showList: false,
      options: ['买入', '卖出']
    };
  },
  watch: {
  },
  methods: {
    onClickItem({ currentIndex } = e) {
      console.log(currentIndex);

      this.current = currentIndex;
      this.orderList = this.getMockOrderList(currentIndex);
    },
    toggleSelect() {
      this.showList = !this.showList;
      // 点击列表外区域关闭（通过事件冒泡实现）
      if (this.showList) {
        uni.nextTick(() => {
          document.addEventListener("click", this.closeList);
        });
      }
    },
    // 关闭下拉列表
    closeList() {
      this.showList = false;
      document.removeEventListener("click", this.closeList);
    },
    // 选择下拉选项
    handleSelect(item) {
      this.selectedValue = item;
      this.showList = false;
      // 向父组件传递选中值
      this.$emit("change", item);
    },
    // 获取模拟订单数据
    getMockOrderList(status) {
      if (status === 4) {
        return [
          {
            userId: "542533355",
            isSelf: true,
            amount: 1000,
            money: "$150",
            orderNo: "202501010184562",
            time: "2025-11-20 15:45:52",
            status: 4
          }
        ];
      } else if (status === 2) {
        return [
          {
            userId: "542533355",
            isSelf: true,
            amount: 1000,
            money: "$150",
            orderNo: "202501010184562",
            time: "2025-11-20 15:45:52",
            status: 2
          }
        ];
      } else {
        return [];
      }
    },
    // 复制订单号
    copyOrderNo(orderNo) {
      uni.setClipboardData({
        data: orderNo,
        success: () => {
          uni.showToast({ title: "复制成功", icon: "success" });
        }
      });
    },
    // 跳转到订单详情
    goToOrderDetail(order) {
      uni.navigateTo({
        url: `/pages/order/details?orderNo=${order.orderNo}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>

// 页面基础样式
.order-page {
  min-height: 100vh;
  background-color: #FFFFFF;
  padding-bottom: calc(90rpx + env(safe-area-inset-bottom)); // 预留底部TabBar空间

  // 订单列表
  .order-list-wrap {

    padding: 20rpx;

    // 订单项
    .order-item {
      background-color: #ffffff;
      border-radius: 20rpx;
      padding: 32rpx 26rpx;
      margin-bottom: 12rpx;
      box-shadow: 0rpx 8rpx 60rpx 0rpx rgba(54, 41, 183, 0.07);
      position: relative;
      background-position: top 70rpx left 58rpx;
      background-repeat: no-repeat;
      // background-size: cover;


      // 订单信息
      .order-info {
        .order-header {
          .order-user {
            margin-bottom: 10rpx;

            .order-image {

              width: 48rpx;
              height: 48rpx;
              border-radius: 1200rpx 1200rpx 1200rpx 1200rpx;
              margin-right: 14rpx;
            }

            .user-id {
              font-size: 26rpx;
              color: #333;
            }

          }

          .group-button {
            flex-shrink: 0;
            gap: 20rpx;

            .my-button {
              text-align: center;
              border-radius: 20rpx;
              font-weight: 400;
              font-size: 40rpx;
              width: 170rpx;
              line-height: 92rpx;
              white-space: nowrap;

            }

            .button-one {
              background: #FFFFFF;
              color: #404040;
              border: 2px solid #9933ff;
              line-height: 88rpx;
            }

          }
        }


        .order-data {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin: 10rpx 0;

          .data-item {
            font-weight: 600;
            font-size: 32rpx;
            color: #343434;
            line-height: 48rpx;
          }

          .copy-btn {
            font-weight: 600;
            font-size: 32rpx;
            color: #343434;
            line-height: 48rpx;
            border: none;
            background-color: #fff;
          }
        }

        .order-time {
          font-weight: 600;
          font-size: 30rpx;
          color: #979797;
          line-height: 32rpx;
        }

      }
    }

    .no-more-data {
      text-align: center;
      font-weight: 400;
      font-size: 36rpx;
      color: #0B1526;
      line-height: 50rpx;
    }

    // 空数据样式
    .empty-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 100rpx 0;
      
      font-weight: 400;
      font-size: 32rpx;
      color: #0B1526;
      line-height: 44rpx;
      text-align: center;

      .empty-img {
        width: 400rpx;
        height: 400rpx;
        // margin-bottom: 20rpx;
      }

      .empty-text {
        font-size: 24rpx;
        color: #B1B4C3;
        line-height: 34rpx;
        margin-top: 12rpx;
      }
    }
  }

  .order-select-wrap {
    position: relative; // 作为下拉列表的定位容器
    display: inline-block;

    // 下拉按钮样式
    .select-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50rpx;
      background-color: #fff;

      .btn-text {
        white-space: nowrap;
        font-weight: 400;
        font-size: 30rpx;
        color: #0B1526;
        line-height: 50rpx;
      }

      .arrow-icon {
        font-size: 30rpx;
        line-height: 50rpx;
        font-weight: 400;
        color: #AC2DF3;
        margin-left: 8rpx;
      }
    }

    // 下拉列表样式
    .select-list {
      position: absolute;
      top: 70rpx; // 按钮下方显示
      left: 0;
      width: 100%;
      background-color: #fff;
      border-radius: 8rpx;
      box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1); // 轻微阴影，提升质感
      z-index: 999;

      .list-item {
        height: 60rpx;
        line-height: 60rpx;
        padding: 0 10rpx;
        text-align: center;

        &:hover {
          background-color: #f5f5f5; // 点击高亮
        }

        .item-text {
          font-size: 28rpx;
          color: #333;
        }
      }
    }
  }
}
</style>