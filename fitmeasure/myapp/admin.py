from django.contrib import admin
from .models import BMIRecord

@admin.register(BMIRecord)
class BMIRecordAdmin(admin.ModelAdmin):
    list_display = ('user', 'date', 'bmi', 'weight', 'height')  # แสดงคอลัมน์เหล่านี้ในหน้า list
    list_filter = ('user', 'date')  # เพิ่มตัวกรองด้านขวามือ
    search_fields = ('user__username',)  # ให้ค้นหาตาม username ได้
    
    # จัดกลุ่มข้อมูลตาม user
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.order_by('user', '-date')  # เรียงตาม user และวันที่ล่าสุด