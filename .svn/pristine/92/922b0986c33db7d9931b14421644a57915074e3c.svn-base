<template>
    <view class="buy">
        <view class="header flex align-center justify-between">
            <view class="flex align-center justify-around">
                <text class="search-number">数量</text>
                <uni-icons type="search" size="24" @click="search()"></uni-icons>
            </view>
            <view>全部</view>
        </view>

        <uni-list :border="false">
            <view class="uni-row">
                <!-- 自定义 header -->
                <view class="slot-head flex align-center justify-center">
                    <image class="slot-image" :src="avatarList[0].url" mode="aspectFill"></image>
                </view>
                <!-- 自定义 body -->
                <view class="slot-box">
                    <text class="slot-text slot-text-title">61954657</text>
                    <text class="slot-text">单价：6565+</text>
                    <text class="slot-text">数量：999</text>
                </view>
                <!-- 自定义 footer-->
                <view class="flex align-center justify-end ">
                    <button class="slot-button button-primary" @click="goBuy()">买入</button>
                </view>
            </view>
        </uni-list>
        <!-- 搜索弹出 -->
        <uni-popup ref="popup" background-color="#fff" width="80%" height="auto" border-radius="24rpx">
            <view class="popup-content">
                <view class="popup-header">搜索订单</view>
                <view class="popup-body">
                    <view class="flex align-center justify-center ">
                        <text class="popup-text">我要买入</text>
                        <text class="popup-text popup-text-red">*交易金额需1个起</text>
                    </view>
                    <view class="input-item">

                        <input v-model="number" class="input" placeholder="请输入数量（1的整数倍）" maxlength="20" />
                    </view>
                </view>
                <view class="popup-footer">
                    <button class="button-close" @click="close">重置</button>
                    <button class="button-primary" @click="close">确认</button>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
export default {
    data() {
        return {
            avatarList: [{
                url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
            }, {
                url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
            }, {
                url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
            }],
            number: '',
            dialogVisible: false,
        };
    },
    methods: {
        search() {
            this.$refs.popup.open('center');
        },
        close() {
            this.$refs.popup.close()
        },
        goBuy() {
            uni.navigateTo({
                url: '/pages/home/buy/index'
            })
        }
    }
};
</script>
<style scoped lang="scss">
.buy {
    width: 100%;

    .header {
        font-weight: 700;
        font-size: 36rpx;
        color: #141416;
        line-height: 48rpx;
    }

    .search-number {

        margin-right: 20rpx;

    }


    .uni-row {
        margin-top: 12rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .slot-head {
        .slot-image {
            width: 92rpx;
            height: 92rpx;
            border-radius: 46rpx;
        }

        margin-right: 32rpx;
    }

    .slot-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;

        .slot-text {
            font-weight: 500;
            font-size: 32rpx;
            line-height: 48rpx;
            display: block;
            color: #808080;
        }

        .slot-text-title {
            color: #141416;
        }

    }

    .slot-button {
        width: 138rpx;
        height: 92rpx;
        font-weight: 400;
        font-size: 40rpx;
        line-height: 92rpx;
        flex-shrink: 0;
        white-space: nowrap;
    }

    .popup-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 24rpx;
        padding: 30rpx;
        box-sizing: border-box;
    }

    .popup-header {
        font-weight: 500;
        font-size: 44rpx;
        color: #0B1526;
        line-height: 44rpx;
    }


    .popup-body {
        margin: 42rpx 0;

        .popup-text {
            font-weight: 500;
            font-size: 42rpx;
            color: #0B1526;
            line-height: 44rpx;
        }

        .popup-text-red {

            color: #FA3E3E;
        }

        .input-item {
            height: 92rpx;
            background: #fcfcfd;
            background: #F6F7FB;
            border-radius: 20rpx 20rpx 20rpx 20rpx;
            padding: 18rpx 22rpx;
            margin-top: 42rpx;

            .input {
                width: 100%;
                font-size: 40rpx;
                line-height: 48rpx;
                text-align: left;
            }
        }
    }

    .popup-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;

        button {
            width: 40%;
            height: 88rpx;
            background: #E6E6E6;
            border-radius: 20rpx;
            font-weight: 500;
            font-size: 36rpx;
            color: #FFFFFF;
            line-height: 88rpx;
        }

        .button-close {
            color: #404040;
            // border: 3rpx solid;
            // border-image: linear-gradient(270deg, rgba(218.00000220537186, 34.00000177323818, 255, 1), rgba(151.00000619888306, 51.00000075995922, 238.00000101327896, 1)) 3 3;
        }
    }

}
</style>