<template>
    <view class="transfer-page">
        <!-- 自定义导航栏 -->
        <nav-bar title="转账"></nav-bar>

        <!-- 水晶/REP切换标签 -->
        <view class="tab-group">
            <view class="tab-item" :class="{ active: transferType === 'crystal' }" @click="switchType('crystal')">
                <text>水晶</text>
            </view>
            <view class="tab-item" :class="{ active: transferType === 'rep' }" @click="switchType('rep')">
                <text>REP</text>
            </view>
        </view>
        <!-- 主体内容区 -->
        <scroll-view class="transfer-content">
            <!-- 表单输入区 -->
            <view class="form-list">
                <!-- Gateway ID输入 -->
                <view class="form-item">
                    <text class="form-label">Gateway ID</text>
                    <input class="form-input" type="text" placeholder="请输入对方账号ID" v-model="gatewayId" />
                </view>

                <!-- 转账数量输入 -->
                <view class="form-item">
                    <text class="form-label">{{ transferType === 'crystal' ? '兑换水晶数量' : '转账REP数量' }}</text>
                    <input class="form-input" type="number" placeholder="请输入转账数量" v-model="transferAmount" />
                </view>

                <!-- 可转出金额提示 -->
                <text class="balance-tip">
                    可转出金额: {{ transferType === 'crystal' ? '56.58544568 USD' : '56.58544568 REP' }}
                </text>
            </view>

        </scroll-view>
        <!-- 转账按钮 -->
        <button class="transfer-btn button-primary" @click="openConfirmPopup">转账</button>

        <!-- 转账确认弹窗 -->
        <uni-popup ref="confirmPopup" type="center" :mask-click="false">
            <view class="confirm-popup">
                <view class="popup-title flex justify-center align-center">是否确认转账</view>

                <!-- 账户ID -->
                <view class="popup-item">
                    <text class="popup-label">账户ID:</text>
                    <text class="popup-value">66685522</text>
                </view>

                <!-- 转账数量 -->
                <view class="popup-item">
                    <text class="popup-label">数量:</text>
                    <text class="popup-value">{{ transferAmount }} {{ transferType === 'crystal' ? 'USDT' : 'REP'
                    }}</text>
                </view>

                <!-- 交易密码 -->
                <view class="popup-item">
                    <text class="popup-label">交易密码:</text>
                    <view class="popup-input">
                        <input placeholder="请输入交易密码" v-model="tradePwd" :password="showPassword" />
                        <view @click="changePassword">
                            <uni-icons v-if="showPassword" type="eye-filled" size="30" color="#7F8192"></uni-icons>
                            <uni-icons v-else type="eye-slash-filled" size="30" color="#7F8192"></uni-icons>
                        </view>
                    </view>
                </view>

                <!-- 按钮组 -->
                <view class="popup-btn-group">
                    <button class="popup-btn reset-btn" @click="resetPopup">重置</button>
                    <button class="popup-btn button-primary" @click="confirmTransfer">确认</button>
                </view>
            </view>
        </uni-popup>
    </view>
</template>

<script>
import NavBar from "@/components/nav-bar/nav-bar.vue";
export default {
    components: {
        NavBar
    },
    data() {
        return {
            // 转账类型：crystal-水晶，rep-REP
            transferType: "crystal",
            // Gateway ID
            gatewayId: "",
            // 转账数量
            transferAmount: "",
            // 交易密码
            tradePwd: "",
            // 可转出金额（模拟数据）
            balance: {
                crystal: "56.58544568 USD",
                rep: "56.58544568 REP"
            },
            showPassword: true
        };
    },
    methods: {
        // 切换密码显示状态
        changePassword() {
            this.showPassword = !this.showPassword;
        },
        // 切换转账类型
        switchType(type) {
            this.transferType = type;
        },
        // 打开转账确认弹窗（含输入校验）
        openConfirmPopup() {
            // 校验Gateway ID
            if (!this.gatewayId.trim()) {
                uni.showToast({ title: "请输入对方Gateway ID", icon: "none" });
                return;
            }
            // 校验转账数量
            if (!this.transferAmount || Number(this.transferAmount) <= 0) {
                uni.showToast({ title: "请输入有效的转账数量", icon: "none" });
                return;
            }
            // 打开弹窗
            this.$refs.confirmPopup.open('center');
        },
        // 重置弹窗（清空密码，关闭弹窗）
        resetPopup() {
            this.tradePwd = "";
            this.$refs.confirmPopup.close();
        },
        // 确认转账
        confirmTransfer() {
            // 校验交易密码
            if (!this.tradePwd.trim()) {
                uni.showToast({ title: "请输入交易密码", icon: "none" });
                return;
            }
            // 模拟转账请求（实际项目替换为接口调用）
            uni.showLoading({ title: "转账中..." });
            setTimeout(() => {
                uni.hideLoading();
                uni.showToast({ title: "转账成功", icon: "success" });
                this.resetPopup();
                // 清空输入项（可选）
                this.gatewayId = "";
                this.transferAmount = "";
            }, 1500);
        }
    }
};
</script>

<style scoped lang="scss">
/* 页面整体样式 */
.transfer-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
}

/* 主体内容区 */
.transfer-content {
    flex: 1;
    padding: 30rpx;
    box-sizing: border-box;
}

/* 切换标签组 */
.tab-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20rpx;
    margin-bottom: 18rpx;
    margin-top: 52rpx;

    .tab-item {
        width: 208rpx;
        height: 98rpx;
        background: #EDEEF0;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        border: 0rpx solid rgba(237, 238, 240, 0.8784);
        line-height: 98rpx;
        font-weight: 400;
        font-size: 28rpx;
        color: #0B1526;
        text-align: center;
    }

    .tab-item.active {
        background: #F4F0FF;
        border-radius: 12rpx 12rpx 12rpx 12rpx;
        border: 2rpx solid #5E28FF;
        color: #5F2AFF;
    }
}

/* 表单输入区 */
.form-list {
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
    margin-bottom: 40rpx;
}

.form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 30rpx;
}

.form-item:last-child {
    margin-bottom: 10rpx;
}

.form-label {
    
    font-weight: 400;
    font-size: 34rpx;
    color: #000000;
    line-height: 40rpx;
    margin-bottom: 38rpx;
}

.form-input {
    height: 120rpx;
    border-radius: 8rpx;
    padding: 38rpx 22rpx;
    font-size: 28rpx;
    color: #333;
    background: #F6F7FB;
    border-radius: 24rpx 24rpx 24rpx 24rpx;
}

.balance-tip {
    display: block;
    font-weight: 500;
    font-size: 28rpx;
    color: #FB0B0B;
    line-height: 42rpx;
    margin-top: 20rpx;
}

/* 转账按钮 */
.transfer-btn {
    width: 80%;
    height: 88rpx;
    line-height: 88rpx;
    color: #fff;
    font-size: 32rpx;
    border: none;
    margin-bottom: 50rpx;
}

/* 转账确认弹窗 */
.confirm-popup {
    width: 80%;
    background-color: #fff;
    border-radius: 16rpx;
    padding: 30rpx;
}

.popup-title {
    font-size: 32rpx;
    font-weight: bold;
    text-align: center;
    margin-bottom: 52rpx;
    color: #333;
}

.popup-item {
    display: flex;
    align-items: center;
    margin-bottom: 44rpx;
}

.popup-label {
    font-size: 28rpx;
    color: #333;
    width: 120rpx;
    white-space: nowrap;
}

.popup-value {
    font-size: 28rpx;
    color: #666;
    flex: 1;
}

.popup-input {
    display: flex;
    align-items: center;
    background: #F6F7FB;
    height: 60rpx;
    border-radius: 20rpx;
    padding: 0 20rpx;
    font-size: 28rpx;

    input {
        flex: 1;
    }
}

.popup-btn-group {
    display: flex;
    gap: 20rpx;
    margin-top: 30rpx;
}

.popup-btn {
    flex: 1;
    height: 70rpx;
    line-height: 70rpx;
    border-radius: 20rpx;
    font-size: 28rpx;
    border: none;
}

.reset-btn {
    background-color: #f5f5f5;
    color: #666;
    border: 1px solid #eee;
}
</style>