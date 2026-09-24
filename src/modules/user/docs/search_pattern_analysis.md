# Pattern Phân Tích Cơ Chế Tìm Kiếm User (User Search Pattern)

Tài liệu này ghi nhận và phân tích pattern tìm kiếm hiện tại của API tìm kiếm người dùng (User Search API) dựa trên kết quả thực nghiệm.

---

## 1. Tổng Quan Pattern

Hệ thống đang áp dụng pattern **"Chuẩn hóa dữ liệu một chiều ở Database nhưng giữ nguyên Keyword đầu vào"**. 

API hiện tại **chỉ hỗ trợ tìm kiếm thành công khi người dùng nhập từ khóa KHÔNG DẤU**.

---

## 2. Chi Tiết Cơ Chế Hoạt Động (Flow)

### Step 1: Lưu trữ/Indexing dữ liệu (Database Level)
Dữ liệu người dùng khi lưu trữ hoặc đánh index đã được xử lý qua pipeline chuẩn hóa:
* **Chuyển thành chữ thường (Lowercase)**
* **Loại bỏ toàn bộ dấu Tiếng Việt (Accent Removal / Unidecode)**

> **Ví dụ:** Tên gốc `Đức Nguyễn` $\rightarrow$ Chuẩn hóa lưu trữ: `duc nguyen`.

### Step 2: Xử lý truy vấn (Query Logic Level)
API nhận từ khóa từ phía Client và **đưa trực tiếp vào câu lệnh so sánh** (`LIKE '%keyword%'` hoặc tương đương) mà **không qua bước bỏ dấu keyword**.

---

## 3. Các Trường Hợp Kiểm Thứ (Test Cases)

| Từ khóa nhập vào | Dữ liệu so sánh trong DB | Câu lệnh thực thi thực tế | Kết quả | Lý do |
| :--- | :--- | :--- | :--- | :--- |
| **`duc`** | `duc nguyen` | `WHERE search_field LIKE '%duc%'` | **THÀNH CÔNG** | Chuỗi `duc nguyen` có chứa đoạn `duc`. |
| **`Đức`** | `duc nguyen` | `WHERE search_field LIKE '%Đức%'` | **THẤT BẠI** | Chuỗi `duc nguyen` không chứa ký tự có dấu `Đ` và `ức`. |

---

## 4. Đánh Giá & Kết Luận

* **Ưu điểm:** Tốc độ truy vấn nhanh vì so sánh trên cột dữ liệu đã được index/chuẩn hóa sẵn.
* **Hạn chế (Bug logic):** Do thiếu bước chuẩn hóa từ khóa đầu vào (Input Normalization), người dùng gõ Tiếng Việt có dấu chuẩn xác lại không tìm ra kết quả.