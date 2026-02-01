// Loại vòng lặp mà biết trước đc số lần lặp (for)
// for(Khởi tạo; điều kiện dừng; bước nhảy){
//     Block code để viết logic nghiệp vụ
// }

// VD: in ra các số từ 1 -> 10
for(let index = 1; index <= 10; index++){
    console.log("Số thứ tự: ",index);
}
// B1: index = 1

// B2: Kiểm tra điều kiện
// B2.1: Nếu đk đúng thì code chạy vào block và in ra index = 1
// B2.1.1: Sau khi thực hiện xong logic trong block code ==> tăng giá trị lên 1 ( vào bc nhảy)
// B2.1.2: Đi khiểm tra đk => quay về bước B2
// B2.2: Nếu đk sai thì kết thúc vòng lặp

// Tính tổng các số từ 1 -> 20

let sum = 0;
for (let i = 1; i <= 20 ; i++) {
    // Cứ mỗi lần duyệt => tiền hành cộng dồn các giá trị
    sum = sum + i ;
}
console.log("tổng các số từ 1 -> 20:" ,sum);

// In ra bảng cửu chương:
for (let i = 1 ; i <=10 ; i++) {
    console.log("Bảng cửu chương số : ",i);
    
    for(let j = 1 ; j <= 10; j++) {
        console.log( `${i} x ${j} = ${i * j}`);
    }
}

// Vòng lặp k biết trc số lần lặp (while, do-while)

// while (i <= 10) {
//     console.log("i= ",i);
//     i++;
// }

// Xây dựng ứng dụng đoán số
// let number = "";
// while(number !== "123") {
//    number = prompt(`Vui lòng nhập số`);
// }

// // console.log("Số bạn đoán đúng là: ",number);


// // Xây dựng ứng dụng kiểm tra số nguyên dương
// let number ="" ;
// while(number <=0){
//     number = +prompt("Nhập số nguyên bất kỳ:");
// }

// console.log("Số vừa nhập là: ",number);


// Vòng lặp do - while
// In ra các số từ 1 -> 10 
let number = 1;
do {
    console.log("number: ",number);
    
    number++;
} while (number <= 10);

// Giới hạn nhập mật khẩu đăng nhập vào app ngân hàng: 
let count = 1;
let password = "";

do {
    password = prompt ("Vui lòng nhập mật khẩu: ");
    if (password !== "123" ) {
        count++;
    }
} while (count < 3 && password !== "123");

if (count === 3) {
    alert("Tài khoản bị khóa ");
} else {
    alert("Đăng nhập thành công");
}
