var first=["E001","E002","E003"];
  var second = [{"Role":01,"emp_id":'E001'},
                {"Role":01,"emp_id":'E002'},
               {"Role":02,"emp_id":'E003'}]
  var output=[];
     function f1(first,c1)
      {
        first.forEach(function(result){
          c1(result)
        })
     
      }
    function f2(result)
    {
      second.filter(function(value){
     
     if(result == value.emp_id){ console.log(result); f3(f4); }
    })
      
    }
    function f3(c3)
    {
      c3();
    }
    function f4()
    {
      console.log("done");
    }
    f1(first,f2);