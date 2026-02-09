<template>
    <view class="chat-page">
        <!-- 顶部导航栏 -->
         <nav-bar :title="queryData.name"></nav-bar>

        <!-- 聊天记录区域（可滚动） -->
        <scroll-view class="chat-content" scroll-y :scroll-top="scrollTop" @scroll="onScroll">
            <!-- 聊天消息列表 -->
            <view class="message-item" v-for="(item, index) in chatList" :key="index">
                <!-- 消息时间戳（独立展示） -->
                <view class="message-time" v-if="item.isTime">
                    <text>{{ item.time }}</text>
                </view>

                <!-- 对方消息（左对齐） -->
                <view class="message-left" v-else-if="item.type === 'receive'">
                    <!-- 对方头像 -->
                    <image class="avatar" :src="item.avatar" mode="aspectFill"></image>
                    <!-- 消息内容容器 -->
                    <view class="message-bubble receive-bubble">
                        <!-- 图片消息 -->
                        <image class="message-img" v-if="item.msgType === 'image'" :src="item.content" mode="widthFix">
                        </image>
                        <!-- 文字消息 -->
                        <text class="message-text" v-else>{{ item.content }}</text>
                    </view>
                </view>

                <!-- 自己消息（右对齐） -->
                <view class="message-right" v-else-if="item.type === 'send'">
                    <!-- 消息内容容器 -->
                    <view class="message-bubble send-bubble">
                        <text class="message-text">{{ item.content }}</text>
                    </view>
                    <!-- 自己头像 -->
                    <image class="avatar" :src="myAvatar" mode="aspectFill"></image>
                </view>
            </view>
        </scroll-view>

        <!-- 底部输入区域 -->
        <view class="chat-footer">
            <!-- 加号按钮 -->
            <uni-icons type="plus" size="28" class="plus-icon" @click="openMore"></uni-icons>
            <!-- 输入框 -->
            <input class="msg-input" type="text" placeholder="发送消息" v-model="inputMsg" confirm-type="send"
                @confirm="sendMessage" />
            <!-- 发送按钮 -->
            <button class="send-btn button-primary" @click="sendMessage">发送</button>
        </view>
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
            // 自己的头像
            myAvatar: "/static/images/profile.jpg",
            // 聊天记录列表（模拟数据）
            chatList: [
                // 时间戳
                { isTime: true, time: "2026-01-07 16:54:20" },
                // 对方图片消息
                {
                    type: "receive",
                    msgType: "image",
                    avatar: "/static/images/profile.jpg",
                    content: "/static/images/profile.jpg"
                },
                // 时间戳
                { isTime: true, time: "2026-01-07 16:55:10" },
                // 对方文字消息
                {
                    type: "receive",
                    msgType: "text",
                    avatar: "/static/images/profile.jpg",
                    content: "您好，如何进行声望奖励？"
                },
                // 自己文字消息
                {
                    type: "send",
                    msgType: "text",
                    content: "可以到声望界面，进行每日领取声望奖励。"
                }
            ],
            // 输入框内容
            inputMsg: "",
            // 滚动条位置（用于自动滚到底部）
            scrollTop: 99999,
            queryData: null
        };
    },
    onLoad(option) {
        // 页面加载时可执行的逻辑
        console.log("页面加载参数:", option);

        this.queryData = option;
    },
    methods: {
        // 返回上一页
        goBack() {
            uni.navigateBack();
        },
        // 滚动监听（可选）
        onScroll(e) {
            this.scrollTop = e.detail.scrollTop;
        },
        // 打开更多功能（如图片/文件）
        openMore() {
            uni.showActionSheet({
                itemList: ["选择图片", "拍摄照片"],
                success: (res) => {
                    // 可扩展选择图片/拍照逻辑
                    console.log("选择了：", res.tapIndex);
                }
            });
        },
        // 发送消息
        sendMessage() {
            if (!this.inputMsg.trim()) {
                uni.showToast({ title: "请输入消息内容", icon: "none" });
                return;
            }
            // 组装新消息
            const newMsg = {
                type: "send",
                msgType: "text",
                content: this.inputMsg.trim()
            };
            // 添加到聊天列表
            this.chatList.push(newMsg);
            // 清空输入框
            this.inputMsg = "";
            // 自动滚动到底部
            this.$nextTick(() => {
                this.scrollTop = 99999;
            });
            // 模拟对方回复（可选）
            setTimeout(() => {
                const replyMsg = {
                    type: "receive",
                    msgType: "text",
                    avatar: "/static/images/profile.jpg",
                    content: "好的，我明白了，谢谢！"
                };
                this.chatList.push(replyMsg);
                this.$nextTick(() => {
                    this.scrollTop = 99999;
                });
            }, 1000);
        }
    }
};
</script>

<style scoped>
/* 页面整体样式 */
.chat-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
}

/* 聊天内容区域 */
.chat-content {
    flex: 1;
    padding: 20rpx;
    box-sizing: border-box;
}

/* 消息时间戳 */
.message-time {
    text-align: center;
    margin: 20rpx 0;
}

.message-time text {
    font-size: 24rpx;
    color: #999;
    background-color: #e5e5e5;
    padding: 8rpx 20rpx;
    border-radius: 16rpx;
}

/* 消息项通用 */
.message-item {
    margin-bottom: 30rpx;
}

/* 头像样式 */
.avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
}

/* 消息气泡通用 */
.message-bubble {
    max-width: 500rpx;
    padding: 20rpx;
    border-radius: 16rpx;
    box-sizing: border-box;
}

/* 对方消息（左） */
.message-left {
    display: flex;
    align-items: flex-start;
}

.message-left .avatar {
    margin-right: 20rpx;
}

.receive-bubble {
    background-color: #fff;
    border-top-left-radius: 0;
}

/* 自己消息（右） */
.message-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
}

.message-right .avatar {
    margin-left: 20rpx;
}

.send-bubble {
    background-color: #007aff;
    border-top-right-radius: 0;
}

.send-bubble .message-text {
    color: #fff;
}

/* 消息图片 */
.message-img {
    width: 200rpx;
    height: auto;
    border-radius: 8rpx;
}

/* 消息文字 */
.message-text {
    font-size: 28rpx;
    line-height: 1.5;
}

/* 底部输入区域 */
.chat-footer {
    display: flex;
    align-items: center;
    height: 100rpx;
    padding: 0 20rpx;
    background-color: #fff;
    border-top: 1px solid #eee;
}

.plus-icon {
    color: #666;
    margin-right: 20rpx;
}

.msg-input {
    flex: 1;
    height: 60rpx;
    background-color: #f5f5f5;
    border-radius: 30rpx;
    padding: 0 20rpx;
    font-size: 28rpx;
}

.send-btn {
    width: 120rpx;
    height: 60rpx;
    line-height: 60rpx;
    font-size: 28rpx;
    margin-left: 20rpx;
    border: none;
}
</style>