
import mockrequests from './mockrequest'


//获取文件列表的api请求
export const reqTableData = ()=>{
   return mockrequests({url:'/home/tableList'})
}

//获取文件类别的api请求
export const reqTypeData = ()=>{
   return mockrequests({url:'/type/typeList'})
}

//获取文件详情的api请求
export const reqDetailData = (id)=>{
   return mockrequests({url:'/detail/detailList',id})
}



