const str = "string"; // ['s', 't', 'r', 'i', 'n', 'g']

// console.log("string".charAt(3));
// console.log("string"[3]);
// console.log(str[3]);
const strWithTwoQuotes = "\
    Lorem ipsum, dolor sit amet \
    consectetur adipisicing elit. Quaerat \
    adipisci iusto facilis! Deserunt, tempore. \
    Laboriosam, earum. Eum quidem odit atque aut reiciendis,\
"
const strWithSingleQuotes = "Lorem ipsum, dolor sit amet" +
 "consectetur adipisicing elit. Quaerat" +
 "adipisci iusto facilis! Deserunt, tempore.";

 const returnSTR = (age) => age > 18 ? "you are eligible": "you are not eligible";

const strWithBacktics = ` 
    Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Voluptas aut nostrum 
    quis quibusdam. Suscipit neque maxime facere nesciunt
    omnis blanditiis incidunt veritatis similique minima 
    tempore sed illum, in quasi ea! Itaque laborum saepe 
    nulla explicabo asperiores labore ipsa pariatur fugit 
    nisi debitis quam, ab tempore enim quisquam alias minima 
    quasi vel id officiis. Voluptates, non maiores voluptatum 
    consequuntur sed hic! Excepturi in dignissimos eligendi, 
    quisquam eius culpa atque rem! Est earum deleniti facilis 
    itaque distinctio alias neque unde nesciunt minima aut inventore
    vel iste quasi mollitia, debitis praesentium quia ratione? Iusto,
    cumque vitae nemo similique ipsam reprehenderit animi eius, repellat 
    asperiores ipsa aut eveniet esse libero! Quae iusto nisi, doloremque, 
    commodi voluptates optio nihil labore unde sed quasi blanditiis magnam porro
    corporis enim quo cupiditate quis, repudiandae eos ullam sunt? Deleniti dignissimos aliquid, 
    quae rerum alias asperiores reprehenderit in minus ipsum? Iste consectetur officia placeat expedita sit possimus consequatur dignissimos.
`
// console.log(strWithBacktics)

// const firstname = "agil";
// const lastname = "ata";
// const fullname = firstname + " " + lastname;
// const fullname = `hello ${firstname} ${lastname}`


const productName = 'ÜTÜ';

const searchString = 'utu';

// const productNameReplaced = productName.toLowerCase().replace('ü', 'u');
const productNameReplaced2 = productName.toLowerCase().replaceAll('ü', 'u');
// console.log(productNameReplaced); // 
// console.log(productNameReplaced2); // 

// console.log(searchString.toLowerCase() === productNameReplaced2.toLowerCase());

const greeting = `Salam. Men geldim. Men getdim`;

// console.log(greeting.split('.')[0]);


const regex = new RegExp('^some|ing$');
console.log(regex.test('someafasfasf'));