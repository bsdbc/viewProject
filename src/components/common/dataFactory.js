export function createLineDatas(dataNum,type,lineNum=1){
  let result=[];
  for(let i=0;i<lineNum;i++){
    result.push({name:'line-'+i,type:type,data:createLineData(dataNum)})
  }

  return result;
}

function createLineData(dataNum){
  let step=1000;//1s一个数据点
  let dateRange=dataNum * step;

  let curDate=new Date();
  curDate.setSeconds(curDate.getSeconds() - dateRange);
  let startTime=curDate.getTime();

  let data=[];
  let a,b,c,spike;

  for (let i=0;i<dataNum;i++){
    if (i % 100 === 0) {
      a = 2 * Math.random();
    }
    if (i % 1000 === 0) {
      b = 2 * Math.random();
    }
    if (i % 10000 === 0) {
      c = 2 * Math.random();
    }
    if (i % 50000 === 0) {
      spike = 10;
    } else {
      spike = 0;
    }
    data.push([startTime+i*step,2 * Math.sin(i / 100) + a + b + c + spike + Math.random()])
  }
  return data;
}
