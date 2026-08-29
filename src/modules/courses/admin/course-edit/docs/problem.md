# Course Edit — Image Update Problem

## 1. Problem

Trong module **Edit Course**, API cập nhật khóa học yêu cầu field:

```ts
hinhAnh: string;
```

Giá trị này không phải URL đầy đủ mà là **filename của image**, ví dụ:

```ts
hinhAnh: "react.png";
```

Trong khi dữ liệu course detail trả về:

```ts
hinhAnh: "https://elearningnew.cybersoft.edu.vn/hinhanh/react.png";
```

### Case 1: Không thay đổi hình ảnh

Nếu user không chọn image mới, có thể lấy filename từ URL hiện tại:

```ts
const fileName = getFileNameFromUrl(courseDetail.hinhAnh);
// "react.png"
```

Sau đó gửi:

```ts
payload.hinhAnh = fileName;
```

Case này hoạt động bình thường **nếu `tenKhoaHoc` không thay đổi**.

---

## 2. Problem khi thay đổi `tenKhoaHoc`

Backend có behavior liên quan giữa:

```ts
tenKhoaHoc
hinhAnh
```

Ví dụ dữ liệu ban đầu:

```ts
tenKhoaHoc: "React"
hinhAnh: "react.png"
```

Nếu user chỉ thay đổi:

```ts
tenKhoaHoc: "ReactJS"
```

thì sau khi update, backend có thể trả về:

```ts
hinhAnh: "ReactJS.png"
```

Trong khi file image vật lý cũ vẫn là:

```text
react.png
```

Kết quả:

```text
Database / API
    ↓
hinhAnh = "ReactJS.png"
    ↓
Browser request
    ↓
.../hinhanh/ReactJS.png
    ↓
File không tồn tại
    ↓
Image bị mất / broken image
```

### Bản chất vấn đề

Không phải frontend không lấy được filename cũ.

Frontend có thể lấy:

```ts
react.png
```

Vấn đề là **filename của image sau update bị thay đổi theo `tenKhoaHoc` nhưng file thực tế chưa được upload/rename tương ứng**.

---

## 3. Attempted Solution — `urlToFile`

Một hướng đã thử là convert URL hiện tại thành `File`:

```ts
const file = await urlToFile(courseDetail.hinhAnh);
```

Mục đích:

```text
URL image hiện tại
       ↓
    File object
       ↓
rename / upload lại
       ↓
filename mới
```

Tuy nhiên cách này gặp lỗi **CORS** khi frontend thực hiện:

```ts
fetch(imageUrl)
```

Do browser không được phép đọc resource từ image server nếu server không cung cấp CORS headers phù hợp.

Vì vậy hiện tại **không nên phụ thuộc vào `urlToFile()` ở frontend** để xử lý image cũ.

---

## 4. Important Distinction

Có hai trường hợp cần phân biệt:

### User upload image mới

Frontend có sẵn:

```ts
File
```

Có thể upload trực tiếp.

```ts
const imageFile = data.hinhAnh[0];
```

### User không upload image mới

Frontend chỉ có:

```ts
imageUrl: string
```

Ví dụ:

```ts
"https://.../react.png"
```

Không có `File object` tương ứng.

Do đó không thể upload lại image cũ từ browser nếu không thể fetch URL vì CORS.

---

## 5. Current Temporary Approach

Tạm thời trong module Edit:

- Nếu user không thay đổi image → lấy filename từ URL hiện tại.
- Nếu user thay đổi image → sử dụng `File object` mới.
- Ghi nhận riêng vấn đề khi `tenKhoaHoc` thay đổi.
- Chưa cố gắng giải quyết bằng `urlToFile()` do vấn đề CORS.

Ví dụ:

```ts
const imageFile = data.hinhAnh?.[0];

const imageName = imageFile
  ? imageFile.name
  : getFileNameFromUrl(courseDetail.hinhAnh);
```

Logic trên chỉ giải quyết việc lấy filename, **chưa giải quyết việc đồng bộ file vật lý khi `tenKhoaHoc` thay đổi**.

---

## 6. Potential Solutions

### Solution A — Backend giữ nguyên filename

Khi user không upload image mới:

```ts
hinhAnh: "react.png"
```

Backend không tự thay đổi filename theo `tenKhoaHoc`.

Đây là hướng đơn giản và an toàn nhất.

---

### Solution B — Backend tự rename/copy image

Nếu business rule yêu cầu filename phải theo `tenKhoaHoc`:

```text
react.png
    ↓
ReactJS.png
```

thì backend nên chịu trách nhiệm rename/copy file vật lý tương ứng.

Frontend chỉ cần gửi thông tin cần thiết.

---

### Solution C — Backend hỗ trợ re-upload image cũ

Nếu API bắt buộc phải upload lại image khi `tenKhoaHoc` thay đổi, backend có thể tự lấy image cũ từ storage và xử lý lại.

Frontend không cần:

```ts
fetch(oldImageUrl)
```

→ tránh được CORS.

---

### Solution D — Frontend convert URL → File

Có thể sử dụng:

```ts
urlToFile(imageUrl)
```

sau đó upload lại image.

Tuy nhiên giải pháp này hiện đang bị **CORS** và không nên ưu tiên nếu backend có thể xử lý việc này.

---

## 7. Decision — Temporarily

**Chưa giải quyết vấn đề backend/image synchronization.**

Tạm thời giữ logic hiện tại:

```text
No new image
    ↓
extract filename from existing URL
    ↓
send filename
```

và ghi nhận issue:

> Khi `tenKhoaHoc` thay đổi nhưng user không thay đổi image, backend có thể generate filename mới cho `hinhAnh` nhưng không đồng bộ file vật lý tương ứng, dẫn đến image bị mất.

Cần kiểm tra lại API/backend contract trước khi quyết định cách xử lý chính thức.

---

## 8. Questions to Verify Later

Khi quay lại xử lý issue này, cần kiểm tra:

1. Backend có thực sự generate `hinhAnh` dựa trên `tenKhoaHoc` không?
2. Khi `tenKhoaHoc` thay đổi, backend có rename/copy image file không?
3. `CapNhatKhoaHocUpload` có bắt buộc phải upload image trong mọi trường hợp không?
4. Nếu không upload image, backend có hỗ trợ giữ nguyên filename cũ không?
5. Filename image có bắt buộc phải trùng với `tenKhoaHoc` không?
6. Nếu business rule bắt buộc rename image, việc rename nên do frontend hay backend thực hiện?

**Ưu tiên:** xác định backend contract trước khi thêm workaround ở frontend.
