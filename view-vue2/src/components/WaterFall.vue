<template>
  <div class="waterfall">
    <vantList
      v-model="loading"
      :finished="finished"
      offset = "200"
      finished-text="你已到达世界的尽头~"
      @load="onLoad"
    >
      <div class="waterShell">
        <div class="fall-list">
          <div ref="line1" class="fall-line left">
            <router-link
              v-for="(item, index) in data1"
              :to="{ name: 'postItem', params: { id: item._id } }"
              :id="item.postsId"
              :key="index"
              class="fall-item"
            >
              <div>
                <img :src="item.coverImgUrl" alt="" />
                <p class="postItemTitle">{{ item.title }}</p>
                <p class="postItemName">{{ item.userName }}</p>
              </div>
            </router-link>
          </div>
          <div ref="line2" class="fall-line right">
            <router-link
              v-for="(item, index) in data2"
              :to="{ name: 'postItem', params: { id: item._id } }"
              :key="index"
              class="fall-item"
            >
              <div>
                <img :src="item.coverImgUrl" alt="" />
                <p class="postItemTitle">{{ item.title }}</p>
                <p class="postItemName">{{ item.userName }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </vantList>
  </div>
</template>

<script>
import { List } from "vant";
import { topicPost, stagePost, myPost, searchList } from "@/api/api";

export default {
  components: {
    vantList: List,
  },
  name: "WaterFall",
  data() {
    return {
      data1: [],
      data2: [],
      
      // 触底加载
      loading: false,
      finished: false,
      pageNum: 1,
      pageSize: 10,
    };
  },
  methods: {
    // 触底加载
    onLoad() {
      if (this.listType == "index") {
        stagePost(this.pageSize, this.pageNum).then((res) => {
          this.doSort(0, res.data.data.rows);
          this.pageNum++;
          if (res.data.data.total < this.pageSize) {
            this.finished = true;
          }
        });
      }
      if (this.listType == "mypost") {
        myPost(this.pageSize, this.pageNum).then((res) => {
          this.list = res.data.data.rows;
          this.doSort(0, this.list);
          this.pageNum++;
          // 加载状态结束
          this.loading = false;
          if (res.data.data.rows <= this.pageSize) {
            this.finished = true;
          }
        });
      }
      if (this.listType == "search") {
        searchList(
          this.$store.state.searchText,
          this.pageSize,
          this.pageNum
        ).then((res) => {
          this.list = res.data.data.rows;
          this.doSort(0, this.list);
          this.pageNum++;
          // 加载状态结束
          this.loading = false;
          if (res.data.data.rows <= this.pageSize) {
            this.finished = true;
          }
        });
      }
      if (this.$route.params.cateId) {
        topicPost(this.$route.params.cateId, this.pageSize, this.pageNum).then(
          (res) => {
            this.list = res.data.data.rows;
            this.doSort(0, this.list);
            this.pageNum++;
            // 加载状态结束
            this.loading = false;
            if (res.data.data.rows <= this.pageSize) {
              this.finished = true;
            }
          }
        );
      }
    },
    //瀑布流排序
    doSort(index, list) {
      if (index < list.length) {
        if (this.$refs.line1.offsetHeight <= this.$refs.line2.offsetHeight) {
          this.data1.push(list[index]);
        } else {
          this.data2.push(list[index]);
        }
        //$nextTick:数据更新后执行
        this.$nextTick(() => {
          setTimeout(() => {
           this.doSort(index + 1, list); 
          });
        });
      }else{
        // 加载状态结束
        this.loading = false;
      }
    },
  },
  created(){
  },
  props: {
    listType: { type: String },
  },
};
</script>

<style scoped lang="less">
@import "../assets/fonts/fonts.css";
@keyframes fade {
  from {
    transform: translateY(55%);
    opacity: 0.7;
  }
  to {
    transform: translateY(0);
    opacity: 0.9;
  }
}
/deep/.van-list__finished-text {
  margin-top: -15%;
  padding-bottom: 15%;
}
.waterShell {
  padding-bottom: 57px;
  .fall-list {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-start;

    .fall-line {
      width: 45%;
      box-sizing: border-box;
      .fall-item {
        animation: fade 0.6s;
        display: block;
        box-sizing: border-box;
        width: 100%;
        margin: 7px 0;
        box-shadow: 0 1px 3px 2px rgba(7, 17, 27, 0.1);
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          max-height: 400px;
        }
        p {
          margin: 0 0 0 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .postItemTitle {
          padding: 5px 0 5px;
          font-size: 18px;
        }
        .postItemName {
          padding-bottom: 10px;
          font-size: 13px;
          color: #aaa;
        }
      }
    }
    .left {
      margin-left: 10px;
    }
    .right {
      margin-right: 10px;
    }
  }
}
</style>