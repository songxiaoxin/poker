window.onload=function(){

    document.onselectstart=function(){return false};
//写个函数在控制台中输出10行*
    var xing=function(){
        var o='*';
        var j=''
        for(var i=0;i<5;i++){
                console.log(i+1+o+j);
            o+='*';
        }
    };
// xing();

    var xing2=function(){
        for(var i=0;i<4;i++){
            var s='';
            for(var j=0;j<i+1;j++){
                s+='*'
            }
            console.log(s);
            console.log('');
        }
    };
//xing2();

    //2.
 //   document.write('*');

    var yemian=function(){
        var o='*';
        for(var i=0;i<5;i++){
            for(var k=0;k<4-i;k++){
                document.write('-')
            }
            for(var j=0;j<i*2+1;j++){
                document.write(o);
            }
            document.write('<br/>')
        }
    };
//yemian();


    //3.函数 在页面中创建28个元素，放到一个div中
    //28个元素都用定位，1-1（top:0px），2-2(top:30px)，3-3，4-4

   var hezi=document.getElementById('hezi');
    var pai=document.getElementsByClassName('pai');
    for(var i=0;i<7;i++){
        for(var j=0;j<i+1;j++){
            var pai=document.createElement('div');
            pai.setAttribute('class','pai');
            pai.style.top=i*40+'px';
            pai.style.left=j*170+(6-i)*75+'px';
            pai.setAttribute('id',i+'_'+j);
            hezi.appendChild(pai);
        }
    }
    var index=10;
    var draw=function(){
      for(var i=0;i<24;i++){
          var dpoker=document.createElement('div');
          dpoker.setAttribute('class','l-poker');
          dpoker.setAttribute('id',12+'_'+i);
          dpoker.style.zIndex=index;
          index++;
          dipail.appendChild(dpoker);
      }
    };
    draw();

    //4.事件委托
    var previous=null;
    var xianshi=100;
    var cishu=0;
    var shuzi={A:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',J:'11',Q:'12'};
    hezi.onclick=function(e){
        var el= e.target;
        if(el==this)return;
        el.style.cursor='pointer';
        var id= el.getAttribute('id');
        var   x= Number(id.split('_')[0]);
        var   y=Number(id.split('_')[1]);
        var  nx=document.getElementById((x+1)+'_'+y);
        var  ny=document.getElementById((x+1)+'_'+(y+1));
        if(nx||ny)return;
        if(previous!==null) {
            previous.style.boxShadow='1px 2px 20px black';
            if(Number(shuzi[el.innerHTML])+Number(shuzi[previous.innerHTML])==13){
                el.parentElement.removeChild(el);
                previous.parentElement.removeChild(previous);
            }
        }
        if(el.innerHTML=='K'){
            el.parentElement.removeChild(el);
        }
            el.style.border='2px solid red';
            el.style.boxShadow='0px 2px 12px rgba(165,161,161,0.6)';
        if(id=='btn'){
            if(dipail.length<=0)return;
            dipair.appendChild(dipail.removeChild(dipail.lastElementChild));
            dipair.lastElementChild.style.zIndex=xianshi;
        }
        if(id=='btn1'){
            while(dipair.lastElementChild){
               dipail.appendChild(dipair.removeChild(dipair.lastElementChild));
            }
            cishu++;
        }
        if(cishu>3){
            alert('你输了！');
            location.reload();
        }
            previous= e.target;
        };

    //5.
    var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
    //写一个函数， 生成一个随机数组， 长度为13；  里面为1-13随机数；
    //遍历这个数组 ， 输出
    //var shuzu=[];
    //var arr={};
    //for(var i=0;i<13;i++){
    //    var shuzi=Math.floor(Math.random()*13)+1;
    //    shuzu.push(shuzi);
    //    while(shuzu[i]!==shuzu[i+1]){
    //        return shuzu;
    //    }
    //}
    //console.log(shuzu);

  var fn5=function(){
      var arr=[];
      for(var i=0;i<13;i++){
          var r=Math.floor(Math.random()*13)+1;
          arr.push(r);
      }
      for(i=0;i<arr.length;i++){
          console.log(dict[arr[i]]);
      }
  };
    fn5();

//6.写一个函数，生成一个乱序的扑克牌
    //['rd','bk','fk','mh']  [1-->13];
    //var poker=[
    //    {huase:'rd',number:'8'},
    //    {huase:'fk',number:'7'}
    //]

    var  hh=['rd','bl','fk','mh'];
    var  fn6=function(){
        var zidian={};
        var poker=[],hs,nu;
       while(poker.length!=52){
             hs=hh[Math.floor(Math.random()*4)];
             nu=dict[Math.floor(1+Math.random()*13)];
           var pai={huase:hs,number:nu};
           if(!zidian[hs+nu]){
               poker.push(pai);
               zidian[hs+nu]=true;
           }
        }
       return poker;
      div.innerHTML(poker)
    }
    //console.table(fn6());

    var puke=fn6();
    //poker.length=28;
    var els=document.getElementsByClassName('pai');
    for(var i=0;i<els.length;i++){
        els[i].innerHTML=puke[i].number;
        if(puke[i].huase=='rd'){
            els[i].style.backgroundImage='url(./images/hongtao.png)';
            els[i].style.color='red';
        }
        if(puke[i].huase=='bl'){
            els[i].style.backgroundImage='url(./images/heitao.png)';
            els[i].style.color='black';
        }
        if(puke[i].huase=='fk'){
            els[i].style.backgroundImage='url(./images/fangpian.png)';
            els[i].style.color='red';
        }
        if(puke[i].huase=='mh'){
            els[i].style.backgroundImage='url(./images/meihua.png)';
            els[i].style.color='black';
        }
    }

    var dpokers=document.getElementsByClassName('l-poker');
    for(var i=0;i<dpokers.length;i++){
        dpokers[i].innerHTML=puke[i].number;
        if(puke[i].huase=='rd'){
            dpokers[i].style.backgroundImage='url(./images/hongtao.png)';
            dpokers[i].style.color='red';
        }
        if(puke[i].huase=='bl'){
            dpokers[i].style.backgroundImage='url(./images/heitao.png)';
            dpokers[i].style.color='black';
        }
        if(puke[i].huase=='fk'){
            dpokers[i].style.backgroundImage='url(./images/fangpian.png)';
            dpokers[i].style.color='red';
        }
        if(puke[i].huase=='mh'){
            dpokers[i].style.backgroundImage='url(./images/meihua.png)';
            dpokers[i].style.color='black';
        }
    }








};