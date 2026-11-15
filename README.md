# S. VIPA RECYCLING CO., LTD. | เว็บไซต์ ส.วิพา รีไซเคิล

ต้นแบบเว็บไซต์บริษัทสำหรับธุรกิจรับซื้อ–ขายของเก่าและวัสดุรีไซเคิล (Static HTML)

## สถานะ

**Prototype / ยังไม่เผยแพร่** — เลือก Vercel Pro ทีมเดิมเป็น Hosting เป้าหมายแล้ว; รออนุญาตสิทธิ์สร้าง Project ใน Vercel

## โครงสร้างไฟล์

- `index.html` — เว็บไซต์หน้าแรก (HTML/CSS/JavaScript พร้อมภาพประกอบแบบฝังในไฟล์)
- ภาพอ้างอิงงานออกแบบเป็นไฟล์ประกอบงานที่ส่งแยกต่างหาก ไม่ได้จำเป็นต่อการรันเว็บไซต์
- `vercel.json` — การตั้งค่าสำหรับ static hosting บน Vercel รวม noindex สำหรับหน้าเว็บต้นแบบ
- `PRE_LAUNCH_CHECKLIST.md` — สิ่งที่ต้องตรวจสอบก่อนเผยแพร่เว็บไซต์

## ทดลองเปิดในเครื่อง

เปิด `index.html` ผ่านเว็บเบราว์เซอร์ หรือใช้ local development server:

```bash
python -m http.server 8080
```

แล้วเปิด `http://localhost:8080/`

## การนำขึ้น GitHub

ไฟล์เว็บไซต์ต้นแบบถูกจัดเก็บใน Repository นี้บน branch `main` เพื่อให้ตรวจทานและพัฒนาต่อได้ **ยังไม่มีการ Deploy ไป Vercel**

## การ Deploy ผ่าน Vercel

เลือกทีม `sstdevelopaminno's projects` (Pro) และสร้าง Project ใหม่ชื่อ `s-vipa-recycling` โดย Import GitHub repository นี้ ตั้ง Framework Preset: **Other**, Root Directory: `./`, และไม่จำเป็นต้องมี Build Command สำหรับ static HTML นี้ ตรวจผลใน Preview ก่อนเผยแพร่ Production. ขณะนี้การสร้าง Project ผ่าน ChatGPT connector ได้รับข้อผิดพลาด 403 (ไม่มีสิทธิ์สร้าง Project) จึงต้องอนุญาต Team Access ก่อนดำเนินการต่อ

**สำคัญ:** ตัวเลขโทรศัพท์/LINE, เวลาทำการ, รายการวัสดุที่รับซื้อ, บริการรับซื้อถึงที่ และข้อมูลบริษัทที่ยังไม่ยืนยันเป็นเพียงข้อความต้นแบบ ไม่ควรเผยแพร่เป็นข้อมูลจริง แบบฟอร์มสร้างข้อความเพื่อคัดลอกเท่านั้น ไม่มี backend หรือระบบรับคำขอจริง