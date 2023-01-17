const { topicList } = require(process.cwd() + "/model/topicList")


//专题列表
const getTopicList = async (req, res, next) => {
    const topicListData = await topicList()
    sendJson(res, 200, "操作成功", topicListData)
}

module.exports = {
    getTopicList
}