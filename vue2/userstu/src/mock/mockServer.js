import Mock from "mockjs";
import table from './table.json';
import type from './type.json'
import detail from './detail.json'
//1参数url 2参数请求数据
Mock.mock('/mock/home/tableList',{code:200,data:table})
Mock.mock('/mock/type/typeList',{code:200,data:type})
Mock.mock('/mock/detail/detailList',{code:200,data:detail})
