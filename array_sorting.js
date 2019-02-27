var array1 = [1,2,10,34,6];
var array2 = [2,3,5,6,22];
merge_sort(array1, array2)

function merge_sort(array1, array2){
  var result_array = [];
  let arr = array1.concat(array2); 

  result_array.push(arr[0])
  for(var j=1; j<arr.length; j++){  //removing dulpicates
    if(arr[0] != arr[j] && result_array.indexOf(arr[j]) < 0){
      result_array.push(arr[j])
    }
  }

  // sorting descending
  for(i=0; i<result_array.length; i++){
    for( x=i;x<result_array.length;x++)
    {
      if(result_array[i]<result_array[x+1])   // greaterthan for ascending
      {
        var temp=result_array[i];
        result_array[i]=result_array[x+1];
        result_array[x+1]  = temp;
      }
    }
  }
  return result_array;
}