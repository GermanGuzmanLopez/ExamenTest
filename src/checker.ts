function isPalindrome(word :string): boolean{
  let middle : number = word.length/2;
  let bPalindrome : boolean = true;
  if(word.length % 2 != 0){
    middle = middle - 0.5;
  }
  let iterator : number = word.length - 1;
  for(let i = 0; i < middle; i++){
    if(word[i] != word[iterator]){
      bPalindrome = false;
    }
    iterator-=1;
  }
  return bPalindrome;
}
export default isPalindrome;