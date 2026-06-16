var speech = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.";

console.log(speech.length);

var wordCount = speech.split(" ").length;
console.log(wordCount);

//count the lenght of the speech without spaces

var count =0;
for (var i = 0; i < speech.length; i++) {
  if (speech[i] == " " && speech[i-1] != " ") {
    count++;
  } 
}
console.log(count);

