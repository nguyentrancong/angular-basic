### Angular CLI

###### 1. để tạo một component với template

    ng generate component ten-component
    ng g c ten-component

    Tạo component trong một thư mục cụ thể:
    ng g c folder/ten-component

    Không tạo file .spec.ts (file test):
    ng g c ten-component --skip-tests

    Tạo component mà không có CSS (hoặc SCSS, SASS, LESS):
    ng g c ten-component --skip-styles

###### 2. Tạo Pipe bằng Angular CLI

    ng generate pipe ten-pipe
    ng g p ten-pipe
    src/app/ten-pipe.pipe.ts
    src/app/ten-pipe.pipe.spec.ts (file test, có thể xóa nếu không cần)

    Mở file ten-pipe.pipe.ts và chỉnh sửa như sau:
