let password = "" ;
let count = 0;

do {
    password = prompt("Nhập mật khẩu");

    if (password !== "admin123") {
        count++ ;
        if (count === 3) {
            alert("Tài khoản bị khóa")
        }
        else {
            alert("Đăng nhập thành công");
            let choice;
            let totalBook;
            let totalPrice = 0;
            do {
                choice = +prompt ("Vui lòng nhập lựa chọn: ");

                switch (choice) {
                    case 1:
                        totalBook = +prompt("Nhập số lượng sách");

                        for (let i = 0 ; i < totalBook ; i++) {
                            let price = prompt(`Nhập giá tiền của cuốn sách ${i+1} `);

                            if ( price <= 0 || isNaN(price) ) {
                                alert(`Giá tiền của sách thứ ${i} không hợp lệ `)
                                continue;
                            }
                            totalPrice += price;
                        }

                        alert (`Tổng tiền của lô sách: ${totalPrice} `);

                        break;
                    case 2:
                        for(let i=0 ; i<3 ;i++) {
                            for(let j=0; j<5 ; j++) {
                                if ( i=== 2 && j === 3 ) {
                                    console.log("Đang sửa chữa");
                                    continue;
                                }
                                console.log(`Khu vực ${i} - Kệ ${j}`);
                                
                            }
                        }
                        break;
                    case 3:
                        alert("Kết thúc chương trình!")
                        break;
                    
                    default:
                        alert ("Nhập sai lựa chọn")
                        break;
                }
            } while (choice !==3);
        }
    }
} while (count < 3 && password !== "admin123");