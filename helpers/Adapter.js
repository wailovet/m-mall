export default {
  classify: (data) => {
    let result = {
      items: [],
      params: {
        page: 1,
        limit: 10,
      },
      paginate: {}
    };
    result.items = data.data;
    for (var i in result.items) {
      result.items[i]["_id"] = result.items[i]["id"]
    }
    return {
      meta: {
        code: data.code - 200
      },
      data: result,
    };
  }
} 