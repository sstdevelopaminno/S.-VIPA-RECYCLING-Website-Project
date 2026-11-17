# S. VIPA RECYCLING CO., LTD.

เว็บไซต์สองภาษา (ไทย/อังกฤษ) สำหรับบริษัท ส.วิพา รีไซเคิล จำกัด พัฒนาด้วย Next.js App Router, React และ TypeScript

## เริ่มต้นใช้งาน

ต้องใช้ Node.js 20.9 ขึ้นไป จากนั้นรัน:

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ระบบจะนำไปภาษาไทยที่ `/th` โดยอัตโนมัติ ส่วนภาษาอังกฤษอยู่ที่ `/en`

## คำสั่งตรวจสอบ

```bash
npm run typecheck
npm run build
npm run start
```

## โครงสร้างสำคัญ

- `src/app/[locale]/` — หน้าเว็บไซต์และ metadata แยกตามภาษา
- `src/i18n/` — locale configuration และข้อความภาษาไทย/อังกฤษ
- `src/components/` — header, form และส่วนประกอบ interactive
- `public/assets/` — รูปภาพที่ Next.js นำไป optimize เป็น responsive WebP/AVIF
- `src/proxy.ts` — เปลี่ยนเส้นทาง `/` ไป `/th`

ข้อมูลติดต่อ บริการ ราคา และรายละเอียดที่มีเครื่องหมาย `*` ยังต้องยืนยันจากบริษัทก่อนเผยแพร่ production
