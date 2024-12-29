// 1. console.log("hello world!");
// 2. Biến - Variables
// 3. camelCase -> evondev -> evonDev Ex: i love my school -> iLoveMySchool
// 4. Không nên đặt tiếng Việt, hoặc có dấu, hoặc các kí tự đặc biệt, các từ hệ thống, tentoi, toila, canhgiua,
// 5. Delcare variable: Khai báo biến
// 6. var const and let
// 7. Data Types:
// +  Primitive Types (Kiểu nguyên thủy); Number, String, Boolean, Undefined, Null, Symbol (ES6+),  BigInt (ES11+)
// +  Reference Types (Kiểu tham chiếu): Object, Array, Function, Date, RegExp, Map và Set (ES6+)

// Kiểu dữ liệu         Loại	        Ví dụ
// Number	            Primitive	    42, 3.14, NaN
// String	            Primitive	    "Hello", 'World'
// Boolean	            Primitive	    true, false
// Null	                Primitive	    null
// Undefined	        Primitive	    undefined
// Symbol	            Primitive	    Symbol('id')
// BigInt	            Primitive	    1234567890123456789n
// Object	            Non-Primitive	{}, [], function

// Sự khác biệt giữa Primitive và Reference Types
// Đặc điểm	                        Primitive Types	                Reference Types
// Lưu trữ giá trị	                Trực tiếp (Direct Value)	    Tham chiếu đến vị trí bộ nhớ
// Kích thước trong bộ nhớ	        Cố định	                        Linh hoạt
// Truyền giá trị	                Theo giá trị (Pass by Value)	Theo tham chiếu (Pass by Reference)
// Ví dụ	                        string, number, boolean, v.v.	object, array, function, v.v.

// Hoisting:
// + Là cơ chế trong JavaScript mà khai báo biến, hàm, hoặc lớp được "đưa lên đầu phạm vi của chúng" trong quá trình compile (biên dịch), trước khi code được thực thi.
// + Hiểu đơn giản, điều này có nghĩa là bạn có thể sử dụng các biến hoặc hàm trước khi chúng được khai báo trong code mà không gây lỗi (mặc dù cách hoạt động phụ thuộc vào kiểu khai báo).

// const và let ko bị hoisting
// var sẽ bị hoisting
// khi mà khai báo biến mà chưa gán giá trị gì cả ví dụ var a;
// var a; // undefined
// console.log(a);
// console.log(a);
// var a;

// Tóm tắt Hoisting
// Kiểu khai báo	        Có Hoisted không?	 Có thể sử dụng trước khai báo?	    Ghi chú
// var	                    Có	                 Có, nhưng giá trị là undefined	    Không an toàn, dễ gây lỗi logic.
// let	                    Có	                 Không	                            Bị ảnh hưởng bởi Temporal Dead Zone (TDZ).
// const	                Có	                 Không	                            Bị ảnh hưởng bởi TDZ, cần gán giá trị ngay.
// Function Declaration	    Có	                 Có	                                Toàn bộ hàm được hoisted.
// Function Expression	    Có(chỉ phần khai báo)Không	                            Phụ thuộc vào cách khai báo biến (var).
// Class	                Có	                 Không	                            Bị ảnh hưởng bởi TDZ.
